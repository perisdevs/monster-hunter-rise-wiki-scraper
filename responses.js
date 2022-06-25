import { scrapeContainerForAffinity, scrapeContainerForDamage, scrapeContainerForDefenseBonus, scrapeContainerForElementDamage, scrapeContainerForMaterials, scrapeContainerForName, scrapeContainerForPhialType, scrapeContainerForRampageSkills, scrapeContainerForRarity, scrapeContainerForSharpness, scrapeContainerForSkills } from './requests.js';
import { LongSword, GreatSword, ChargeBlade, SwordAndShield } from './lib.js';
import { WeaponTypeInfo } from './consts.js';
import * as fs from 'fs';
import * as jsdom from 'jsdom';
const { JSDOM } = jsdom;

export function longSwordResponse(res) {
    console.log(`LongSword Status: ${res.statusCode}`);

    if (!fs.existsSync('long_swords')) {
        fs.mkdirSync('long_swords');
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

        fs.writeFileSync(`long_swords/${fileName}.json`, weaponString);
        
        });
    });
}

export function greatSwordResponse(res) {
    console.log(`GreatSword Status: ${res.statusCode}`);

    if (!fs.existsSync('great_swords')) {
        fs.mkdirSync('great_swords');
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

        fs.writeFileSync(`great_swords/${fileName}.json`, weaponString);
        
        });
    });
}

export function chargeBladeResponse(res) {
    console.log(`ChargeBlade Status: ${res.statusCode}`);

    if (!fs.existsSync('charge_blades')) {
        fs.mkdirSync('charge_blades');
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

        fs.writeFileSync(`charge_blades/${fileName}.json`, weaponString);
        
        });
    });
}

export function swordAndShieldResponse(res) {
    console.log(`SwordAndShield Status: ${res.statusCode}`);

    if (!fs.existsSync('sword_and_shields')) {
        fs.mkdirSync('sword_and_shields');
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

        fs.writeFileSync(`sword_and_shields/${fileName}.json`, weaponString);
        
        });
    });
}