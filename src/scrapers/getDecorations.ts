import { ExtractedDecoration } from "../interfaces";

export function getDecorationsFromDom(document: Document): ExtractedDecoration[] {

    const container = document.querySelector('table.wiki_table tbody');

    const allDecorations: ExtractedDecoration[] = [];

    if (container) {
        const childContainers = Array.from(container.children);
        childContainers.forEach((row) => {
            const cells = Array.from(row.children);
            
            const name = cells[0]?.textContent;

            let slotLevel = 0;
            if (cells[1].textContent) {
                slotLevel = parseInt(cells[1].textContent.match(/\d/)![0]);
            }

            let rarity = 0;
            if (cells[2].textContent) {
                rarity = parseInt(cells[2].textContent.match(/\d/)![0]);
            }

            let skillName = '';
            if (cells[3].textContent) {
                skillName = cells[3].textContent.replace(/x\d/, '').trim();
            }
            
            const decoration: ExtractedDecoration = {
                name: name ? name : '',
                slotLevel: slotLevel,
                rarity: rarity,
                skill: skillName
            };

            allDecorations.push(decoration);
        });
    }

    return allDecorations;
}