import { getArmorFromDom } from "./scrapers/getArmor";
import { FileManager, getFileAsDOM, getTableAsArray } from "./util/util";
/*import { Requests } from './consts.js';
import { Scraper } from './scrapers.js';

const scraper = new Scraper();
scraper.addRequests(Requests);
scraper.scrapeAll();*/

const fileManager = new FileManager();

const pathToExample = './download_output/armor/arms.html';
const pathToExampleOut = './scrape_output/armor';

const document = getFileAsDOM(pathToExample);

const armor = getArmorFromDom('arms', document);

fileManager.writeArray(pathToExampleOut, armor);