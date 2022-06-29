import * as fs from 'fs';
import * as jsdom from 'jsdom';
import { DecorationIndeces } from './consts.js';
import { Decoration } from './decorations.js';
import { scrapeContainerForMaterials, scrapeContainerForName, scrapeContainerForRarity, scrapeContainerForSkill, scrapeContainerForSlotLevel } from './decorationScrapers.js';
const { JSDOM } = jsdom;

export function decorationResponse(res) {
    console.log(`Decoration Status: ${res.statusCode}`);

    if (!fs.existsSync('decorations')) {
        fs.mkdirSync('decorations');
    }

    let responseText = '';
    res.on('data', d => {
        responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window;
        const decorationIndeces = DecorationIndeces;

        let table = document.querySelector('tbody');
        let decorations = Array.from(table.children);

        decorations.forEach((row) => {
            let decorationInfo = Array.from(row.children);

            let nameContainer = decorationInfo[decorationIndeces.Name];
            let name = scrapeContainerForName(nameContainer);

            let slotLevelContainer = decorationInfo[decorationIndeces.SlotLevel];
            let slotLevel = scrapeContainerForSlotLevel(slotLevelContainer);

            let rarityContainer = decorationInfo[DecorationIndeces.Rarity];
            let rarity = scrapeContainerForRarity(rarityContainer);

            let skillContainer = decorationInfo[DecorationIndeces.Skill];
            let skill = scrapeContainerForSkill(skillContainer);

            let materialsContainer = decorationInfo[DecorationIndeces.Crafting];
            let materials = scrapeContainerForMaterials(materialsContainer);

            let decoration = new Decoration({
                name: name,
                slotLevel: slotLevel,
                rarity: rarity,
                skill: skill,
                materials: materials,
            });

            let decorationString = JSON.stringify(skill);
            let fileName = decoration.name.replace(/\s/g, '-');
            fs.writeFileSync(`decorations/${fileName}.json`, decorationString);
        });
    });
}