
'use client';

import { useState, useEffect, useMemo } from 'react';
import { useFirebase, useDoc, useMemoFirebase, addDocumentNonBlocking, updateDocumentNonBlocking } from '@/firebase';
import { doc, collection } from 'firebase/firestore';
import { Loader2, Flag, ArrowRightCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { EncounterOutput } from '@/ai/flows/flow-schemas';
import { PlayerCard } from './PlayerCard';
import { Enemy } from './Enemy';
import { Button } from '@/components/ui/button';
import { PlayerStats } from './PlayerStats';
import { CARD_DATA } from '@/lib/game-data';

// Fisher-Yates shuffle algorithm
const shuffle = <T,>(array: T[]): T[] => {
  let currentIndex = array.length, randomIndex;
  const newArray = [...array];
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
  }
  return newArray;
};

type BattleState = {
    playerHealth: number;
    playerMana: number;
    enemies: EncounterOutput['enemies'];
    deck: string[];
    hand: string[];
    discard: string[];
    turn: 'player' | 'enemy' | 'victory' | 'defeat';
    selectedCard: string | null;
    selectedTarget: string | null;
    isProcessing: boolean;
};

export function BattleClient() {
  const { firestore, user } = useFirebase();
  const router = useRouter();
  const { toast } = useToast();
  const [characterId, setCharacterId] = useState<string | null>(null);

  useEffect(() => {
    const lastCharId = localStorage.getItem('characterId');
    if (lastCharId) {
      setCharacterId(lastCharId);
    } else {
      router.push('/');
    }
  }, [router]);
  
  const narrativeContextRef = useMemoFirebase(() => {
    if (!firestore || !user || !characterId) return null;
    return doc(firestore, `users/${user.uid}/characters/${characterId}/narrativeContexts`, "main");
  }, [firestore, user, characterId]);

  const { data: narrativeContext, isLoading: isContextLoading } = useDoc<any>(narrativeContextRef);

  const characterDocRef = useMemoFirebase(() => {
    if (!firestore || !user || !characterId) return null;
    return doc(firestore, `users/${user.uid}/characters/${characterId}`);
  }, [firestore, user, characterId]);
  const { data: character, isLoading: isCharacterLoading } = useDoc<any>(characterDocRef);

  const deckRef = useMemoFirebase(() => {
    if (!firestore || !user || !characterId) return null;
    return doc(firestore, `users/${user.uid}/characters/${characterId}/decks`, "main");
  }, [firestore, user, characterId]);
  const { data: deck, isLoading: isDeckLoading } = useDoc<any>(deckRef);

  const encounter = narrativeContext?.currentEncounter as EncounterOutput | undefined;
  
  const [battleState, setBattleState] = useState<BattleState | null>(null);

  useEffect(() => {
    if (character && encounter && deck && !battleState) {
        const shuffledDeck = shuffle(deck.cards);
        const initialHand = shuffledDeck.slice(0, 5);
        const remainingDeck = shuffledDeck.slice(5);

        setBattleState({
            playerHealth: character.health,
            playerMana: character.maxMana,
            enemies: encounter.enemies.map(e => ({...e, hp: e.maxHp})), // Ensure enemies have full HP
            deck: remainingDeck,
            hand: initialHand,
            discard: [],
            turn: 'player',
            selectedCard: null,
            selectedTarget: null,
            isProcessing: false,
        });
    }
  }, [character, encounter, deck, battleState]);

  const handleCardClick = (cardName: string) => {
    if (!battleState || battleState.turn !== 'player') return;
    const cardData = CARD_DATA[cardName];
    if (cardData.manaCost <= battleState.playerMana) {
        setBattleState(prev => prev ? ({ ...prev, selectedCard: cardName, selectedTarget: null }) : null);
    } else {
        toast({ title: "Not enough mana!", variant: "destructive" });
    }
  };

  const handleEnemyClick = (enemyId: string) => {
    if (!battleState || !battleState.selectedCard || battleState.turn !== 'player') return;

    const cardData = CARD_DATA[battleState.selectedCard];
    if (!cardData || cardData.attack === 0) return; // Can't attack with non-attack cards

    setBattleState(prev => {
        if (!prev) return null;
        
        const newEnemies = prev.enemies.map(e => {
            if (e.id === enemyId) {
                return { ...e, hp: Math.max(0, e.hp - cardData.attack) };
            }
            return e;
        }).filter(e => e.hp > 0);

        const newHand = prev.hand.filter(c => c !== battleState.selectedCard);
        
        const isVictory = newEnemies.length === 0;

        return {
            ...prev,
            playerMana: prev.playerMana - cardData.manaCost,
            enemies: newEnemies,
            hand: newHand,
            discard: [...prev.discard, prev.selectedCard!],
            selectedCard: null,
            selectedTarget: null,
            turn: isVictory ? 'victory' : prev.turn,
            isProcessing: isVictory,
        };
    });
  };

  const handleEndTurn = () => {
    if (!battleState || battleState.turn !== 'player' || battleState.enemies.length === 0) return;

    setBattleState(prev => prev ? ({ ...prev, turn: 'enemy', isProcessing: true }) : null);
  };
  
  useEffect(() => {
    if (battleState?.turn === 'enemy') {
        const timeout = setTimeout(() => {
            let totalEnemyAttack = 0;
            battleState.enemies.forEach(enemy => {
                totalEnemyAttack += enemy.attack;
            });

            const newPlayerHealth = Math.max(0, battleState.playerHealth - totalEnemyAttack);
            
            toast({ title: "Enemy attacks!", description: `You take ${totalEnemyAttack} damage.` });

            if (newPlayerHealth === 0) {
                setBattleState(prev => prev ? ({ ...prev, playerHealth: 0, turn: 'defeat', isProcessing: true }) : null);
                return;
            }

            // Draw cards for next turn
            let newDeck = [...battleState.deck];
            let newDiscard = [...battleState.discard];
            let currentHand = [...battleState.hand];
            const cardsToDrawCount = 5 - currentHand.length;

            let cardsToDraw: string[] = [];

            if (newDeck.length >= cardsToDrawCount) {
              cardsToDraw = newDeck.slice(0, cardsToDrawCount);
              newDeck = newDeck.slice(cardsToDrawCount);
            } else {
              cardsToDraw = [...newDeck];
              const shuffledDiscard = shuffle(newDiscard);
              const neededFromDiscard = cardsToDrawCount - cardsToDraw.length;
              cardsToDraw = [...cardsToDraw, ...shuffledDiscard.slice(0, neededFromDiscard)];
              newDeck = shuffledDiscard.slice(neededFromDiscard);
              newDiscard = [];
            }
            
            setBattleState(prev => prev ? ({
                ...prev,
                playerHealth: newPlayerHealth,
                hand: [...currentHand, ...cardsToDraw],
                deck: newDeck,
                discard: newDiscard,
                turn: 'player',
                playerMana: character?.maxMana || 10, // Reset mana
                isProcessing: false,
            }) : null);

        }, 1000);

        return () => clearTimeout(timeout);
    }
  }, [battleState, character?.maxMana, toast]);
  
  useEffect(() => {
      const processVictory = () => {
        if (!battleState || battleState.turn !== 'victory' || !characterId) return;

        toast({ title: "Victory!", description: `You found: ${encounter!.loot.name}`, duration: 5000 });

        if(firestore && user && narrativeContextRef && characterDocRef) {
            // Update player health
            updateDocumentNonBlocking(characterDocRef, { health: battleState.playerHealth });

            // Add loot to inventory
            const inventoryRef = collection(firestore, `users/${user.uid}/characters/${characterId}/inventory`);
            addDocumentNonBlocking(inventoryRef, encounter!.loot);
            
            // Clear encounter, set trigger for next scenario
            updateDocumentNonBlocking(narrativeContextRef, { 
              currentEncounter: null,
              triggerNextScenario: true,
            });
        }
        router.push(`/adventure/${characterId}`);
      };

      const processDefeat = () => {
          if (battleState?.turn === 'defeat') {
              toast({ title: "You have been defeated!", variant: "destructive", duration: 5000 });
              // Here you could add logic to create a RunChronicle
              router.push('/chronicle');
          }
      };

      if (battleState?.turn === 'victory') processVictory();
      if (battleState?.turn === 'defeat') processDefeat();

  }, [battleState, encounter, firestore, user, characterId, narrativeContextRef, characterDocRef, router, toast]);

  const isLoading = isContextLoading || isCharacterLoading || isDeckLoading || !character || !encounter || !deck || !battleState;
  
  if (isLoading) {
    return <div className="flex justify-center items-center h-96"><Loader2 className="h-16 w-16 animate-spin text-primary" /></div>;
  }

  if (!encounter || !battleState) {
      return (
          <Alert variant="destructive">
              <AlertTitle>Encounter Over</AlertTitle>
              <AlertDescription>This battle has concluded or an error occurred.</AlertDescription>
              <Button onClick={() => router.push(`/adventure/${characterId}`)} variant="secondary" className="mt-4">Back to Adventure</Button>
          </Alert>
      );
  }

  return (
    <Card className="bg-card/50">
      <CardContent className="p-4 space-y-4">
        {/* Enemy Area */}
        <div className="flex justify-around items-end p-4 min-h-48 bg-muted/50 rounded-lg border-b-4 border-b-accent">
          {battleState.enemies.map(enemy => (
            <Enemy key={enemy.id} enemy={enemy} onClick={() => handleEnemyClick(enemy.id)} />
          ))}
        </div>

        {/* Battlefield Zone */}
        <div className="min-h-24 flex items-center justify-center text-muted-foreground italic">
            {battleState.turn === 'enemy' ? 'Enemies are attacking...' : encounter.introText}
        </div>

        {/* Player Area */}
        <div className="pt-4 border-t-2 border-border">
          <div className="flex justify-between items-center mb-4 px-4">
            <PlayerStats 
              health={battleState.playerHealth}
              maxHealth={character.maxHealth}
              mana={battleState.playerMana}
              maxMana={character.maxMana}
            />
            <div className="flex items-center gap-2">
              <Button asChild variant="destructive" size="lg">
                <a onClick={() => router.push('/')}><Flag className="mr-2 h-4 w-4" /> Flee</a>
              </Button>
              <Button size="lg" onClick={handleEndTurn} disabled={battleState.turn !== 'player' || battleState.isProcessing}>
                {battleState.turn === 'enemy' ? 'Enemy Turn' : 'End Turn'} <ArrowRightCircle className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-end gap-4 min-h-40">
              {battleState.hand.map((cardName, index) => (
                  <PlayerCard key={`${cardName}-${index}`} card={CARD_DATA[cardName]} onClick={() => handleCardClick(cardName)} isSelected={battleState.selectedCard === cardName} />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const PlayerStats = ({ health, maxHealth, mana, maxMana}: {health: number, maxHealth: number, mana: number, maxMana: number}) => {
  return (
      <div className="flex items-center gap-4">
          <div className="font-bold text-lg">HP: {health}/{maxHealth}</div>
          <div className="font-bold text-lg">Mana: {mana}/{maxMana}</div>
      </div>
  );
};
