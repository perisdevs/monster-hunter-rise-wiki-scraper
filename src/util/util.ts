import * as fs from 'fs';
import * as jsdom from 'jsdom';
const { JSDOM } = jsdom;

export class FileManager {
    paths: string[] = [];

    addPath(path: string) {
        this.paths.push(path);
    }

    createPaths() {
        this.paths.forEach((path) => {
            if (!fs.existsSync(path)) {
                fs.mkdirSync('path', { recursive: true });
            }
        });
    }
}

export function getFileAsDOM(filepath: string): Document {
    const fileString = fs.readFileSync(filepath, 'utf-8');
    const { document } = (new JSDOM(fileString)).window;
    return document;
}

export function getTableAsArray<T extends Object>(
    table: Element,
    rowParser: (row: HTMLTableRowElement) => T) : T[] {
        const ObjectArray: T[] = [];
        const rows = Array.from(table.getElementsByTagName('tr'));
        rows.forEach((row) => {
            ObjectArray.push(rowParser(row));
        });
        return ObjectArray;
}