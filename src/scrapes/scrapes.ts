import { getArmorFromDom } from "../scrapers/getArmor";
import { getStringsAsDOMs } from "../util/util";

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