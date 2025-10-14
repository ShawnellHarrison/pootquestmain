
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
    prompt: `You are the AI Dungeon Master for Poot Quest. Your task is to generate a challenging but fair combat encounter that ADAPTS to the player's playstyle, reflected by their reputation scores.

  **Player Information:**
  - Class: {{playerClass}}
  - Level: {{playerLevel}}
  - Location: {{location}}
  - Active Quest: {{questId}}
  - Reputation: Stealth: {{reputation.stealth}}, Combat: {{reputation.combat}}, Diplomacy: {{reputation.diplomacy}}

  **Your Task:**
  Generate an encounter that feels like a direct response to the player's reputation.
  1.  **Adaptive Enemies**:
      -   If **Combat** is high, create enemies that are more strategic. Maybe they have a leader, use defensive abilities, or have higher health to withstand a brawl. Don't just throw more goblins at them; throw smarter goblins.
      -   If **Stealth** is high, design an encounter that challenges that skill. The enemies could be highly perceptive (e.g., "Sharp-Eared Guard"), use traps, or be positioned in a way that makes a stealthy approach difficult.
      -   If **Diplomacy** is high, the enemies might be a faction that is less likely to be reasoned with, forcing a fight where words won't work. Or perhaps their leader is arrogant and dismisses the player's attempts at talk.
      -   The enemies MUST be thematically appropriate for the location and quest. If it's a quest-related battle (e.g., 'rat_king_quest'), one enemy MUST be the main boss. Each enemy needs a unique ID.
  2.  **Loot**: Generate one piece of loot that is thematically tied to the encounter. A stealth-challenging encounter might drop boots of silence; a combat-heavy one might drop a sturdier shield.
  3.  **Intro Text**: Write a short, engaging introductory text (1-2 sentences) that hints at why this encounter is happening. It should reflect the adaptive nature of the challenge.

  **Example (High Combat Reputation):**
  {
    "introText": "The goblin grunts, pointing at you. 'That's the one! The brawler! Get the big shields, lads!' They form a defensive wall, ready for a long fight.",
    ...
  }
  
  **Example (High Stealth Reputation):**
  {
    "introText": "As you sneak forward, a tripwire you barely notice snaps taut. Bells jingle down the hall and heavily armored guards turn, their eyes already scanning the shadows you occupy.",
    ...
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
