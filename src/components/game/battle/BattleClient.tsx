
'use client';

import { useState, useEffect, useMemo } from 'react';
import { useFirebase, useDoc, useMemoFirebase } from '@/firebase';
import { doc, writeBatch, collection, addDoc } from 'firebase/firestore';
import { Loader2, Swords, Flag, ArrowRightCircle, Shield, Heart, Droplets } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { EncounterOutput } from '@/ai/flows/flow-schemas';
import { PlayerCard } from './PlayerCard';
import { Enemy } from './Enemy';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CARD_DATA, CardData } from '@/lib/game-data';

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
      // Handle case where there is no characterId, maybe redirect
      router.push('/');
    }
  }, [router]);
  
  const narrativeContextRef = useMemoFirebase(() => {
    if (!firestore || !user || !characterId) return null;
    return doc(firestore, `users/${user.uid}/characters/${characterId}/narrativeContexts`, "main");
  }, [firestore, user, characterId]);

  const { data: narrativeContext, isLoading: isContextLoading } = useDoc(narrativeContextRef);

  const characterDocRef = useMemoFirebase(() => {
    if (!firestore || !user || !characterId) return null;
    return doc(firestore, `users/${user.uid}/characters/${characterId}`);
  }, [firestore, user, characterId]);
  const { data: character, isLoading: isCharacterLoading } = useDoc(characterDocRef);

  const deckRef = useMemoFirebase(() => {
    if (!firestore || !user || !characterId) return null;
    return doc(firestore, `users/${user.uid}/characters/${characterId}/decks`, "main");
  }, [firestore, user, characterId]);
  const { data: deck, isLoading: isDeckLoading } = useDoc(deckRef);


  const encounter = narrativeContext?.currentEncounter as EncounterOutput | undefined;
  
  const [battleState, setBattleState] = useState({
    playerHealth: character?.health || 0,
    playerMana: character?.mana || 0,
    enemies: encounter?.enemies || [],
    deck: [] as string[],
    hand: [] as string[],
    discard: [] as string[],
    turn: 'player' as 'player' | 'enemy',
    selectedCard: null as string | null,
    selectedTarget: null as string | null,
    isVictoryProcessing: false,
  });

  useEffect(() => {
    if (character && encounter && deck) {
        const shuffledDeck = shuffle(deck.cards);
        const initialHand = shuffledDeck.slice(0, 5);
        const remainingDeck = shuffledDeck.slice(5);

        setBattleState(prev => ({
            ...prev,
            playerHealth: character.health,
            playerMana: character.mana,
            enemies: encounter.enemies,
            deck: remainingDeck,
            hand: initialHand,
        }));
    }
  }, [character, encounter, deck]);

  const handleCardClick = (cardName: string) => {
    if (battleState.turn !== 'player') return;
    const cardData = CARD_DATA[cardName];
    if (cardData.manaCost <= battleState.playerMana) {
        setBattleState(prev => ({ ...prev, selectedCard: cardName, selectedTarget: null }));
    } else {
        toast({ title: "Not enough mana!", variant: "destructive" });
    }
  };

  const handleEnemyClick = (enemyId: string) => {
    if (!battleState.selectedCard || battleState.turn !== 'player') return;

    const cardData = CARD_DATA[battleState.selectedCard];
    if (!cardData || cardData.attack === 0) return; // Can't attack with non-attack cards

    setBattleState(prev => {
        const newEnemies = prev.enemies.map(e => {
            if (e.id === enemyId) {
                return { ...e, hp: Math.max(0, e.hp - cardData.attack) };
            }
            return e;
        });

        const newHand = prev.hand.filter(c => c !== battleState.selectedCard);
        
        return {
            ...prev,
            playerMana: prev.playerMana - cardData.manaCost,
            enemies: newEnemies.filter(e => e.hp > 0),
            hand: newHand,
            discard: [...prev.discard, prev.selectedCard!],
            selectedCard: null,
            selectedTarget: null,
        };
    });
  };

  const handleEndTurn = async () => {
    if (battleState.turn !== 'player') return;

    // Check for victory before enemy turn
    if (battleState.enemies.length === 0) return;

    setBattleState(prev => ({ ...prev, turn: 'enemy' }));
    
    // Artificial delay for enemy turn
    setTimeout(() => {
      let totalEnemyAttack = 0;
      battleState.enemies.forEach(enemy => {
          totalEnemyAttack += enemy.attack;
      });

      const newPlayerHealth = Math.max(0, battleState.playerHealth - totalEnemyAttack);

      if (newPlayerHealth === 0) {
          toast({ title: "You have been defeated!", variant: "destructive", duration: 5000 });
          router.push('/');
          return;
      }

      // Draw cards for next turn
      let newDeck = [...battleState.deck];
      let newDiscard = [...battleState.discard];
      let currentHand = [...battleState.hand];

      const cardsToDrawCount = 5 - currentHand.length;

      if (newDeck.length < cardsToDrawCount) {
          const shuffledDiscard = shuffle(newDiscard);
          newDeck = [...newDeck, ...shuffledDiscard];
          newDiscard = [];
      }
      
      const drawnCards = newDeck.slice(0, cardsToDrawCount);
      const remainingDeck = newDeck.slice(cardsToDrawCount);
      
      setBattleState(prev => ({
          ...prev,
          playerHealth: newPlayerHealth,
          hand: [...currentHand, ...drawnCards],
          deck: remainingDeck,
          discard: newDiscard,
          turn: 'player',
          playerMana: character?.maxMana || 10 // Reset mana
      }));

      toast({ title: "Enemy attacks!", description: `You take ${totalEnemyAttack} damage.` });

    }, 1000);
  };

  useEffect(() => {
    const checkVictory = async () => {
        if (encounter && battleState.enemies.length === 0 && battleState.turn === 'player' && !battleState.isVictoryProcessing) {
            setBattleState(prev => ({ ...prev, isVictoryProcessing: true }));
            toast({ title: "Victory!", description: `You found: ${encounter.loot.name}`, duration: 5000 });

            if(firestore && user && characterId) {
                const batch = writeBatch(firestore);
                // Clear encounter, set trigger for next scenario
                batch.update(narrativeContextRef!, { 
                  currentEncounter: null,
                  triggerNextScenario: true,
                });
                
                // Add loot to inventory
                const inventoryRef = collection(firestore, `users/${user.uid}/characters/${characterId}/inventory`);
                addDoc(inventoryRef, encounter.loot);
                
                // Update player health
                batch.update(characterDocRef!, { health: battleState.playerHealth });

                await batch.commit();
            }
            router.push(`/adventure/${characterId}`);
        }
    };
    checkVictory();
  }, [battleState, encounter, firestore, user, characterId, narrativeContextRef, characterDocRef, router, toast]);

  const isLoading = isContextLoading || isCharacterLoading || isDeckLoading || !character || !encounter || !deck;
  
  if (isLoading) {
    return <div className="flex justify-center items-center h-96"><Loader2 className="h-16 w-16 animate-spin text-primary" /></div>;
  }

  if (!encounter) {
      return (
          <Alert variant="destructive">
              <AlertTitle>Encounter Over</AlertTitle>
              <AlertDescription>This battle has concluded.</AlertDescription>
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
            <Enemy key={enemy.id} enemy={enemy} onClick={() => handleEnemyClick(enemy.id)} isTarget={battleState.selectedCard !== null} />
          ))}
        </div>

        {/* Battlefield Zone */}
        <div className="min-h-24 flex items-center justify-center text-muted-foreground italic">
            {battleState.turn === 'enemy' ? 'Enemies are attacking...' : encounter.introText}
        </div>

        {/* Player Area */}
        <div className="pt-4 border-t-2 border-border">
          <div className="flex justify-between items-center mb-4 px-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 font-bold text-lg"><Heart className="h-5 w-5 text-red-500" /> {battleState.playerHealth}/{character.maxHealth}</div>
              <div className="flex items-center gap-1 font-bold text-lg"><Droplets className="h-5 w-5 text-blue-500" /> {battleState.playerMana}/{character.maxMana}</div>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild variant="destructive" size="lg">
                <a onClick={() => router.push('/')}><Flag className="mr-2 h-4 w-4" /> Flee</a>
              </Button>
              <Button size="lg" onClick={handleEndTurn} disabled={battleState.turn === 'enemy' || battleState.isVictoryProcessing}>
                {battleState.turn === 'enemy' ? 'Enemy Turn' : 'End Turn'} <ArrowRightCircle className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-end gap-4 min-h-40">
              {battleState.hand.map(cardName => (
                  <PlayerCard key={cardName + Math.random()} card={CARD_DATA[cardName]} onClick={() => handleCardClick(cardName)} isSelected={battleState.selectedCard === cardName} />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

    