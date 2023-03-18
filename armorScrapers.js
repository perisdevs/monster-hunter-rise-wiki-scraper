import { SkillSlot } from "./weapons.js";
import { Skill } from "./skills.js";

export function scrapeContainerForName(container) {
    let name = container.textContent.trim();
    return name;
}

export function scrapeContainerForSkills(container) {
    let skillNameContainers = Array.from(container.querySelectorAll('.wiki_link'));

    let skillNames = [];
    skillNameContainers.forEach((e) => {
        if (e.textContent != '') {
            skillNames.push(e.textContent);
        }        
    });

    let levels = container.textContent.match(/\d/g);    

    let skills = [];
    skillNames.forEach((skill, i) => {
        if (levels) {
            skills.push(new Skill({
                name: skill,
                level: levels[i],
            }));
        }        
    });

    return skills;
}

export function scrapeContainerForSkillSlots(container) {
    let skillSlotContainers = Array.from(container.children);

    let skillSlots = [];
    skillSlotContainers.forEach((slot) => {
        let level = null;

        if (slot.getAttribute('title')) {
            level = parseInt(slot.getAttribute('title')[10]);
        } else if (slot.getAttribute('alt')) {
            level = parseInt(slot.getAttribute('alt')[10]);
        } else {
            return;
        }

        skillSlots.push(level);
    });

    return skillSlots;
}

export function scrapeContainerForRarity(container) {
    let rarity = parseInt(container.textContent);
    return rarity;
}

export function scrapeContainerForDefense(container) {
    let defense = parseInt(container.textContent);
    return defense;
}

export function scrapeContainerForFire(container) {
    let fire = parseInt(container.textContent);
    return fire;
}

export function scrapeContainerForWater(container) {
    let water = parseInt(container.textContent);
    return water;
}

export function scrapeContainerForThunder(container) {
    let thunder = parseInt(container.textContent);
    return thunder;
}

export function scrapeContainerForIce(container) {
    let ice = parseInt(container.textContent);
    return ice;
}

export function scrapeContainerForDragon(container) {
    let dragon = parseInt(container.textContent);
    return dragon;
}

export function scrapeRowForArmor(row, indeces) {
    let armorInfo = Array.from(row.children);

    let nameContainer = armorInfo[indeces.Name];
    let name = scrapeContainerForName(nameContainer);

    let skillContainer = armorInfo[indeces.Skills];
    let skills = scrapeContainerForSkills(skillContainer);

    let skillSlotContainer = armorInfo[indeces.SkillSlots];
    let skillSlots = scrapeContainerForSkillSlots(skillSlotContainer);

    let rarityContainer = armorInfo[indeces.Rarity];
    let rarity = scrapeContainerForRarity(rarityContainer);

    let defenseContaienr = armorInfo[indeces.Defense];
    let defense = scrapeContainerForDefense(defenseContaienr);

    let fireContainer = armorInfo[indeces.Fire];
    let fire = scrapeContainerForFire(fireContainer);

    let waterContainer = armorInfo[indeces.Water];
    let water = scrapeContainerForWater(waterContainer);

    let thunderContainer = armorInfo[indeces.Thunder];
    let thunder = scrapeContainerForThunder(thunderContainer);

    let iceContainer = armorInfo[indeces.Ice];
    let ice = scrapeContainerForIce(iceContainer);

    let dragonContainer = armorInfo[indeces.Dragon];
    let dragon = scrapeContainerForDragon(dragonContainer);

    let props = {
        name: name,
        skills: skills,
        skillSlots: skillSlots,
        rarity: rarity,
        defense: defense,
        fire: fire,
        water: water,
        thunder: thunder,
        ice: ice,
        dragon: dragon,
    };

    return props;
}