

'use client';

import { useState, useEffect, useMemo } from 'react';
import { useFirebase } from '@/firebase';
import { doc, getDoc, writeBatch, increment, collection, addDoc } from 'firebase/firestore';
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
import { CARD_DATA, CardData, CharacterClass, getClass } from '@/lib/game-data';

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
    enemiesKilled: number;
    xpGained: number;
};

type CharacterData = {
    class: string;
    level: number;
    experience: number;
    health: number;
    maxHealth: number;
    maxMana: number;
    attack: number;
    defense: number;
    speed: number;
}

type DeckData = {
    cards: string[];
}

interface BattleClientProps {
    characterId: string;
    encounter: EncounterOutput;
}

export function BattleClient({ characterId, encounter }: BattleClientProps) {
  const { firestore, user } = useFirebase();
  const router = useRouter();
  const { toast } = useToast();

  const [character, setCharacter] = useState<CharacterData | null>(null);
  const [deck, setDeck] = useState<DeckData | null>(null);
  const [battleState, setBattleState] = useState<BattleState | null>(null);
  const [collectionState, setCollectionState] = useState<CardData[]>([]);

  const characterClass = useMemo(() => character ? getClass(character.class) : null, [character]);
  
  useEffect(() => {
    const fetchInitialData = async () => {
        if (!firestore || !user) return;
        try {
            const characterDocRef = doc(firestore, `users/${user.uid}/characters/${characterId}`);
            const deckRef = doc(firestore, `users/${user.uid}/characters/${characterId}/decks`, "main");
            const inventoryRef = collection(firestore, `users/${user.uid}/characters/${characterId}/inventory`);

            const [characterSnap, deckSnap, inventorySnap] = await Promise.all([
                getDoc(characterDocRef),
                getDoc(deckRef),
                getDoc(inventoryRef),
            ]);

            if (characterSnap.exists() && deckSnap.exists()) {
                const characterData = characterSnap.data() as CharacterData;
                const deckData = deckSnap.data() as DeckData;
                const inventoryData = inventorySnap.docs.map(d => ({...d.data(), id: d.id}));

                const charClass = getClass(characterData.class);
                if (!charClass) {
                    throw new Error("Character class not found");
                }
                
                const allCardsMap = new Map<string, CardData>();
                charClass.starterDeck.forEach(starter => {
                    const cardDetails = Object.values(CARD_DATA).find(c => c.name === starter.name);
                    if (cardDetails) {
                        allCardsMap.set(starter.name, { ...cardDetails, id: starter.name, class: charClass.name });
                    }
                });

                inventoryData.forEach((item: any) => {
                    if ((item.type === 'card' || Object.values(CARD_DATA).some(c => c.name === item.name))) {
                        allCardsMap.set(item.name, {
                            id: item.id || item.name,
                            name: item.name,
                            description: item.description,
                            manaCost: item.manaCost,
                            attack: item.attack,
                            defense: item.defense,
                            healing: item.healing,
                            class: charClass.name,
                        } as CardData);
                    }
                });
                
                setCollectionState(Array.from(allCardsMap.values()));
                setCharacter(characterData);
                setDeck(deckData);

                const shuffledDeck = shuffle(deckData.cards);
                const initialHand = shuffledDeck.slice(0, 5);
                const remainingDeck = shuffledDeck.slice(5);

                setBattleState({
                    playerHealth: characterData.health,
                    playerMana: characterData.maxMana,
                    playerDefense: 0,
                    enemies: encounter.enemies.map(e => ({...e, hp: e.maxHp})), // Ensure enemies have full HP
                    deck: remainingDeck,
                    hand: initialHand,
                    discard: [],
                    turn: 'player',
                    selectedCard: null,
                    selectedTarget: null,
                    isProcessing: false,
                    enemiesKilled: 0,
                    xpGained: 0,
                });

            } else {
                toast({ title: "Error", description: "Could not load character data for battle.", variant: "destructive" });
                router.push('/');
            }
        } catch (e) {
            console.error("Failed to fetch battle data:", e);
            toast({ title: "Error", description: "Failed to fetch battle data.", variant: "destructive" });
            router.push('/');
        }
    };
    fetchInitialData();
  }, [firestore, user, characterId, encounter, router, toast]);

    const fullCardData = (cardName: string): CardData | null => {
        let card = Object.values(CARD_DATA).find(c => c.name === cardName);
        if (card) {
            return { ...card, id: cardName, class: '' };
        }
        let collectionCard = collectionState.find(c => c.name === cardName);
        if (collectionCard) {
            return collectionCard;
        }
        return null;
    }

  const handleCardClick = (cardName: string) => {
    if (!battleState || battleState.turn !== 'player' || battleState.isProcessing) return;
    const cardData = fullCardData(cardName);
    if (!cardData) {
        console.error(`Card data for ${cardName} not found!`);
        toast({ title: "Card Error", description: `Could not find data for ${cardName}.`, variant: "destructive" });
        return;
    };

    if (cardData.manaCost > battleState.playerMana) {
        toast({ title: "Not enough mana!", variant: "destructive" });
        return;
    }
    
    if (cardData.attack === 0) {
        setBattleState(prev => {
            if (!prev || !character) return null;
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

    const cardData = fullCardData(battleState.selectedCard);
    if (!cardData || cardData.attack === 0) return;

    setBattleState(prev => {
        if (!prev) return null;
        
        let isVictory = false;
        let enemiesKilledThisTurn = 0;
        let xpGainedThisTurn = 0;
        
        const newEnemies = prev.enemies.map(e => {
            if (e.id === enemyId) {
                const newHp = Math.max(0, e.hp - cardData.attack);
                if (newHp === 0 && e.hp > 0) { // Check if it was alive before
                    enemiesKilledThisTurn++;
                    xpGainedThisTurn += e.attack * 5;
                }
                return { ...e, hp: newHp };
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
            discard: [...prev.discard, prev!.selectedCard!],
            selectedCard: null,
            selectedTarget: null,
            turn: isVictory ? 'victory' : prev.turn,
            isProcessing: isVictory,
            enemiesKilled: prev.enemiesKilled + enemiesKilledThisTurn,
            xpGained: prev.xpGained + xpGainedThisTurn
        };
    });
  };

  const handleEndTurn = () => {
    if (!battleState || battleState.turn !== 'player' || battleState.isProcessing || battleState.enemies.length === 0) return;
    setBattleState(prev => {
      if (!prev) return null;
      // Move hand to discard pile
      const newDiscard = [...prev.discard, ...prev.hand];
      return { 
        ...prev, 
        turn: 'enemy', 
        isProcessing: true, 
        playerDefense: 0, 
        selectedCard: null,
        hand: [],
        discard: newDiscard,
      };
    });
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

                let newDeck = [...prev.deck];
                let newDiscard = [...prev.discard];
                const cardsToDrawCount = 5;
                let drawnCards: string[] = [];

                for (let i = 0; i < cardsToDrawCount; i++) {
                    if (newDeck.length === 0 && newDiscard.length > 0) {
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
                    hand: drawnCards,
                    deck: newDeck,
                    discard: newDiscard,
                    turn: 'player',
                    playerMana: character?.maxMana || 10,
                    isProcessing: false,
                };
            });
        }, 1000);

        return () => clearTimeout(timeout);
    }
  }, [battleState?.turn, battleState?.enemies, character?.maxMana, toast]);
  
  useEffect(() => {
      const processVictory = async () => {
        if (!battleState || battleState.turn !== 'victory' || !character) return;
        toast({ title: "Victory!", description: `You found: ${encounter.loot.name}`, duration: 5000 });

        if(firestore && user) {
            const batch = writeBatch(firestore);
            const characterDocRef = doc(firestore, `users/${user.uid}/characters/${characterId}`);
            const narrativeContextRef = doc(firestore, `users/${user.uid}/characters/${characterId}/narrativeContexts`, "main");
            const inventoryRef = collection(firestore, `users/${user.uid}/characters/${characterId}/inventory`);

            const newXp = (character.experience || 0) + battleState.xpGained;
            const xpToNextLevel = character.level * 100;
            
            let characterUpdates: Record<string, any> = {
                health: battleState.playerHealth,
                experience: newXp
            };

            if (newXp >= xpToNextLevel) {
                characterUpdates = { ...characterUpdates, level: increment(1), experience: newXp - xpToNextLevel, maxHealth: increment(10), maxMana: increment(5) };
                toast({ title: "Level Up!", description: "You feel stronger!", className: "bg-yellow-500 text-black" });
            }

            batch.update(characterDocRef, characterUpdates);
            batch.set(doc(inventoryRef), encounter.loot);
            batch.update(narrativeContextRef, { currentEncounter: null, triggerNextScenario: true });

            await batch.commit();
        }
        
        // This simulates passing state back to the adventure page without writing it to the db
        const resultState = {
            playerHealth: battleState.playerHealth,
            xpGained: battleState.xpGained,
            loot: encounter.loot,
        };

        router.push(`/adventure/${characterId}?battleState=${encodeURIComponent(JSON.stringify(resultState))}`);
      };

      const processDefeat = async () => {
          if (battleState?.turn !== 'defeat' || !user || !firestore || !characterClass || !battleState ) return;
          toast({ title: "You have been defeated!", variant: "destructive", duration: 5000 });

          const runChronicleData = {
              userId: user.uid,
              characterClass: characterClass.name,
              moralAlignment: "Chaotic Flatulent",
              enemiesKilled: battleState.enemiesKilled,
              enemiesSpared: 0,
              secretRoomsFound: 0,
              ending: `Vanquished by ${encounter?.enemies[0]?.name || 'a mysterious foe'}.`,
              uniqueDiscovery: "Learned that hubris smells a lot like sulfur.",
              createdAt: new Date().toISOString(),
          };

          const runChroniclesRef = collection(firestore, `users/${user.uid}/runChronicles`);
          await addDoc(runChroniclesRef, runChronicleData);

          if (characterId) {
            const characterDocRef = doc(firestore, `users/${user.uid}/characters/${characterId}`);
            const narrativeContextRef = doc(firestore, `users/${user.uid}/characters/${characterId}/narrativeContexts`, "main");
            const deckRef = doc(firestore, `users/${user.uid}/characters/${characterId}/decks`, "main");
            
            const deleteBatch = writeBatch(firestore);
            deleteBatch.delete(characterDocRef);
            deleteBatch.delete(narrativeContextRef);
            deleteBatch.delete(deckRef);
            await deleteBatch.commit();
          }

          if (typeof window !== 'undefined') {
            localStorage.removeItem('characterId');
          }
          router.push('/chronicle');
      };

      if (battleState?.turn === 'victory') processVictory();
      if (battleState?.turn === 'defeat') processDefeat();

  }, [battleState?.turn, firestore, user, characterId, router, toast, character, characterClass, encounter, battleState]);

  const isLoading = !character || !deck || !battleState;
  
  if (isLoading) {
    return <div className="flex justify-center items-center h-96"><Loader2 className="h-16 w-16 animate-spin text-primary" /></div>;
  }
  
  return (
    <Card className="bg-card/50">
      <CardContent className="p-4 space-y-4">
        <div className="flex justify-around items-end p-4 min-h-48 bg-muted/50 rounded-lg border-b-4 border-b-accent">
          {battleState.enemies.map(enemy => (
            <Enemy 
                key={enemy.id} 
                enemy={enemy} 
                onClick={() => handleEnemyClick(enemy.id)} 
                isTarget={!!(battleState.selectedCard && (fullCardData(battleState.selectedCard)?.attack ?? 0) > 0)}
            />
          ))}
        </div>

        <div className="min-h-24 flex items-center justify-center text-muted-foreground italic text-center px-4">
            {battleState.isProcessing && (battleState.turn === 'enemy' || battleState.turn === 'victory' || battleState.turn === 'defeat') ? 'Processing...' : ''}
            {battleState.turn === 'player' && !battleState.isProcessing ? (battleState.selectedCard ? 'Select a target!' : encounter.introText) : ''}
        </div>

        <div className="pt-4 border-t-2 border-border">
          <div className="flex justify-between items-center mb-4 px-4">
            <PlayerStats 
              health={battleState.playerHealth}
              maxHealth={character.maxHealth}
              mana={battleState.playerMana}
              maxMana={character.maxMana}
              defense={battleState.playerDefense}
              level={character.level}
              xp={character.experience}
              xpToNextLevel={character.level * 100}
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
              {battleState.hand.map((cardName, index) => {
                  const card = fullCardData(cardName);
                  return card ? <PlayerCard key={`${cardName}-${index}`} card={card} onClick={() => handleCardClick(cardName)} isSelected={battleState.selectedCard === cardName} /> : null;
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
