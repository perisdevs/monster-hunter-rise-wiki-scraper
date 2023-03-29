import { ExtractedSkill, ExtractedSkillProgressionStage } from "../interfaces";

export function getSkillsFromDom(document: Document): ExtractedSkill[] {

    const container = document.querySelector('table.wiki_table tbody');

    const allSkills: ExtractedSkill[] = [];

    if (container) {
        const childContainers = Array.from(container.children);
        childContainers.forEach((row) => {            
            const cells = Array.from(row.children);

            const skillName = cells[0].textContent;
            const skillDescription = cells[1].textContent;
            const skillMaxLevel = Number(cells[2].textContent?.split(/\s/)[0]);

            const skillProgressionContainers = Array.from(cells[3].querySelectorAll('li'));
            const skillProgression: ExtractedSkillProgressionStage[] = [];
            skillProgressionContainers.forEach((pgsnCtr, i) => {
                const level = i + 1;
                const effect = pgsnCtr.textContent;
                skillProgression.push({level: level, effect: effect ? effect : ''});
            });

            const skill: ExtractedSkill = {
                name: skillName ? skillName : '',
                description: skillDescription ? skillDescription : '',
                maxLevel: skillMaxLevel ? skillMaxLevel : 0,
                progression: skillProgression
            };

            allSkills.push(skill);
        });
    }

    return allSkills;
}