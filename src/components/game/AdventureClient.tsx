"use client";

import { useState, useEffect } from "react";
import {
  generateClassNarration,
  ClassNarrationOutput,
} from "@/ai/flows/class-specific-ai-narration";
import {
  generateNextScenario,
  NarrativeInput,
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

interface AdventureClientProps {
  playerClass: string;
}

type GameState =
  | "loading"
  | "intro"
  | "generating_scenario"
  | "choices"
  | "encounter"
  | "error";

// Represents the full game context that evolves over time
interface GameContext extends NarrativeInput {}

export function AdventureClient({ playerClass }: AdventureClientProps) {
  const [gameState, setGameState] = useState<GameState>("loading");
  const [narration, setNarration] = useState<ClassNarrationOutput | null>(null);
  const [scenario, setScenario] = useState<NarrativeOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [gameContext, setGameContext] = useState<GameContext>({
    playerClass: playerClass,
    level: 1,
    location: "Tavern of Broken Wind",
    choices: [],
    reputation: {
      stealth: 10,
      combat: 10,
      diplomacy: 10,
    },
    unlockedPaths: [],
    questFlags: {},
  });

  useEffect(() => {
    async function getInitialNarration() {
      try {
        setGameState("loading");
        const result = await generateClassNarration({ playerClass });
        if (result) {
          setNarration(result);
          setGameState("intro");
        } else {
          throw new Error(
            "The AI Dungeon Fartmaster is sleeping. No narration received."
          );
        }
      } catch (e: any) {
        setError(e.message || "An unknown error occurred while contacting the AI.");
        setGameState("error");
      }
    }
    getInitialNarration();
  }, [playerClass]);

  const handleStart = async () => {
    try {
      setGameState("generating_scenario");
      const result = await generateNextScenario(gameContext);
      if (result) {
        setScenario(result);
        setGameState("choices");
      } else {
        throw new Error("The AI Dungeon Fartmaster is confused. No scenario received.");
      }
    } catch (e: any) {
      setError(
        e.message || "An unknown error occurred while generating the scenario."
      );
      setGameState("error");
    }
  };

  const handleChoice = (choice: { id: string; text: string }) => {
    // This would update game context and lead to the first encounter
    console.log(`Player chose: ${choice.text}`);
    // In a real game, you would update gameContext here based on the choice
    // e.g., setGameContext(prev => ({ ...prev, choices: [...prev.choices, { id: choice.id, text: choice.text, tags: [] }] }));
    setGameState("encounter");
  };

  const renderContent = () => {
    switch (gameState) {
      case "loading":
        return (
          <div className="flex flex-col items-center justify-center text-center">
            <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
            <p className="text-xl text-muted-foreground">
              The AI Dungeon Fartmaster is brewing your fate...
            </p>
          </div>
        );
      case "error":
        return (
          <Alert variant="destructive">
            <AlertTitle>AI Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        );
      case "intro":
        return (
          narration && (
            <div className="space-y-6 text-center">
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-headline text-lg text-accent flex items-center justify-center gap-2">
                  <BookOpen /> Your Story Arc
                </h3>
                <p className="text-muted-foreground italic mt-2">
                  &quot;{narration.storyArc}&quot;
                </p>
              </div>
              <p className="text-lg leading-relaxed whitespace-pre-wrap">
                {narration.openingNarration}
              </p>
              <Button onClick={handleStart} size="lg">
                What do you do? <Forward className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )
        );
      case "generating_scenario":
        return (
          <div className="flex flex-col items-center justify-center text-center">
            <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
            <p className="text-xl text-muted-foreground">
              The story unfolds...
            </p>
          </div>
        );
      case "choices":
        return (
          scenario && (
            <div className="space-y-4">
              <p className="text-center text-lg leading-relaxed whitespace-pre-wrap mb-6">
                {scenario.scenarioText}
              </p>
              <Separator />
              <p className="text-center text-lg font-bold pt-4">What do you do next?</p>
              {scenario.choices.map((choice) => (
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
          )
        );
      case "encounter":
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
      default:
        return null;
    }
  };


  return (
    <Card className="max-w-3xl mx-auto shadow-lg shadow-primary/10">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-glow">
          The Adventure Begins
        </CardTitle>
        <CardDescription>
          You find yourself in the Tavern of Broken Wind...
        </CardDescription>
      </CardHeader>
      <CardContent>{renderContent()}</CardContent>
    </Card>
  );
}
