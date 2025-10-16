
export type CardData = {
    name: string;
    description: string;
    manaCost: number;
    attack: number;
    defense: number;
    healing: number;
};

export const CARD_DATA: { [key: string]: CardData } = {
    "Backstab": { name: "Backstab", description: "A swift, high-damage attack.", manaCost: 2, attack: 10, defense: 0, healing: 0 },
    "Silent But Deadly": { name: "Silent But Deadly", description: "A moderate attack that ignores some defense.", manaCost: 3, attack: 5, defense: 0, healing: 0 },
    "Smoke Bomb": { name: "Smoke Bomb", description: "Gain a small amount of defense.", manaCost: 1, attack: 0, defense: 5, healing: 0 },
    "Basic Attack": { name: "Basic Attack", description: "A simple, low-cost attack.", manaCost: 1, attack: 3, defense: 0, healing: 0 },
    "Smell the Truth": { name: "Smell the Truth", description: "A weak attack that reveals enemy weaknesses.", manaCost: 3, attack: 2, defense: 0, healing: 0 },
    "Holy Shield": { name: "Holy Shield", description: "Greatly increases your defense for one turn.", manaCost: 2, attack: 0, defense: 15, healing: 0 },
    "Purify": { name: "Purify", description: "Heal yourself for a small amount.", manaCost: 2, attack: 0, defense: 0, healing: 8 },
    "Gas Cloud": { name: "Gas Cloud", description: "A potent area-of-effect attack.", manaCost: 4, attack: 8, defense: 0, healing: 0 },
    "Chain Lightning Farts": { name: "Chain Lightning Farts", description: "Powerful magic that strikes multiple foes.", manaCost: 5, attack: 12, defense: 0, healing: 0 },
    "Arcane Missile": { name: "Arcane Missile", description: "A reliable magic attack.", manaCost: 2, attack: 5, defense: 0, healing: 0 },
    "Bean Rage": { name: "Bean Rage", description: "A furious, high-damage attack.", manaCost: 3, attack: 15, defense: 0, healing: 0 },
    "Mighty Cleave": { name: "Mighty Cleave", description: "A strong swing that can hit adjacent enemies.", manaCost: 2, attack: 7, defense: 0, healing: 0 },
    "Unstoppable Charge": { name: "Unstoppable Charge", description: "A powerful charge that breaks defenses.", manaCost: 4, attack: 10, defense: 0, healing: 0 },
    "Aroma Heal": { name: "Aroma Heal", description: "A powerful healing spell.", manaCost: 3, attack: 0, defense: 0, healing: 20 },
    "Blessing of Freshness": { name: "Blessing of Freshness", description: "Gain a significant amount of defense.", manaCost: 2, attack: 0, defense: 10, healing: 0 },
    "Resurrection": { name: "Resurrection", description: "Revive a fallen ally (or yourself).", manaCost: 8, attack: 0, defense: 0, healing: 50 },
    "Basic Smite": { name: "Basic Smite", description: "A minor holy attack.", manaCost: 1, attack: 2, defense: 0, healing: 0 },
    "Hostile Takeover": { name: "Hostile Takeover", description: "Weaken an enemy and steal their strength.", manaCost: 4, attack: 5, defense: 0, healing: 0 },
    "Corporate Merger": { name: "Corporate Merger", description: "Combine two cards for a stronger effect.", manaCost: 5, attack: 0, defense: 0, healing: 0 },
    "Invest": { name: "Invest", description: "Sacrifice your turn to gain more mana next turn.", manaCost: 1, attack: 0, defense: 0, healing: 0 },
};


export type CharacterClass = {
  id: string;
  name: string;
  image: string;
  imageHint: string;
  attributes: {
    strengths: string[];
    weaknesses: string[];
  };
  stats: {
    attack: number;
    defense: number;
    speed: number;
  };
  specialTraits: string[];
  starterDeck: { name: string; count: number }[];
  weaknessesToKnow: string[];
  signatureCard: string;
  specialAbility: string;
  playstyle: string;
};

export const CLASSES: CharacterClass[] = [
  {
    id: "rogue",
    name: "Sneaky Rogue",
    image: "https://storage.googleapis.com/character_poot/ch1.png",
    imageHint: "rogue assassin",
    attributes: {
      strengths: ["Stealth +90%", "Critical Hit +75%", "Speed +80%"],
      weaknesses: ["Defense -60%", "HP -40%", "Area Damage -70%"],
    },
    stats: { attack: 80, defense: 30, speed: 70 },
    specialTraits: ["Stealth Master", "Critical Strike Expert", "Glass Cannon (Fragile)"],
    starterDeck: [
      { name: "Silent But Deadly", count: 3 },
      { name: "Backstab", count: 2 },
      { name: "Smoke Bomb", count: 2 },
      { name: "Basic Attack", count: 8 },
    ],
    weaknessesToKnow: ["Low health pool - avoid direct hits", "Poor against groups", "Relies on positioning"],
    signatureCard: "Silent But Deadly (Invisible poison DOT)",
    specialAbility: "Phase through enemies once per battle",
    playstyle: "Hit-and-run, single-target assassinations",
  },
  {
    id: "paladin",
    name: "Paladin of Purity",
    image: "https://storage.googleapis.com/character_poot/charact%202.jpg",
    imageHint: "armored knight",
    attributes: {
      strengths: ["Defense +85%", "Healing +90%", "Debuff Resistance +100%"],
      weaknesses: ["Damage -50%", "Speed -45%", "Mana Regen -30%"],
    },
    stats: { attack: 40, defense: 90, speed: 20 },
    specialTraits: ["Ultimate Tank", "Party Healer", "Debuff Immune"],
    starterDeck: [
        { name: "Smell the Truth", count: 3 },
        { name: "Holy Shield", count: 2 },
        { name: "Purify", count: 2 },
        { name: "Basic Attack", count: 8 },
    ],
    weaknessesToKnow: ["Very low damage output", "Slow and ponderous", "Reliant on party members"],
    signatureCard: "Smell the Truth (Reveals enemy weakness, heals party)",
    specialAbility: "Divine Shield absorbs 3 attacks",
    playstyle: "Tank/support, slow but unbreakable",
  },
  {
    id: "wizard",
    name: "Goddess of Wind",
    image: "https://storage.googleapis.com/character_poot/3.jpg",
    imageHint: "wind goddess",
    attributes: {
      strengths: ["AOE Damage +95%", "Elemental Mastery +85%", "Mana +100%"],
      weaknesses: ["Physical Defense -65%", "HP -55%", "Chaos Risk +40%"],
    },
    stats: { attack: 95, defense: 20, speed: 50 },
    specialTraits: ["AOE Specialist", "Master of Elements", "High Risk / High Reward"],
    starterDeck: [
        { name: "Gas Cloud", count: 3 },
        { name: "Chain Lightning Farts", count: 2 },
        { name: "Arcane Missile", count: 2 },
        { name: "Basic Attack", count: 8 },
    ],
    weaknessesToKnow: ["Extremely fragile", "Can miscast spells, causing self-damage", "Vulnerable to silence"],
    signatureCard: "Gas Cloud (Damages all enemies + confusion)",
    specialAbility: "Chain Lightning Farts (bounces between enemies)",
    playstyle: "Glass cannon, elemental combos",
  },
  {
    id: "barbarian",
    name: "Barbarian of Beans",
    image: "/images/barbarian.png",
    imageHint: "muscular warrior",
    attributes: {
      strengths: ["Melee Damage +100%", "HP +90%", "Knockback +80%"],
      weaknesses: ["Accuracy -50%", "Magic Resist -60%", "Control -70%"],
    },
    stats: { attack: 100, defense: 50, speed: 40 },
    specialTraits: ["Pure Damage", "High Health Pool", "Uncontrollable Rage"],
    starterDeck: [
        { name: "Bean Rage", count: 3 },
        { name: "Mighty Cleave", count: 2 },
        { name: "Unstoppable Charge", count: 2 },
        { name: "Basic Attack", count: 8 },
    ],
    weaknessesToKnow: ["Attacks can miss frequently", "Vulnerable to magic", "May attack allies in rage mode"],
    signatureCard: "Bean Rage (Massive AOE, self-damage over time)",
    specialAbility: "Unstoppable Charge (breaks through defenses)",
    playstyle: "Berserk aggro, high-risk/reward",
  },
  {
    id: "cleric",
    name: "Cleric of Febreze",
    image: "/images/cleric.png",
    imageHint: "healer robes",
    attributes: {
      strengths: ["Healing +95%", "Buff Duration +80%", "Revive Chance +50%"],
      weaknesses: ["Offensive Power -75%", "Speed -40%", "Solo Weak"],
    },
    stats: { attack: 10, defense: 60, speed: 30 },
    specialTraits: ["Master Healer", "Support Specialist", "Can Revive Allies"],
    starterDeck: [
        { name: "Aroma Heal", count: 3 },
        { name: "Blessing of Freshness", count: 2 },
        { name: "Resurrection", count: 1 },
        { name: "Basic Smite", count: 9 },
    ],
    weaknessesToKnow: ["Almost no solo damage capability", "Easily overwhelmed when alone", "Long cooldowns on powerful abilities"],
    signatureCard: "Aroma Heal (Mass heal + cleanse debuffs)",
    specialAbility: "Resurrection (1 use per dungeon)",
    playstyle: "Pure support, party-dependent",
  },
  {
    id: "tycoon",
    name: "Tycoon of Toots",
    image: "/images/tycoon.png",
    imageHint: "business suit",
    attributes: {
      strengths: ["Resource Gain +90%", "Summons +85%", "Versatility +75%"],
      weaknesses: ["Direct Damage -55%", "Fragile -50%", "Setup Time"],
    },
    stats: { attack: 30, defense: 40, speed: 60 },
    specialTraits: ["Economic Powerhouse", "Summoner", "Strategic Genius"],
    starterDeck: [
        { name: "Hostile Takeover", count: 2 },
        { name: "Corporate Merger", count: 2 },
        { name: "Invest", count: 3 },
        { name: "Basic Attack", count: 8 },
    ],
    weaknessesToKnow: ["Needs time to build up power", "Summons are fragile initially", "Low direct impact in early combat"],
    signatureCard: "Hostile Takeover (Steal enemy buffs + gold)",
    specialAbility: "Corporate Merger (fuse two weak cards -> powerful)",
    playstyle: "Economic strategy, long-game dominance",
  },
];

export const getClass = (id: string) => {
    return CLASSES.find(c => c.id === id);
}

    