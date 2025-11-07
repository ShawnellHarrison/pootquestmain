
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

    // This effect populates the deck state with unique IDs for each card instance
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
        if (!characterClass) return;
    
        const allCardsMap = new Map<string, CardData>();
    
        // 1. Add starter cards for the character's class
        characterClass.starterDeck.forEach(starter => {
            const cardDetails = Object.values(CARD_DATA).find(c => c.name === starter.name);
            if (cardDetails) {
                allCardsMap.set(starter.name, {
                    ...cardDetails,
                    id: starter.name,
                    class: characterClass.name,
                });
            }
        });
    
        // 2. Add cards from inventory (which are newly generated or transmuted)
        inventoryData?.forEach(item => {
            if (item.type === 'card') {
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
    
        // 3. Add cards from the current deck if they aren't already in the map,
        // this covers cards that were in the deck but not starter or inventory.
        deckData?.cards?.forEach((cardName: string) => {
            if (!allCardsMap.has(cardName)) {
                // Find it in the master card list or assume it's a generated one
                // This case is less likely with the new inventory logic but acts as a fallback
                const cardDetails = Object.values(CARD_DATA).find(c => c.name === cardName);
                 if (cardDetails) {
                    allCardsMap.set(cardName, {
                        ...cardDetails,
                        id: cardName,
                        class: characterClass.name,
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
        collectionState.forEach(c => {
             // For simplicity, let's assume starter deck indicates base count, then add inventory
             const starterInfo = characterClass?.starterDeck.find(sc => sc.name === c.name);
             const inventoryInfo = inventoryData?.filter(i => i.name === c.name && i.type === 'card');
             totalCardCounts[c.name] = (starterInfo?.count || 0) + (inventoryInfo?.length || 0);
             if(!totalCardCounts[c.name]) { // If not in starter or inventory must be from original deck data
                const deckCount = deckData?.cards?.filter((cardName: string) => cardName === c.name).length || 0;
                if(deckCount > 0) totalCardCounts[c.name] = deckCount;
             }
        });
        
        return collectionState.filter(card => {
            const inDeckCount = deckCardCounts[card.name] || 0;
            const totalCount = totalCardCounts[card.name] || 1; // Assume at least 1 if it exists
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
    
        const activeCard = deck.find(c => c.id === active.id) || { id: active.id as string, name: active.id as string};
        const isCardInDeck = deck.some(c => c.id === active.id);
    
        // Scenario 1: Moving a card within the deck to reorder
        if (isCardInDeck && over.id && deck.some(c => c.id === over.id)) {
            const oldIndex = deck.findIndex(c => c.id === active.id);
            const newIndex = deck.findIndex(c => c.id === over.id);
            if (oldIndex !== -1 && newIndex !== -1) {
                setDeck(items => arrayMove(items, oldIndex, newIndex));
            }
        }
        // Scenario 2: Moving a card from collection to deck
        else if (!isCardInDeck && (over.id === 'deck-droppable' || deck.some(c => c.id === over.id))) {
            if (deck.length < DECK_SIZE) {
                 const cardName = active.id as string;
                 const count = deck.filter(c => c.name === cardName).length;
                 const newCard = { id: `${cardName}-${count}`, name: cardName };
                 setDeck(prev => [...prev, newCard]);
            } else {
                toast({ title: "Deck Full", description: `You can only have ${DECK_SIZE} cards in your deck.`, variant: "destructive" });
            }
        }
        // Scenario 3: Moving a card from deck to collection
        else if (isCardInDeck && (over.id === 'collection-droppable' || collectionPool.some(c => c.name === over.id))) {
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
                                <DraggableCard key={card.name} cardId={card.name} card={card} inDeck={false} />
                                ))}
                            </SortableContext>
                        </CardContent>
                    </Card>
                </div>
            </DndContext>
        </div>
    );
}

    