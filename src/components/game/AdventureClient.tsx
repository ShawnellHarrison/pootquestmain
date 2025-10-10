
"use client";

import { useState, useEffect } from "react";
import {
  generateNextScenario,
  NarrativeOutput,
} from "@/ai/flows/branching-narrative-system";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, BookOpen, Forward } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useDoc, useFirebase, useMemoFirebase } from "@/firebase";
import { doc, arrayUnion, writeBatch } from "firebase/firestore";
import { updateDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { CLASSES } from "@/lib/game-data";
import { generateEncounter } from "@/ai/flows/generate-encounter-flow";
import { useRouter } from "next/navigation";
import { generateNpc, NpcOutput } from "@/ai/flows/ai-dungeon-master-npc";

interface AdventureClientProps {
  characterId: string;
}

type GameState = "loading" | "generating" | "ready";

export function AdventureClient({ characterId }: AdventureClientProps) {
  const { firestore, user } = useFirebase();
  const router = useRouter();
  const [gameState, setGameState] = useState<GameState>("loading");
  const [error, setError] = useState<string | null>(null);

  const narrativeContextRef = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return doc(firestore, `users/${user.uid}/characters/${characterId}/narrativeContexts`, "main");
  }, [firestore, user, characterId]);

  const { data: narrativeContext, isLoading: isContextLoading } = useDoc<any>(narrativeContextRef);

  const characterDocRef = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return doc(firestore, `users/${user.uid}/characters/${characterId}`);
  }, [firestore, user, characterId]);

  const { data: character, isLoading: isCharacterLoading } = useDoc<any>(characterDocRef);

  const characterClassData = useMemo(() => {
    if (!character) return null;
    return CLASSES.find(c => c.id === character.class);
  }, [character]);

  const generateAndSaveNextScenario = async () => {
    if (!narrativeContext || !firestore || !user || !characterClassData || !character || !narrativeContextRef) return;
    
    try {
      setGameState("generating");

      const sanitizedChoices = narrativeContext.playerChoices.map((choice: any) => ({
        id: choice.id,
        text: choice.text,
        tags: choice.tags,
      }));

      const result = await generateNextScenario({
        playerClass: characterClassData.name,
        level: character.level,
        location: narrativeContext.location,
        choices: sanitizedChoices,
        reputation: {
          stealth: narrativeContext.reputationStealth,
          combat: narrativeContext.reputationCombat,
          diplomacy: narrativeContext.reputationDiplomacy,
        },
        unlockedPaths: narrativeContext.unlockedPaths,
        questFlags: narrativeContext.questFlags,
      });

      if (result) {
        updateDocumentNonBlocking(narrativeContextRef, {
            currentScenario: result,
            triggerNextScenario: false // Reset the trigger
        });
        setGameState("ready");
      } else {
        throw new Error("The AI Dungeon Fartmaster is confused. No scenario received.");
      }
    } catch (e: any) {
      setError(e.message || "An unknown error occurred while generating the scenario.");
      setGameState("loading");
    }
  };
  
  // This effect listens for the trigger from the battle screen.
  useEffect(() => {
    if (narrativeContext?.triggerNextScenario) {
      generateAndSaveNextScenario();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [narrativeContext?.triggerNextScenario]);


  const handleStart = () => {
    generateAndSaveNextScenario();
  };

  const handleChoice = async (choice: { id: string; text: string; tags: string[] }) => {
    if (!narrativeContextRef || !firestore || !user || !characterClassData || !character || !narrativeContext) return;
    setGameState("generating");

    const choiceData = { id: choice.id, text: choice.text, tags: choice.tags, timestamp: new Date().toISOString() };
    let updates: any = {
        playerChoices: arrayUnion(choiceData),
        currentScenario: null,
    };

    try {
        if (choice.tags.includes("COMBAT")) {
            const encounterResult = await generateEncounter({
                playerClass: characterClassData.name,
                playerLevel: character.level,
                location: narrativeContext.location,
            });

            updates.currentEncounter = encounterResult;
            updateDocumentNonBlocking(narrativeContextRef, updates);
            
            router.push('/battle');
        } else if (choice.tags.includes("NPC_INTERACTION")) {
            const sanitizedChoices = narrativeContext.playerChoices.map((c: any) => ({
              id: c.id, text: c.text, tags: c.tags
            }));

            const npcResult = await generateNpc({
                location: narrativeContext.location,
                playerClass: characterClassData.name,
                playerContext: {
                    level: character.level,
                    choices: sanitizedChoices,
                    reputation: {
                        stealth: narrativeContext.reputationStealth,
                        combat: narrativeContext.reputationCombat,
                        diplomacy: narrativeContext.reputationDiplomacy,
                    },
                    questFlags: narrativeContext.questFlags,
                }
            });

            if (npcResult.quest && npcResult.questId) {
                updates[`questFlags.${npcResult.questId}`] = "started";
            }
            updates.lastNarration = `${npcResult.name} says: "${npcResult.dialogue}" ${npcResult.quest ? `\n\nNew Quest: ${npcResult.quest}`: ''}`;
            updates.triggerNextScenario = true; // Go to next story bit
            updateDocumentNonBlocking(narrativeContextRef, updates);
        } else {
             updates.triggerNextScenario = true; // Skip battle and go to next scenario
             updateDocumentNonBlocking(narrativeContextRef, updates);
        }

    } catch (e: any) {
        setError(e.message || "An unknown error occurred while processing your choice.");
        setGameState("loading");
    }
  };
  
  const isLoading = isContextLoading || isCharacterLoading;
  const currentScenario = narrativeContext?.currentScenario as NarrativeOutput | undefined;

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center text-center">
          <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
          <p className="text-xl text-muted-foreground">Loading your legend...</p>
        </div>
      );
    }

    if (error) {
        return (
          <Alert variant="destructive">
            <AlertTitle>AI Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        );
    }
    
    if (!narrativeContext || !character) {
      return (
        <div className="text-center">
          <p className="text-lg text-destructive">Could not find your character's story. It might be lost in the ether...</p>
          <Button asChild variant="secondary" className="mt-4">
            <Link href="/character-creation">Start a New Adventure</Link>
          </Button>
        </div>
      );
    }

    if (gameState === 'generating') {
         return (
          <div className="flex flex-col items-center justify-center text-center">
            <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
            <p className="text-xl text-muted-foreground">
              The story unfolds...
            </p>
          </div>
        );
    }

    if (currentScenario) {
      return (
        <div className="space-y-4">
          <p className="text-center text-lg leading-relaxed whitespace-pre-wrap mb-6">
            {currentScenario.scenarioText}
          </p>
          <Separator />
          <p className="text-center text-lg font-bold pt-4">What do you do next?</p>
          {currentScenario.choices.map((choice) => (
            <Button
              key={choice.id}
              onClick={() => handleChoice(choice)}
              className="w-full justify-start"
              variant="secondary"
              size="lg"
            >
              <span className="font-bold mr-4">{choice.id}</span> {choice.text}
            </Button>
          ))}
        </div>
      );
    }
    
    // Default Intro State (or if there's no current scenario)
    return (
      <div className="space-y-6 text-center">
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-headline text-lg text-accent flex items-center justify-center gap-2">
            <BookOpen /> Your Story Arc
          </h3>
          <p className="text-muted-foreground italic mt-2">
            &quot;{narrativeContext.storyArc}&quot;
          </p>
        </div>
        <p className="text-lg leading-relaxed whitespace-pre-wrap">
          {narrativeContext.lastNarration}
        </p>
        <Button onClick={handleStart} size="lg" disabled={gameState === 'generating'}>
          What do you do? <Forward className="ml-2 h-4 w-4" />
        </Button>
      </div>
    );
  };


  return (
    <Card className="max-w-3xl mx-auto shadow-lg shadow-primary/10">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-glow">
          The Adventure Begins
        </CardTitle>
        <CardDescription>
          {narrativeContext?.location || "A mysterious place..."}
        </CardDescription>
      </CardHeader>
      <CardContent>{renderContent()}</CardContent>
    </Card>
  );
}
