
'use client';

import { useState, useEffect, useMemo } from 'react';
import { useFirebase, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { doc, collection, writeBatch } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Save, AlertCircle } from 'lucide-react';
import { CARD_DATA, CardData, getClass } from '@/lib/game-data';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, rectSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { DeckStats } from './DeckStats';

const DECK_SIZE = 15;

type DeckCard = { id: string; name: string };

type DraggableCardProps = {
    card: CardData;
    cardId: string;
    inDeck: boolean;
};

const DraggableCard = ({ card, cardId, inDeck }: DraggableCardProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: cardId });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    
    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Card className={`w-36 h-52 flex flex-col p-2 text-center select-none ${inDeck ? 'bg-secondary' : 'bg-muted'}`}>
                <p className="font-bold text-sm truncate">{card.name}</p>
                <p className="text-xs text-muted-foreground">Cost: {card.manaCost}</p>
                <div className="flex-grow flex flex-col justify-center items-center text-xs space-y-1 my-1">
                    {card.attack > 0 && <p>ATK: {card.attack}</p>}
                    {card.defense > 0 && <p>DEF: {card.defense}</p>}
                    {card.healing > 0 && <p>HEAL: {card.healing}</p>}
                </div>
                <p className="text-xs text-muted-foreground/80 italic">{card.description}</p>
            </Card>
        </div>
    );
};


export function DeckManagerSheet({ characterId }: { characterId: string }) {
    const { firestore, user, isUserLoading } = useFirebase();
    const { toast } = useToast();

    const [deck, setDeck] = useState<DeckCard[]>([]);
    const [collectionState, setCollectionState] = useState<CardData[]>([]);
    const [isSaving, setIsSaving] = useState(false);
    
    const characterDocRef = useMemoFirebase(() => {
        if (!firestore || !user) return null;
        return doc(firestore, `users/${user.uid}/characters/${characterId}`);
    }, [firestore, user, characterId]);

    const { data: characterData, isLoading: isCharacterLoading } = useDoc(characterDocRef);

    const deckRef = useMemoFirebase(() => {
        if (!firestore || !user) return null;
        return doc(firestore, `users/${user.uid}/characters/${characterId}/decks`, "main");
    }, [firestore, user, characterId]);

    const inventoryRef = useMemoFirebase(() => {
        if (!firestore || !user) return null;
        return collection(firestore, `users/${user.uid}/characters/${characterId}/inventory`);
    }, [firestore, user, characterId]);

    const { data: deckData, isLoading: isDeckLoading } = useDoc(deckRef);
    const { data: inventoryData, isLoading: isInventoryLoading } = useCollection(inventoryRef);
    
    const characterClass = useMemo(() => {
        if (!characterData) return null;
        return getClass(characterData.class);
    }, [characterData]);

    useEffect(() => {
        if (deckData?.cards) {
            const cardCounts: { [key: string]: number } = {};
            const deckWithIds = (deckData.cards as string[]).map(cardName => {
                const count = cardCounts[cardName] || 0;
                cardCounts[cardName] = count + 1;
                return { id: `${cardName}-${count}`, name: cardName };
            });
            setDeck(deckWithIds);
        }
    }, [deckData]);


    useEffect(() => {
        if (!characterClass || !inventoryData || !deckData) return;
    
        const allCardsMap = new Map<string, CardData>();
    
        // 1. Add cards from inventory first to ensure they take precedence
        inventoryData.forEach(item => {
            if (item.type === 'card' && !allCardsMap.has(item.name)) {
                allCardsMap.set(item.name, {
                    id: item.id || item.name,
                    name: item.name,
                    description: item.description,
                    manaCost: item.manaCost,
                    attack: item.attack,
                    defense: item.defense,
                    healing: item.healing,
                    class: characterClass.name,
                } as CardData);
            }
        });
    
        // 2. Add all master cards if they don't already exist
        Object.values(CARD_DATA).forEach(cardDetails => {
            const cardName = cardDetails.name;
            if(!allCardsMap.has(cardName)) {
                allCardsMap.set(cardName, { ...cardDetails, id: cardName, class: 'any' });
            }
        });
        
        // 3. Add/update starter cards to ensure they exist with the correct class info
        characterClass.starterDeck.forEach(starter => {
            if (allCardsMap.has(starter.name)) {
                const card = allCardsMap.get(starter.name)!;
                card.class = characterClass.name; 
            } else {
                 const cardDetails = Object.values(CARD_DATA).find(c => c.name === starter.name);
                 if (cardDetails) {
                    allCardsMap.set(starter.name, {
                        ...cardDetails,
                        id: starter.name,
                        class: characterClass.name,
                    });
                }
            }
        });
        
        // 4. Ensure any cards in the current deck are also present
         deckData.cards.forEach((cardName: string) => {
            if (!allCardsMap.has(cardName)) {
                const cardDetails = Object.values(CARD_DATA).find(c => c.name === cardName);
                 if (cardDetails) {
                    allCardsMap.set(cardName, {
                        ...cardDetails,
                        id: cardName,
                        class: 'any', // Can be generic if not in starter deck
                    });
                }
            }
        });

        setCollectionState(Array.from(allCardsMap.values()));
    
    }, [inventoryData, deckData, characterClass]);

    const collectionPool = useMemo(() => {
        const deckCardCounts: { [key: string]: number } = {};
        deck.forEach(c => {
            deckCardCounts[c.name] = (deckCardCounts[c.name] || 0) + 1;
        });

        const totalCardCounts: { [key: string]: number } = {};
        
        if (characterClass && inventoryData && deckData) {
            collectionState.forEach(c => {
                 const starterInfo = characterClass.starterDeck.find(sc => sc.name === c.name);
                 const inventoryInfo = inventoryData.filter(i => i.name === c.name && i.type === 'card');
                 const baseCount = starterInfo?.count || 0;
                 const inventoryCount = inventoryInfo.length;

                 const originalDeckCount = deckData.cards.filter((cardName: string) => cardName === c.name).length;

                 totalCardCounts[c.name] = Math.max(baseCount + inventoryCount, originalDeckCount);
            });
        }
        
        return collectionState.filter(card => {
            const inDeckCount = deckCardCounts[card.name] || 0;
            const totalCount = totalCardCounts[card.name] || 0;
            return inDeckCount < totalCount;
        });

    }, [deck, collectionState, characterClass, inventoryData, deckData]);


    const deckCardsData = useMemo(() => 
        deck.map(deckCard => {
            const cardData = collectionState.find(c => c.name === deckCard.name);
            return {
                ...cardData,
                uniqueId: deckCard.id,
            }
        }).filter(c => c.name) as (CardData & { uniqueId: string })[],
        [deck, collectionState]
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
    
        if (!active || !over || active.id === over.id) return;
    
        const activeIsFromDeck = deck.some(c => c.id === active.id);
        const overIsDeckArea = over.id === 'deck-droppable' || deck.some(c => c.id === over.id);

        // From Deck to Deck (Reorder)
        if (activeIsFromDeck && overIsDeckArea) {
            const oldIndex = deck.findIndex(c => c.id === active.id);
            const newIndex = deck.findIndex(c => c.id === over.id);
            if (oldIndex !== -1 && newIndex !== -1) {
                setDeck(items => arrayMove(items, oldIndex, newIndex));
            }
        }
        // From Collection to Deck
        else if (!activeIsFromDeck && overIsDeckArea) {
            if (deck.length < DECK_SIZE) {
                 const cardName = active.id as string;
                 const countInDeck = deck.filter(c => c.name === cardName).length;
                 const newCard = { id: `${cardName}-${countInDeck}`, name: cardName };
                 
                 if (over.id === 'deck-droppable') {
                     setDeck(prev => [...prev, newCard]); // Add to end
                 } else {
                     const overIndex = deck.findIndex(c => c.id === over.id);
                     setDeck(prev => [...prev.slice(0, overIndex), newCard, ...prev.slice(overIndex)]);
                 }
            } else {
                toast({ title: "Deck Full", description: `You can only have ${DECK_SIZE} cards in your deck.`, variant: "destructive" });
            }
        }
        // From Deck to Collection
        else if (activeIsFromDeck && !overIsDeckArea) {
            setDeck(prev => prev.filter(c => c.id !== active.id));
        }
    };
    
    const handleSaveDeck = async () => {
        if (!firestore || !user || !deckRef) return;
        if (deck.length !== DECK_SIZE) {
            toast({ title: "Invalid Deck Size", description: `Your deck must have exactly ${DECK_SIZE} cards.`, variant: "destructive" });
            return;
        }
        setIsSaving(true);
        try {
            const cardNamesToSave = deck.map(c => c.name);
            const batch = writeBatch(firestore);
            batch.update(deckRef, { cards: cardNamesToSave })
            await batch.commit();
            toast({ title: "Deck Saved!", description: "Your changes have been saved successfully." });
        } catch (error) {
            console.error("Failed to save deck:", error);
            toast({ title: "Error", description: "Could not save your deck.", variant: "destructive" });
        } finally {
            setIsSaving(false);
        }
    };


    const isLoading = isUserLoading || isDeckLoading || isInventoryLoading || isCharacterLoading;

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <Loader2 className="h-16 w-16 animate-spin text-primary" />
            </div>
        );
    }
    
    return (
        <div className="py-4">
            <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
                <div className="space-y-8">
                     <div>
                        <div className="flex justify-between items-center mb-4">
                           <h2 className="font-headline text-2xl text-glow">Deck Analysis</h2>
                           <Button onClick={handleSaveDeck} disabled={isSaving || deck.length !== DECK_SIZE}>
                                {isSaving ? <Loader2 className="animate-spin" /> : <Save />} Save Deck
                            </Button>
                        </div>
                        
                        {deck.length !== DECK_SIZE && (
                            <Alert variant="destructive" className="mb-4">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Deck Invalid</AlertTitle>
                                <AlertDescription>
                                    Your deck has {deck.length} cards. It must have exactly {DECK_SIZE} cards to be valid.
                                </AlertDescription>
                            </Alert>
                        )}
                        <DeckStats cards={deckCardsData} />
                    </div>


                    <Card id="deck-droppable" className="min-h-96">
                        <CardHeader>
                            <CardTitle>Your Deck ({deck.length}/{DECK_SIZE})</CardTitle>
                            <CardDescription>This is your active deck for battles. Drag and drop cards to customize it.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-4 p-4 bg-muted/20 rounded-lg min-h-[22rem]">
                            <SortableContext items={deck.map(c => c.id)} strategy={rectSortingStrategy}>
                                {deck.map(deckCard => {
                                    const cardData = collectionState.find(c => c.name === deckCard.name);
                                    return cardData ? <DraggableCard key={deckCard.id} cardId={deckCard.id} card={cardData} inDeck={true} /> : null;
                                })}
                            </SortableContext>
                        </CardContent>
                    </Card>

                    <Card id="collection-droppable" className="min-h-96">
                        <CardHeader>
                            <CardTitle>Your Collection</CardTitle>
                            <CardDescription>These are all the cards you own. Drag cards into your deck above.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-4 p-4 bg-background/50 rounded-lg">
                            <SortableContext items={collectionPool.map(c => c.name)} strategy={rectSortingStrategy}>
                                {collectionPool.map(card => (
                                <DraggableCard key={card.id} cardId={card.id} card={card} inDeck={false} />
                                ))}
                            </SortableContext>
                        </CardContent>
                    </Card>
                </div>
            </DndContext>
        </div>
    );
}

    