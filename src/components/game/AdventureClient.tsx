
"use client";

import { useEffect } from "react";
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

type GameState = "loading" | "generating" | "ready";
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

  const generateAndSaveNextScenario = async () => {
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

  const handleChoice = async (choice: Choice) => {
    if (!narrativeContextRef || !firestore || !user || !characterClassData || !character || !narrativeContext) return;
    setGameState("generating");

    const choiceData = { id: choice.id, text: choice.text, tags: choice.tags, timestamp: new Date().toISOString() };
    
    const batch = writeBatch(firestore);

    let updates: Record<string, any> = {
        playerChoices: arrayUnion(choiceData),
        currentScenario: null,
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
    
    batch.update(narrativeContextRef, updates);
    
    try {
        if (choice.tags.includes("QUEST_COMPLETE") && choice.questId) {
            const questUpdates: Record<string, any> = {};
            questUpdates[`questFlags.${choice.questId}`] = "completed";
            questUpdates['lastNarration'] = `Quest Complete: ${choice.questId}!`;
            questUpdates['triggerNextScenario'] = true;
            
            batch.update(narrativeContextRef, questUpdates);
            await batch.commit();

        } else if (choice.tags.includes("COMBAT")) {
            const activeQuestId = Object.keys(narrativeContext.questFlags || {}).find(
              (key) => (narrativeContext.questFlags || {})[key] === 'started'
            );

            const encounterResult = await generateEncounter({
                playerClass: characterClassData.name,
                playerLevel: character.level,
                location: narrativeContext.location,
                questId: activeQuestId,
            });

            batch.update(narrativeContextRef, { currentEncounter: encounterResult });
            await batch.commit();
            router.push('/battle');

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

            let npcUpdates: any = {};
            if (npcResult.quest && npcResult.questId) {
                npcUpdates[`questFlags.${npcResult.questId}`] = "started";
            }
            npcUpdates.lastNarration = `${npcResult.name} says: "${npcResult.dialogue}" ${npcResult.quest ? `\n\nNew Quest: ${npcResult.quest}`: ''}`;
            npcUpdates.triggerNextScenario = true;
            
            batch.update(narrativeContextRef, npcUpdates);
            await batch.commit();
        } else {
             batch.update(narrativeContextRef, { triggerNextScenario: true });
             await batch.commit();
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

    if (currentScenario) {
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
        <p className="text-lg leading-relaxed whitespace-pre-wrap font-serif">
          {narrativeContext.lastNarration}
        </p>
        <Button onClick={handleStart} size="lg" disabled={gameState === 'generating'}>
          Continue Your Adventure <Forward className="ml-2 h-4 w-4" />
        </Button>
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
