import { armorScrapes } from "./scrapes/scrapes";

armorScrapes.forEach((scrape) => {
    scrape.forEach((obj) => {
        console.log(obj);
    });
});