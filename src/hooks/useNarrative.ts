
'use client';

import { useState, useEffect, useCallback } from 'react';
import { useFirebase, useDoc, useMemoFirebase } from '@/firebase';
import { doc, writeBatch } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { 
    generateNextScenario, 
    NarrativeOutput,
} from '@/ai/flows/branching-narrative-system';
import { generateNpc, NpcOutput } from "@/ai/flows/ai-dungeon-master-npc";
import { generateClassNarration } from '@/ai/flows/class-specific-ai-narration';
import type { CharacterState } from './useCharacter';
import type { CharacterClass } from '@/lib/game-data';

type GameState = "loading" | "generating" | "ready" | "awaiting_continue";
type Choice = NarrativeOutput['choices'][0];

export type NarrativeContextState = {
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


export function useNarrative(
    characterId: string, 
    character: CharacterState | null,
    characterClassData: CharacterClass | undefined | null,
    initialBattleState?: any
) {
    const { firestore, user, isUserLoading } = useFirebase();
    const router = useRouter();

    const [narrativeContext, setNarrativeContext] = useState<NarrativeContextState | null>(null);
    const [gameState, setGameState] = useState<GameState>("loading");
    const [error, setError] = useState<string | null>(null);

    const narrativeContextRef = useMemoFirebase(() => {
        if (!firestore || !user) return null;
        return doc(firestore, `users/${user.uid}/characters/${characterId}/narrativeContexts`, "main");
    }, [firestore, user, characterId]);

    const { data: narrativeContextData, isLoading: isNarrativeDocLoading } = useDoc(narrativeContextRef);

    // Effect to set initial narrative state from Firestore
    useEffect(() => {
        if (narrativeContextData) {
            const narrativeData = narrativeContextData as NarrativeContextState;
            if (initialBattleState && character) {
                // Coming back from a battle
                setNarrativeContext({
                    ...narrativeData,
                    currentEncounter: null,
                    triggerNextScenario: true,
                    lastNarration: `You are victorious! You found: ${initialBattleState.loot.name}.`
                });
            } else {
                setNarrativeContext(narrativeData);
            }
        }
    }, [narrativeContextData, initialBattleState, character]);


    const handleContinue = useCallback(async () => {
        if (!narrativeContext || !firestore || !user || !characterClassData || !character || !narrativeContextRef) return;
    
        try {
          setGameState("generating");

          // Check if this is the very first time (placeholder narration)
          if (narrativeContext.storyArc === "Your legend is about to be written...") {
            const narrationResult = await generateClassNarration({ playerClass: characterClassData.name });
            if (narrationResult) {
                const batch = writeBatch(firestore);
                const firstTimeUpdates = {
                    storyArc: narrationResult.storyArc,
                    lastNarration: narrationResult.openingNarration,
                    triggerNextScenario: false, // We have narration, don't trigger another generation
                };
                batch.update(narrativeContextRef, firstTimeUpdates);
                await batch.commit();
                
                // Update local state immediately to avoid race condition
                setNarrativeContext(prev => ({
                    ...prev!,
                    ...firstTimeUpdates
                }));

                setGameState("awaiting_continue"); // Go back to showing the new narration
                return; // Stop here, user will click continue again
            }
          }
    
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
            const batch = writeBatch(firestore);
            const updates = {
                currentScenario: result,
                triggerNextScenario: false,
            };
            batch.update(narrativeContextRef, updates);
            await batch.commit();
            // No need to setNarrativeContext, hook will update
            setGameState("ready");
          } else {
            throw new Error("The AI Dungeon Fartmaster is confused. No scenario received.");
          }
        } catch (e: any) {
          setError(e.message || "An unknown error occurred while generating the scenario.");
          setGameState("loading");
        }
      }, [narrativeContext, firestore, user, characterClassData, character, narrativeContextRef]);


    // This effect determines the overall game state based on the narrative context.
    useEffect(() => {
        if (isNarrativeDocLoading || !narrativeContext) {
            setGameState("loading");
            return;
        }

        if (narrativeContext.currentScenario) {
            setGameState("ready");
        } else if (narrativeContext.triggerNextScenario) {
            // Only trigger continue if we have character data to prevent race conditions
            if (character && characterClassData) {
                handleContinue();
            }
        } else {
            setGameState("awaiting_continue");
        }
    }, [narrativeContext, isNarrativeDocLoading, character, characterClassData, handleContinue]);
    
      const handleChoice = async (choice: Choice) => {
        if (!firestore || !user || !characterClassData || !character || !narrativeContext || !narrativeContextRef) return;
        
        setGameState("generating");

        try {
            const choiceData = { id: choice.id, text: choice.text, tags: choice.tags, timestamp: new Date().toISOString() };
            
            let newNarrativeContext = { ...narrativeContext };
            
            newNarrativeContext.playerChoices = [...newNarrativeContext.playerChoices, choiceData];
            newNarrativeContext.currentScenario = null; // Clear the current scenario
        
            if (choice.tags.includes("STEALTH")) newNarrativeContext.reputationStealth += 5;
            if (choice.tags.includes("COMBAT")) newNarrativeContext.reputationCombat += 5;
            if (choice.tags.includes("DIPLOMACY")) newNarrativeContext.reputationDiplomacy += 5;

            // This is the core logic that will be executed for all choices.
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
    
            if (choice.tags.includes("NPC_INTERACTION")) {
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
                    let canAccept = !repCheck;

                    if (repCheck) {
                        const currentRep = {
                            stealth: newNarrativeContext.reputationStealth,
                            combat: newNarrativeContext.reputationCombat,
                            diplomacy: newNarrativeContext.reputationDiplomacy,
                        };
                        if (currentRep[repCheck.stat] >= repCheck.threshold) {
                            canAccept = true;
                        }
                    }
    
                    if (canAccept) {
                        newNarrativeContext.questFlags[npcResult.questId] = { status: "started", currentStep: 1 };
                        npcNarration += `\n\n**New Quest:** ${npcResult.quest}`;
                    } else {
                        npcNarration += `\n\n*You feel you are not yet reputable enough for this task. (${repCheck?.stat} ${repCheck?.threshold} required)*`;
                    }
                }
                newNarrativeContext.lastNarration = npcNarration;
            }

            // Always set trigger for next scenario unless it is combat.
            newNarrativeContext.triggerNextScenario = !choice.tags.includes("COMBAT");
            
            const batch = writeBatch(firestore);
            // Save the updated context to Firestore.
            batch.update(narrativeContextRef, {
                playerChoices: newNarrativeContext.playerChoices,
                currentScenario: null,
                reputationStealth: newNarrativeContext.reputationStealth,
                reputationCombat: newNarrativeContext.reputationCombat,
                reputationDiplomacy: newNarrativeContext.reputationDiplomacy,
                questFlags: newNarrativeContext.questFlags,
                lastNarration: newNarrativeContext.lastNarration,
                triggerNextScenario: newNarrativeContext.triggerNextScenario,
            });
            await batch.commit();

            // NOW navigate if it's a combat choice.
            if (choice.tags.includes("COMBAT")) {
                router.push(`/battle?characterId=${characterId}&needsEncounter=true`);
            }
    
        } catch (e: any) {
            setError(e.message || "An unknown error occurred while processing your choice.");
            setGameState("loading");
        }
      };

    const isLoading = isUserLoading || isNarrativeDocLoading || !character || !narrativeContext;

    return { narrativeContext, gameState, error, handleContinue, handleChoice, isLoading };
}
