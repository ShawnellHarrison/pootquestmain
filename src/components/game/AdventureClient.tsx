"use client";

import { useState, useEffect } from "react";
import { generateClassNarration, ClassNarrationOutput } from "@/ai/flows/class-specific-ai-narration";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Swords, BookOpen, Forward } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface AdventureClientProps {
  playerClass: string;
}

type GameState = "loading" | "intro" | "choices" | "encounter" | "error";

export function AdventureClient({ playerClass }: AdventureClientProps) {
  const [gameState, setGameState] = useState<GameState>("loading");
  const [narration, setNarration] = useState<ClassNarrationOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getInitialNarration() {
      try {
        setGameState("loading");
        const result = await generateClassNarration({ playerClass });
        if (result) {
          setNarration(result);
          setGameState("intro");
        } else {
          throw new Error("The AI Dungeon Fartmaster is sleeping. No narration received.");
        }
      } catch (e: any) {
        setError(e.message || "An unknown error occurred while contacting the AI.");
        setGameState("error");
      }
    }
    getInitialNarration();
  }, [playerClass]);

  const handleStart = () => {
    // In a full implementation, this would trigger the next AI call
    // For now, it just changes the state
    setGameState("choices");
  };

  const handleChoice = (choice: string) => {
    // This would update game context and lead to the first encounter
    console.log(`Player chose: ${choice}`);
    setGameState("encounter");
  };

  if (gameState === "loading") {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
        <p className="text-xl text-muted-foreground">The AI Dungeon Fartmaster is brewing your fate...</p>
      </div>
    );
  }

  if (gameState === "error") {
    return (
      <Alert variant="destructive">
        <AlertTitle>AI Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <Card className="max-w-3xl mx-auto shadow-lg shadow-primary/10">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-glow">The Adventure Begins</CardTitle>
        <CardDescription>You find yourself in the Tavern of Broken Wind...</CardDescription>
      </CardHeader>
      <CardContent>
        {gameState === "intro" && narration && (
          <div className="space-y-6 text-center">
            <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-headline text-lg text-accent flex items-center justify-center gap-2"><BookOpen/> Your Story Arc</h3>
                <p className="text-muted-foreground italic mt-2">&quot;{narration.storyArc}&quot;</p>
            </div>
            <p className="text-lg leading-relaxed whitespace-pre-wrap">{narration.openingNarration}</p>
            <Button onClick={handleStart} size="lg">
              What do you do? <Forward className="ml-2 h-4 w-4"/>
            </Button>
          </div>
        )}
        
        {gameState === "choices" && (
            <div className="space-y-4">
                <p className="text-center text-lg font-bold">What do you do?</p>
                <Button onClick={() => handleChoice('A')} className="w-full justify-start" variant="secondary" size="lg">
                    <span className="font-bold mr-4">A</span> 🗡️ Accept the mission immediately
                </Button>
                <p className="text-sm text-muted-foreground pl-10">(Rogue: Skip tutorial, harder first fight)</p>
                <Button onClick={() => handleChoice('B')} className="w-full justify-start" variant="secondary" size="lg">
                    <span className="font-bold mr-4">B</span> 🍺 Gather information at the bar first
                </Button>
                <p className="text-sm text-muted-foreground pl-10">(Rogue: Gain intel, easier stealth options)</p>
                <Button onClick={() => handleChoice('C')} className="w-full justify-start" variant="secondary" size="lg">
                    <span className="font-bold mr-4">C</span> 🎲 Investigate on your own terms
                </Button>
                <p className="text-sm text-muted-foreground pl-10">(Rogue: Secret path unlocked, bonus loot)</p>
            </div>
        )}

        {gameState === "encounter" && (
          <div className="text-center space-y-4">
            <Separator className="my-4"/>
            <p className="text-lg text-amber-400 italic">You burst through the tavern door into the alley. Three Sewer Goblins block your path, noses twitching. &apos;Fresh meat!&apos; they cackle. Roll for initiative!</p>
            <Button asChild size="lg">
              <Link href="/battle">
                <Swords className="mr-2 h-4 w-4"/> To Battle!
              </Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
