import { readFileSync } from 'fs';
import * as jsdom from 'jsdom';
const { JSDOM } = jsdom;

export function getFileAsDOM(filepath: string): Document {
    const fileString = readFileSync(filepath, 'utf-8');
    const { document } = (new JSDOM(fileString)).window;
    return document;
}

export function getTableAsArray<T extends Object>(
    table: HTMLTableSectionElement,
    rowParser: (row: HTMLTableRowElement) => T) : T[] {
        const ObjectArray: T[] = [];
        const rows = Array.from(table.getElementsByTagName('tr'));
        rows.forEach((row) => {
            ObjectArray.push(rowParser(row));
        });
        return ObjectArray;
}