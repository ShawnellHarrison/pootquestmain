'use server';
/**
 * @fileOverview This file defines the Genkit flow for generating a new card from a Mystery Scroll.
 *
 * - generateCard - A function that creates a new, unique card based on player context.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateCardInputSchema = z.object({
    playerClass: z.string().describe('The class of the player character (e.g., "Sneaky Rogue").'),
    playerLevel: z.number().describe('The current level of the player.'),
    existingCards: z.array(z.string()).describe('A list of card names the player already owns to ensure variety.'),
});

export const GenerateCardOutputSchema = z.object({
    name: z.string().describe('The creative and thematic name of the new card. Should be unique.'),
    description: z.string().describe("A flavorful and clear description of what the card does."),
    manaCost: z.number().min(1).max(8).describe('The mana cost to play the card. Should be balanced with its effect.'),
    attack: z.number().min(0).describe('The attack power of the card. 0 if it does not attack.'),
    defense: z.number().min(0).describe('The defense value of the card. 0 if it does not grant defense.'),
    healing: z.number().min(0).describe('The healing value of the card. 0 if it does not heal.'),
});
export type GenerateCardOutput = z.infer<typeof GenerateCardOutputSchema>;


export async function generateCard(input: z.infer<typeof GenerateCardInputSchema>): Promise<GenerateCardOutput> {
    return generateCardFlow(input);
}


const generateCardPrompt = ai.definePrompt({
    name: 'generateCardPrompt',
    input: { schema: GenerateCardInputSchema },
    output: { schema: GenerateCardOutputSchema },
    prompt: `You are the AI Card Smith for Poot Quest, a master of creating balanced, thematic, and slightly absurd abilities.

    **Player Context:**
    - Class: {{playerClass}}
    - Level: {{playerLevel}}
    - Existing Cards: {{#each existingCards}}, {{this}}{{/each}}

    **Your Task:**
    Forge a brand new, unique card that is perfectly suited for the player's class. The card should feel like a powerful and exciting reward.

    **Card Generation Rules:**
    1.  **Thematic:** The card's name and function must fit the **{{playerClass}}**. A "Paladin of Purity" should not get a card named "Shadowstab."
    2.  **Balanced:** The card's power must be appropriate for a level **{{playerLevel}}** character. A low-level character should not receive a world-breaking ability. Balance the mana cost against the effect. More powerful effects require higher mana costs.
    3.  **Unique:** The card name must NOT be one of the following: {{#each existingCards}}"{{this}}", {{/each}}.
    4.  **Specific Effects:** The card should have a clear purpose. It can provide attack, defense, healing, or a combination, but it should be focused. Do not create cards with vague or overly complex effects. Define at least one non-zero value for attack, defense, or healing.

    **Example for "Sneaky Rogue":**
    {
      "name": "Ankle Shank",
      "description": "A quick, cheap shot that keeps the enemy off balance.",
      "manaCost": 1,
      "attack": 4,
      "defense": 0,
      "healing": 0
    }

    **Example for "Paladin of Purity":**
    {
      "name": "Shield of Flatulence",
      "description": "Erect a barrier of righteous gas, absorbing incoming damage.",
      "manaCost": 3,
      "attack": 0,
      "defense": 12,
      "healing": 0
    }

    Now, generate a new card for the **{{playerClass}}**.`
});


const generateCardFlow = ai.defineFlow(
    {
        name: 'generateCardFlow',
        inputSchema: GenerateCardInputSchema,
        outputSchema: GenerateCardOutputSchema,
    },
    async (input) => {
        const { output } = await generateCardPrompt(input);
        return output!;
    }
);
