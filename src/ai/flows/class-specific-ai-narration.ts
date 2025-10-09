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
  prompt: `You are the Dungeon Fartmaster, tasked with creating an engaging story for a player character.

  The player has selected the following class: {{{playerClass}}}

  Based on this class, generate a unique story arc and an opening narration to kickstart their adventure in the Tavern of Broken Wind.

  The story arc should be a single sentence summary of the main quest or challenge that the player will face.

  The opening narration should set the scene in the Tavern of Broken Wind and introduce the initial quest or objective. It should be no more than four sentences long and written in a captivating, slightly humorous style.

  Make sure the narration references elements that are specific and relevant to the character class.
  Follow the example:

  Example:
  Class: Rogue
  Story Arc: The Shadowfart Syndicate has stolen the Golden Bean. Only a master of stealth can retrieve it...
  Opening Narration: You wake in the Tavern of Broken Wind, a shadowy dive where secrets are traded for beans. The barkeep slides you a note: 'The Golden Bean is in the Sewers of Sighs. The guards are heavy, but you... you move like gas through cracks. What's your play, shadow?'`,
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
