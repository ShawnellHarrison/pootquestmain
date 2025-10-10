
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
    prompt: `You are the AI Dungeon Master for Poot Quest. Your task is to generate a challenging but fair combat encounter for the player. The encounter should be creative and thematically linked to the player's context.

  **Player Information:**
  - Class: {{playerClass}}
  - Level: {{playerLevel}}
  - Location: {{location}}
  - Active Quest: {{questId}}

  **Your Task:**
  Based on this information, generate an encounter with the following properties:
  1.  **Enemies**: Create a group of 1 to 3 enemies. The enemies MUST be thematically appropriate for the location and the current quest. Be creative! A 'sewer' could have a 'Gelatinous Cube of Forgotten Leftovers', not just a goblin. If it's a quest-related battle (e.g., 'rat_king_quest'), one enemy MUST be the main boss (e.g., 'The Rat King'). Each enemy needs a unique ID.
  2.  **Loot**: Generate one piece of loot that the player will receive if they win. The loot should be useful, interesting, and thematically tied to the enemies or location.
  3.  **Intro Text**: Write a short, engaging introductory text (1-2 sentences) to set the scene for the battle.

  **Example for a 'rat_king_quest' in a 'sewer':**
  {
    "enemies": [
      {
        "id": "rat-king-boss",
        "name": "The Rat King",
        "hp": 40,
        "maxHp": 40,
        "imageUrl": "https://picsum.photos/seed/rat-king/150/150",
        "attack": 8
      },
      {
        "id": "rabid-rat-1",
        "name": "Rabid Rat",
        "hp": 10,
        "maxHp": 10,
        "imageUrl": "https://picsum.photos/seed/rabid-rat/100/100",
        "attack": 3
      }
    ],
    "loot": {
      "name": "Crown of the Rat King",
      "description": "A filthy, yet oddly majestic crown. Grants +1 to Diplomacy with rodents.",
      "type": "misc"
    },
    "introText": "A monstrous amalgamation of rats, bound by a single will, rises from the filth. The Rat King screeches, its legion of eyes fixed on you!"
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
