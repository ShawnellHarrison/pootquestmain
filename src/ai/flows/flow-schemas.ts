'use server';

import { z } from 'zod';

export const EncounterInputSchema = z.object({
    playerClass: z.string().describe('The class of the player character.'),
    playerLevel: z.number().describe('The current level of the player.'),
    location: z.string().describe('The current location in the game.'),
    questId: z.string().optional().describe('The ID of the active quest, if any.'),
    reputation: z.object({
        stealth: z.number().describe('The player reputation for stealth.'),
        combat: z.number().describe('The player reputation for combat.'),
        diplomacy: z.number().describe('The player reputation for diplomacy.'),
      }).describe('The player reputation, used to tailor the encounter difficulty and type.'),
});
export type EncounterInput = z.infer<typeof EncounterInputSchema>;

const EnemyModifierSchema = z.object({
    type: z.enum(["Retaliator", "Regenerator", "Commander", "Shielded"]).describe("The type of modifier."),
    value: z.number().optional().describe("The power of the modifier (e.g., damage for Retaliator, heal amount for Regenerator).")
}).describe("A special modifier that makes an enemy elite or unique.");

const EnemySchema = z.object({
    id: z.string().describe("A unique ID for this enemy instance, e.g., 'goblin-1'"),
    name: z.string().describe('The name of the enemy.'),
    hp: z.number().describe('The health points of the enemy.'),
    maxHp: z.number().describe('The maximum health points of the enemy.'),
    imageUrl: z.string().describe('A public URL for an image of the enemy. Use a placeholder from picsum.photos.'),
    attack: z.number().describe('The base attack power of the enemy.'),
    defense: z.number().optional().describe('The current defense points of the enemy, if any.'),
    modifier: EnemyModifierSchema.optional(),
});

const LootSchema = z.object({
    name: z.string().describe('The name of the loot item. This should be a piece of "junk" with a flavorful name, not a generic weapon or scroll.'),
    description: z.string().describe('A creative and flavorful description of the junk item.'),
    type: z.enum(["junk", "weapon", "armor", "potion", "scroll", "misc"]).describe('The type of the item. It should always be "junk".'),
});

export const EncounterOutputSchema = z.object({
    enemies: z.array(EnemySchema).describe('An array of enemies for the player to fight.'),
    loot: LootSchema.describe('The loot awarded for winning the encounter.'),
    introText: z.string().describe('A short, flavorful introductory text for the encounter.'),
});
export type EncounterOutput = z.infer<typeof EncounterOutputSchema>;


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
