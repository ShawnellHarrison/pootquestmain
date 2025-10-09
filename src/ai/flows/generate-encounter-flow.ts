'use server';
/**
 * @fileOverview This file defines the Genkit flow for generating combat encounters.
 *
 * - generateEncounter - A function that creates enemies and loot.
 * - EncounterInput - The input type for the generateEncounter function.
 * - EncounterOutput - The return type for the generateEncounter function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const EncounterInputSchema = z.object({
    playerClass: z.string().describe('The class of the player character.'),
    playerLevel: z.number().describe('The current level of the player.'),
    location: z.string().describe('The current location in the game.'),
});
export type EncounterInput = z.infer<typeof EncounterInputSchema>;

const EnemySchema = z.object({
    id: z.string().describe("A unique ID for this enemy instance, e.g., 'goblin-1'"),
    name: z.string().describe('The name of the enemy.'),
    hp: z.number().describe('The health points of the enemy.'),
    maxHp: z.number().describe('The maximum health points of the enemy.'),
    imageUrl: z.string().describe('A public URL for an image of the enemy. Use a placeholder from picsum.photos.'),
    attack: z.number().describe('The base attack power of the enemy.'),
});

const LootSchema = z.object({
    name: z.string().describe('The name of the loot item.'),
    description: z.string().describe('A description of the loot item.'),
    type: z.enum(["weapon", "armor", "potion", "scroll", "misc"]).describe('The type of the item.'),
});

export const EncounterOutputSchema = z.object({
    enemies: z.array(EnemySchema).describe('An array of enemies for the player to fight.'),
    loot: LootSchema.describe('The loot awarded for winning the encounter.'),
    introText: z.string().describe('A short, flavorful introductory text for the encounter.'),
});
export type EncounterOutput = z.infer<typeof EncounterOutputSchema>;


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
