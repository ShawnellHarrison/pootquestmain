
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
    prompt: `You are the AI Dungeon Master for Poot Quest. Your task is to generate a challenging but fair combat encounter. Sometimes, you should make one of the enemies an "Elite" with a special modifier to make the fight more interesting.

  **Player Information:**
  - Class: {{playerClass}}
  - Level: {{playerLevel}}
  - Location: {{location}}
  - Active Quest: {{questId}}
  - Reputation: Stealth: {{reputation.stealth}}, Combat: {{reputation.combat}}, Diplomacy: {{reputation.diplomacy}}

  **Your Task:**
  1.  **Generate Enemies**: Create 1 to 3 enemies appropriate for the player's level and location. If it's a quest-related battle (e.g., 'rat_king_quest'), one enemy MUST be the main boss. Each enemy needs a unique ID.
  2.  **Add Elite Modifiers (Occasionally)**: For one enemy in the encounter, add a 'modifier' object to make it an Elite. Do not add modifiers to every enemy. Elites should be rare.
      -   **"Retaliator"**: Deals damage back when attacked. (e.g., \`"modifier": {"type": "Retaliator", "value": 3}\`)
      -   **"Regenerator"**: Heals itself at the start of its turn. (e.g., \`"modifier": {"type": "Regenerator", "value": 5}\`)
      -   **"Commander"**: Boosts the attack of its allies. (e.g., \`"modifier": {"type": "Commander", "value": 2}\`)
      -   **"Shielded"**: Starts the battle with temporary defense points. (e.g., \`"modifier": {"type": "Shielded", "value": 10}\`)
  3.  **Loot**: The loot awarded MUST be a "Mystery Scroll". Set the loot name to "Mystery Scroll", type to "scroll", and give it a mysterious description.
  4.  **Intro Text**: Write a short, engaging introductory text (1-2 sentences) that hints at the challenge. If there's an Elite, hint at its special nature.

  **Example (Elite with Retaliator):**
  {
    "introText": "A massive goblin, covered in sharp spikes, points at you. 'You hit me, you get the hurt!'",
    "enemies": [
      { "id": "goblin-brute-1", "name": "Spiky Goblin", "hp": 40, "maxHp": 40, "imageUrl": "https://picsum.photos/seed/goblin1/200/200", "attack": 8, "modifier": {"type": "Retaliator", "value": 3} },
      { "id": "goblin-grunt-2", "name": "Goblin Grunt", "hp": 20, "maxHp": 20, "imageUrl": "https://picsum.photos/seed/goblin2/200/200", "attack": 5 }
    ],
    "loot": { "name": "Mystery Scroll", "description": "A dusty scroll radiating a faint magical aura. What secrets does it hold?", "type": "scroll" }
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
