
'use client';

import { useState, useEffect, use, useMemo } from 'react';
import { useFirebase, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { doc, collection, writeBatch } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, ArrowLeft, Save, AlertCircle } from 'lucide-react';
import { CARD_DATA, CardData, getClass } from '@/lib/game-data';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, rectSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';
import { Header } from '@/components/game/Header';
import { GameContainer } from '@/components/game/GameContainer';
import { useToast } from '@/hooks/use-toast';

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


export default function DeckManagerPage({ params }: { params: Promise<{ characterId: string }> }) {
    const { characterId } = use(params);
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
    
    const characterClass = useMemo(() => characterData ? getClass(characterData.class) : null, [characterData]);

    useEffect(() => {
        if (deckData?.cards) {
            setDeck(deckData.cards);
        }
    }, [deckData]);

    useEffect(() => {
        if (inventoryData && deckData?.cards && characterClass) {
            const allCardsMap = new Map<string, CardData>();
            
            // Add starter cards for the character's class
            characterClass.starterDeck.forEach(starter => {
                if (CARD_DATA[starter.name]) {
                    allCardsMap.set(starter.name, CARD_DATA[starter.name]);
                }
            });

            // Add cards from inventory (which are newly generated)
            inventoryData.forEach(item => {
                if (item.type === 'card' || CARD_DATA[item.name]) { // also add starter cards if they appear in inventory
                    allCardsMap.set(item.name, {
                        id: item.id, // Keep original id if possible
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
            
            // Add cards from the current deck if they aren't already in the map
            deckData.cards.forEach((cardName: string) => {
                const cardDetails = CARD_DATA[cardName];
                if (cardDetails && !allCardsMap.has(cardName)) {
                    allCardsMap.set(cardName, cardDetails);
                }
            });

            setCollectionState(Array.from(allCardsMap.values()));
        } else if (deckData?.cards && characterClass) {
            // Fallback if inventory is empty
            const starterAndDeckCards = new Map<string, CardData>();
            characterClass.starterDeck.forEach(starter => {
                if (CARD_DATA[starter.name]) {
                    starterAndDeckCards.set(starter.name, CARD_DATA[starter.name]);
                }
            });
            deckData.cards.forEach((cardName: string) => {
                 if (CARD_DATA[cardName]) {
                    starterAndDeckCards.set(cardName, CARD_DATA[cardName]);
                }
            });
            setCollectionState(Array.from(starterAndDeckCards.values()));
        }
    }, [inventoryData, deckData, characterClass]);


    const collectionPool = collectionState.filter(card => !deck.includes(card.name));

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (active.id === over?.id) return;

        const cardName = active.id as string;
        const inDeck = deck.includes(cardName);

        if (over) {
             if (over.id === 'deck-droppable' && !inDeck) {
                if (deck.length < DECK_SIZE) {
                    setDeck((prev) => [...prev, cardName]);
                } else {
                    toast({ title: "Deck Full", description: `You can only have ${DECK_SIZE} cards in your deck.`, variant: "destructive" });
                }
            } else if (over.id === 'collection-droppable' && inDeck) {
                 setDeck((prev) => prev.filter(c => c !== cardName));
            } else if (inDeck && over.id && deck.includes(over.id as string)) {
                // Reordering within the deck
                setDeck((items) => {
                    const oldIndex = items.indexOf(active.id as string);
                    const newIndex = items.indexOf(over.id as string);
                    return arrayMove(items, oldIndex, newIndex);
                });
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
        <>
        <Header />
        <main className="py-12">
        <GameContainer>
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
            <div className="space-y-8">
                <div className="flex justify-between items-center">
                    <h1 className="font-headline text-4xl text-glow">Deck Manager</h1>
                    <div className="flex gap-4">
                        <Button variant="outline" asChild>
                            <Link href={`/adventure/${characterId}`}><ArrowLeft /> Back to Adventure</Link>
                        </Button>
                        <Button onClick={handleSaveDeck} disabled={isSaving || deck.length !== DECK_SIZE}>
                            {isSaving ? <Loader2 className="animate-spin" /> : <Save />} Save Deck
                        </Button>
                    </div>
                </div>

                {deck.length !== DECK_SIZE && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Deck Invalid</AlertTitle>
                        <AlertDescription>
                            Your deck has {deck.length} cards. It must have exactly {DECK_SIZE} cards to be valid.
                        </AlertDescription>
                    </Alert>
                )}

                <Card id="deck-droppable" className="min-h-96">
                    <CardHeader>
                        <CardTitle>Your Deck ({deck.length}/{DECK_SIZE})</CardTitle>
                        <CardDescription>Drag cards from your collection to add them to your deck. Drag cards out to remove them.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4 p-4 bg-muted/20 rounded-lg">
                        <SortableContext items={deck} strategy={rectSortingStrategy}>
                            {deck.map(cardName => {
                                const cardData = collectionState.find(c => c.name === cardName);
                                return cardData ? <DraggableCard key={cardName} card={cardData} inDeck={true} /> : null;
                            })}
                        </SortableContext>
                    </CardContent>
                </Card>

                <Card id="collection-droppable">
                    <CardHeader>
                        <CardTitle>Your Collection ({collectionPool.length})</CardTitle>
                        <CardDescription>These are all the cards you own. Drag cards from here into your deck.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4 p-4 bg-muted/20 rounded-lg min-h-64">
                         <SortableContext items={collectionPool.map(c => c.name)} strategy={rectSortingStrategy}>
                            {collectionPool.map(card => <DraggableCard key={card.name} card={card} inDeck={false} />)}
                        </SortableContext>
                    </CardContent>
                </Card>
            </div>
        </DndContext>
        </GameContainer>
        </main>
        </>
    );
}

    