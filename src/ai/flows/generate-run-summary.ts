
'use server';
/**
 * @fileOverview Generates a shareable summary of a completed game run.
 *
 * - generateRunSummary - A function that creates a summary for the Fart Journal.
 * - RunSummaryInput - The input type for the generateRunSummary function.
 * - RunSummaryOutput - The return type for the generateRunSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const RunSummaryInputSchema = z.object({
  characterClass: z.string().describe("The character's class."),
  moralAlignment: z.string().describe("The character's moral alignment during the run."),
  enemiesKilled: z.number().describe('The number of enemies killed.'),
  enemiesSpared: z.number().describe('The number of enemies spared.'),
  ending: z.string().describe('The final ending text achieved by the player.'),
  uniqueDiscovery: z.string().describe('A unique discovery or event during the run.'),
});
export type RunSummaryInput = z.infer<typeof RunSummaryInputSchema>;

export const RunSummaryOutputSchema = z.object({
  title: z.string().describe('A catchy, epic title for the chronicle entry.'),
  summary: z.string().describe('A humorous, epic, and shareable summary of the entire run, written in the style of a legendary bard.'),
});
export type RunSummaryOutput = z.infer<typeof RunSummaryOutputSchema>;

export async function generateRunSummary(input: RunSummaryInput): Promise<RunSummaryOutput> {
  return generateRunSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateRunSummaryPrompt',
  input: {schema: RunSummaryInputSchema},
  output: {schema: RunSummaryOutputSchema},
  prompt: `You are the Fartmaster, the master chronicler of Poot Quest. A hero has completed their journey, and you must immortalize their legend in the Fart Journal.

  **The Hero's Deed:**
  - Class: {{characterClass}}
  - Moral Alignment: {{moralAlignment}}
  - Foes Vanquished: {{enemiesKilled}}
  - Foes Spared: {{enemiesSpared}}
  - Final Fate: "{{ending}}"
  - A Most Unique Discovery: "{{uniqueDiscovery}}"

  **Your Task:**
  Craft a short, epic, and humorous summary of this hero's tale. It should be written in a grand, bardic style, suitable for sharing on social media. Capture the essence of their journey and their flatulent legacy.

  **Example:**
  {
    "title": "The Ballad of the Silent-But-Deadly Paladin",
    "summary": "Hark, for Sir Reginald the Pure, a Paladin of rare fragrance, trod the path of righteousness! Though his sword felled 12 odorous foes, his heart spared 3 lost souls. He cleansed the land of the Goblin King's stench but ultimately learned that true power comes not from the sword, but from a well-timed, honorable toot. His legend is now etched in the wind!"
  }

  Now, write the chronicle entry for the hero described above. Make it legendary!`,
});

const generateRunSummaryFlow = ai.defineFlow(
  {
    name: 'generateRunSummaryFlow',
    inputSchema: RunSummaryInputSchema,
    outputSchema: RunSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
