
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
      combat: znumber(),
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
  reputationCheck: z.object({
      stat: z.enum(['stealth', 'combat', 'diplomacy']),
      threshold: z.number(),
  }).optional().describe('If this quest requires a certain reputation, specify it here. This is a HARD requirement.'),
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
  prompt: `You are the AI Dungeon Master for Poot Quest. Your job is to create a living, breathing NPC that feels like a real part of the world and offers quests that align with the player's reputation.

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
  3.  **Reputation-Aligned Quest Generation:** The NPC should offer a simple, actionable quest that is **thematically appropriate for the player's highest reputation score**. A player known for combat should get combat quests. A sneaky player should get stealth quests. The quest MUST have a simple, snake_case 'questId'.
  4.  **Reputation-Gated Quests (Important!):** You MUST frequently create quests that require a minimum reputation score to accept. For example, a sneaky quest might require 50 stealth points. If you create such a quest, you MUST set the \`reputationCheck\` field with the required stat and threshold. This is a hard requirement for the player.

  **Example (for a player with high Combat reputation who recently cleared a goblin camp):**
  {
    "name": "Grizelda the Grim",
    "dialogue": "Easy there, killer. I saw what you did to Gassy's goons at the camp. I want no trouble. State your business and be on your way.",
    "quest": "If you're so tough, maybe you can clear out the Rat King deeper in. There's a rusty key in it for you.",
    "questId": "clear_rat_king",
    "Reward": "A Rusty Key"
  }

  **Example (Reputation-Gated Stealth Quest):**
  {
    "name": "Whispering Willow",
    "dialogue": "I've heard whispers of your silent deeds. Not many can move through these shadows as you do.",
    "quest": "The Shadow Syndicate has a new ledger in their safehouse. I need a ghost to acquire it. This is not a job for a clumsy oaf.",
    "questId": "shadow_ledger_heist",
    "reputationCheck": { "stat": "stealth", "threshold": 50 },
    "Reward": "A set of masterwork lockpicks"
  }

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
