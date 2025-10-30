
"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, BookOpen, Forward, ChevronRight, Briefcase, Scroll, Shield, Swords, Ghost } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCharacter } from "@/hooks/useCharacter";
import { useNarrative } from "@/hooks/useNarrative";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DeckManagerSheet } from "./sheets/DeckManagerSheet";
import { InventorySheet } from "./sheets/InventorySheet";

interface AdventureClientProps {
  characterId: string;
  initialBattleState?: any;
}

export function AdventureClient({ characterId, initialBattleState }: AdventureClientProps) {
  const { character, characterClassData, isLoading: isCharacterLoading } = useCharacter(characterId);
  const { 
    narrativeContext, 
    gameState, 
    error, 
    handleContinue, 
    handleChoice,
    isLoading: isNarrativeLoading 
  } = useNarrative(characterId, character, characterClassData, initialBattleState);
  
  const isLoading = isCharacterLoading || isNarrativeLoading;
  const currentScenario = narrativeContext?.currentScenario;

  const renderContent = () => {
    if (isLoading && gameState === 'loading') {
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
          <div className="flex gap-4 justify-center">
            <Button onClick={handleContinue} size="lg" disabled={gameState === 'generating'}>
              Continue Your Adventure <Forward className="ml-2 h-4 w-4" />
            </Button>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="lg">
                        <Briefcase className="mr-2 h-4 w-4" /> Manage Deck
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-4xl overflow-y-auto">
                    <SheetHeader>
                        <SheetTitle className="font-headline text-3xl text-glow">Deck Manager</SheetTitle>
                    </SheetHeader>
                    <DeckManagerSheet characterId={characterId} />
                </SheetContent>
            </Sheet>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="lg">
                        <Scroll className="mr-2 h-4 w-4" /> Inspect Inventory
                    </Button>
                </SheetTrigger>
                 <SheetContent side="right" className="w-full sm:max-w-3xl overflow-y-auto">
                    <SheetHeader>
                        <SheetTitle className="font-headline text-3xl text-glow">Inventory</SheetTitle>
                    </SheetHeader>
                    <InventorySheet characterId={characterId} />
                </SheetContent>
            </Sheet>
          </div>
        </div>
      );
    }
    
    return (
      <div className="flex flex-col items-center justify-center text-center h-64">
        <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
        <p className="text-xl text-muted-foreground font-headline">Loading your legend...</p>
      </div>
    );
  };


  return (
    <Card className="max-w-3xl mx-auto shadow-lg shadow-primary/10 border-primary/20">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl text-glow">
          {characterClassData?.name || "The Adventure"}
        </CardTitle>
        <div className="flex justify-center items-center gap-6 text-muted-foreground">
            <span>{narrativeContext?.location || "A mysterious place..."}</span>
            <Separator orientation="vertical" className="h-4" />
             <div className="flex items-center gap-4">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger className="flex items-center gap-1">
                            <Ghost className="h-4 w-4 text-gray-400" /> {narrativeContext?.reputationStealth || 0}
                        </TooltipTrigger>
                        <TooltipContent><p>Stealth Reputation</p></TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger className="flex items-center gap-1">
                            <Swords className="h-4 w-4 text-red-400" /> {narrativeContext?.reputationCombat || 0}
                        </TooltipTrigger>
                        <TooltipContent><p>Combat Reputation</p></TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger className="flex items-center gap-1">
                            <Shield className="h-4 w-4 text-blue-400" /> {narrativeContext?.reputationDiplomacy || 0}
                        </TooltipTrigger>
                        <TooltipContent><p>Diplomacy Reputation</p></TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="p-4 sm:p-6">{renderContent()}</CardContent>
    </Card>
  );
}
