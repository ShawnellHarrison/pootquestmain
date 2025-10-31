
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CharacterClass } from "@/lib/game-data";
import StatBar from "@/components/ui/StatBar";
import { ArrowLeft, CheckCircle, Swords, AlertTriangle, FolderOpen, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useFirebase } from "@/firebase";
import { collection, doc, writeBatch } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface ConfirmationScreenProps {
    character: CharacterClass;
}

const SectionHeader = ({ icon: Icon, title }: { icon: React.ElementType, title: string }) => (
    <div className="flex items-center gap-2 mb-2">
        <Icon className="h-5 w-5 text-primary" />
        <h3 className="font-headline text-lg font-bold text-primary/90">{title}</h3>
    </div>
);

export function ConfirmationScreen({ character }: ConfirmationScreenProps) {
    const { firestore, user } = useFirebase();
    const router = useRouter();
    const [isCreating, setIsCreating] = useState(false);

    const handleConfirm = async () => {
        if (!firestore || !user) return;
        setIsCreating(true);
        try {
            const batch = writeBatch(firestore);

            // 1. Create Character document
            const newCharacterRef = doc(collection(firestore, `users/${user.uid}/characters`));
            batch.set(newCharacterRef, {
                userId: user.uid,
                class: character.id,
                imageUrl: character.image,
                level: 1,
                experience: 0,
                health: 60,
                maxHealth: 60,
                mana: 10,
                maxMana: 10,
                attack: character.stats.attack,
                defense: character.stats.defense,
                speed: character.stats.speed,
                createdAt: new Date().toISOString(),
            });

            // 2. Create initial NarrativeContext document with placeholder text
            const narrativeContextRef = doc(firestore, `users/${user.uid}/characters/${newCharacterRef.id}/narrativeContexts`, "main");
            batch.set(narrativeContextRef, {
                characterId: newCharacterRef.id,
                location: "Tavern of Broken Wind",
                storyArc: "Your legend is about to be written...", // Placeholder
                playerChoices: [],
                reputationStealth: 10,
                reputationCombat: 10,
                reputationDiplomacy: 10,
                unlockedPaths: [],
                questFlags: {},
                lastNarration: "A new adventure begins! What will your first move be?", // Placeholder
                currentScenario: null,
                currentEncounter: null,
                triggerNextScenario: true, // Trigger narration generation on first load
            });

            // 3. Create initial Deck document
            const deckRef = doc(firestore, `users/${user.uid}/characters/${newCharacterRef.id}/decks`, "main");
            batch.set(deckRef, {
                characterId: newCharacterRef.id,
                cards: character.starterDeck.flatMap(c => Array(c.count).fill(c.name)),
            });

            await batch.commit();

            if (typeof window !== 'undefined') {
                localStorage.setItem('characterId', newCharacterRef.id);
            }

            router.push(`/adventure/${newCharacterRef.id}`);

        } catch (error) {
            console.error("Failed to create character:", error);
            setIsCreating(false);
        }
    };


    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <Card className="bg-card/80 border-primary/20 shadow-lg shadow-primary/10">
                    <CardHeader className="flex flex-row items-start gap-4">
                        <Image 
                            src={character.image}
                            alt={character.name}
                            width={100}
                            height={100}
                            className="rounded-lg object-cover border-2 border-primary/50"
                            data-ai-hint={character.imageHint}
                        />
                        <div>
                            <CardTitle className="font-headline text-3xl text-glow">
                                Your Chosen Warrior: {character.name}
                            </CardTitle>
                            <p className="text-muted-foreground">{character.playstyle}</p>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6 font-code text-base">
                        <div>
                            <SectionHeader icon={Swords} title="Combat Stats" />
                            <div className="space-y-2 pl-7">
                                <div className="flex items-center">
                                    <span className="w-24">Attack Power:</span>
                                    <StatBar value={character.stats.attack} />
                                </div>
                                <div className="flex items-center">
                                    <span className="w-24">Defense:</span>
                                    <StatBar value={character.stats.defense} />
                                </div>
                                <div className="flex items-center">
                                    <span className="w-24">Speed:</span>
                                    <StatBar value={character.stats.speed} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <SectionHeader icon={Sparkles} title="Special Traits" />
                            <ul className="list-none space-y-1 pl-7">
                                {character.specialTraits.map((trait) => (
                                    <li key={trait} className="flex items-center">
                                        <span className="text-primary mr-2">◆</span> {trait}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <SectionHeader icon={FolderOpen} title="Starter Deck (15 cards)" />
                            <ul className="list-none space-y-1 pl-7">
                                {character.starterDeck.map((card) => (
                                    <li key={card.name} className="flex items-center">
                                        <span className="text-accent mr-2">▸</span> {card.name} x{card.count}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <SectionHeader icon={AlertTriangle} title="Weaknesses to Know" />
                            <ul className="list-none space-y-1 pl-7">
                                {character.weaknessesToKnow.map((weakness) => (
                                    <li key={weakness} className="flex items-center text-destructive/80">
                                        <span className="text-destructive mr-2">⚠️</span> {weakness}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </CardContent>
                    <CardFooter className="flex-col sm:flex-row gap-4">
                         <Button asChild size="lg" className="w-full sm:w-auto" variant="outline" disabled={isCreating}>
                            <Link href="/character-creation">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Reselect Class
                            </Link>
                        </Button>
                        <Button 
                            size="lg" 
                            className="w-full sm:w-auto flex-grow animate-pulse-glow disabled:animate-none"
                            onClick={handleConfirm}
                            disabled={isCreating || !user}
                        >
                            {isCreating ? (
                                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating Your Legend...</>
                            ) : (
                                <><CheckCircle className="mr-2 h-4 w-4" /> Confirm & Start Adventure</>
                            )}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="hidden lg:flex flex-col items-center">
                <Card className="w-full max-w-sm sticky top-24">
                    <CardContent className="p-0">
                        <Image 
                            src={character.image}
                            alt={character.name}
                            width={600}
                            height={800}
                            className="rounded-lg object-cover"
                            data-ai-hint={character.imageHint}
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
