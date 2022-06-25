import { chargeBladeResponse, greatSwordResponse, longSwordResponse, swordAndShieldResponse } from './responses.js';

export const WeaponTypeInfo = {
    LongSword: {
        NameSkillSharpness: 0,
        Damage: 1,
        ElementDamage: 2,
        Affinity: 3,
        DefenseBonus: 4,
        Rarity: 5,
        RampageSkills: 6,
        Crafting: 7,
    },

    ChargeBlade: {
        NameSkillSharpness: 0,
        Damage: 1,
        ElementDamage: 2,
        Affinity: 3,
        Phial: 4,
        DefenseBonus: 5,
        Rarity: 6,
        RampageSkills: 7,
        Crafting: 8,
    },

    GreatSword: {
        NameSkillSharpness: 0,
        Damage: 1,
        ElementDamage: 2,
        Affinity: 3,
        DefenseBonus: 4,
        Rarity: 5,
        RampageSkills: 6,
        Crafting: 8,
    },

    SwordAndShield: {
        NameSkillSharpness: 0,
        Damage: 1,
        ElementDamage: 2,
        Affinity: 3,
        DefenseBonus: 4,
        Rarity: 5,
        RampageSkills: 6,
        Crafting: 7,
    },

    DualBlades: {
        NameSkillSharpness: 0,
        Damage: 1,
        ElementDamage: 2,
        Affinity: 3,
        DefenseBonus: 4,
        Rarity: 5,
        RampageSkills: 6,
        Crafting: 8,
    },

    Hammer: {
        NameSkillSharpness: 0,
        Damage: 1,
        ElementDamage: 2,
        Affinity: 3,
        DefenseBonus: 4,
        Rarity: 5,
        RampageSkills: 6,
        Crafting: 7,
    },

    HuntingHorn: {
        NameSkillSharpness: 0,
        Damage: 1,
        ElementDamage: 2,
        Affinity: 3,
        DefenseBonus: 4,
        Melody: 5,
        Rarity: 6,
        RampageSkills: 7,
        Crafting: 8,
    },

    Lance: {
        NameSkillSharpness: 0,
        Damage: 1,
        ElementDamage: 2,
        Affinity: 3,
        DefenseBonus: 4,
        Rarity: 5,
        RampageSkills: 6,
        Crafting: 7,
    },

    Gunlance: {
        NameSkillSharpness: 0,
        Damage: 1,
        ElementDamage: 2,
        Affinity: 3,
        DefenseBonus: 4,
        ShellType: 5,
        ShellLevel: 6,
        Rarity: 7,
        RampageSkills: 8,
        Crafting: 9,
    },

    SwitchAxe: {
        NameSkillSharpness: 0,
        Damage: 1,
        ElementDamage: 2,
        Affinity: 3,
        Phial: 4,
        DefenseBonus: 5,
        Rarity: 6,
        RampageSkills: 7,
        Crafting: 7,
    },

    InsectGlaive: {
        NameSkillSharpness: 0,
        Damage: 1,
        ElementDamage: 2,
        Affinity: 3,
        KinsectLevel: 4,
        DefenseBonus: 5,
        Rarity: 6,
        RampageSkills: 7,
        Crafting: 7,
    },

    Bow: {
        NameSkill: 0,
        Damage: 1,
        ElementDamage: 2,
        Arcshot: 3,
        Charge1: 4,
        Charge1: 5,
        Charge1: 6,
        Charge1: 7,
        DefenseBonus: 8,
        Rarity: 9,
        RampageSkills: 10,
        Coatings: 11,
        Crafting: 12,
    },

    LightBowgun: {
        NameSkill: 0,
        Damage: 1,
        Affinity: 2,
        Deviation: 3,
        Recoil: 4,
        ReloadSpeed: 5,
        ClusterType: 6,
        SpecialAmmo: 7,
        DefenseBonus: 8,
        Rarity: 9,
        RampageSkills: 10,
        Crafting: 11,
    },

    HeavyBowgun: {
        NameSkill: 0,
        Damage: 1,
        Affinity: 2,
        Deviation: 3,
        Recoil: 4,
        ReloadSpeed: 5,
        ClusterType: 6,
        SpecialAmmo: 7,
        DefenseBonus: 8,
        Rarity: 9,
        RampageSkills: 10,
        Crafting: 11,
    }
};

export const Requests = [
    {
      options: {
        hostname: 'monsterhunterrise.wiki.fextralife.com',
        path: '/Long+Swords',
        method: 'GET',
      },
      response: longSwordResponse,
    },
    {
      options: {
        hostname: 'monsterhunterrise.wiki.fextralife.com',
        path: '/Great+Swords',
        method: 'GET',
      },
      response: greatSwordResponse,
    },
    {
      options: {
        hostname: 'monsterhunterrise.wiki.fextralife.com',
        path: '/Charge+Blades',
        method: 'GET',
      },
      response: chargeBladeResponse,
    },
    {
        options: {
          hostname: 'monsterhunterrise.wiki.fextralife.com',
          path: '/Sword+&+Shields',
          method: 'GET',
        },
        response: swordAndShieldResponse,
      },
  ];