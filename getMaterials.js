import * as fs from 'fs';
import * as jsdom from 'jsdom';
import { MaterialIndeces } from './consts.js';
import { scrapeContainerForName, scrapeContainerForRarity, scrapeContainerForSources, scrapeContainerForType } from './materialScrapers.js';
import { Material } from './materials.js';
const { JSDOM } = jsdom;

export function materialResponse(res) {
    console.log(`Material Status: ${res.statusCode}`);

    if (!fs.existsSync('materials')) {
        fs.mkdirSync('materials');
    }

    let responseText = '';
    res.on('data', d => {
        responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window;
        const materialIndeces = MaterialIndeces;

        let table = document.querySelector('tbody');
        let materials = Array.from(table.children);

        materials.forEach((row) => {
            let materialInfo = Array.from(row.children);

            let nameContainer = materialInfo[materialIndeces.Name];

            let name = scrapeContainerForName(nameContainer);

            let rarityContainer = materialInfo[materialIndeces.Rarity];
            let rarity = scrapeContainerForRarity(rarityContainer);

            let typeContainer = materialInfo[materialIndeces.Type];
            let type = scrapeContainerForType(typeContainer);

            let sourcesContainer = materialInfo[materialIndeces.Sources];
            let sources = scrapeContainerForSources(sourcesContainer);

            let material = new Material({
                name: name,
                rarity: rarity,
                type: type,
                sources: sources,
            });            

            let materialString = JSON.stringify(material);
            let fileName = material.name.replace(/\s/g, '-');
            fs.writeFileSync(`materials/${fileName}.json`, materialString);
        });

        
    });
}