
"use client";

import React, { useEffect, useMemo } from "react";
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
import { Loader2, BookOpen, Forward, ChevronRight } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useDoc, useFirebase, useMemoFirebase } from "@/firebase";
import { doc, arrayUnion, writeBatch, increment } from "firebase/firestore";
import { updateDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { CLASSES } from "@/lib/game-data";
import { generateEncounter } from "@/ai/flows/generate-encounter-flow";
import { useRouter } from "next/navigation";
import { generateNpc } from "@/ai/flows/ai-dungeon-master-npc";

interface AdventureClientProps {
  characterId: string;
}

type GameState = "loading" | "generating" | "ready" | "awaiting_continue";
type Choice = NarrativeOutput['choices'][0];

export function AdventureClient({ characterId }: AdventureClientProps) {
  const { firestore, user } = useFirebase();
  const router = useRouter();
  const [gameState, setGameState] = React.useState<GameState>("loading");
  const [error, setError] = React.useState<string | null>(null);

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

  const characterClassData = React.useMemo(() => {
    if (!character) return null;
    return CLASSES.find(c => c.id === character.class);
  }, [character]);
  
  // This effect determines the initial state of the game when the component loads or data changes.
  useEffect(() => {
    if (isContextLoading || isCharacterLoading) {
        setGameState("loading");
        return;
    }

    if (narrativeContext) {
        if (narrativeContext.currentScenario) {
            setGameState("ready"); // There's an active scenario with choices
        } else if (narrativeContext.triggerNextScenario) {
             // This flag is set by battle/NPC interactions to signal we should generate the next step.
            handleContinue();
        }
        else {
            setGameState("awaiting_continue"); // The game is paused, waiting for the user to proceed
        }
    }
  }, [narrativeContext, isContextLoading, isCharacterLoading]);


  const handleContinue = async () => {
    if (!narrativeContext || !firestore || !user || !characterClassData || !character || !narrativeContextRef) return;
    
    try {
      setGameState("generating");

      const sanitizedChoices = (narrativeContext.playerChoices || []).map((choice: any) => ({
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
          stealth: narrativeContext.reputationStealth || 0,
          combat: narrativeContext.reputationCombat || 0,
          diplomacy: narrativeContext.reputationDiplomacy || 0,
        },
        unlockedPaths: narrativeContext.unlockedPaths || [],
        questFlags: narrativeContext.questFlags || {},
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

  const handleChoice = async (choice: Choice) => {
    if (!narrativeContextRef || !firestore || !user || !characterClassData || !character || !narrativeContext) return;
    setGameState("generating");

    const choiceData = { id: choice.id, text: choice.text, tags: choice.tags, timestamp: new Date().toISOString() };
    
    const batch = writeBatch(firestore);

    let updates: Record<string, any> = {
        playerChoices: arrayUnion(choiceData),
        currentScenario: null, // Clear the current scenario after a choice is made
        triggerNextScenario: true, // Signal that the next step should be generated
    };

    if (choice.tags.includes("STEALTH")) {
        updates['reputationStealth'] = increment(1);
    }
    if (choice.tags.includes("COMBAT")) {
        updates['reputationCombat'] = increment(1);
    }
    if (choice.tags.includes("DIPLOMACY")) {
        updates['reputationDiplomacy'] = increment(1);
    }
    
    try {
        if (choice.questProgress) {
            const { questId, nextStep } = choice.questProgress;
            updates[`questFlags.${questId}.currentStep`] = nextStep;
            updates['lastNarration'] = `Quest updated: ${questId}.`;
        }

        if (choice.isQuestCompletion) {
            const questId = choice.questProgress?.questId; // Assuming the ID would still be here
            if (questId) {
                updates[`questFlags.${questId}.status`] = "completed";
                updates['lastNarration'] = `Quest Complete: ${questId}!`;
            }
        }

        if (choice.tags.includes("COMBAT")) {
            updates.triggerNextScenario = false; // The battle screen will handle the redirect and trigger
            const activeQuestId = Object.keys(narrativeContext.questFlags || {}).find(
              (key) => (narrativeContext.questFlags || {})[key]?.status === 'started'
            );

            const encounterResult = await generateEncounter({
                playerClass: characterClassData.name,
                playerLevel: character.level,
                location: narrativeContext.location,
                questId: activeQuestId,
            });

            batch.update(narrativeContextRef, { ...updates, currentEncounter: encounterResult });
            await batch.commit();
            router.push('/battle');
            return; // Exit early to prevent further processing

        } else if (choice.tags.includes("NPC_INTERACTION")) {
            const sanitizedChoices = (narrativeContext.playerChoices || []).map((c: any) => ({
              id: c.id, text: c.text, tags: c.tags
            }));

            const npcResult = await generateNpc({
                location: narrativeContext.location,
                playerClass: characterClassData.name,
                playerContext: {
                    level: character.level,
                    choices: sanitizedChoices,
                    reputation: {
                        stealth: narrativeContext.reputationStealth || 0,
                        combat: narrativeContext.reputationCombat || 0,
                        diplomacy: narrativeContext.reputationDiplomacy || 0,
                    },
                    questFlags: narrativeContext.questFlags || {},
                }
            });

            if (npcResult.quest && npcResult.questId) {
                updates[`questFlags.${npcResult.questId}`] = { status: "started", currentStep: 1 };
            }
            updates.lastNarration = `${npcResult.name} says: "${npcResult.dialogue}" ${npcResult.quest ? `\n\nNew Quest: ${npcResult.quest}`: ''}`;
        }
        
        batch.update(narrativeContextRef, updates);
        await batch.commit();

    } catch (e: any) {
        setError(e.message || "An unknown error occurred while processing your choice.");
        setGameState("loading");
    }
  };
  
  const isLoading = gameState === 'loading' || isContextLoading || isCharacterLoading;
  const currentScenario = narrativeContext?.currentScenario as NarrativeOutput | undefined;

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center text-center h-64">
          <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
          <p className="text-xl text-muted-foreground font-headline">Loading your legend...</p>
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
          <div className="flex flex-col items-center justify-center text-center h-64">
            <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
            <p className="text-xl text-muted-foreground font-headline">
              The Fartmaster is weaving your fate...
            </p>
          </div>
        );
    }
    
    // State: A scenario is active, waiting for player choice
    if (gameState === "ready" && currentScenario) {
      return (
        <div className="space-y-8">
          <div className="text-lg leading-relaxed whitespace-pre-wrap p-6 bg-background/50 rounded-lg border border-border/50 font-serif italic">
            {currentScenario.scenarioText}
          </div>
          <div className="space-y-4">
            <h3 className="text-center font-headline text-2xl text-glow">What do you do?</h3>
            {currentScenario.choices.map((choice) => (
              <Button
                key={choice.id}
                onClick={() => handleChoice(choice)}
                className="w-full justify-between h-auto py-3 px-4 text-left"
                variant="outline"
                size="lg"
              >
                <span className="font-bold mr-4">{choice.id}.</span> 
                <span className="flex-1 whitespace-normal">{choice.text}</span>
                <ChevronRight className="h-5 w-5 ml-4" />
              </Button>
            ))}
          </div>
        </div>
      );
    }
    
    // State: Game is paused, waiting for player to continue
    if (gameState === "awaiting_continue") {
      return (
        <div className="space-y-6 text-center">
          <div className="p-4 bg-muted rounded-lg border border-border">
            <h3 className="font-headline text-lg text-accent flex items-center justify-center gap-2">
              <BookOpen /> Your Story Arc
            </h3>
            <p className="text-muted-foreground italic mt-2">
              &quot;{narrativeContext.storyArc}&quot;
            </p>
          </div>
          <p className="text-lg leading-relaxed whitespace-pre-wrap font-serif min-h-24">
            {narrativeContext.lastNarration}
          </p>
          <Button onClick={handleContinue} size="lg" disabled={gameState === 'generating'}>
            Continue Your Adventure <Forward className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    }
    
    // Fallback for any other state
    return (
      <div className="flex justify-center">
         <Button onClick={handleContinue} size="lg">Start Adventure</Button>
      </div>
    );
  };


  return (
    <Card className="max-w-3xl mx-auto shadow-lg shadow-primary/10 border-primary/20">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl text-glow">
          {characterClassData?.name || "The Adventure"}
        </CardTitle>
        <CardDescription>
          {narrativeContext?.location || "A mysterious place..."}
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="p-4 sm:p-6">{renderContent()}</CardContent>
    </Card>
  );
}
