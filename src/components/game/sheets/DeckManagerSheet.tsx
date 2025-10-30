
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

type DraggableCardProps = {
    card: CardData;
    inDeck: boolean;
};

const DraggableCard = ({ card, inDeck }: DraggableCardProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: card.name });

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

    const [deck, setDeck] = useState<string[]>([]);
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
            setDeck(deckData.cards);
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


    const collectionPool = collectionState.filter(card => !deck.includes(card.name));
    const deckCardsData = useMemo(() => 
        deck.map(cardName => collectionState.find(c => c.name === cardName)).filter(Boolean) as CardData[],
        [deck, collectionState]
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!active || !over || active.id === over.id) return;

        const cardName = active.id as string;
        const inDeck = deck.includes(cardName);

        const targetIsDeck = over.id === 'deck-droppable' || deck.includes(over.id as string);
        const targetIsCollection = over.id === 'collection-droppable' || collectionPool.some(c => c.name === over.id);


        if (targetIsDeck) {
             if (inDeck) {
                 // Reordering within the deck
                 const oldIndex = deck.indexOf(active.id as string);
                 const newIndex = deck.indexOf(over.id as string);
                 if (oldIndex !== -1 && newIndex !== -1) {
                    setDeck((items) => arrayMove(items, oldIndex, newIndex));
                 }
             } else {
                 // Moving from collection to deck
                if (deck.length < DECK_SIZE) {
                    setDeck((prev) => [...prev, cardName]);
                } else {
                    toast({ title: "Deck Full", description: `You can only have ${DECK_SIZE} cards in your deck.`, variant: "destructive" });
                }
             }
        } else if (targetIsCollection) {
            if (inDeck) {
                // Moving from deck to collection
                setDeck((prev) => prev.filter(c => c !== cardName));
            }
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
            const batch = writeBatch(firestore);
            batch.update(deckRef, { cards: deck })
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
                            <SortableContext items={deck} strategy={rectSortingStrategy}>
                                {deck.map(cardName => {
                                    const cardData = collectionState.find(c => c.name === cardName);
                                    return cardData ? <DraggableCard key={cardName} card={cardData} inDeck={true} /> : null;
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
                                <DraggableCard key={card.id} card={card} inDeck={false} />
                                ))}
                            </SortableContext>
                        </CardContent>
                    </Card>
                </div>
            </DndContext>
        </div>
    );
}
