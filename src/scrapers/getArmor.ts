import { ExtractedArmor, ExtractedSkill, ArmorType, ArmorRank } from "../interfaces";
import { getTableAsArray } from "../util/util";

export function getArmorFromDom(armorType: ArmorType, document: Document): void {

    const rankedContainers = Array.from(document.querySelectorAll('table.wiki_table tbody'));

    const allArmor: ExtractedArmor[] = [];

    rankedContainers.forEach((rankedContainer, i) => {

        let rank: ArmorRank = '';
        switch(i) {
            case 0: rank = 'master'; break;
            case 1: rank = 'high'; break;
            case 2: rank = 'low'; break;
        }
        
        const armorArray = getTableAsArray(rankedContainer, (row) => {

            const cells = Array.from(row.children);
            const armorName = cells[0].textContent?.trim();

            const skillContainers = Array.from(cells[1].querySelectorAll('a'));
            const skillLevels = cells[1].textContent?.match(/\d/g);
    
            const skills: ExtractedSkill[] = [];
            if (skillLevels) {
                skillContainers.forEach((ctr, i) => {                
                    if (ctr.textContent && skillLevels[i]) {
                        skills.push({
                            name: ctr.textContent,
                            level: Number(skillLevels[i])
                        });
                    }
                });
            }
    
            const decorationSlotContainers = Array.from(cells[2].children);
            const decorationSlots: Number[] = [];
            decorationSlotContainers.forEach((ctr) => {
                const containerTitle = ctr.getAttribute('title');
                const containerAlt = ctr.getAttribute('alt');
                if (containerTitle) {
                    decorationSlots.push(Number(containerTitle[10]));
                } else if (containerAlt) {
                    decorationSlots.push(Number(containerAlt[10]));
                }
            })
    
            const armor: ExtractedArmor = {
                name: armorName ? armorName : '',
                skills: skills,
                decorationSlots: decorationSlots,
                rarity: cells[3].textContent ? Number(cells[3].textContent) : 0,
                defense: cells[4].textContent ? Number(cells[4].textContent) : 0,
                fire: cells[5].textContent ? Number(cells[5].textContent) : 0,
                water: cells[6].textContent ? Number(cells[6].textContent) : 0,
                thunder: cells[7].textContent ? Number(cells[7].textContent) : 0,
                ice: cells[8].textContent ? Number(cells[8].textContent) : 0,
                dragon: cells[9].textContent ? Number(cells[9].textContent) : 0,
                slot: armorType,
                rank: rank
            }
    
            return armor;            
        });

        armorArray.forEach((armor) => {
            allArmor.push(armor);
        });
    });
    
    console.log(allArmor[0]);
}