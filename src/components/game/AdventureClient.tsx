
"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  generateNextScenario,
  NarrativeOutput,
} from "@/ai/flows/branching-narrative-system";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, BookOpen, Forward, ChevronRight, HelpCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useFirebase } from "@/firebase";
import { doc, getDoc, writeBatch, increment } from "firebase/firestore";
import { CLASSES, CharacterClass } from "@/lib/game-data";
import { generateEncounter } from "@/ai/flows/generate-encounter-flow";
import { useRouter } from "next/navigation";
import { generateNpc, NpcOutput } from "@/ai/flows/ai-dungeon-master-npc";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Define local state types to avoid using 'any'
type NarrativeContextState = {
    characterId: string;
    location: string;
    storyArc: string;
    playerChoices: any[];
    reputationStealth: number;
    reputationCombat: number;
    reputationDiplomacy: number;
    unlockedPaths: string[];
    questFlags: Record<string, { status: string; currentStep: number }>;
    lastNarration: string | null;
    currentScenario: NarrativeOutput | null;
    triggerNextScenario: boolean;
};

type CharacterState = {
    class: string;
    level: number;
    experience: number;
    health: number;
    maxHealth: number;
    maxMana: number;
    attack: number;
    defense: number;
    speed: number;
};


interface AdventureClientProps {
  characterId: string;
  initialBattleState?: any;
}

type GameState = "loading" | "generating" | "ready" | "awaiting_continue";
type Choice = NarrativeOutput['choices'][0];

export function AdventureClient({ characterId, initialBattleState }: AdventureClientProps) {
  const { firestore, user } = useFirebase();
  const router = useRouter();

  // Local state for game data
  const [narrativeContext, setNarrativeContext] = useState<NarrativeContextState | null>(null);
  const [character, setCharacter] = useState<CharacterState | null>(null);
  
  const [gameState, setGameState] = useState<GameState>("loading");
  const [error, setError] = useState<string | null>(null);

  const characterClassData = useMemo(() => {
    if (!character) return null;
    return CLASSES.find(c => c.id === character.class) as CharacterClass | undefined;
  }, [character]);
  
  // Effect to fetch initial data once
  useEffect(() => {
    const fetchInitialData = async () => {
        if (!firestore || !user) return;
        setGameState("loading");
        try {
            const narrativeContextRef = doc(firestore, `users/${user.uid}/characters/${characterId}/narrativeContexts`, "main");
            const characterDocRef = doc(firestore, `users/${user.uid}/characters/${characterId}`);

            const [narrativeContextSnap, characterSnap] = await Promise.all([
                getDoc(narrativeContextRef),
                getDoc(characterDocRef),
            ]);

            if (narrativeContextSnap.exists() && characterSnap.exists()) {
                const narrativeData = narrativeContextSnap.data() as NarrativeContextState;
                const characterData = characterSnap.data() as CharacterState;

                if (initialBattleState) {
                    // Coming back from a battle
                    setNarrativeContext({
                        ...narrativeData,
                        currentEncounter: null,
                        triggerNextScenario: true,
                        lastNarration: `You are victorious! You found: ${initialBattleState.loot.name}.`
                    });
                    setCharacter({
                        ...characterData,
                        health: initialBattleState.playerHealth,
                        experience: characterData.experience + initialBattleState.xpGained,
                        // Handle level up
                    });
                } else {
                    setNarrativeContext(narrativeData);
                    setCharacter(characterData);
                }

            } else {
                setError("Could not find your character's story. It might be lost in the ether...");
            }
        } catch (e: any) {
            setError("Failed to load game data. " + e.message);
        } finally {
            // State will be determined by the next effect
        }
    };

    fetchInitialData();
  }, [firestore, user, characterId, initialBattleState]);

  // This effect determines the game state based on the locally managed data.
  useEffect(() => {
    if (!character || !narrativeContext) {
        setGameState("loading");
        return;
    }

    if (narrativeContext.currentScenario) {
        setGameState("ready"); // There's an active scenario with choices
    } else if (narrativeContext.triggerNextScenario) {
        // This flag is set by battle/NPC interactions to signal we should generate the next step.
        handleContinue();
    } else {
        setGameState("awaiting_continue"); // The game is paused, waiting for the user to proceed
    }
  }, [narrativeContext, character]);


  const handleContinue = async () => {
    if (!narrativeContext || !firestore || !user || !characterClassData || !character) return;
    
    try {
      setGameState("generating");

      const result = await generateNextScenario({
        playerClass: characterClassData.name,
        level: character.level,
        location: narrativeContext.location,
        choices: narrativeContext.playerChoices,
        reputation: {
          stealth: narrativeContext.reputationStealth,
          combat: narrativeContext.reputationCombat,
          diplomacy: narrativeContext.reputationDiplomacy,
        },
        unlockedPaths: narrativeContext.unlockedPaths,
        questFlags: narrativeContext.questFlags,
      });

      if (result) {
        setNarrativeContext(prev => prev ? ({
            ...prev,
            currentScenario: result,
            triggerNextScenario: false // Reset the trigger
        }) : null);
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
    if (!firestore || !user || !characterClassData || !character || !narrativeContext) return;
    setGameState("generating");

    const choiceData = { id: choice.id, text: choice.text, tags: choice.tags, timestamp: new Date().toISOString() };
    
    // Create a mutable copy of the current state to update
    let newNarrativeContext = { ...narrativeContext };
    
    newNarrativeContext.playerChoices = [...newNarrativeContext.playerChoices, choiceData];
    newNarrativeContext.currentScenario = null; // Clear the current scenario

    // Update reputation locally
    if (choice.tags.includes("STEALTH")) newNarrativeContext.reputationStealth += 5;
    if (choice.tags.includes("COMBAT")) newNarrativeContext.reputationCombat += 5;
    if (choice.tags.includes("DIPLOMACY")) newNarrativeContext.reputationDiplomacy += 5;
    
    try {
        if (choice.questProgress) {
            const { questId, nextStep } = choice.questProgress;
            if (newNarrativeContext.questFlags[questId]) {
                newNarrativeContext.questFlags[questId].currentStep = nextStep;
            }
            newNarrativeContext.lastNarration = `Quest updated: ${questId}.`;
        }

        if (choice.isQuestCompletion) {
            const questId = Object.keys(newNarrativeContext.questFlags).find(
              (key) => newNarrativeContext.questFlags[key]?.status === 'started'
            );
            if (questId && newNarrativeContext.questFlags[questId]) {
                newNarrativeContext.questFlags[questId].status = "completed";
                newNarrativeContext.lastNarration = `Quest Complete: ${questId}!`;
            }
        }

        // Handle different choice tags by updating local state
        if (choice.tags.includes("COMBAT")) {
            const activeQuestId = Object.keys(newNarrativeContext.questFlags).find(
              (key) => newNarrativeContext.questFlags[key]?.status === 'started'
            );

            const encounterResult = await generateEncounter({
                playerClass: characterClassData.name,
                playerLevel: character.level,
                location: newNarrativeContext.location,
                questId: activeQuestId,
                reputation: {
                    stealth: newNarrativeContext.reputationStealth,
                    combat: newNarrativeContext.reputationCombat,
                    diplomacy: newNarrativeContext.reputationDiplomacy,
                },
            });
            
            // Navigate to battle page with state in URL
            const encounterString = JSON.stringify(encounterResult);
            router.push(`/battle?characterId=${characterId}&encounter=${encodeURIComponent(encounterString)}`);
            return; // Exit early

        } else if (choice.tags.includes("NPC_INTERACTION")) {
            newNarrativeContext.triggerNextScenario = false; // NPC interaction pauses the flow
            
            const npcResult: NpcOutput = await generateNpc({
                location: newNarrativeContext.location,
                playerClass: characterClassData.name,
                playerContext: {
                    level: character.level,
                    choices: newNarrativeContext.playerChoices,
                    reputation: {
                        stealth: newNarrativeContext.reputationStealth,
                        combat: newNarrativeContext.reputationCombat,
                        diplomacy: newNarrativeContext.reputationDiplomacy,
                    },
                    questFlags: newNarrativeContext.questFlags,
                }
            });

            let npcNarration = `${npcResult.name} says: "${npcResult.dialogue}"`;
            
            if (npcResult.quest && npcResult.questId) {
                const repCheck = npcResult.reputationCheck;
                const canAccept = !repCheck || 
                    (repCheck.stat === 'stealth' && newNarrativeContext.reputationStealth >= repCheck.threshold) ||
                    (repCheck.stat === 'combat' && newNarrativeContext.reputationCombat >= repCheck.threshold) ||
                    (repCheck.stat === 'diplomacy' && newNarrativeContext.reputationDiplomacy >= repCheck.threshold);

                if (canAccept) {
                    newNarrativeContext.questFlags[npcResult.questId] = { status: "started", currentStep: 1 };
                    npcNarration += `\n\n**New Quest:** ${npcResult.quest}`;
                } else {
                    npcNarration += `\n\n*You feel you are not yet reputable enough to accept this task.*`;
                }
            }
            newNarrativeContext.lastNarration = npcNarration;
            newNarrativeContext.triggerNextScenario = true;

        } else {
          newNarrativeContext.triggerNextScenario = true; // For any other choice, continue the story.
        }
        
        // Update the main state object
        setNarrativeContext(newNarrativeContext);

    } catch (e: any) {
        setError(e.message || "An unknown error occurred while processing your choice.");
        setGameState("loading");
    }
  };
  
  const isLoading = gameState === 'loading' || !narrativeContext || !character;
  const currentScenario = narrativeContext?.currentScenario;

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
    if (gameState === "awaiting_continue" && narrativeContext) {
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
          {narrativeContext.lastNarration && (
            <p className="text-lg leading-relaxed whitespace-pre-wrap font-serif min-h-[6rem] p-4 bg-background/30 rounded-md">
              {narrativeContext.lastNarration}
            </p>
          )}
          <Button onClick={handleContinue} size="lg" disabled={gameState === 'generating'}>
            Continue Your Adventure <Forward className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    }
    
    // Fallback for any other state
    return (
      <div className="flex justify-center">
         <Button asChild><Link href="/character-creation">Start New Adventure</Link></Button>
      </div>
    );
  };


  return (
    <Card className="max-w-3xl mx-auto shadow-lg shadow-primary/10 border-primary/20">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl text-glow">
          {characterClassData?.name || "The Adventure"}
        </CardTitle>
        <div className="flex justify-center items-center gap-4 text-muted-foreground">
            <span>{narrativeContext?.location || "A mysterious place..."}</span>
            <Separator orientation="vertical" className="h-4" />
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger className="flex items-center gap-1">
                        <HelpCircle className="h-4 w-4" /> Reputations
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Stealth: {narrativeContext?.reputationStealth || 0}</p>
                        <p>Combat: {narrativeContext?.reputationCombat || 0}</p>
                        <p>Diplomacy: {narrativeContext?.reputationDiplomacy || 0}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="p-4 sm:p-6">{renderContent()}</CardContent>
    </Card>
  );
}
