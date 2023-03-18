export class Scrape<T extends Object> {
    filepath: string;
    scrapingFunction: () => T;

    constructor(filepath: string, scrapingFunction: () => T) {
        this.filepath = filepath;
        this.scrapingFunction = scrapingFunction;
    }

    scrape() {
        return this.scrapingFunction;
    }
}