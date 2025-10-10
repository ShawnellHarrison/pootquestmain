'use server';
/**
 * @fileOverview Generates a tailored story arc and opening narration based on the character class chosen by the player.
 *
 * - generateClassNarration - A function that generates the tailored narration.
 * - ClassNarrationInput - The input type for the generateClassNarration function.
 * - ClassNarrationOutput - The return type for the generateClassNarration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ClassNarrationInputSchema = z.object({
  playerClass: z
    .string()
    .describe('The class selected by the player (e.g., rogue, paladin, wizard).'),
});
export type ClassNarrationInput = z.infer<typeof ClassNarrationInputSchema>;

const ClassNarrationOutputSchema = z.object({
  storyArc: z.string().describe('A brief summary of the main story arc for the class.'),
  openingNarration: z.string().describe('The opening narration text for the player.'),
});
export type ClassNarrationOutput = z.infer<typeof ClassNarrationOutputSchema>;

export async function generateClassNarration(
  input: ClassNarrationInput
): Promise<ClassNarrationOutput> {
  return classNarrationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'classNarrationPrompt',
  input: {schema: ClassNarrationInputSchema},
  output: {schema: ClassNarrationOutputSchema},
  prompt: `You are the Fartmaster, the AI Dungeon Master for Poot Quest, a game of high fantasy and low humor. Your tone is witty, epic, and absurd.

  The player has just chosen their class: **{{{playerClass}}}**

  **Your Task:**
  1.  **Create a Story Arc:** Write a single, compelling sentence that summarizes the main quest for this class. It should sound epic but hint at the game's silly, flatulent nature.
  2.  **Write the Opening Narration:** Craft an engaging opening narration (3-4 sentences). Set the scene in the infamous "Tavern of Broken Wind" and introduce an initial objective that is perfectly tailored to the chosen character class. It should establish their unique starting position in the world.

  **Example for class "Rogue":**
  {
    "storyArc": "In a world plagued by odorous omens, only a master of stealth can infiltrate the Shadowfart Syndicate and retrieve the legendary Golden Bean.",
    "openingNarration": "You awaken in the sticky gloom of the Tavern of Broken Wind, the scent of stale ale and regret heavy in the air. A crumpled note is slipped under your tankard, the ink still fresh. It reads: 'The Guild knows you're in town. They say the Golden Bean is stashed in the Sewers of Sighs. Time to see if your reputation is just hot air.'"
  }
  
  **Example for class "Paladin":**
  {
    "storyArc": "As a holy warrior sworn to fragrant justice, you must cleanse the land of the Stench of Corruption and restore the Sacred Air Freshener to the capital.",
    "openingNarration": "The stench of the Tavern of Broken Wind is an affront to your holy vows, a miasma of sin and poor digestion. You are about to mete out some fragrant justice when a terrified peasant rushes in, clutching a wilted nosegay. 'Please, Sir Paladin!' he cries, 'The goblins have befouled the village well again! Only you can restore its purity!'"
  }

  Now, generate a unique and fitting entry for the **{{{playerClass}}}** that is dripping with flavor.`,
});

const classNarrationFlow = ai.defineFlow(
  {
    name: 'classNarrationFlow',
    inputSchema: ClassNarrationInputSchema,
    outputSchema: ClassNarrationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
