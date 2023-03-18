import * as fs from 'fs';
import * as jsdom from 'jsdom';
import { HeadArmor, ChestArmor, ArmsArmor, WaistArmor, LegsArmor } from './armors.js';
import { scrapeRowForArmor } from './armorScrapers.js';
import { WeaponTypeInfo } from './consts.js';
const { JSDOM } = jsdom;

export function headArmorResponse(res) {
    console.log(`HeadArmor Status: ${res.statusCode}`);

    if (!fs.existsSync('armors/head/high')) {
        fs.mkdirSync('armors/head/high', {recursive: true});
    }

    if (!fs.existsSync('armors/head/low')) {
        fs.mkdirSync('armors/head/low', {recursive: true});
    }

    if (!fs.existsSync('armors/head/master')) {
        fs.mkdirSync('armors/head/master', {recursive: true});
    }

    let responseText = '';
    res.on('data', d => {
        responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window; 
        const headArmorIndeces = WeaponTypeInfo.Armor;       

        let containers = document.querySelectorAll('table.wiki_table tbody');

        let highRankContainer = containers[1];
        let highRankArmors = Array.from(highRankContainer.children);

        let scrapedHighRankArmors = [];

        highRankArmors.forEach((row) => {
            let headArmor = new HeadArmor(scrapeRowForArmor(row, headArmorIndeces));
            headArmor.type = 'head';
            scrapedHighRankArmors.push(headArmor);
        });        

        let lowRankContainer = containers[2];        
        let lowRankArmors = Array.from(lowRankContainer.children);
        
        let scrapedLowRankArmors = [];

        lowRankArmors.forEach((row) => {
            let headArmor = new HeadArmor(scrapeRowForArmor(row, headArmorIndeces));
            headArmor.type = 'head';
            scrapedLowRankArmors.push(headArmor);
        });

        let masterRankContainer = containers[0];
        let masterRankArmors = Array.from(masterRankContainer.children);

        let scrapedMasterRankArmors = [];

        masterRankArmors.forEach((row) => {
            let headArmor = new HeadArmor(scrapeRowForArmor(row, headArmorIndeces));
            headArmor.type = 'head';
            scrapedMasterRankArmors.push(headArmor);
        });

        scrapedHighRankArmors.forEach((armor) => {
            let armorString = JSON.stringify(armor);
            let fileName = armor.name.replace(/\s/g, '-');
            fs.writeFileSync(`armors/head/high/${fileName}.json`, armorString);
        });

        scrapedLowRankArmors.forEach((armor) => {
            let armorString = JSON.stringify(armor);
            let fileName = armor.name.replace(/\s/g, '-');
            fs.writeFileSync(`armors/head/low/${fileName}.json`, armorString);
        });

        scrapedMasterRankArmors.forEach((armor) => {
            let armorString = JSON.stringify(armor);
            let fileName = armor.name.replace(/\s/g, '-');
            fs.writeFileSync(`armors/head/master/${fileName}.json`, armorString);
        });

    });
}

export function chestArmorResponse(res) {
    console.log(`ChestArmor Status: ${res.statusCode}`);

    if (!fs.existsSync('armors/chest/high')) {
        fs.mkdirSync('armors/chest/high', {recursive: true});
    }

    if (!fs.existsSync('armors/chest/low')) {
        fs.mkdirSync('armors/chest/low', {recursive: true});
    }

    if (!fs.existsSync('armors/chest/master')) {
        fs.mkdirSync('armors/chest/master', {recursive: true});
    }

    let responseText = '';
    res.on('data', d => {
        responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window; 
        const chestArmorIndeces = WeaponTypeInfo.Armor;       

        let containers = document.querySelectorAll('table.wiki_table tbody');

        let highRankContainer = containers[1];
        let highRankArmors = Array.from(highRankContainer.children);

        let scrapedHighRankArmors = [];

        highRankArmors.forEach((row) => {
            let chestArmor = new ChestArmor(scrapeRowForArmor(row, chestArmorIndeces));
            chestArmor.type = 'chest';
            scrapedHighRankArmors.push(chestArmor);
        });        

        let lowRankContainer = containers[2];        
        let lowRankArmors = Array.from(lowRankContainer.children);
        
        let scrapedLowRankArmors = [];

        lowRankArmors.forEach((row) => {
            let chestArmor = new ChestArmor(scrapeRowForArmor(row, chestArmorIndeces));
            chestArmor.type = 'chest';
            scrapedLowRankArmors.push(chestArmor);
        });

        let masterRankContainer = containers[0];
        let masterRankArmors = Array.from(masterRankContainer.children);

        let scrapedMasterRankArmors = [];

        masterRankArmors.forEach((row) => {
            let chestArmor = new ChestArmor(scrapeRowForArmor(row, chestArmorIndeces));
            chestArmor.type = 'chest';
            scrapedMasterRankArmors.push(chestArmor);
        });

        scrapedHighRankArmors.forEach((armor) => {
            let armorString = JSON.stringify(armor);
            let fileName = armor.name.replace(/\s/g, '-');
            fs.writeFileSync(`armors/chest/high/${fileName}.json`, armorString);
        });

        scrapedLowRankArmors.forEach((armor) => {
            let armorString = JSON.stringify(armor);
            let fileName = armor.name.replace(/\s/g, '-');
            fs.writeFileSync(`armors/chest/low/${fileName}.json`, armorString);
        });

        scrapedMasterRankArmors.forEach((armor) => {
            let armorString = JSON.stringify(armor);
            let fileName = armor.name.replace(/\s/g, '-');
            fs.writeFileSync(`armors/chest/master/${fileName}.json`, armorString);
        });

    });
}

export function armsArmorResponse(res) {
    console.log(`ArmsArmor Status: ${res.statusCode}`);

    if (!fs.existsSync('armors/arms/high')) {
        fs.mkdirSync('armors/arms/high', {recursive: true});
    }

    if (!fs.existsSync('armors/arms/low')) {
        fs.mkdirSync('armors/arms/low', {recursive: true});
    }

    if (!fs.existsSync('armors/arms/master')) {
        fs.mkdirSync('armors/arms/master', {recursive: true});
    }

    let responseText = '';
    res.on('data', d => {
        responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window; 
        const armsArmorIndeces = WeaponTypeInfo.Armor;       

        let containers = document.querySelectorAll('table.wiki_table tbody');

        let highRankContainer = containers[1];
        let highRankArmors = Array.from(highRankContainer.children);

        let scrapedHighRankArmors = [];

        highRankArmors.forEach((row) => {
            let armsArmor = new ArmsArmor(scrapeRowForArmor(row, armsArmorIndeces));
            armsArmor.type = 'arms';
            scrapedHighRankArmors.push(armsArmor);
        });        

        let lowRankContainer = containers[2];        
        let lowRankArmors = Array.from(lowRankContainer.children);
        
        let scrapedLowRankArmors = [];

        lowRankArmors.forEach((row) => {
            let armsArmor = new ArmsArmor(scrapeRowForArmor(row, armsArmorIndeces));
            armsArmor.type = 'arms';
            scrapedLowRankArmors.push(armsArmor);
        });

        let masterRankContainer = containers[0];
        let masterRankArmors = Array.from(masterRankContainer.children);

        let scrapedMasterRankArmors = [];

        masterRankArmors.forEach((row) => {
            let armsArmor = new ArmsArmor(scrapeRowForArmor(row, armsArmorIndeces));
            armsArmor.type = 'arms';
            scrapedMasterRankArmors.push(armsArmor);
        });

        scrapedHighRankArmors.forEach((armor) => {
            let armorString = JSON.stringify(armor);
            let fileName = armor.name.replace(/\s/g, '-');
            fs.writeFileSync(`armors/arms/high/${fileName}.json`, armorString);
        });

        scrapedLowRankArmors.forEach((armor) => {
            let armorString = JSON.stringify(armor);
            let fileName = armor.name.replace(/\s/g, '-');
            fs.writeFileSync(`armors/arms/low/${fileName}.json`, armorString);
        });

        scrapedMasterRankArmors.forEach((armor) => {
            let armorString = JSON.stringify(armor);
            let fileName = armor.name.replace(/\s/g, '-');
            fs.writeFileSync(`armors/arms/master/${fileName}.json`, armorString);
        });

    });
}

export function waistArmorResponse(res) {
    console.log(`WaistArmor Status: ${res.statusCode}`);

    if (!fs.existsSync('armors/waist/high')) {
        fs.mkdirSync('armors/waist/high', {recursive: true});
    }

    if (!fs.existsSync('armors/waist/low')) {
        fs.mkdirSync('armors/waist/low', {recursive: true});
    }

    if (!fs.existsSync('armors/waist/master')) {
        fs.mkdirSync('armors/waist/master', {recursive: true});
    }

    let responseText = '';
    res.on('data', d => {
        responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window; 
        const waistArmorIndeces = WeaponTypeInfo.Armor;       

        let containers = document.querySelectorAll('table.wiki_table tbody');

        let highRankContainer = containers[1];
        let highRankArmors = Array.from(highRankContainer.children);

        let scrapedHighRankArmors = [];

        highRankArmors.forEach((row) => {
            let waistArmor = new WaistArmor(scrapeRowForArmor(row, waistArmorIndeces));
            waistArmor.type = 'waist';
            scrapedHighRankArmors.push(waistArmor);
        });        

        let lowRankContainer = containers[2];        
        let lowRankArmors = Array.from(lowRankContainer.children);
        
        let scrapedLowRankArmors = [];

        lowRankArmors.forEach((row) => {
            let waistArmor = new WaistArmor(scrapeRowForArmor(row, waistArmorIndeces));
            waistArmor.type = 'waist';
            scrapedLowRankArmors.push(waistArmor);
        });

        let masterRankContainer = containers[0];
        let masterRankArmors = Array.from(masterRankContainer.children);

        let scrapedMasterRankArmors = [];

        masterRankArmors.forEach((row) => {
            let waistArmor = new WaistArmor(scrapeRowForArmor(row, waistArmorIndeces));
            waistArmor.type = 'waist';
            scrapedMasterRankArmors.push(waistArmor);
        });

        scrapedHighRankArmors.forEach((armor) => {
            let armorString = JSON.stringify(armor);
            let fileName = armor.name.replace(/\s/g, '-');
            fs.writeFileSync(`armors/waist/high/${fileName}.json`, armorString);
        });

        scrapedLowRankArmors.forEach((armor) => {
            let armorString = JSON.stringify(armor);
            let fileName = armor.name.replace(/\s/g, '-');
            fs.writeFileSync(`armors/waist/low/${fileName}.json`, armorString);
        });

        scrapedMasterRankArmors.forEach((armor) => {
            let armorString = JSON.stringify(armor);
            let fileName = armor.name.replace(/\s/g, '-');
            fs.writeFileSync(`armors/waist/master/${fileName}.json`, armorString);
        });

    });
}

export function legsArmorResponse(res) {
    console.log(`LegsArmor Status: ${res.statusCode}`);

    if (!fs.existsSync('armors/legs/high')) {
        fs.mkdirSync('armors/legs/high', {recursive: true});
    }

    if (!fs.existsSync('armors/legs/low')) {
        fs.mkdirSync('armors/legs/low', {recursive: true});
    }

    if (!fs.existsSync('armors/legs/master')) {
        fs.mkdirSync('armors/legs/master', {recursive: true});
    }

    let responseText = '';
    res.on('data', d => {
        responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window; 
        const legsArmorIndeces = WeaponTypeInfo.Armor;       

        let containers = document.querySelectorAll('table.wiki_table tbody');

        let highRankContainer = containers[1];
        let highRankArmors = Array.from(highRankContainer.children);

        let scrapedHighRankArmors = [];

        highRankArmors.forEach((row) => {
            let legsArmor = new LegsArmor(scrapeRowForArmor(row, legsArmorIndeces));
            legsArmor.type = 'legs';
            scrapedHighRankArmors.push(legsArmor);
        });        

        let lowRankContainer = containers[2];        
        let lowRankArmors = Array.from(lowRankContainer.children);
        
        let scrapedLowRankArmors = [];

        lowRankArmors.forEach((row) => {
            let legsArmor = new LegsArmor(scrapeRowForArmor(row, legsArmorIndeces));
            legsArmor.type = 'legs';
            scrapedLowRankArmors.push(legsArmor);
        });

        let masterRankContainer = containers[0];
        let masterRankArmors = Array.from(masterRankContainer.children);

        let scrapedMasterRankArmors = [];

        masterRankArmors.forEach((row) => {
            let legsArmor = new LegsArmor(scrapeRowForArmor(row, legsArmorIndeces));
            legsArmor.type = 'legs';
            scrapedMasterRankArmors.push(legsArmor);
        });

        scrapedHighRankArmors.forEach((armor) => {
            let armorString = JSON.stringify(armor);
            let fileName = armor.name.replace(/\s/g, '-');
            fs.writeFileSync(`armors/legs/high/${fileName}.json`, armorString);
        });

        scrapedLowRankArmors.forEach((armor) => {
            let armorString = JSON.stringify(armor);
            let fileName = armor.name.replace(/\s/g, '-');
            fs.writeFileSync(`armors/legs/low/${fileName}.json`, armorString);
        });

        scrapedMasterRankArmors.forEach((armor) => {
            let armorString = JSON.stringify(armor);
            let fileName = armor.name.replace(/\s/g, '-');
            fs.writeFileSync(`armors/legs/master/${fileName}.json`, armorString);
        });

    });
}

