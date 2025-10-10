
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
  questFlags: z.record(z.string(), z.any()).describe('The quest flags, a map of quest IDs to their state (e.g., "started", "completed").'),
});
export type NarrativeInput = z.infer<typeof NarrativeInputSchema>;

const NarrativeOutputSchema = z.object({
  scenarioText: z.string().describe('The generated scenario text.'),
  choices: z.array(z.object({
    id: z.string().describe('A unique ID for the choice (e.g., "A", "B", "C").'),
    text: z.string().describe('The text of the choice.'),
    tags: z.array(z.string()).describe('An array of tags classifying the choice (e.g., COMBAT, DIPLOMACY, STEALTH, NPC_INTERACTION).'),
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
  prompt: `You are the Fartmaster, the master storyteller for Poot Quest. Your purpose is to weave a branching tale where success and chaos are both logical consequences of who the player is—not random dice rolls, but fate filtered through the essence of their own gaseous soul.

  **The Fartmaster's Creed:**
  1.  **The World Remembers:** Every adventure must feel uniquely personal. NPCs must remember the character's actions and "scents" (reputation). Environments should respond to their personality. A character known for destructive rage might find already-shattered doorways, while a sneaky character finds paths others have missed.
  2.  **Character is Fate:** Your narration must adapt and mutate the world based on the player's class, personality, and moral quirks. A Sneaky Rogue who slinks past danger might find their cowardice has consequences later. A Barbarian of Beans might destroy an obstacle with brute flatulence, permanently altering the map.
  3.  **Ripple Effects:** Each decision, from the smell of courage to the aroma of betrayal, must ripple through the world. A compassionate act could lead to an unlikely ally. Greed could lead to cursed treasure. Overconfidence might cause a spell to literally backfire.

  **Player Context Analysis:**
  -   **Class:** {{playerClass}} (Level {{level}})
  -   **Location:** {{location}}
  -   **Reputation:** Stealth: {{reputation.stealth}}, Combat: {{reputation.combat}}, Diplomacy: {{reputation.diplomacy}}
  -   **Past Choices & Actions:**
      {{#each choices}}
      - {{this.text}} ({{#each this.tags}}{{@key}}{{#if @last}}{{else}}, {{/if}}{{/each}})
      {{/each}}
  -   **Active Quests:** {{#each questFlags}} {{this}} {{/each}}
  -   **Unlocked Story Paths:** {{unlockedPaths}}

  **Your Task:**
  Analyze all of the above context. Generate the next scenario and three distinct, compelling choices (A, B, C).
  1.  **Reactive Scenario:** Write a scenario that is a direct consequence of the character's being. If they are on a quest, the scenario should be related to that quest. If they are a high-combat barbarian, maybe they're ambushed by someone wanting to test their strength. If they are a high-diplomacy paladin who just negotiated peace, perhaps they are greeted as a hero.
  2.  **Character-Driven Choices:** The choices you offer must reflect the character's core attributes. There should be at least one choice that aligns perfectly with their class or highest reputation score (e.g., a stealthy option for a Rogue, a diplomatic one for a Paladin). **Also, include a choice with the 'NPC_INTERACTION' tag occasionally to allow the player to meet new characters.**
  3.  **Tag Your Choices:** Each choice must have at least one tag: \`STEALTH\`, \`COMBAT\`, \`DIPLOMACY\`, or \`NPC_INTERACTION\`. You can add more descriptive tags if needed. A choice can have multiple tags, like \`['COMBAT', 'GREED']\`.

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
