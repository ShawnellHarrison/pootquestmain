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
  prompt: `You are a dungeon master generating the next part of a text adventure game.

  The player is currently a level {{level}} {{playerClass}} in the {{location}}.

  Here's some information about the player:
  * Current Reputation: Stealth: {{reputation.stealth}}, Combat: {{reputation.combat}}, Diplomacy: {{reputation.diplomacy}}
  * Unlocked Paths: {{unlockedPaths}}
  * Quest Flags: {{questFlags}}
  * Previous Choices:
  {{#each choices}}
  - {{this.text}} (Tags: {{this.tags}})
  {{/each}}

  Generate the next scenario, offering the player 3 distinct choices. Each choice should have a unique ID, starting with A, and a clear text description of the action the player will take.

  The scenario and the choices should be affected by the player's class, reputation, and previous choices. For example, a player with high stealth might have a stealth-based option available. A paladin might be presented with more morally driven choices.

  Make it so that this scenario involves a decision regarding the Goblin Chief. The output MUST conform to the schema.

  Here's an example of the output format you should follow:
  {
    "scenarioText": "You enter the throne room. The Goblin Chief sees you and... lowers his weapon. \'You spared my scout. Why?\' His eyes gleam with cunning. This could go many ways...",
    "choices": [
      {
        "id": "A",
        "text": "I'm here to end this." 
      },
      {
        "id": "B",
        "text": "I seek the Golden Bean, not war."
      },
      {
        "id": "C",
        "text": "I work for someone bigger than both of us."
      }
    ]
  }
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
