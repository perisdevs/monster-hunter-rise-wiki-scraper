import { getFileAsDOM } from "./util/util";
/*import { Requests } from './consts.js';
import { Scraper } from './scrapers.js';

const scraper = new Scraper();
scraper.addRequests(Requests);
scraper.scrapeAll();*/

const pathToExample = './download_output/armor/arms.html';
const document = getFileAsDOM(pathToExample);
const table = document.querySelector('tbody');
console.log(table?.textContent);




