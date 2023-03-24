import { getArmorFromDom } from "./scrapers/getArmor";
import { getFileAsDOM, getTableAsArray } from "./util/util";
/*import { Requests } from './consts.js';
import { Scraper } from './scrapers.js';

const scraper = new Scraper();
scraper.addRequests(Requests);
scraper.scrapeAll();*/

const pathToExample = './download_output/armor/arms.html';
const document = getFileAsDOM(pathToExample);
getArmorFromDom('arms', document);
/*const table = document.querySelector('tbody');
if (table) {
    const elementArray = getTableAsArray<Object>(table, (row) => {
        console.log(row.textContent);
        return row;
    });
}*/