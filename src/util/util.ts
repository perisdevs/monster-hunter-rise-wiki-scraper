import { readFileSync } from 'fs';
import * as jsdom from 'jsdom';
const { JSDOM } = jsdom;

export function getFileAsDOM(filepath: string) {
    const fileString = readFileSync(filepath, 'utf-8');
    const { document } = (new JSDOM(fileString)).window;
    return document;
}