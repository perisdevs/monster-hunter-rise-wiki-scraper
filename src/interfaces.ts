export type ArmorType = 'head' | 'chest' | 'arms' | 'waist' | 'legs';
export type ArmorRank = 'master' | 'high' | 'low' | '';

export interface ExtractedArmorSkill {
    name: string;
    level: Number;
}

export interface ExtractedArmor {
    name: string;
    skills: ExtractedArmorSkill[];
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

export interface ExtractedSkillProgressionStage {
    level: Number;
    effect: string;
}

export interface ExtractedSkill {
    name: string;
    description: string;
    maxLevel: Number;
    progression: ExtractedSkillProgressionStage[];
}

export interface ExtractedDecoration {
    name: string;
    slotLevel: Number;
    rarity: Number;
    skill: string;
}