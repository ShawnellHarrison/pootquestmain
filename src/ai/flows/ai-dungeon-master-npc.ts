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
  prompt: `You are the AI Dungeon Master for the Poor Quest game. Generate a non-player character (NPC) for the player to interact with.

  The NPC should be relevant to the player's current location: {{{location}}}.
  The player is playing as a {{{playerClass}}} and their current context is: {{{playerContext}}}.

  Consider the player's reputation (stealth, combat, diplomacy) when generating the NPC.  If the player has a high reputation in a certain area, the NPC should react accordingly.

  Return the NPC in the following JSON format:
  {
    "name": "The name of the NPC",
    "dialogue": "The dialogue the NPC speaks to the player.  Make it interesting and relevant to the player's situation.",
    "quest": "The quest the NPC offers to the player, if any. Omit if the NPC has no quest",
    "reward": "The reward for completing the quest, if any. Omit if the NPC has no quest"
  }`
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
