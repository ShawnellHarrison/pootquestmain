'use server';
/**
 * @fileOverview An AI agent for generating NPCs within the game dungeon.
 *
 * - generateNpc - A function that generates an NPC based on the player's context.
 * - NpcInput - The input type for the generateNpc function.
 * - NpcOutput - The return type for the generateNpc function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const NpcInputSchema = z.object({
  location: z.string().describe('The current location of the player in the dungeon.'),
  playerClass: z.string().describe('The class of the player character.'),
  playerContext: z.object({
    level: z.number().describe('The current level of the player.'),
    choices: z.array(z.object({
      id: z.number(),
      text: z.string(),
      tags: z.array(z.string())
    })).describe('The choices the player has made so far.'),
    reputation: z.object({
      stealth: z.number(),
      combat: z.number(),
      diplomacy: z.number()
    }).describe('The player reputation scores.'),
    questFlags: z.record(z.string()).describe('Flags indicating the status of various quests.')
  }).describe('The player context, including level, choices, reputation, and quest flags.')
});

export type NpcInput = z.infer<typeof NpcInputSchema>;

const NpcOutputSchema = z.object({
  name: z.string().describe('The name of the NPC.'),
  dialogue: z.string().describe('The dialogue the NPC speaks.'),
  quest: z.string().optional().describe('The quest the NPC offers, if any.'),
  reward: z.string().optional().describe('The reward for completing the quest, if any.')
});

export type NpcOutput = z.infer<typeof NpcOutputSchema>;

export async function generateNpc(input: NpcInput): Promise<NpcOutput> {
  return generateNpcFlow(input);
}

const generateNpcPrompt = ai.definePrompt({
  name: 'generateNpcPrompt',
  input: {schema: NpcInputSchema},
  output: {schema: NpcOutputSchema},
  prompt: `You are the AI Dungeon Master for Poot Quest. Generate a non-player character (NPC) for the player to interact with.

  **Player Context:**
  - Class: {{playerClass}}
  - Level: {{playerContext.level}}
  - Location: {{location}}
  - Reputation: Stealth: {{playerContext.reputation.stealth}}, Combat: {{playerContext.reputation.combat}}, Diplomacy: {{playerContext.reputation.diplomacy}}

  **Your Task:**
  Create an NPC that feels alive and reactive.
  1.  **Personality:** Give them a distinct personality appropriate for the {{location}}.
  2.  **Reactive Dialogue:** The NPC's dialogue MUST reflect the player's reputation. If combat reputation is high, they might be fearful or aggressive. If diplomacy is high, they might be open to talk.
  3.  **Quest Potential:** The NPC can optionally offer a simple quest that makes sense for the location and their character.

  **Example (for a player with high Combat reputation):**
  - Name: "Grizelda the Grim"
  - Dialogue: "Easy there, killer. I saw what you did to the sewer goblins. I want no trouble. State your business and be on your way."
  - Quest: "If you're so tough, maybe you can clear out the Rat King deeper in. There's a rusty key in it for you."

  Return the NPC in the specified JSON format.`
});

const generateNpcFlow = ai.defineFlow(
  {
    name: 'generateNpcFlow',
    inputSchema: NpcInputSchema,
    outputSchema: NpcOutputSchema,
  },
  async input => {
    const {output} = await generateNpcPrompt(input);
    return output!;
  }
);
