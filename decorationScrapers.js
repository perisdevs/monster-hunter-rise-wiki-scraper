import { Material } from "./weapons.js";

export function scrapeContainerForName(container) {
    let name = container.textContent;
    return name;
}

export function scrapeContainerForSlotLevel(container) {
    let slotLevel = parseInt(container.textContent.match(/\d/)[0]);
    return slotLevel;
}

export function scrapeContainerForDescription(container) {
    let description = container.textContent;
    return description;
}

export function scrapeContainerForRarity(container) {
    let rarity = parseInt(container.textContent.split(/\s/)[1]);
    return rarity;
}

export function scrapeContainerForSkill(container) {
    let skill = container.textContent.replace(/x\d/, '');
    return skill;
}

export function scrapeContainerForMaterials(container) {
    let materialInfo = Array.from(container.querySelectorAll('li'));

    let materials = [];

    materialInfo.forEach((mat) => {

        if (!isNaN(parseInt(mat.textContent))) {
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

    return materials;
}