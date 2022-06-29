import * as fs from 'fs';
import * as jsdom from 'jsdom';
import { SkillIndeces } from './consts.js';
import { Skill } from './skills.js';
import { scrapeContainerForDescription, scrapeContainerForName, scrapeContainerForProgression, scrapeContainerForLevel } from './skillScrapers.js';
const { JSDOM } = jsdom;

export function skillResponse(res) {
    console.log(`Skill Status: ${res.statusCode}`);

    if (!fs.existsSync('skills')) {
        fs.mkdirSync('skills');
    }

    let responseText = '';
    res.on('data', d => {
        responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window;
        const skillIndeces = SkillIndeces;

        let table = document.querySelector('tbody');
        let skills = Array.from(table.children);

        skills.forEach((row) => {
            let skillInfo = Array.from(row.children);
            
            let nameContainer = skillInfo[skillIndeces.Name];
            let name = scrapeContainerForName(nameContainer);

            let descriptionContainer = skillInfo[skillIndeces.Description];
            let description = scrapeContainerForDescription(descriptionContainer);

            let maxLevelContainer = skillInfo[skillIndeces.Level];
            let maxLevel = scrapeContainerForLevel(maxLevelContainer);

            let progressionContainer = skillInfo[skillIndeces.Progression];
            let progression = scrapeContainerForProgression(progressionContainer);

            let skill = new Skill({
                name: name,
                level: 0,
                description: description,
                maxLevel: maxLevel,
                progression: progression,
            });

            let skillString = JSON.stringify(skill);
            let fileName = skill.name.replace(/\s/g, '-');
            fileName = fileName.replace(/\//, '&lt;');            
            fs.writeFileSync(`skills/${fileName}.json`, skillString);            
        });
    });
}