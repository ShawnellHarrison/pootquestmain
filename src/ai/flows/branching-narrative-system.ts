'use server';
/**
 * @fileOverview This file defines the Genkit flow for the BranchingNarrativeSystem story.
 *
 * - generateNextScenario - A function that generates the next game scenario based on player context.
 * - NarrativeInput - The input type for the generateNextScenario function.
 * - NarrativeOutput - The return type for the generateNextScenario function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const NarrativeInputSchema = z.object({
  playerClass: z.string().describe('The class of the player character.'),
  level: z.number().describe('The current level of the player.'),
  location: z.string().describe('The current location in the game.'),
  choices: z.array(z.object({
    id: z.number().describe('The ID of the choice made.'),
    text: z.string().describe('The text of the choice made.'),
    tags: z.array(z.string()).describe('Tags associated with the choice.'),
  })).describe('The choices the player has made so far.'),
  reputation: z.object({
    stealth: z.number().describe('The player reputation for stealth.'),
    combat: z.number().describe('The player reputation for combat.'),
    diplomacy: z.number().describe('The player reputation for diplomacy.'),
  }).describe('The player reputation.'),
  unlockedPaths: z.array(z.string()).describe('The paths unlocked by the player.'),
  questFlags: z.record(z.string(), z.any()).describe('The quest flags.'),
});
export type NarrativeInput = z.infer<typeof NarrativeInputSchema>;

const NarrativeOutputSchema = z.object({
  scenarioText: z.string().describe('The generated scenario text.'),
  choices: z.array(z.object({
    id: z.string().describe('The ID of the choice.'),
    text: z.string().describe('The text of the choice.'),
  })).describe('The choices available to the player.'),
});
export type NarrativeOutput = z.infer<typeof NarrativeOutputSchema>;

export async function generateNextScenario(input: NarrativeInput): Promise<NarrativeOutput> {
  return branchingNarrativeFlow(input);
}

const branchingNarrativePrompt = ai.definePrompt({
  name: 'branchingNarrativePrompt',
  input: {schema: NarrativeInputSchema},
  output: {schema: NarrativeOutputSchema},
  prompt: `You are a master storyteller, the AI Dungeon Master for Poot Quest. Your goal is to create a cohesive, engaging, and reactive narrative.

  The player, a level {{level}} {{playerClass}}, is in the {{location}}.

  **Player Context:**
  *   **Reputation:** Stealth: {{reputation.stealth}}, Combat: {{reputation.combat}}, Diplomacy: {{reputation.diplomacy}}
  *   **Past Choices:**
      {{#each choices}}
      - {{this.text}}
      {{/each}}
  *   **Known Quests:** {{questFlags}}
  *   **Unlocked Story Paths:** {{unlockedPaths}}

  **Your Task:**
  Generate the next scenario. The scenario MUST be influenced by the player's context.
  1.  **Reactive World:** If reputation is high in one area, reflect it. A high-combat character might be challenged, while a high-diplomacy one is met with negotiation.
  2.  **Cohesive Story:** Your scenario should logically follow their previous choices.
  3.  **Engaging Choices:** Provide 3 distinct choices (A, B, C). At least one choice should offer a clear path related to their highest reputation score or class. For example, a Rogue with high stealth should get a stealthy option.

  **Example Scenario (for a high-diplomacy Paladin):**
  A hulking goblin guard blocks your path, but upon seeing your emblem, he hesitates. "You... you are the one who parleyed with Chief Gassy," he grunts, lowering his axe slightly. "Your words carry weight. State your business, holy one."

  The output MUST conform to the schema. Make the scenario interesting and continue the story.
  `,
});

const branchingNarrativeFlow = ai.defineFlow(
  {
    name: 'branchingNarrativeFlow',
    inputSchema: NarrativeInputSchema,
    outputSchema: NarrativeOutputSchema,
  },
  async input => {
    const {output} = await branchingNarrativePrompt(input);
    return output!;
  }
);
