import { SkillSlot, Sharpness, ElementDamage, RampageSkill, Material } from "./lib.js";

export function scrapeContainerForName(container) {
    let name = container.textContent;
    name = name.trim(name);
    name = name.split('\n'); //some names contain sharpness text
    name = name[0].trim(name[0]);
    
    return name;
}

export function scrapeContainerForSkills(container) {
    let skillSlotsContainers = Array.from(container.querySelectorAll('img'));
    let skillSlots = [];

    skillSlotsContainers.forEach((slot) => {
        let level = null;

        if (slot.getAttribute('title')) {
            level = parseInt(slot.getAttribute('title')[10]); //slot level is stored in img title, as 11th char
        } else {
            level = parseInt(slot.getAttribute('alt')[10]); //one entry lacks title attribute
        }

        skillSlots.push(new SkillSlot({
            level: level,
            skill: null,
        }));
    });   

    return skillSlots;
}

export function scrapeContainerForSharpness(container) {
    let sharpnessData = Array.from(container.querySelector('.progress').children); //sharpness is stored as a series of divs

    let sharpnessStats = [];

    sharpnessData.forEach((sharpness) => {
        let widthObj = parseInt(sharpness.style.width); //sharpness data is stored as style width
        sharpnessStats.push(widthObj);
      });

    let sharpness = new Sharpness({
    red: sharpnessStats[0],
    orange: sharpnessStats[1],
    yellow: sharpnessStats[2],
    green: sharpnessStats[3],
    blue: sharpnessStats[4],
    white: sharpnessStats[5],
    });

    return sharpness;
}

export function scrapeContainerForDamage(container) {
    let damage = parseInt(container.textContent);
    return damage;
}

export function scrapeContainerForElementDamage(container) {
    let elementDamage = null;

    let elementString = container.textContent;                    
    if ((elementString != '--') && (elementString != 'None')) {     
        let elementData = elementString.split(/\s/g); //element data is stored as plaintext seperated by spaces         
        
        elementDamage = new ElementDamage({
        element: elementData[0],
        damage: elementData[elementData.length-1],
        });          

    }

    return elementDamage;
}

export function scrapeContainerForAffinity(container) {
    let affinity = parseInt(container.textContent); //affinity is stored as plaintext                
    return affinity;
}

export function scrapeContainerForDefenseBonus(container) {
    let defenseBonus = parseInt(container.textContent); //defense bonus is stored as plaintext
    return defenseBonus;
}

export function scrapeContainerForRarity(container) {
    let rarityData = container.textContent;
    rarityData = rarityData.trim(rarityData); //sometimes includes weird spaces
    rarityData = rarityData.split(/\s/g); //rarity data is stored as plaintext seperated by spaces         
    let rarity = parseInt(rarityData[1]);
    return rarity;
}

export function scrapeContainerForRampageSkills(container) {
    let rampageSkillData = Array.from(container.querySelector('ul').children); //rampage skills are stored as list items
    let rampageSkills = [];
    rampageSkillData.forEach((skill) => {

    if (skill.querySelector('a')) { //rampage weapons don't have links to skills
        let name = skill.querySelector('a').textContent;
        rampageSkills.push(new RampageSkill({
        name: name,
        }));            
    } else {
        rampageSkills.push(new RampageSkill({
        name: 'Any',
        })); 
    }
    });

    return rampageSkills;
}

export function scrapeContainerForMaterials(container) {
    let hasMaterials = Boolean(container.querySelector('ul')); //One item has no materials        

    let materials = [];
    if (hasMaterials) {
        let materialData = Array.from(container.querySelector('ul').children); //materials are stored as list items

        materialData.forEach((mat) => {

        if (!isNaN(parseInt(mat.textContent))) { //if the material is an integer, it is the zenny cost
            materials.push(new Material({
            name: 'Zenny',
            quantity: parseInt(mat.textContent),
            }));

        } else {
            let rawData = mat.textContent; //material info is stored as plain text

            let splitData = rawData.split('x'); //name and quantity are displayed as string with the quanity displayed as x1, x2, etc.                

            let name = '';
            for (let i = 0; i < splitData.length - 1; i++) {
            if (splitData[i] == 'Ape') splitData[i] = 'Apex'; //splitting by x removed x in apex, add x back and reattach
            name += splitData[i];
            }
            name = name.trim();                              

            if (splitData[splitData.length-1].includes('Points')) { //some materials are a category rather than item
            materials.push(new Material({
                name: name,
                quantity: splitData[splitData.length-1],
            }));
            } else {
            materials.push(new Material({
                name: name,
                quantity: parseInt(splitData[splitData.length-1]),
            }));
            }
            
        }
        }); 

    } else {
        materials = container.textContent;
    }

    return materials;
}

export function scrapeContainerForPhialType(container) {
    let phialType = container.textContent;
    return phialType;
}