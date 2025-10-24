
'use server';
/**
 * @fileOverview This file defines the Genkit flow for the BranchingNarrativeSystem story.
 *
 * - generateNextScenario - A function that generates the next game scenario based on player context.
 * - NarrativeInput - The input type for the generateNextScenario function.
 * - NarrativeOutput - The return type for the generateNextScenario function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const NarrativeInputSchema = z.object({
  playerClass: z.string().describe('The class of the player character.'),
  level: z.number().describe('The current level of the player.'),
  location: z.string().describe('The current location in the game.'),
  choices: z.array(z.object({
    id: z.string().describe('The ID of the choice made.'),
    text: z.string().describe('The text of the choice made.'),
    tags: z.array(z.string()).describe('Tags associated with the choice (e.g., STEALTH, COMBAT, DIPLOMACY).'),
  })).describe('The choices the player has made so far.'),
  reputation: z.object({
    stealth: z.number().describe('The player reputation for stealth.'),
    combat: z.number().describe('The player reputation for combat.'),
    diplomacy: z.number().describe('The player reputation for diplomacy.'),
  }).describe('The player reputation.'),
  unlockedPaths: z.array(z.string()).describe('The paths unlocked by the player.'),
  questFlags: z.record(z.string(), z.object({
    status: z.string().describe('The status of the quest (e.g., "started", "completed").'),
    currentStep: z.number().describe('The current step the player is on for this quest.'),
  })).describe('A map of quest IDs to their state and progress.'),
});
export type NarrativeInput = z.infer<typeof NarrativeInputSchema>;

const NarrativeOutputSchema = z.object({
  scenarioText: z.string().describe('The generated scenario text.'),
  choices: z.array(z.object({
    id: z.string().describe('A unique ID for the choice (e.g., "A", "B", "C").'),
    text: z.string().describe('The text of the choice.'),
    tags: z.array(z.string()).describe('An array of tags classifying the choice (e.g., COMBAT, DIPLOMACY, STEALTH, NPC_INTERACTION).'),
    questProgress: z.object({
        questId: z.string().describe('The ID of the quest this choice progresses.'),
        nextStep: z.number().describe('The next step the quest will be set to.'),
    }).optional().describe('If this choice progresses a quest, this object contains the details.'),
    isQuestCompletion: z.boolean().optional().describe('Set to true if this choice completes the entire quest.'),
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
  prompt: `You are the Fartmaster, the master storyteller for Poot Quest. Your purpose is to weave a multi-step, branching tale where success and chaos are logical consequences of the player's actions.

  **The Fartmaster's Creed:**
  1.  **The World Remembers:** Every adventure must feel uniquely personal. NPCs remember actions and "scents" (reputation). The world you build must reflect the player's dominant reputation. If their Combat score is highest, the world is a violent, challenging place. If Stealth is highest, it's a world of secrets and shadows.
  2.  **Character is Fate:** Your narration must adapt the world based on the player's class, personality, and moral quirks.
  3.  **Multi-Step Quests:** Quests are your priority. A quest has a status ("started", "completed") and a "currentStep". The scenario you generate MUST be appropriate for the current step of any active quest.

  **Player Context Analysis:**
  -   **Class:** {{playerClass}} (Level {{level}})
  -   **Location:** {{location}}
  -   **Reputation:** Stealth: {{reputation.stealth}}, Combat: {{reputation.combat}}, Diplomacy: {{reputation.diplomacy}}
  -   **Past Choices:**
      {{#each choices}}
      - {{this.text}} ({{#each this.tags}}{{@key}}{{#if @last}}{{else}}, {{/if}}{{/each}})
      {{/each}}
  -   **Active Quests:** Your main priority is to generate a scenario for any quest with a "started" status in the questFlags object below. Pay close attention to the "currentStep".
      \`\`\`json
      {{{json questFlags}}}
      \`\`\`
  -   **Unlocked Story Paths:** {{unlockedPaths}}

  **Your Task:**
  Analyze all of the above context. Generate the next scenario and three distinct, compelling choices (A, B, C).
  1.  **Reactive Scenario:** Write a scenario that is a direct consequence of the character's journey. **If a quest is "started", the scenario MUST correspond to its "currentStep".** For example, if "rat_king_quest" is on step 1, the player might be finding the sewer entrance. If it's on step 2, they might be confronting the Rat King himself. If there are no active quests, generate a scenario for the current location that reflects the player's highest reputation score.
  2.  **Quest-Driven Choices:** The choices you offer must drive the story forward.
      -   **Quest Progression:** If a choice advances a quest to its next stage, it **MUST** include a \`questProgress\` object with the \`questId\` and the \`nextStep\`.
      -   **Quest Completion:** If a choice completes the final step of a quest, it **MUST** set \`isQuestCompletion\` to \`true\`. Do not use \`questProgress\` for the final step.
      -   **Character-Driven Options:** Offer choices that align with the character's class or highest reputation score. At least one choice should clearly map to their dominant reputation (e.g., a "COMBAT" choice for a fighter, a "STEALTH" choice for a rogue).
  3.  **Tag Your Choices:** Each choice must have at least one tag: \`STEALTH\`, \`COMBAT\`, \`DIPLOMACY\`, or \`NPC_INTERACTION\`.

  **Example Quest: "rat_king_quest"**
  -   **Step 1:** Player finds a clue about the Rat King's location. A choice to "Follow the tracks" should have \`questProgress: { questId: "rat_king_quest", nextStep: 2 }\`.
  -   **Step 2:** Player confronts the Rat King (a COMBAT encounter). The choice to "Attack the King!" would not have a questProgress field, but the COMBAT tag would trigger the fight. After the fight, the game logic will advance the story.
  -   **Step 3:** Player returns to the quest giver. The choice "Here is the Rat King's crown" should have \`isQuestCompletion: true\`.

  The output MUST conform to the schema. Make the story a living reflection of the player's soul.`,
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

    