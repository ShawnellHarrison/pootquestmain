
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
      id: z.string(),
      text: z.string(),
      tags: z.array(z.string())
    })).describe('The choices the player has made so far.'),
    reputation: z.object({
      stealth: z.number(),
      combat: z.number(),
      diplomacy: z.number()
    }).describe('The player reputation scores.'),
    questFlags: z.record(z.string(), z.object({
        status: z.string(),
        currentStep: z.number(),
    })).describe('Flags indicating the status of various quests.')
  }).describe('The player context, including level, choices, reputation, and quest flags.')
});

export type NpcInput = z.infer<typeof NpcInputSchema>;

const NpcOutputSchema = z.object({
  name: z.string().describe('The name of the NPC.'),
  dialogue: z.string().describe('The dialogue the NPC speaks.'),
  quest: z.string().optional().describe('A simple, actionable quest the NPC offers (e.g., "Clear out the Rat King in the cellar").'),
  questId: z.string().optional().describe('A simple, machine-readable ID for the quest (e.g., "rat_king_quest").'),
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
  prompt: `You are the AI Dungeon Master for Poot Quest. Your job is to create a living, breathing NPC that feels like a real part of the world.

  **Player Context:**
  - Class: {{playerClass}}
  - Level: {{playerContext.level}}
  - Location: {{location}}
  - Reputation: Stealth: {{playerContext.reputation.stealth}}, Combat: {{playerContext.reputation.combat}}, Diplomacy: {{playerContext.reputation.diplomacy}}
  - Known for: {{#each playerContext.choices}}- {{this.text}} {{/each}}
  - Active Quests: {{#each playerContext.questFlags}} {{this}} {{/each}}

  **Your Task:**
  Create an NPC that is a direct reflection of the world and the player's journey.
  1.  **Personality:** Give them a distinct personality that fits the {{location}}.
  2.  **Reactive Dialogue:** The NPC's dialogue **must** reflect the player's reputation and past actions. They should not be generic. If combat reputation is high, they might be fearful, aggressive, or admiring. If diplomacy is high, they might be trusting or manipulative. They might even mention a specific past deed.
  3.  **Quest Generation:** The NPC should offer a simple, actionable quest that makes sense for the location, their personality, and the player's class. The quest MUST have a simple, snake_case 'questId'. The quest should be a multi-step quest.

  **Example (for a player with high Combat reputation who recently cleared a goblin camp):**
  - Name: "Grizelda the Grim"
  - Dialogue: "Easy there, killer. I saw what you did to Gassy's goons at the camp. I want no trouble. State your business and be on your way."
  - Quest: "If you're so tough, maybe you can clear out the Rat King deeper in. There's a rusty key in it for you."
  - questId: "clear_rat_king"
  - Reward: "A Rusty Key"

  **Example (for a player with high Diplomacy reputation):**
  - Name: "Silas the Merchant"
  - Dialogue: "Ah, the silver-tongued warrior! Your reputation precedes you. I heard you negotiated the release of the Brewer's son. A fine piece of work. Perhaps we can do business?"

  Return the NPC in the specified JSON format. If you offer a quest, you MUST provide a questId.`
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
