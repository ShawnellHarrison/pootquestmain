
"use client";

import { useState, useMemo } from "react";
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
import { Loader2, Swords, BookOpen, Forward } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useDoc, useFirebase, useMemoFirebase } from "@/firebase";
import { doc, arrayUnion } from "firebase/firestore";
import { updateDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { CLASSES } from "@/lib/game-data";

interface AdventureClientProps {
  characterId: string;
}

export function AdventureClient({ characterId }: AdventureClientProps) {
  const { firestore, user } = useFirebase();
  const [localGameState, setLocalGameState] = useState<"intro" | "choices" | "encounter" | "loading" | "generating_scenario">("loading");
  const [error, setError] = useState<string | null>(null);

  const narrativeContextRef = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return doc(firestore, `users/${user.uid}/characters/${characterId}/narrativeContexts`, "main");
  }, [firestore, user, characterId]);

  const { data: narrativeContext, isLoading: isContextLoading } = useDoc(narrativeContextRef);

  const characterDocRef = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return doc(firestore, `users/${user.uid}/characters/${characterId}`);
  }, [firestore, user, characterId]);

  const { data: character, isLoading: isCharacterLoading } = useDoc(characterDocRef);

  const characterClassData = useMemo(() => {
    if (!character) return null;
    return CLASSES.find(c => c.id === character.class);
  }, [character]);

  const handleStart = async () => {
    if (!narrativeContext || !firestore || !user || !characterClassData || !character) return;

    try {
      setLocalGameState("generating_scenario");
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

      if (result && narrativeContextRef) {
        updateDocumentNonBlocking(narrativeContextRef, { currentScenario: result });
        setLocalGameState("choices");
      } else {
        throw new Error("The AI Dungeon Fartmaster is confused. No scenario received.");
      }
    } catch (e: any) {
      setError(e.message || "An unknown error occurred while generating the scenario.");
      setLocalGameState("loading"); // a better state would be 'error'
    }
  };

  const handleChoice = (choice: { id: string; text: string }) => {
    if (!narrativeContextRef) return;
    
    updateDocumentNonBlocking(narrativeContextRef, {
        playerChoices: arrayUnion({ id: choice.id, text: choice.text, timestamp: new Date() }),
        currentScenario: null // Clear scenario to transition
    });

    // In a real game, you'd check choice tags to see what happens.
    // For now, any choice leads to a battle.
    setLocalGameState("encounter");
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

    if (localGameState === 'generating_scenario') {
         return (
          <div className="flex flex-col items-center justify-center text-center">
            <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
            <p className="text-xl text-muted-foreground">
              The story unfolds...
            </p>
          </div>
        );
    }

    if (currentScenario && localGameState !== 'encounter') {
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
    
    if (localGameState === 'encounter') {
        return (
          <div className="text-center space-y-4">
            <Separator className="my-4" />
            <p className="text-lg text-amber-400 italic">
              You burst through the tavern door into the alley. Three Sewer
              Goblins block your path, noses twitching. &apos;Fresh meat!&apos;
              they cackle. Roll for initiative!
            </p>
            <Button asChild size="lg">
              <Link href="/battle">
                <Swords className="mr-2 h-4 w-4" /> To Battle!
              </Link>
            </Button>
          </div>
        );
    }

    // Default Intro State
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
        <Button onClick={handleStart} size="lg" disabled={localGameState === 'generating_scenario'}>
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
