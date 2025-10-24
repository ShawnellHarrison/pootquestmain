
'use client';

import { useState, useEffect } from 'react';
import { useFirebase, useDoc, useMemoFirebase } from '@/firebase';
import { doc, writeBatch } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { 
    generateNextScenario, 
    NarrativeOutput,
    NarrativeInput
} from '@/ai/flows/branching-narrative-system';
import { generateEncounter } from '@/ai/flows/generate-encounter-flow';
import { generateNpc, NpcOutput } from "@/ai/flows/ai-dungeon-master-npc";
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

    useEffect(() => {
        if (!character || !narrativeContext) {
            setGameState("loading");
            return;
        }

        if (narrativeContext.currentScenario) {
            setGameState("ready");
        } else if (narrativeContext.triggerNextScenario) {
            handleContinue();
        } else {
            setGameState("awaiting_continue");
        }
    }, [character, narrativeContext]);


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
            const batch = writeBatch(firestore);
            const updates = {
                currentScenario: result,
                triggerNextScenario: false,
                lastNarration: narrativeContext.lastNarration,
            };
            batch.update(narrativeContextRef!, updates);
            await batch.commit();
    
            setNarrativeContext(prev => prev ? ({ ...prev, ...updates }) : null);
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
        if (!firestore || !user || !characterClassData || !character || !narrativeContext || !narrativeContextRef) return;
        setGameState("generating");
    
        const choiceData = { id: choice.id, text: choice.text, tags: choice.tags, timestamp: new Date().toISOString() };
        
        let newNarrativeContext = { ...narrativeContext };
        
        newNarrativeContext.playerChoices = [...newNarrativeContext.playerChoices, choiceData];
        newNarrativeContext.currentScenario = null; // Clear the current scenario
    
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
                
                const batch = writeBatch(firestore);
                batch.update(narrativeContextRef, newNarrativeContext);
                await batch.commit();
    
                const encounterString = JSON.stringify(encounterResult);
                router.push(`/battle?characterId=${characterId}&encounter=${encodeURIComponent(encounterString)}`);
                return;
    
            } else if (choice.tags.includes("NPC_INTERACTION")) {
                
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
              newNarrativeContext.triggerNextScenario = true;
            }
            
            const batch = writeBatch(firestore);
            batch.update(narrativeContextRef, newNarrativeContext);
            await batch.commit();
    
            setNarrativeContext(newNarrativeContext);
    
        } catch (e: any) {
            setError(e.message || "An unknown error occurred while processing your choice.");
            setGameState("loading");
        }
      };

    const isLoading = isUserLoading || isNarrativeDocLoading;

    return { narrativeContext, gameState, error, handleContinue, handleChoice, isLoading };
}
