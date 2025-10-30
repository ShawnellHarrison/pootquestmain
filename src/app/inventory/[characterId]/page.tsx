
'use client';

import { useState, useEffect, useMemo } from 'react';
import { useFirebase, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { collection, writeBatch, doc, addDoc, deleteDoc } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, ArrowLeft, Wand2, Sparkles, AlertCircle, HelpCircle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';
import { Header } from '@/components/game/Header';
import { GameContainer } from '@/components/game/GameContainer';
import { useToast } from '@/hooks/use-toast';
import { transmuteItemToCard, TransmuteItemOutput } from '@/ai/flows/transmute-item-flow';
import { CARD_DATA, getClass } from '@/lib/game-data';

const ItemCard = ({ item, onTransmute, isTransmuting }: { item: any, onTransmute: (item: any) => void, isTransmuting: boolean }) => {
    const canBeTransmuted = item.type === 'junk';
    return (
        <Card className="w-48 h-64 flex flex-col p-3 text-center bg-secondary/50">
            <CardHeader className="p-2">
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <CardDescription className="text-xs italic h-10 overflow-hidden">{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-center justify-center">
                <HelpCircle className="h-16 w-16 text-primary/50" />
            </CardContent>
            {canBeTransmuted && (
                <Button onClick={() => onTransmute(item)} disabled={isTransmuting}>
                    {isTransmuting ? <Loader2 className="animate-spin" /> : <><Wand2 className="mr-2" />Transmute</>}
                </Button>
            )}
        </Card>
    );
};

const NewCard = ({ card }: { card: TransmuteItemOutput }) => (
     <Card className="w-48 h-64 flex flex-col p-3 text-center bg-green-900/50 border-green-500">
        <CardHeader className="p-2">
            <CardTitle className="text-lg text-green-300">{card.name}</CardTitle>
            <CardDescription className="text-xs italic">{card.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-center items-center text-sm space-y-1">
            <p className="text-muted-foreground">Cost: {card.manaCost}</p>
            {card.attack > 0 && <p>ATK: {card.attack}</p>}
            {card.defense > 0 && <p>DEF: {card.defense}</p>}
            {card.healing > 0 && <p>HEAL: {card.healing}</p>}
        </CardContent>
    </Card>
)

export default function InventoryPage({ params }: { params: { characterId: string } }) {
    const { characterId } = params;
    const { firestore, user, isUserLoading } = useFirebase();
    const { toast } = useToast();

    const [isTransmuting, setIsTransmuting] = useState<string | null>(null);
    const [newlyCreatedCard, setNewlyCreatedCard] = useState<TransmuteItemOutput | null>(null);

    const inventoryRef = useMemoFirebase(() => {
        if (!firestore || !user) return null;
        return collection(firestore, `users/${user.uid}/characters/${characterId}/inventory`);
    }, [firestore, user, characterId]);
    
    const characterRef = useMemoFirebase(() => {
        if (!firestore || !user) return null;
        return doc(firestore, `users/${user.uid}/characters/${characterId}`);
    }, [firestore, user, characterId]);

    const { data: inventoryData, isLoading: isInventoryLoading } = useCollection(inventoryRef);
    const { data: characterData, isLoading: isCharacterLoading } = useDoc(characterRef);
    
    const deckRef = useMemoFirebase(() => {
        if (!firestore || !user) return null;
        return doc(firestore, `users/${user.uid}/characters/${characterId}/decks`, "main");
    }, [firestore, user, characterId]);
    
    const { data: deckData, isLoading: isDeckLoading } = useDoc(deckRef);

    const handleTransmuteItem = async (itemToTransmute: any) => {
        if (!firestore || !user || !characterData || !deckData || !inventoryData) return;
        setIsTransmuting(itemToTransmute.id);
        setNewlyCreatedCard(null);

        const characterClass = getClass(characterData?.class);
        
        if (!characterData || !characterClass || !deckData) {
             toast({ title: "Error", description: "Could not find character data to generate card.", variant: "destructive" });
             setIsTransmuting(null);
             return;
        }

        try {
            const inventoryCardNames = inventoryData.filter(item => item.type === 'card').map(item => item.name);
            const allOwnedCards = Array.from(new Set([...deckData.cards, ...Object.keys(CARD_DATA), ...inventoryCardNames]));
            
            const newCard = await transmuteItemToCard({
                playerClass: characterClass.name,
                playerLevel: characterData.level,
                existingCards: allOwnedCards,
                itemName: itemToTransmute.name,
                itemDescription: itemToTransmute.description,
            });

            const batch = writeBatch(firestore);
            
            // Delete the junk item
            const itemToDeleteRef = doc(inventoryRef!, itemToTransmute.id);
            batch.delete(itemToDeleteRef);
            
            // Add the new card to the inventory (it is now an item of type 'card')
            const newCardItemRef = collection(firestore, `users/${user.uid}/characters/${characterId}/inventory`);
            batch.set(doc(newCardItemRef), { ...newCard, type: 'card' });

            await batch.commit();

            setNewlyCreatedCard(newCard);
            toast({ title: "Transmutation Successful!", description: `Your ${itemToTransmute.name} became "${newCard.name}"!`, className: 'bg-primary text-primary-foreground' });

        } catch (error) {
            console.error("Failed to transmute item:", error);
            toast({ title: "AI Error", description: "The item fizzled into dust. Please try again with another.", variant: "destructive" });
        } finally {
            setIsTransmuting(null);
        }
    };
    
    const isLoading = isUserLoading || isInventoryLoading || isCharacterLoading || isDeckLoading;

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <Loader2 className="h-16 w-16 animate-spin text-primary" />
            </div>
        );
    }
    
    const junkItems = inventoryData?.filter(item => item.type !== 'card') || [];
    const cardItems = inventoryData?.filter(item => item.type === 'card') || [];
    
    return (
        <>
        <Header />
        <main className="py-12">
        <GameContainer>
            <div className="space-y-8">
                 <div className="flex justify-between items-center">
                    <h1 className="font-headline text-4xl text-glow">Inventory</h1>
                    <Button variant="outline" asChild>
                        <Link href={`/adventure/${characterId}`}><ArrowLeft /> Back to Adventure</Link>
                    </Button>
                </div>
                
                {newlyCreatedCard && (
                    <Alert variant="default" className="border-green-500/50 bg-green-900/30">
                        <Sparkles className="h-4 w-4 text-green-400" />
                        <AlertTitle className="text-green-300">New Card Created!</AlertTitle>
                        <AlertDescription className="flex items-center gap-4">
                           <p> The item was transmuted successfully. The "{newlyCreatedCard.name}" card has been added to your collection and can now be added to your deck.</p>
                           <NewCard card={newlyCreatedCard} />
                        </AlertDescription>
                    </Alert>
                )}

                <Card>
                    <CardHeader>
                        <CardTitle>Your Junk</CardTitle>
                        <CardDescription>These are the useless but potentially magical items you've collected. Try transmuting them!</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4 p-4 bg-muted/20 rounded-lg min-h-64">
                       {junkItems.length > 0 ? (
                           junkItems.map(item => (
                               <ItemCard 
                                    key={item.id} 
                                    item={item} 
                                    onTransmute={handleTransmuteItem} 
                                    isTransmuting={isTransmuting === item.id} 
                                />
                           ))
                       ) : (
                           <p className="text-muted-foreground p-4">You have no junk to transmute. Go find some!</p>
                       )}
                    </CardContent>
                </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle>Your Discovered Cards</CardTitle>
                        <CardDescription>These are cards you have transmuted. Manage them in your deck.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4 p-4 bg-muted/20 rounded-lg min-h-24">
                       {cardItems.length > 0 ? (
                           cardItems.map(item => (
                               <NewCard 
                                    key={item.id} 
                                    card={item as TransmuteItemOutput} 
                                />
                           ))
                       ) : (
                           <p className="text-muted-foreground p-4">You haven't transmuted any cards yet.</p>
                       )}
                    </CardContent>
                </Card>
            </div>
        </GameContainer>
        </main>
        </>
    );
}
