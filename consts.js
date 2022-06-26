import { chargeBladeResponse, greatSwordResponse, longSwordResponse, swordAndShieldResponse, dualBladesResponse, hammerResponse, huntingHornResponse, lanceResponse, gunlanceResponse, switchAxeResponse, insectGlaiveResponse, bowResponse, lightBowgunResponse, heavyBowgunResponse } from './responses.js';

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
        Crafting: 8,
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
        Crafting: 8,
    },

    Bow: {
        NameSkill: 0,
        Damage: 1,
        ElementDamage: 2,
        Affinity: 3,
        Arcshot: 4,
        Charge1: 5,
        Charge2: 6,
        Charge3: 7,
        Charge4: 8,
        DefenseBonus: 9,
        Rarity: 10,
        RampageSkills: 11,
        Coatings: 12,
        Crafting: 13,
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
    {
        options: {
          hostname: 'monsterhunterrise.wiki.fextralife.com',
          path: '/Dual+Blades+List',
          method: 'GET',
        },
        response: dualBladesResponse,
    },
    {
        options: {
          hostname: 'monsterhunterrise.wiki.fextralife.com',
          path: '/Hammers',
          method: 'GET',
        },
        response: hammerResponse,
    },
    {
        options: {
          hostname: 'monsterhunterrise.wiki.fextralife.com',
          path: '/Hunting+Horns',
          method: 'GET',
        },
        response: huntingHornResponse,
    },
    {
        options: {
          hostname: 'monsterhunterrise.wiki.fextralife.com',
          path: '/Lances',
          method: 'GET',
        },
        response: lanceResponse,
    },
    {
        options: {
          hostname: 'monsterhunterrise.wiki.fextralife.com',
          path: '/Gunlances',
          method: 'GET',
        },
        response: gunlanceResponse,
    },
    {
        options: {
          hostname: 'monsterhunterrise.wiki.fextralife.com',
          path: '/Switch+Axes',
          method: 'GET',
        },
        response: switchAxeResponse,
    },
    {
        options: {
          hostname: 'monsterhunterrise.wiki.fextralife.com',
          path: '/Insect+Glaives',
          method: 'GET',
        },
        response: insectGlaiveResponse,
    },
    {
        options: {
          hostname: 'monsterhunterrise.wiki.fextralife.com',
          path: '/Bows',
          method: 'GET',
        },
        response: bowResponse,
    },
    {
        options: {
          hostname: 'monsterhunterrise.wiki.fextralife.com',
          path: '/Light+Bowguns',
          method: 'GET',
        },
        response: lightBowgunResponse,
    },
    {
        options: {
          hostname: 'monsterhunterrise.wiki.fextralife.com',
          path: '/Heavy+Bowguns',
          method: 'GET',
        },
        response: heavyBowgunResponse,
    },
  ];