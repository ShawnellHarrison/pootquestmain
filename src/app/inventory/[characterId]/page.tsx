
'use client';

import { useState, useEffect, useMemo, use } from 'react';
import { useFirebase, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { collection, writeBatch, doc, addDoc, deleteDoc } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, ArrowLeft, Wand2, Sparkles, AlertCircle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';
import { Header } from '@/components/game/Header';
import { GameContainer } from '@/components/game/GameContainer';
import { useToast } from '@/hooks/use-toast';
import { generateCard, GenerateCardOutput } from '@/ai/flows/generate-card-flow';
import { CARD_DATA, getClass } from '@/lib/game-data';

const ItemCard = ({ item, onIdentify, isIdentifying }: { item: any, onIdentify: (itemId: string) => void, isIdentifying: boolean }) => {
    const isScroll = item.name === "Mystery Scroll";
    return (
        <Card className="w-48 h-64 flex flex-col p-3 text-center bg-secondary/50">
            <CardHeader className="p-2">
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <CardDescription className="text-xs italic">{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-center justify-center">
                {isScroll ? <Sparkles className="h-16 w-16 text-primary animate-pulse" /> : <p>Placeholder</p>}
            </CardContent>
            {isScroll && (
                <Button onClick={() => onIdentify(item.id)} disabled={isIdentifying}>
                    {isIdentifying ? <Loader2 className="animate-spin" /> : <><Wand2 className="mr-2" />Identify</>}
                </Button>
            )}
        </Card>
    );
};

const NewCard = ({ card }: { card: GenerateCardOutput }) => (
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

export default function InventoryPage({ params }: { params: Promise<{ characterId: string }> }) {
    const { characterId } = use(params);
    const { firestore, user, isUserLoading } = useFirebase();
    const { toast } = useToast();

    const [isIdentifying, setIsIdentifying] = useState<string | null>(null);
    const [newlyCreatedCard, setNewlyCreatedCard] = useState<GenerateCardOutput | null>(null);

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

    const handleIdentifyScroll = async (itemId: string) => {
        if (!firestore || !user || !characterData || !deckData || !inventoryData) return;
        setIsIdentifying(itemId);
        setNewlyCreatedCard(null);

        const characterClass = getClass(characterData?.class);
        
        if (!characterData || !characterClass || !deckData) {
             toast({ title: "Error", description: "Could not find character data to generate card.", variant: "destructive" });
             setIsIdentifying(null);
             return;
        }

        try {
            const inventoryCardNames = inventoryData.filter(item => item.type === 'card').map(item => item.name);
            const allOwnedCards = Array.from(new Set([...deckData.cards, ...Object.keys(CARD_DATA), ...inventoryCardNames]));
            
            const newCard = await generateCard({
                playerClass: characterClass.name,
                playerLevel: characterData.level,
                existingCards: allOwnedCards,
            });

            const batch = writeBatch(firestore);
            
            // Delete the scroll
            const itemToDeleteRef = doc(inventoryRef!, itemId);
            batch.delete(itemToDeleteRef);
            
            // Add the new card to the inventory (it's a card now, but represented as an Item doc)
            const newCardItemRef = collection(firestore, `users/${user.uid}/characters/${characterId}/inventory`);
            batch.set(doc(newCardItemRef), { ...newCard, type: 'card' });

            await batch.commit();

            setNewlyCreatedCard(newCard);
            toast({ title: "Scroll Identified!", description: `You have discovered the "${newCard.name}" card!`, className: 'bg-primary text-primary-foreground' });

        } catch (error) {
            console.error("Failed to identify scroll:", error);
            toast({ title: "AI Error", description: "The scroll's magic fizzled. Please try again.", variant: "destructive" });
        } finally {
            setIsIdentifying(null);
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
                        <AlertTitle className="text-green-300">New Card Discovered!</AlertTitle>
                        <AlertDescription className="flex items-center gap-4">
                           <p> The Mystery Scroll revealed its secret. The "{newlyCreatedCard.name}" card has been added to your collection and can now be added to your deck.</p>
                           <NewCard card={newlyCreatedCard} />
                        </AlertDescription>
                    </Alert>
                )}

                <Card>
                    <CardHeader>
                        <CardTitle>Your Items</CardTitle>
                        <CardDescription>These are the items you've collected on your journey.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4 p-4 bg-muted/20 rounded-lg min-h-64">
                       {inventoryData && inventoryData.length > 0 ? (
                           inventoryData.map(item => (
                               <ItemCard 
                                    key={item.id} 
                                    item={item} 
                                    onIdentify={handleIdentifyScroll} 
                                    isIdentifying={isIdentifying === item.id} 
                                />
                           ))
                       ) : (
                           <p className="text-muted-foreground">Your inventory is empty.</p>
                       )}
                    </CardContent>
                </Card>
            </div>
        </GameContainer>
        </main>
        </>
    );
}
