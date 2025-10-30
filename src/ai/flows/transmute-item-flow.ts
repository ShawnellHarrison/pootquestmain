
'use server';
/**
 * @fileOverview This file defines the Genkit flow for generating a new card by transmuting a junk item.
 *
 * - transmuteItemToCard - A function that creates a new, unique card based on a junk item and player context.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const TransmuteItemInputSchema = z.object({
    playerClass: z.string().describe('The class of the player character (e.g., "Sneaky Rogue").'),
    playerLevel: z.number().describe('The current level of the player.'),
    existingCards: z.array(z.string()).describe('A list of card names the player already owns to ensure variety.'),
    itemName: z.string().describe('The name of the junk item being transmuted.'),
    itemDescription: z.string().describe('The description of the junk item being transmuted.'),
});

const TransmuteItemOutputSchema = z.object({
    name: z.string().describe('The creative and thematic name of the new card. Should be unique and inspired by the item.'),
    description: z.string().describe("A flavorful and clear description of what the card does."),
    manaCost: z.number().min(0).max(8).describe('The mana cost to play the card. Should be balanced with its effect.'),
    attack: z.number().min(0).describe('The attack power of the card. 0 if it does not attack.'),
    defense: z.number().min(0).describe('The defense value of the card. 0 if it does not grant defense.'),
    healing: z.number().min(0).describe('The healing value of the card. 0 if it does not heal.'),
});
export type TransmuteItemOutput = z.infer<typeof TransmuteItemOutputSchema>;


export async function transmuteItemToCard(input: z.infer<typeof TransmuteItemInputSchema>): Promise<TransmuteItemOutput> {
    return transmuteItemFlow(input);
}


const transmuteItemPrompt = ai.definePrompt({
    name: 'transmuteItemPrompt',
    input: { schema: TransmuteItemInputSchema },
    output: { schema: TransmuteItemOutputSchema },
    prompt: `You are the AI Alchemist for Poot Quest, a master of turning useless junk into powerful, thematic, and slightly absurd abilities.

    **Player Context:**
    - Class: {{playerClass}}
    - Level: {{playerLevel}}
    - Existing Cards: {{#each existingCards}}, {{this}}{{/each}}
    
    **Item to Transmute:**
    - Name: {{itemName}}
    - Description: {{itemDescription}}

    **Your Task:**
    Transmute the junk item into a brand new, unique card that is thematically inspired by the item and suited for the player's class.

    **Card Generation Rules:**
    1.  **Thematic Inspiration:** The card's name, description, and effect MUST be inspired by the junk item's name ('{{itemName}}') and description.
    2.  **Class Synergy:** The card must fit the playstyle of the **{{playerClass}}**. A "Paladin of Purity" should get a defensive or healing card, while a "Sneaky Rogue" should get an attack or utility card.
    3.  **Balanced:** The card's power must be appropriate for a level **{{playerLevel}}** character. Balance the mana cost against the effect.
    4.  **Unique Name:** The card name must NOT be one of the following: {{#each existingCards}}"{{this}}", {{/each}}.
    5.  **Specific Effects:** The card should have a clear purpose. Define at least one non-zero value for attack, defense, or healing.

    **Example Transmutation:**
    - Item Name: "A Goblin's Rusty Spoon"
    - Item Description: "A bent and tarnished spoon, probably used for eating something awful."
    - Player Class: "Sneaky Rogue"
    - Result:
    {
      "name": "Rusty Shank",
      "description": "Fashion a shiv from the spoon. A quick, cheap shot that can cause a nasty infection.",
      "manaCost": 1,
      "attack": 4,
      "defense": 0,
      "healing": 0
    }

    **Example Transmutation 2:**
    - Item Name: "A Skeletal Finger"
    - Item Description: "A surprisingly well-preserved finger bone. It seems to point accusingly."
    - Player Class: "Paladin of Purity"
    - Result:
    {
        "name": "Bone Shield",
        "description": "Raise the finger bone to create a surprisingly sturdy, if unsettling, barrier.",
        "manaCost": 2,
        "attack": 0,
        "defense": 8,
        "healing": 0
    }

    Now, transmute the junk item for the **{{playerClass}}**.`
});


const transmuteItemFlow = ai.defineFlow(
    {
        name: 'transmuteItemFlow',
        inputSchema: TransmuteItemInputSchema,
        outputSchema: TransmuteItemOutputSchema,
    },
    async (input) => {
        const { output } = await transmuteItemPrompt(input);
        return output!;
    }
);
