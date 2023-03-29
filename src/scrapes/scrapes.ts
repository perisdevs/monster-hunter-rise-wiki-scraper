import { getArmorFromDom } from "../scrapers/getArmor";
import { getDecorationsFromDom } from "../scrapers/getDecorations";
import { getMaterialsFromDom } from "../scrapers/getMaterials";
import { getSkillsFromDom } from "../scrapers/getSkills";
import { getFileAsDOM, getStringsAsDOMs } from "../util/util";

const armorDocs: Document[] = getStringsAsDOMs([
    './download_output/armor/arms.html',
    './download_output/armor/chest.html',
    './download_output/armor/head.html',
    './download_output/armor/legs.html',
    './download_output/armor/waist.html'    
]);

export const armorScrapes = [
    getArmorFromDom('arms', armorDocs[0]),
    getArmorFromDom('chest', armorDocs[1]),
    getArmorFromDom('head', armorDocs[2]),
    getArmorFromDom('legs', armorDocs[3]),
    getArmorFromDom('waist', armorDocs[4]),
];

const skillDocumentInputPath = './download_output/skills.html';

export const skillScrape = getSkillsFromDom(getFileAsDOM(skillDocumentInputPath));

const decorationDocumentInputPath = './download_output/decorations.html';

export const decorationScrape = getDecorationsFromDom(getFileAsDOM(decorationDocumentInputPath));

const materialDocumentInputPath = './download_output/materials.html';

export const materialScrape = getMaterialsFromDom(getFileAsDOM(materialDocumentInputPath));

const masterRankMaterialDocumentInputPath = './download_output/master_rank_materials.html';

export const masterRankMaterialScrape = getMaterialsFromDom(getFileAsDOM(masterRankMaterialDocumentInputPath));