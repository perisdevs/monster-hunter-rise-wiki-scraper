import { ExtractedMaterial } from "../interfaces";

export function getMaterialsFromDom(document: Document): ExtractedMaterial[] {

    const container = document.querySelector('table.wiki_table tbody');

    const allMaterials: ExtractedMaterial[] = [];

    if (container) {
        const childContainers = Array.from(container.children);
        childContainers.forEach((row) => {
            const cells = Array.from(row.children);

            const name = cells[0]?.textContent;

            let rarity: number | string = 0;
            if (cells[1].textContent) {
                if (cells[1].textContent.includes('?')) {
                    rarity = '??';
                } else {
                    rarity = parseInt(cells[1].textContent.match(/\d+/)![0]);
                }                                
            }

            const type = cells[2]?.textContent;

            const material: ExtractedMaterial = {
                name: name ? name : '',
                rarity: rarity,
                type: type ? type : ''
            };

            allMaterials.push(material);
        });
    }

    return allMaterials;
}