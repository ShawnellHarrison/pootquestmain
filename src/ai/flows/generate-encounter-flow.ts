'use server';
/**
 * @fileOverview This file defines the Genkit flow for generating combat encounters.
 *
 * - generateEncounter - A function that creates enemies and loot.
 */

import { ai } from '@/ai/genkit';
import { EncounterInputSchema, EncounterOutputSchema, type EncounterOutput, type EncounterInput } from './flow-schemas';


export async function generateEncounter(input: EncounterInput): Promise<EncounterOutput> {
    return generateEncounterFlow(input);
}

const generateEncounterPrompt = ai.definePrompt({
    name: 'generateEncounterPrompt',
    input: { schema: EncounterInputSchema },
    output: { schema: EncounterOutputSchema },
    prompt: `You are the AI Dungeon Master for Poot Quest. Your task is to generate a challenging but fair combat encounter for the player.

  Player Information:
  - Class: {{playerClass}}
  - Level: {{playerLevel}}
  - Location: {{location}}

  Based on this information, generate an encounter with the following properties:
  1.  **Enemies**: Create a group of 1 to 3 enemies. The enemies should be thematically appropriate for the location. Their total difficulty should be a reasonable challenge for the player's level. Each enemy needs a unique ID.
  2.  **Loot**: Generate one piece of loot that the player will receive if they win. The loot should be useful and interesting for the specified player class.
  3.  **Intro Text**: Write a short, engaging introductory text (1-2 sentences) to set the scene for the battle.

  Example Output:
  {
    "enemies": [
      {
        "id": "sewer-goblin-1",
        "name": "Sewer Goblin",
        "hp": 15,
        "maxHp": 15,
        "imageUrl": "https://picsum.photos/seed/sewer-goblin/100/100",
        "attack": 3
      },
      {
        "id": "giant-rat-1",
        "name": "Giant Rat",
        "hp": 10,
        "maxHp": 10,
        "imageUrl": "https://picsum.photos/seed/giant-rat/100/100",
        "attack": 2
      }
    ],
    "loot": {
      "name": "Rusty Dagger",
      "description": "A simple but sharp dagger. Better than nothing.",
      "type": "weapon"
    },
    "introText": "From the murky depths of the sewer, a goblin and his pet rat emerge, eyes gleaming with malice!"
  }`,
});

const generateEncounterFlow = ai.defineFlow(
    {
        name: 'generateEncounterFlow',
        inputSchema: EncounterInputSchema,
        outputSchema: EncounterOutputSchema,
    },
    async (input) => {
        const { output } = await generateEncounterPrompt(input);
        return output!;
    }
);
