import { scrapeContainerForAffinity, scrapeContainerForArcShot, scrapeContainerForChargeShot, scrapeContainerForClusterType, scrapeContainerForCoatings, scrapeContainerForDamage, scrapeContainerForDefenseBonus, scrapeContainerForDeviation, scrapeContainerForElementDamage, scrapeContainerForKinsectLevel, scrapeContainerForMaterials, scrapeContainerForMelodies, scrapeContainerForName, scrapeContainerForPhialType, scrapeContainerForRampageSkills, scrapeContainerForRarity, scrapeContainerForRecoil, scrapeContainerForReloadSpeed, scrapeContainerForSharpness, scrapeContainerForShellLevel, scrapeContainerForShellType, scrapeContainerForSkills, scrapeContainerForSpecialAmmo } from './requests.js';
import { LongSword, GreatSword, ChargeBlade, SwordAndShield, DualBlades, Hammer, HuntingHorn, Lance, Gunlance, SwitchAxe, InsectGlaive, Bow, LightBowgun, HeavyBowgun } from './lib.js';
import { WeaponTypeInfo } from './consts.js';
import * as fs from 'fs';
import * as jsdom from 'jsdom';
const { JSDOM } = jsdom;

export function longSwordResponse(res) {
    console.log(`LongSword Status: ${res.statusCode}`);

    if (!fs.existsSync('weapons/long_swords')) {
        fs.mkdirSync('weapons/long_swords', {recursive: true});
    }   

    let responseText = '';
    res.on('data', d => {
    responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window; //parse response as HTML doc
        const longSwordIndeces = WeaponTypeInfo.LongSword;

        let table = document.querySelector('tbody'); //weapon info is stored as a table
        let rows = Array.from(table.children); //one weapon per table row

        rows.forEach((row) => {

        let weaponInfo = Array.from(row.children); //weapon info is represented as td elements in the row                

        let nameSkillSharpnessContainer = weaponInfo[longSwordIndeces.NameSkillSharpness];                
        let name = scrapeContainerForName(nameSkillSharpnessContainer);

        let skillSlots = scrapeContainerForSkills(nameSkillSharpnessContainer);                                       

        let sharpness = scrapeContainerForSharpness(nameSkillSharpnessContainer);        

        let damageContainer = weaponInfo[longSwordIndeces.Damage];
        let damage = scrapeContainerForDamage(damageContainer);

        let elementDamageContainer = weaponInfo[longSwordIndeces.ElementDamage];
        let elementDamage = scrapeContainerForElementDamage(elementDamageContainer);        

        let affinityContainer = weaponInfo[longSwordIndeces.Affinity];
        let affinity = scrapeContainerForAffinity(affinityContainer);

        let defenseBonusContainer = weaponInfo[longSwordIndeces.DefenseBonus];
        let defenseBonus = scrapeContainerForDefenseBonus(defenseBonusContainer);
        
        let rarityContainer = weaponInfo[longSwordIndeces.Rarity];
        let rarity = scrapeContainerForRarity(rarityContainer);

        let rampageSkillContainer = weaponInfo[longSwordIndeces.RampageSkills];
        let rampageSkills = scrapeContainerForRampageSkills(rampageSkillContainer);

        let materialsContainer = weaponInfo[longSwordIndeces.Crafting];
        let materials = scrapeContainerForMaterials(materialsContainer);
                            
        let weapon = new LongSword({
            name: name,
            sharpness: sharpness,
            skillSlots: skillSlots,
            damage: damage,
            elementDamage: elementDamage,
            affinity: affinity,
            defenseBonus: defenseBonus,
            rarity: rarity,
            rampageSkills: rampageSkills,
            materials: materials,          
        });

        let weaponString = JSON.stringify(weapon);
        let fileName = weapon.name.replace(/\s/g, '-');      

        fs.writeFileSync(`weapons/long_swords/${fileName}.json`, weaponString);
        
        });
    });
}

export function greatSwordResponse(res) {
    console.log(`GreatSword Status: ${res.statusCode}`);

    if (!fs.existsSync('weapons/great_swords')) {
        fs.mkdirSync('weapons/great_swords', {recursive: true});
    }   

    let responseText = '';
    res.on('data', d => {
    responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window; //parse response as HTML doc
        const greatSwordIndeces = WeaponTypeInfo.GreatSword;

        let table = document.querySelector('tbody'); //weapon info is stored as a table
        let rows = Array.from(table.children); //one weapon per table row

        rows.forEach((row) => {

        let weaponInfo = Array.from(row.children); //weapon info is represented as td elements in the row                

        let nameSkillSharpnessContainer = weaponInfo[greatSwordIndeces.NameSkillSharpness];                
        let name = scrapeContainerForName(nameSkillSharpnessContainer);

        let skillSlots = scrapeContainerForSkills(nameSkillSharpnessContainer);                                       

        let sharpness = scrapeContainerForSharpness(nameSkillSharpnessContainer);        

        let damageContainer = weaponInfo[greatSwordIndeces.Damage];
        let damage = scrapeContainerForDamage(damageContainer);

        let elementDamageContainer = weaponInfo[greatSwordIndeces.ElementDamage];
        let elementDamage = scrapeContainerForElementDamage(elementDamageContainer);        

        let affinityContainer = weaponInfo[greatSwordIndeces.Affinity];
        let affinity = scrapeContainerForAffinity(affinityContainer);

        let defenseBonusContainer = weaponInfo[greatSwordIndeces.DefenseBonus];
        let defenseBonus = scrapeContainerForDefenseBonus(defenseBonusContainer);
        
        let rarityContainer = weaponInfo[greatSwordIndeces.Rarity];
        let rarity = scrapeContainerForRarity(rarityContainer);

        let rampageSkillContainer = weaponInfo[greatSwordIndeces.RampageSkills];
        let rampageSkills = scrapeContainerForRampageSkills(rampageSkillContainer);

        let materialsContainer = weaponInfo[greatSwordIndeces.Crafting];
        let materials = scrapeContainerForMaterials(materialsContainer);
                            
        let weapon = new GreatSword({
            name: name,
            sharpness: sharpness,
            skillSlots: skillSlots,
            damage: damage,
            elementDamage: elementDamage,
            affinity: affinity,
            defenseBonus: defenseBonus,
            rarity: rarity,
            rampageSkills: rampageSkills,
            materials: materials,          
        });

        let weaponString = JSON.stringify(weapon);
        let fileName = weapon.name.replace(/\s/g, '-');      

        fs.writeFileSync(`weapons/great_swords/${fileName}.json`, weaponString);
        
        });
    });
}

export function chargeBladeResponse(res) {
    console.log(`ChargeBlade Status: ${res.statusCode}`);

    if (!fs.existsSync('weapons/charge_blades')) {
        fs.mkdirSync('weapons/charge_blades', {recursive: true});
    }   

    let responseText = '';
    res.on('data', d => {
    responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window; //parse response as HTML doc
        const chargeBladeIndeces = WeaponTypeInfo.ChargeBlade;

        let table = document.querySelector('tbody'); //weapon info is stored as a table
        let rows = Array.from(table.children); //one weapon per table row

        rows.forEach((row) => {

        let weaponInfo = Array.from(row.children); //weapon info is represented as td elements in the row                

        let nameSkillSharpnessContainer = weaponInfo[chargeBladeIndeces.NameSkillSharpness];                
        let name = scrapeContainerForName(nameSkillSharpnessContainer);

        let skillSlots = scrapeContainerForSkills(nameSkillSharpnessContainer);                                       

        let sharpness = scrapeContainerForSharpness(nameSkillSharpnessContainer);        

        let damageContainer = weaponInfo[chargeBladeIndeces.Damage];
        let damage = scrapeContainerForDamage(damageContainer);

        let elementDamageContainer = weaponInfo[chargeBladeIndeces.ElementDamage];
        let elementDamage = scrapeContainerForElementDamage(elementDamageContainer);        

        let affinityContainer = weaponInfo[chargeBladeIndeces.Affinity];
        let affinity = scrapeContainerForAffinity(affinityContainer);

        let defenseBonusContainer = weaponInfo[chargeBladeIndeces.DefenseBonus];
        let defenseBonus = scrapeContainerForDefenseBonus(defenseBonusContainer);
        
        let rarityContainer = weaponInfo[chargeBladeIndeces.Rarity];
        let rarity = scrapeContainerForRarity(rarityContainer);

        let rampageSkillContainer = weaponInfo[chargeBladeIndeces.RampageSkills];
        let rampageSkills = scrapeContainerForRampageSkills(rampageSkillContainer);

        let materialsContainer = weaponInfo[chargeBladeIndeces.Crafting];
        let materials = scrapeContainerForMaterials(materialsContainer);

        let phialContainer = weaponInfo[chargeBladeIndeces.Phial];
        let phialType = scrapeContainerForPhialType(phialContainer);
                            
        let weapon = new ChargeBlade({
            name: name,
            sharpness: sharpness,
            skillSlots: skillSlots,
            damage: damage,
            elementDamage: elementDamage,
            affinity: affinity,
            defenseBonus: defenseBonus,
            rarity: rarity,
            rampageSkills: rampageSkills,
            materials: materials,
            phial: phialType,          
        });

        let weaponString = JSON.stringify(weapon);
        let fileName = weapon.name.replace(/\s/g, '-');      

        fs.writeFileSync(`weapons/charge_blades/${fileName}.json`, weaponString);
        
        });
    });
}

export function swordAndShieldResponse(res) {
    console.log(`SwordAndShield Status: ${res.statusCode}`);

    if (!fs.existsSync('weapons/sword_and_shields')) {
        fs.mkdirSync('weapons/sword_and_shields', {recursive: true});
    }   

    let responseText = '';
    res.on('data', d => {
    responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window; //parse response as HTML doc
        const swordAndShieldIndeces = WeaponTypeInfo.SwordAndShield;

        let table = document.querySelector('tbody'); //weapon info is stored as a table
        let rows = Array.from(table.children); //one weapon per table row

        rows.forEach((row) => {

        let weaponInfo = Array.from(row.children); //weapon info is represented as td elements in the row                

        let nameSkillSharpnessContainer = weaponInfo[swordAndShieldIndeces.NameSkillSharpness];                
        let name = scrapeContainerForName(nameSkillSharpnessContainer);

        let skillSlots = scrapeContainerForSkills(nameSkillSharpnessContainer);                                       

        let sharpness = scrapeContainerForSharpness(nameSkillSharpnessContainer);        

        let damageContainer = weaponInfo[swordAndShieldIndeces.Damage];
        let damage = scrapeContainerForDamage(damageContainer);

        let elementDamageContainer = weaponInfo[swordAndShieldIndeces.ElementDamage];
        let elementDamage = scrapeContainerForElementDamage(elementDamageContainer);        

        let affinityContainer = weaponInfo[swordAndShieldIndeces.Affinity];
        let affinity = scrapeContainerForAffinity(affinityContainer);

        let defenseBonusContainer = weaponInfo[swordAndShieldIndeces.DefenseBonus];
        let defenseBonus = scrapeContainerForDefenseBonus(defenseBonusContainer);
        
        let rarityContainer = weaponInfo[swordAndShieldIndeces.Rarity];
        let rarity = scrapeContainerForRarity(rarityContainer);

        let rampageSkillContainer = weaponInfo[swordAndShieldIndeces.RampageSkills];
        let rampageSkills = scrapeContainerForRampageSkills(rampageSkillContainer);

        let materialsContainer = weaponInfo[swordAndShieldIndeces.Crafting];
        let materials = scrapeContainerForMaterials(materialsContainer);
                            
        let weapon = new SwordAndShield({
            name: name,
            sharpness: sharpness,
            skillSlots: skillSlots,
            damage: damage,
            elementDamage: elementDamage,
            affinity: affinity,
            defenseBonus: defenseBonus,
            rarity: rarity,
            rampageSkills: rampageSkills,
            materials: materials,          
        });

        let weaponString = JSON.stringify(weapon);
        let fileName = weapon.name.replace(/\s/g, '-');      

        fs.writeFileSync(`weapons/sword_and_shields/${fileName}.json`, weaponString);
        
        });
    });
}

export function dualBladesResponse(res) {
    console.log(`DualBlades Status: ${res.statusCode}`);

    if (!fs.existsSync('weapons/dual_blades')) {
        fs.mkdirSync('weapons/dual_blades', {recursive: true});
    }   

    let responseText = '';
    res.on('data', d => {
    responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window; //parse response as HTML doc
        const dualBladesIndeces = WeaponTypeInfo.DualBlades;

        let table = document.querySelector('tbody'); //weapon info is stored as a table
        let rows = Array.from(table.children); //one weapon per table row

        rows.forEach((row) => {

        let weaponInfo = Array.from(row.children); //weapon info is represented as td elements in the row                

        let nameSkillSharpnessContainer = weaponInfo[dualBladesIndeces.NameSkillSharpness];                
        let name = scrapeContainerForName(nameSkillSharpnessContainer);

        let skillSlots = scrapeContainerForSkills(nameSkillSharpnessContainer);                                       

        let sharpness = scrapeContainerForSharpness(nameSkillSharpnessContainer);        

        let damageContainer = weaponInfo[dualBladesIndeces.Damage];
        let damage = scrapeContainerForDamage(damageContainer);

        let elementDamageContainer = weaponInfo[dualBladesIndeces.ElementDamage];
        let elementDamage = scrapeContainerForElementDamage(elementDamageContainer);        

        let affinityContainer = weaponInfo[dualBladesIndeces.Affinity];
        let affinity = scrapeContainerForAffinity(affinityContainer);

        let defenseBonusContainer = weaponInfo[dualBladesIndeces.DefenseBonus];
        let defenseBonus = scrapeContainerForDefenseBonus(defenseBonusContainer);
        
        let rarityContainer = weaponInfo[dualBladesIndeces.Rarity];
        let rarity = scrapeContainerForRarity(rarityContainer);

        let rampageSkillContainer = weaponInfo[dualBladesIndeces.RampageSkills];
        let rampageSkills = scrapeContainerForRampageSkills(rampageSkillContainer);

        let materialsContainer = weaponInfo[dualBladesIndeces.Crafting];
        let materials = scrapeContainerForMaterials(materialsContainer);
                            
        let weapon = new DualBlades({
            name: name,
            sharpness: sharpness,
            skillSlots: skillSlots,
            damage: damage,
            elementDamage: elementDamage,
            affinity: affinity,
            defenseBonus: defenseBonus,
            rarity: rarity,
            rampageSkills: rampageSkills,
            materials: materials,          
        });

        let weaponString = JSON.stringify(weapon);
        let fileName = weapon.name.replace(/\s/g, '-');      

        fs.writeFileSync(`weapons/dual_blades/${fileName}.json`, weaponString);
        
        });
    });
}

export function hammerResponse(res) {
    console.log(`Hammer Status: ${res.statusCode}`);

    if (!fs.existsSync('weapons/hammers')) {
        fs.mkdirSync('weapons/hammers', {recursive: true});
    }   

    let responseText = '';
    res.on('data', d => {
    responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window; //parse response as HTML doc
        const hammerIndeces = WeaponTypeInfo.Hammer;

        let table = document.querySelector('tbody'); //weapon info is stored as a table
        let rows = Array.from(table.children); //one weapon per table row

        rows.forEach((row) => {

        let weaponInfo = Array.from(row.children); //weapon info is represented as td elements in the row                

        let nameSkillSharpnessContainer = weaponInfo[hammerIndeces.NameSkillSharpness];                
        let name = scrapeContainerForName(nameSkillSharpnessContainer);

        let skillSlots = scrapeContainerForSkills(nameSkillSharpnessContainer);                                       

        let sharpness = scrapeContainerForSharpness(nameSkillSharpnessContainer);        

        let damageContainer = weaponInfo[hammerIndeces.Damage];
        let damage = scrapeContainerForDamage(damageContainer);

        let elementDamageContainer = weaponInfo[hammerIndeces.ElementDamage];
        let elementDamage = scrapeContainerForElementDamage(elementDamageContainer);        

        let affinityContainer = weaponInfo[hammerIndeces.Affinity];
        let affinity = scrapeContainerForAffinity(affinityContainer);

        let defenseBonusContainer = weaponInfo[hammerIndeces.DefenseBonus];
        let defenseBonus = scrapeContainerForDefenseBonus(defenseBonusContainer);
        
        let rarityContainer = weaponInfo[hammerIndeces.Rarity];
        let rarity = scrapeContainerForRarity(rarityContainer);

        let rampageSkillContainer = weaponInfo[hammerIndeces.RampageSkills];
        let rampageSkills = scrapeContainerForRampageSkills(rampageSkillContainer);

        let materialsContainer = weaponInfo[hammerIndeces.Crafting];
        let materials = scrapeContainerForMaterials(materialsContainer);
                            
        let weapon = new Hammer({
            name: name,
            sharpness: sharpness,
            skillSlots: skillSlots,
            damage: damage,
            elementDamage: elementDamage,
            affinity: affinity,
            defenseBonus: defenseBonus,
            rarity: rarity,
            rampageSkills: rampageSkills,
            materials: materials,          
        });

        let weaponString = JSON.stringify(weapon);
        let fileName = weapon.name.replace(/\s/g, '-');      

        fs.writeFileSync(`weapons/hammers/${fileName}.json`, weaponString);
        
        });
    });
}

export function huntingHornResponse(res) {
    console.log(`HuntingHorn Status: ${res.statusCode}`);

    if (!fs.existsSync('weapons/hunting_horns')) {
        fs.mkdirSync('weapons/hunting_horns', {recursive: true});
    }   

    let responseText = '';
    res.on('data', d => {
    responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window; //parse response as HTML doc
        const huntingHornIndeces = WeaponTypeInfo.HuntingHorn;

        let table = document.querySelector('tbody'); //weapon info is stored as a table
        let rows = Array.from(table.children); //one weapon per table row

        rows.forEach((row) => {

        let weaponInfo = Array.from(row.children); //weapon info is represented as td elements in the row                

        let nameSkillSharpnessContainer = weaponInfo[huntingHornIndeces.NameSkillSharpness];                
        let name = scrapeContainerForName(nameSkillSharpnessContainer);

        let skillSlots = scrapeContainerForSkills(nameSkillSharpnessContainer);                                       

        let sharpness = scrapeContainerForSharpness(nameSkillSharpnessContainer);        

        let damageContainer = weaponInfo[huntingHornIndeces.Damage];
        let damage = scrapeContainerForDamage(damageContainer);

        let elementDamageContainer = weaponInfo[huntingHornIndeces.ElementDamage];
        let elementDamage = scrapeContainerForElementDamage(elementDamageContainer);        

        let affinityContainer = weaponInfo[huntingHornIndeces.Affinity];
        let affinity = scrapeContainerForAffinity(affinityContainer);

        let defenseBonusContainer = weaponInfo[huntingHornIndeces.DefenseBonus];
        let defenseBonus = scrapeContainerForDefenseBonus(defenseBonusContainer);
        
        let rarityContainer = weaponInfo[huntingHornIndeces.Rarity];
        let rarity = scrapeContainerForRarity(rarityContainer);

        let rampageSkillContainer = weaponInfo[huntingHornIndeces.RampageSkills];
        let rampageSkills = scrapeContainerForRampageSkills(rampageSkillContainer);

        let materialsContainer = weaponInfo[huntingHornIndeces.Crafting];
        let materials = scrapeContainerForMaterials(materialsContainer);

        let melodiesContainer = weaponInfo[huntingHornIndeces.Melody];
        let melodies = scrapeContainerForMelodies(melodiesContainer);
                            
        let weapon = new HuntingHorn({
            name: name,
            sharpness: sharpness,
            skillSlots: skillSlots,
            damage: damage,
            elementDamage: elementDamage,
            affinity: affinity,
            defenseBonus: defenseBonus,
            rarity: rarity,
            rampageSkills: rampageSkills,
            materials: materials,   
            melodies: melodies,       
        });

        let weaponString = JSON.stringify(weapon);
        let fileName = weapon.name.replace(/\s/g, '-');      

        fs.writeFileSync(`weapons/hunting_horns/${fileName}.json`, weaponString);
        
        });
    });
}

export function lanceResponse(res) {
    console.log(`Lance Status: ${res.statusCode}`);

    if (!fs.existsSync('weapons/lances')) {
        fs.mkdirSync('weapons/lances', {recursive: true});
    }   

    let responseText = '';
    res.on('data', d => {
    responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window; //parse response as HTML doc
        const lanceIndeces = WeaponTypeInfo.Lance;

        let table = document.querySelector('tbody'); //weapon info is stored as a table
        let rows = Array.from(table.children); //one weapon per table row

        rows.forEach((row) => {

        let weaponInfo = Array.from(row.children); //weapon info is represented as td elements in the row                

        let nameSkillSharpnessContainer = weaponInfo[lanceIndeces.NameSkillSharpness];                
        let name = scrapeContainerForName(nameSkillSharpnessContainer);

        let skillSlots = scrapeContainerForSkills(nameSkillSharpnessContainer);                                       

        let sharpness = scrapeContainerForSharpness(nameSkillSharpnessContainer);        

        let damageContainer = weaponInfo[lanceIndeces.Damage];
        let damage = scrapeContainerForDamage(damageContainer);

        let elementDamageContainer = weaponInfo[lanceIndeces.ElementDamage];
        let elementDamage = scrapeContainerForElementDamage(elementDamageContainer);        

        let affinityContainer = weaponInfo[lanceIndeces.Affinity];
        let affinity = scrapeContainerForAffinity(affinityContainer);

        let defenseBonusContainer = weaponInfo[lanceIndeces.DefenseBonus];
        let defenseBonus = scrapeContainerForDefenseBonus(defenseBonusContainer);
        
        let rarityContainer = weaponInfo[lanceIndeces.Rarity];
        let rarity = scrapeContainerForRarity(rarityContainer);

        let rampageSkillContainer = weaponInfo[lanceIndeces.RampageSkills];
        let rampageSkills = scrapeContainerForRampageSkills(rampageSkillContainer);

        let materialsContainer = weaponInfo[lanceIndeces.Crafting];
        let materials = scrapeContainerForMaterials(materialsContainer);        
                            
        let weapon = new Lance({
            name: name,
            sharpness: sharpness,
            skillSlots: skillSlots,
            damage: damage,
            elementDamage: elementDamage,
            affinity: affinity,
            defenseBonus: defenseBonus,
            rarity: rarity,
            rampageSkills: rampageSkills,
            materials: materials,                  
        });

        let weaponString = JSON.stringify(weapon);
        let fileName = weapon.name.replace(/\s/g, '-');      

        fs.writeFileSync(`weapons/lances/${fileName}.json`, weaponString);
        
        });
    });
}

export function gunlanceResponse(res) {
    console.log(`Gunlance Status: ${res.statusCode}`);

    if (!fs.existsSync('weapons/gunlances')) {
        fs.mkdirSync('weapons/gunlances', {recursive: true});
    }   

    let responseText = '';
    res.on('data', d => {
    responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window; //parse response as HTML doc
        const gunlanceIndeces = WeaponTypeInfo.Gunlance;

        let table = document.querySelector('tbody'); //weapon info is stored as a table
        let rows = Array.from(table.children); //one weapon per table row

        rows.forEach((row) => {

        let weaponInfo = Array.from(row.children); //weapon info is represented as td elements in the row                

        let nameSkillSharpnessContainer = weaponInfo[gunlanceIndeces.NameSkillSharpness];                
        let name = scrapeContainerForName(nameSkillSharpnessContainer);

        let skillSlots = scrapeContainerForSkills(nameSkillSharpnessContainer);                                       

        let sharpness = scrapeContainerForSharpness(nameSkillSharpnessContainer);        

        let damageContainer = weaponInfo[gunlanceIndeces.Damage];
        let damage = scrapeContainerForDamage(damageContainer);

        let elementDamageContainer = weaponInfo[gunlanceIndeces.ElementDamage];
        let elementDamage = scrapeContainerForElementDamage(elementDamageContainer);        

        let affinityContainer = weaponInfo[gunlanceIndeces.Affinity];
        let affinity = scrapeContainerForAffinity(affinityContainer);

        let defenseBonusContainer = weaponInfo[gunlanceIndeces.DefenseBonus];
        let defenseBonus = scrapeContainerForDefenseBonus(defenseBonusContainer);
        
        let rarityContainer = weaponInfo[gunlanceIndeces.Rarity];
        let rarity = scrapeContainerForRarity(rarityContainer);

        let rampageSkillContainer = weaponInfo[gunlanceIndeces.RampageSkills];
        let rampageSkills = scrapeContainerForRampageSkills(rampageSkillContainer);

        let materialsContainer = weaponInfo[gunlanceIndeces.Crafting];
        let materials = scrapeContainerForMaterials(materialsContainer);
        
        let shellTypeContainer = weaponInfo[gunlanceIndeces.ShellType];
        let shellType = scrapeContainerForShellType(shellTypeContainer);

        let shellLevelContainer = weaponInfo[gunlanceIndeces.ShellLevel];
        let shellLevel = scrapeContainerForShellLevel(shellLevelContainer);
                            
        let weapon = new Gunlance({
            name: name,
            sharpness: sharpness,
            skillSlots: skillSlots,
            damage: damage,
            elementDamage: elementDamage,
            affinity: affinity,
            defenseBonus: defenseBonus,
            rarity: rarity,
            rampageSkills: rampageSkills,
            materials: materials, 
            shellType: shellType,
            shellLevel: shellLevel,                 
        });

        let weaponString = JSON.stringify(weapon);
        let fileName = weapon.name.replace(/\s/g, '-');      

        fs.writeFileSync(`weapons/gunlances/${fileName}.json`, weaponString);
        
        });
    });
}

export function switchAxeResponse(res) {
    console.log(`SwitchAxe Status: ${res.statusCode}`);

    if (!fs.existsSync('weapons/switch_axes')) {
        fs.mkdirSync('weapons/switch_axes', {recursive: true});
    }   

    let responseText = '';
    res.on('data', d => {
    responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window; //parse response as HTML doc
        const switchAxeIndeces = WeaponTypeInfo.SwitchAxe;

        let table = document.querySelector('tbody'); //weapon info is stored as a table
        let rows = Array.from(table.children); //one weapon per table row

        rows.forEach((row) => {

        let weaponInfo = Array.from(row.children); //weapon info is represented as td elements in the row                

        let nameSkillSharpnessContainer = weaponInfo[switchAxeIndeces.NameSkillSharpness];                
        let name = scrapeContainerForName(nameSkillSharpnessContainer);

        let skillSlots = scrapeContainerForSkills(nameSkillSharpnessContainer);                                       

        let sharpness = scrapeContainerForSharpness(nameSkillSharpnessContainer);        

        let damageContainer = weaponInfo[switchAxeIndeces.Damage];
        let damage = scrapeContainerForDamage(damageContainer);

        let elementDamageContainer = weaponInfo[switchAxeIndeces.ElementDamage];
        let elementDamage = scrapeContainerForElementDamage(elementDamageContainer);        

        let affinityContainer = weaponInfo[switchAxeIndeces.Affinity];
        let affinity = scrapeContainerForAffinity(affinityContainer);

        let defenseBonusContainer = weaponInfo[switchAxeIndeces.DefenseBonus];
        let defenseBonus = scrapeContainerForDefenseBonus(defenseBonusContainer);
        
        let rarityContainer = weaponInfo[switchAxeIndeces.Rarity];
        let rarity = scrapeContainerForRarity(rarityContainer);

        let rampageSkillContainer = weaponInfo[switchAxeIndeces.RampageSkills];
        let rampageSkills = scrapeContainerForRampageSkills(rampageSkillContainer);

        let materialsContainer = weaponInfo[switchAxeIndeces.Crafting];
        let materials = scrapeContainerForMaterials(materialsContainer);

        let phialContainer = weaponInfo[switchAxeIndeces.Phial];
        let phialType = scrapeContainerForPhialType(phialContainer);
                            
        let weapon = new SwitchAxe({
            name: name,
            sharpness: sharpness,
            skillSlots: skillSlots,
            damage: damage,
            elementDamage: elementDamage,
            affinity: affinity,
            defenseBonus: defenseBonus,
            rarity: rarity,
            rampageSkills: rampageSkills,
            materials: materials,
            phial: phialType,          
        });

        let weaponString = JSON.stringify(weapon);
        let fileName = weapon.name.replace(/\s/g, '-');      

        fs.writeFileSync(`weapons/switch_axes/${fileName}.json`, weaponString);
        
        });
    });
}

export function insectGlaiveResponse(res) {
    console.log(`InsectGlaive Status: ${res.statusCode}`);

    if (!fs.existsSync('weapons/insect_glaives')) {
        fs.mkdirSync('weapons/insect_glaives', {recursive: true});
    }   

    let responseText = '';
    res.on('data', d => {
    responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window; //parse response as HTML doc
        const insectGlaiveIndeces = WeaponTypeInfo.InsectGlaive;

        let table = document.querySelector('tbody'); //weapon info is stored as a table
        let rows = Array.from(table.children); //one weapon per table row

        rows.forEach((row) => {

        let weaponInfo = Array.from(row.children); //weapon info is represented as td elements in the row                

        let nameSkillSharpnessContainer = weaponInfo[insectGlaiveIndeces.NameSkillSharpness];                
        let name = scrapeContainerForName(nameSkillSharpnessContainer);

        let skillSlots = scrapeContainerForSkills(nameSkillSharpnessContainer);                                       

        let sharpness = scrapeContainerForSharpness(nameSkillSharpnessContainer);        

        let damageContainer = weaponInfo[insectGlaiveIndeces.Damage];
        let damage = scrapeContainerForDamage(damageContainer);

        let elementDamageContainer = weaponInfo[insectGlaiveIndeces.ElementDamage];
        let elementDamage = scrapeContainerForElementDamage(elementDamageContainer);        

        let affinityContainer = weaponInfo[insectGlaiveIndeces.Affinity];
        let affinity = scrapeContainerForAffinity(affinityContainer);

        let defenseBonusContainer = weaponInfo[insectGlaiveIndeces.DefenseBonus];
        let defenseBonus = scrapeContainerForDefenseBonus(defenseBonusContainer);
        
        let rarityContainer = weaponInfo[insectGlaiveIndeces.Rarity];
        let rarity = scrapeContainerForRarity(rarityContainer);

        let rampageSkillContainer = weaponInfo[insectGlaiveIndeces.RampageSkills];
        let rampageSkills = scrapeContainerForRampageSkills(rampageSkillContainer);

        let materialsContainer = weaponInfo[insectGlaiveIndeces.Crafting];
        let materials = scrapeContainerForMaterials(materialsContainer);

        let kinsectLevelContainer = weaponInfo[insectGlaiveIndeces.KinsectLevel];
        let kinsectLevel = scrapeContainerForKinsectLevel(kinsectLevelContainer);
                            
        let weapon = new InsectGlaive({
            name: name,
            sharpness: sharpness,
            skillSlots: skillSlots,
            damage: damage,
            elementDamage: elementDamage,
            affinity: affinity,
            defenseBonus: defenseBonus,
            rarity: rarity,
            rampageSkills: rampageSkills,
            materials: materials, 
            kinsectLevel: kinsectLevel,         
        });

        let weaponString = JSON.stringify(weapon);
        let fileName = weapon.name.replace(/\s/g, '-');      

        fs.writeFileSync(`weapons/insect_glaives/${fileName}.json`, weaponString);
        
        });
    });
}

export function bowResponse(res) {
    console.log(`Bow Status: ${res.statusCode}`);

    if (!fs.existsSync('weapons/bows')) {
        fs.mkdirSync('weapons/bows', {recursive: true});
    }   

    let responseText = '';
    res.on('data', d => {
    responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window; //parse response as HTML doc
        const bowIndeces = WeaponTypeInfo.Bow;

        let table = document.querySelector('tbody'); //weapon info is stored as a table
        let rows = Array.from(table.children); //one weapon per table row

        rows.forEach((row) => {

        let weaponInfo = Array.from(row.children); //weapon info is represented as td elements in the row                

        let nameSkillContainer = weaponInfo[bowIndeces.NameSkill];                
        let name = scrapeContainerForName(nameSkillContainer);

        let skillSlots = scrapeContainerForSkills(nameSkillContainer);                                               

        let damageContainer = weaponInfo[bowIndeces.Damage];
        let damage = scrapeContainerForDamage(damageContainer);

        let elementDamageContainer = weaponInfo[bowIndeces.ElementDamage];
        let elementDamage = scrapeContainerForElementDamage(elementDamageContainer);        

        let affinityContainer = weaponInfo[bowIndeces.Affinity];
        let affinity = scrapeContainerForAffinity(affinityContainer);
        
        let arcShotContainer = weaponInfo[bowIndeces.Arcshot];
        let arcShot = scrapeContainerForArcShot(arcShotContainer);

        let chargeShot1Container = weaponInfo[bowIndeces.Charge1];
        let chargeShot1 = scrapeContainerForChargeShot(chargeShot1Container);

        let chargeShot2Container = weaponInfo[bowIndeces.Charge2];
        let chargeShot2 = scrapeContainerForChargeShot(chargeShot2Container);

        let chargeShot3Container = weaponInfo[bowIndeces.Charge3];
        let chargeShot3 = scrapeContainerForChargeShot(chargeShot3Container);

        let chargeShot4Container = weaponInfo[bowIndeces.Charge4];
        let chargeShot4 = scrapeContainerForChargeShot(chargeShot4Container);

        let defenseBonusContainer = weaponInfo[bowIndeces.DefenseBonus];
        let defenseBonus = scrapeContainerForDefenseBonus(defenseBonusContainer);
        
        let rarityContainer = weaponInfo[bowIndeces.Rarity];
        let rarity = scrapeContainerForRarity(rarityContainer);

        let rampageSkillContainer = weaponInfo[bowIndeces.RampageSkills];
        let rampageSkills = scrapeContainerForRampageSkills(rampageSkillContainer);

        let materialsContainer = weaponInfo[bowIndeces.Crafting];
        let materials = scrapeContainerForMaterials(materialsContainer);

        let coatingsContainer = weaponInfo[bowIndeces.Coatings];
        let coatings = scrapeContainerForCoatings(coatingsContainer);
                            
        let weapon = new Bow({
            name: name,            
            skillSlots: skillSlots,
            damage: damage,
            elementDamage: elementDamage,
            affinity: affinity,
            arcShot: arcShot,
            chargeShot1: chargeShot1,
            chargeShot2: chargeShot2,
            chargeShot3: chargeShot3,
            chargeShot4: chargeShot4,
            defenseBonus: defenseBonus,
            rarity: rarity,
            rampageSkills: rampageSkills,
            materials: materials,  
            coatings: coatings,        
        });

        let weaponString = JSON.stringify(weapon);
        let fileName = weapon.name.replace(/\s/g, '-');      

        fs.writeFileSync(`weapons/bows/${fileName}.json`, weaponString);
        
        });
    });
}

export function lightBowgunResponse(res) {
    console.log(`LightBowgun Status: ${res.statusCode}`);

    if (!fs.existsSync('weapons/light_bowguns')) {
        fs.mkdirSync('weapons/light_bowguns', {recursive: true});
    }   

    let responseText = '';
    res.on('data', d => {
    responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window; //parse response as HTML doc
        const lightBowgunIndeces = WeaponTypeInfo.LightBowgun;

        let table = document.querySelector('tbody'); //weapon info is stored as a table
        let rows = Array.from(table.children); //one weapon per table row

        rows.forEach((row) => {

        let weaponInfo = Array.from(row.children); //weapon info is represented as td elements in the row                

        let nameSkillContainer = weaponInfo[lightBowgunIndeces.NameSkill];                
        let name = scrapeContainerForName(nameSkillContainer);

        let skillSlots = scrapeContainerForSkills(nameSkillContainer);                                                   

        let damageContainer = weaponInfo[lightBowgunIndeces.Damage];
        let damage = scrapeContainerForDamage(damageContainer);               

        let affinityContainer = weaponInfo[lightBowgunIndeces.Affinity];
        let affinity = scrapeContainerForAffinity(affinityContainer);

        let defenseBonusContainer = weaponInfo[lightBowgunIndeces.DefenseBonus];
        let defenseBonus = scrapeContainerForDefenseBonus(defenseBonusContainer);
        
        let rarityContainer = weaponInfo[lightBowgunIndeces.Rarity];
        let rarity = scrapeContainerForRarity(rarityContainer);

        let rampageSkillContainer = weaponInfo[lightBowgunIndeces.RampageSkills];
        let rampageSkills = scrapeContainerForRampageSkills(rampageSkillContainer);

        let materialsContainer = weaponInfo[lightBowgunIndeces.Crafting];
        let materials = scrapeContainerForMaterials(materialsContainer);

        let deviationContainer = weaponInfo[lightBowgunIndeces.Deviation];
        let deviation = scrapeContainerForDeviation(deviationContainer);

        let recoilContainer = weaponInfo[lightBowgunIndeces.Recoil];
        let recoil = scrapeContainerForRecoil(recoilContainer);

        let reloadSpeedContainer = weaponInfo[lightBowgunIndeces.ReloadSpeed];
        let reloadSpeed = scrapeContainerForReloadSpeed(reloadSpeedContainer);

        let clusterTypeContainer = weaponInfo[lightBowgunIndeces.ClusterType];
        let clusterType = scrapeContainerForClusterType(clusterTypeContainer);

        let specialAmmoContainer = weaponInfo[lightBowgunIndeces.SpecialAmmo];
        let specialAmmo = scrapeContainerForSpecialAmmo(specialAmmoContainer);
                            
        let weapon = new LightBowgun({
            name: name,            
            skillSlots: skillSlots,
            damage: damage,            
            affinity: affinity,
            defenseBonus: defenseBonus,
            rarity: rarity,
            rampageSkills: rampageSkills,
            materials: materials, 
            deviation: deviation,
            recoil: recoil,
            reloadSpeed: reloadSpeed,
            clusterType: clusterType,
            specialAmmo: specialAmmo,         
        });

        let weaponString = JSON.stringify(weapon);
        let fileName = weapon.name.replace(/\s/g, '-');      

        fs.writeFileSync(`weapons/light_bowguns/${fileName}.json`, weaponString);
        
        });
    });
}

export function heavyBowgunResponse(res) {
    console.log(`HeavyBowgun Status: ${res.statusCode}`);

    if (!fs.existsSync('weapons/heavy_bowguns')) {
        fs.mkdirSync('weapons/heavy_bowguns', {recursive: true});
    }   

    let responseText = '';
    res.on('data', d => {
    responseText += d;
    });

    res.on('end', () => {
        const { document } = (new JSDOM(responseText)).window; //parse response as HTML doc
        const heavyBowgunIndeces = WeaponTypeInfo.HeavyBowgun;

        let table = document.querySelector('tbody'); //weapon info is stored as a table
        let rows = Array.from(table.children); //one weapon per table row

        rows.forEach((row) => {

        let weaponInfo = Array.from(row.children); //weapon info is represented as td elements in the row                

        let nameSkillContainer = weaponInfo[heavyBowgunIndeces.NameSkill];                
        let name = scrapeContainerForName(nameSkillContainer);

        let skillSlots = scrapeContainerForSkills(nameSkillContainer);                                                   

        let damageContainer = weaponInfo[heavyBowgunIndeces.Damage];
        let damage = scrapeContainerForDamage(damageContainer);               

        let affinityContainer = weaponInfo[heavyBowgunIndeces.Affinity];
        let affinity = scrapeContainerForAffinity(affinityContainer);

        let defenseBonusContainer = weaponInfo[heavyBowgunIndeces.DefenseBonus];
        let defenseBonus = scrapeContainerForDefenseBonus(defenseBonusContainer);
        
        let rarityContainer = weaponInfo[heavyBowgunIndeces.Rarity];
        let rarity = scrapeContainerForRarity(rarityContainer);

        let rampageSkillContainer = weaponInfo[heavyBowgunIndeces.RampageSkills];
        let rampageSkills = scrapeContainerForRampageSkills(rampageSkillContainer);

        let materialsContainer = weaponInfo[heavyBowgunIndeces.Crafting];
        let materials = scrapeContainerForMaterials(materialsContainer);

        let deviationContainer = weaponInfo[heavyBowgunIndeces.Deviation];
        let deviation = scrapeContainerForDeviation(deviationContainer);

        let recoilContainer = weaponInfo[heavyBowgunIndeces.Recoil];
        let recoil = scrapeContainerForRecoil(recoilContainer);

        let reloadSpeedContainer = weaponInfo[heavyBowgunIndeces.ReloadSpeed];
        let reloadSpeed = scrapeContainerForReloadSpeed(reloadSpeedContainer);

        let clusterTypeContainer = weaponInfo[heavyBowgunIndeces.ClusterType];
        let clusterType = scrapeContainerForClusterType(clusterTypeContainer);

        let specialAmmoContainer = weaponInfo[heavyBowgunIndeces.SpecialAmmo];
        let specialAmmo = scrapeContainerForSpecialAmmo(specialAmmoContainer);
                            
        let weapon = new HeavyBowgun({
            name: name,            
            skillSlots: skillSlots,
            damage: damage,            
            affinity: affinity,
            defenseBonus: defenseBonus,
            rarity: rarity,
            rampageSkills: rampageSkills,
            materials: materials, 
            deviation: deviation,
            recoil: recoil,
            reloadSpeed: reloadSpeed,
            clusterType: clusterType,
            specialAmmo: specialAmmo,         
        });

        let weaponString = JSON.stringify(weapon);
        let fileName = weapon.name.replace(/\s/g, '-');      

        fs.writeFileSync(`weapons/heavy_bowguns/${fileName}.json`, weaponString);
        console.log(weapon);
        });
    });
}