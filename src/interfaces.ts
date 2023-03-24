export type ArmorType = 'head' | 'chest' | 'arms' | 'waist' | 'legs';
export type ArmorRank = 'master' | 'high' | 'low' | '';

export interface ExtractedSkill {
    name: string;
    level: Number;
}

export interface ExtractedArmor {
    name: string;
    skills: ExtractedSkill[];
    decorationSlots: Number[];
    rarity: Number;
    defense: Number;
    fire: Number;
    water: Number;
    thunder: Number;
    ice: Number;
    dragon: Number;
    slot: string;
    rank: string;
}