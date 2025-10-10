
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
    playerDefense: number;
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
    if (typeof window !== 'undefined') {
      const lastCharId = localStorage.getItem('characterId');
      if (lastCharId) {
        setCharacterId(lastCharId);
      } else {
        // Only redirect if not on the server and characterId is confirmed to be missing
        router.push('/');
      }
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
            playerDefense: 0,
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
    if (!battleState || battleState.turn !== 'player' || battleState.isProcessing) return;
    const cardData = CARD_DATA[cardName];
    if (cardData.manaCost > battleState.playerMana) {
        toast({ title: "Not enough mana!", variant: "destructive" });
        return;
    }
    
    // If the card is purely defensive or healing, apply it immediately
    if (cardData.attack === 0) {
        setBattleState(prev => {
            if (!prev) return null;
            const newHand = prev.hand.filter(c => c !== cardName);
            const newPlayerHealth = Math.min(character.maxHealth, prev.playerHealth + cardData.healing);
            if (cardData.healing > 0) {
                toast({ title: cardData.name, description: `You heal for ${cardData.healing}!` });
            }
            if (cardData.defense > 0) {
                toast({ title: cardData.name, description: `You gain ${cardData.defense} defense!` });
            }
            return {
                ...prev,
                playerHealth: newPlayerHealth,
                playerDefense: prev.playerDefense + cardData.defense,
                playerMana: prev.playerMana - cardData.manaCost,
                hand: newHand,
                discard: [...prev.discard, cardName],
                selectedCard: null,
            };
        });
    } else {
        setBattleState(prev => prev ? ({ ...prev, selectedCard: cardName, selectedTarget: null }) : null);
    }
  };

  const handleEnemyClick = (enemyId: string) => {
    if (!battleState || !battleState.selectedCard || battleState.turn !== 'player' || battleState.isProcessing) return;

    const cardData = CARD_DATA[battleState.selectedCard];
    if (!cardData || cardData.attack === 0) return; // Can't attack with non-attack cards

    setBattleState(prev => {
        if (!prev) return null;
        
        let isVictory = false;
        const newEnemies = prev.enemies.map(e => {
            if (e.id === enemyId) {
                return { ...e, hp: Math.max(0, e.hp - cardData.attack) };
            }
            return e;
        }).filter(e => e.hp > 0);
        
        if (newEnemies.length === 0) {
            isVictory = true;
        }

        const newHand = prev.hand.filter(c => c !== prev!.selectedCard);
        
        return {
            ...prev,
            playerMana: prev.playerMana - cardData.manaCost,
            enemies: newEnemies,
            hand: newHand,
            discard: [...prev.discard, prev!.selectedCard],
            selectedCard: null,
            selectedTarget: null,
            turn: isVictory ? 'victory' : prev.turn,
            isProcessing: isVictory, // Set processing on victory to stop further actions
        };
    });
  };

  const handleEndTurn = () => {
    if (!battleState || battleState.turn !== 'player' || battleState.isProcessing || battleState.enemies.length === 0) return;
    setBattleState(prev => prev ? ({ ...prev, turn: 'enemy', isProcessing: true, playerDefense: 0, selectedCard: null }) : null);
  };
  
  useEffect(() => {
    if (battleState?.turn === 'enemy' && battleState.enemies.length > 0) {
        const timeout = setTimeout(() => {
            setBattleState(prev => {
                if (!prev) return null;

                let totalEnemyAttack = 0;
                prev.enemies.forEach(enemy => {
                    totalEnemyAttack += enemy.attack;
                });

                const damageTaken = Math.max(0, totalEnemyAttack - prev.playerDefense);
                const newPlayerHealth = Math.max(0, prev.playerHealth - damageTaken);
                
                toast({ title: "Enemy attacks!", description: `You take ${damageTaken} damage.` });

                if (newPlayerHealth === 0) {
                    return { ...prev, playerHealth: 0, turn: 'defeat', isProcessing: true };
                }

                // Draw cards for next turn
                let newDeck = [...prev.deck];
                let newDiscard = [...prev.discard];
                let currentHand = [...prev.hand];
                const cardsToDrawCount = 5 - currentHand.length;

                let drawnCards: string[] = [];

                for (let i = 0; i < cardsToDrawCount; i++) {
                    if (newDeck.length === 0) {
                        newDeck = shuffle(newDiscard);
                        newDiscard = [];
                    }
                    if (newDeck.length > 0) {
                        const card = newDeck.pop();
                        if (card) drawnCards.push(card);
                    }
                }
                
                return {
                    ...prev,
                    playerHealth: newPlayerHealth,
                    hand: [...currentHand, ...drawnCards],
                    deck: newDeck,
                    discard: newDiscard,
                    turn: 'player',
                    playerMana: character?.maxMana || 10, // Reset mana
                    isProcessing: false,
                };
            });
        }, 1000);

        return () => clearTimeout(timeout);
    }
  }, [battleState?.turn, battleState?.enemies, character?.maxMana, toast]);
  
  useEffect(() => {
      const processVictory = () => {
        if (!battleState || battleState.turn !== 'victory' || !characterId || !encounter) return;

        toast({ title: "Victory!", description: `You found: ${encounter.loot.name}`, duration: 5000 });

        if(firestore && user && narrativeContextRef && characterDocRef) {
            // Update player health
            updateDocumentNonBlocking(characterDocRef, { health: battleState.playerHealth });

            // Add loot to inventory
            const inventoryRef = collection(firestore, `users/${user.uid}/characters/${characterId}/inventory`);
            addDocumentNonBlocking(inventoryRef, encounter.loot);
            
            // Clear encounter, set trigger for next scenario
            updateDocumentNonBlocking(narrativeContextRef, { 
              currentEncounter: null,
              triggerNextScenario: true,
            });
        }
        // Use a slight delay to allow toast to be seen before navigation
        setTimeout(() => router.push(`/adventure/${characterId}`), 1000);
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
            <Enemy 
                key={enemy.id} 
                enemy={enemy} 
                onClick={() => handleEnemyClick(enemy.id)} 
                isTarget={battleState.selectedCard ? CARD_DATA[battleState.selectedCard]?.attack > 0 : false}
            />
          ))}
        </div>

        {/* Battlefield Zone */}
        <div className="min-h-24 flex items-center justify-center text-muted-foreground italic">
            {battleState.isProcessing && battleState.turn === 'enemy' ? 'Enemies are attacking...' : encounter.introText}
            {battleState.turn === 'victory' && 'You are victorious!'}
            {battleState.turn === 'defeat' && 'You have been vanquished.'}
        </div>

        {/* Player Area */}
        <div className="pt-4 border-t-2 border-border">
          <div className="flex justify-between items-center mb-4 px-4">
            <PlayerStats 
              health={battleState.playerHealth}
              maxHealth={character.maxHealth}
              mana={battleState.playerMana}
              maxMana={character.maxMana}
              defense={battleState.playerDefense}
            />
            <div className="flex items-center gap-2">
              <Button asChild variant="destructive" size="lg">
                <a onClick={() => router.push('/')}><Flag className="mr-2 h-4 w-4" /> Flee</a>
              </Button>
              <Button size="lg" onClick={handleEndTurn} disabled={battleState.turn !== 'player' || battleState.isProcessing}>
                {battleState.isProcessing ? 'Processing...' : 'End Turn'} <ArrowRightCircle className="ml-2 h-4 w-4" />
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
