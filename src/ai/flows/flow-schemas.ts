import { z } from 'zod';

export const EncounterInputSchema = z.object({
    playerClass: z.string().describe('The class of the player character.'),
    playerLevel: z.number().describe('The current level of the player.'),
    location: z.string().describe('The current location in the game.'),
    questId: z.string().optional().describe('The ID of the active quest, if any.'),
});
export type EncounterInput = z.infer<typeof EncounterInputSchema>;

const EnemySchema = z.object({
    id: z.string().describe("A unique ID for this enemy instance, e.g., 'goblin-1'"),
    name: z.string().describe('The name of the enemy.'),
    hp: z.number().describe('The health points of the enemy.'),
    maxHp: z.number().describe('The maximum health points of the enemy.'),
    imageUrl: z.string().describe('A public URL for an image of the enemy. Use a placeholder from picsum.photos.'),
    attack: z.number().describe('The base attack power of the enemy.'),
});

const LootSchema = z.object({
    name: z.string().describe('The name of the loot item.'),
    description: z.string().describe('A description of the loot item.'),
    type: z.enum(["weapon", "armor", "potion", "scroll", "misc"]).describe('The type of the item.'),
});

export const EncounterOutputSchema = z.object({
    enemies: z.array(EnemySchema).describe('An array of enemies for the player to fight.'),
    loot: LootSchema.describe('The loot awarded for winning the encounter.'),
    introText: z.string().describe('A short, flavorful introductory text for the encounter.'),
});
export type EncounterOutput = z.infer<typeof EncounterOutputSchema>;
