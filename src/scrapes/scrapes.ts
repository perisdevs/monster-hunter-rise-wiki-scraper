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

const skillDocumentInputPath = './download_output/skills.html';
const decorationDocumentInputPath = './download_output/decorations.html';
const materialDocumentInputPath = './download_output/materials.html';
const masterRankMaterialDocumentInputPath = './download_output/master_rank_materials.html';

const armorScrapes = [
    getArmorFromDom('arms', armorDocs[0]),
    getArmorFromDom('chest', armorDocs[1]),
    getArmorFromDom('head', armorDocs[2]),
    getArmorFromDom('legs', armorDocs[3]),
    getArmorFromDom('waist', armorDocs[4]),
];

const skillScrape = getSkillsFromDom(getFileAsDOM(skillDocumentInputPath));
const decorationScrape = getDecorationsFromDom(getFileAsDOM(decorationDocumentInputPath));
const materialScrape = getMaterialsFromDom(getFileAsDOM(materialDocumentInputPath));
const masterRankMaterialScrape = getMaterialsFromDom(getFileAsDOM(masterRankMaterialDocumentInputPath));

export const writableArrays = [
    {
        path: './scrape_output/armor/arms',
        array: armorScrapes[0]
    },
    {
        path: './scrape_output/armor/chest',
        array: armorScrapes[1]
    },
    {
        path: './scrape_output/armor/head',
        array: armorScrapes[2]
    },
    {
        path: './scrape_output/armor/legs',
        array: armorScrapes[3]
    },
    {
        path: './scrape_output/armor/waist',
        array: armorScrapes[4]
    },
    {
        path: './scrape_output/materials',
        array: materialScrape
    },
    {
        path: './scrape_output/materials',
        array: masterRankMaterialScrape
    },
    {
        path: './scrape_output/skills',
        array: skillScrape
    },
    {
        path: './scrape_output/decorations',
        array: decorationScrape
    },
];