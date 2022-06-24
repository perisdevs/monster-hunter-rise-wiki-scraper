import { ElementDamage, LongSword, Material, RampageSkill, Sharpness, SkillSlot } from './lib.js';
import { WeaponTypeInfo } from './consts.js';
import * as fs from 'fs';
import * as https from 'https';
import * as jsdom from 'jsdom';
const { JSDOM } = jsdom;

const urls = {
    LongSword: '/Long+Swords',
};
        
if (!fs.existsSync('long_swords')) {
  fs.mkdirSync('long_swords');
}    

const options = {
  hostname: 'monsterhunterrise.wiki.fextralife.com',
  path: '/Long+Swords',
  method: 'GET',
};

const longSwordIndeces = WeaponTypeInfo.LongSword;

let responseText = '';

const longSwordReq = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    responseText += d;
  });

  res.on('end', () => {
      const { document } = (new JSDOM(responseText)).window; //parse response as HTML doc

      let table = document.querySelector('tbody'); //weapon info is stored as a table
      let rows = Array.from(table.children); //one weapon per table row

      rows.forEach((row) => {
        let weaponInfo = Array.from(row.children); //weapon info is represented as td elements in the row
                
        let damageContainer = weaponInfo[longSwordIndeces.Damage];
        let elementDamageContainer = weaponInfo[longSwordIndeces.ElementDamage];
        let affinityContainer = weaponInfo[longSwordIndeces.Affinity];
        let defenseBonusContainer = weaponInfo[longSwordIndeces.DefenseBonus];
        let rarityContainer = weaponInfo[longSwordIndeces.Rarity];
        let rampageSkillsContainer = weaponInfo[longSwordIndeces.RampageSkills];
        let craftingContainer = weaponInfo[longSwordIndeces.Crafting];

        let nameSkillSharpnessContainer = weaponInfo[longSwordIndeces.NameSkillSharpness];

        let nameContiner  = nameSkillSharpnessContainer.querySelector('a');
        let name = null;
        let skillSlots = null;

        if (nameContiner.innerHTML.includes('<')) { //test if element includes just name or name and slots            
            name = weaponInfo[0].querySelector('a').textContent;

            let uncheckedSkillSlots = Array.from(weaponInfo[0].querySelector('a').children);            
            skillSlots = [];

            uncheckedSkillSlots.forEach((slot) => {
                let level = parseInt(slot.getAttribute('title')[10]); //slot level is stored in img title, as 11th char
                skillSlots.push(new SkillSlot({
                    level: level,
                    skill: null,
                }));
            });
            
        } else {
            name = untestedName;  

            let uncheckedSkillSlots = Array.from(weaponInfo[0].querySelectorAll('img'));
            skillSlots = [];

            uncheckedSkillSlots.forEach((slot) => {              
                let level = null;

                if (slot.getAttribute('title')) {
                  level = parseInt(slot.getAttribute('title')[10]); //slot level is stored in img title, as 11th char
                } else {
                  level = parseInt(slot.getAttribute('alt')[10]); //one entry lacks title attribute
                }

                skillSlots.push(new SkillSlot({
                    level: level,
                    skill: null,
                }));
            });            
        }

        let sharpnessData = Array.from(weaponInfo[0].querySelector('.progress').children); //sharpness is stored as a series of divs
        let sharpnessStats = [];

        sharpnessData.forEach((sharpness) => {
          let widthObj = parseInt(sharpness.style.width); //sharpness data is stored as style width
          sharpnessStats.push(widthObj);
        })

        let sharpness = new Sharpness({
          red: sharpnessStats[0],
          orange: sharpnessStats[1],
          yellow: sharpnessStats[2],
          green: sharpnessStats[3],
          blue: sharpnessStats[4],
          white: sharpnessStats[5],
        });

        let damage = parseInt(weaponInfo[1].textContent);

        let elementDamage = null;
        let elementString = weaponInfo[2].textContent;        
        
        if ((elementString != '--') && (elementString != 'None')) {     
          let elementData = elementString.split(/\s/g); //element data is stored as plaintext seperated by spaces         
          
          elementDamage = new ElementDamage({
            element: elementData[0],
            damage: elementData[1],
          });
          
        }

        let affinity = parseInt(weaponInfo[3].textContent); //affinity is stored as plaintext                

        let defenseBonus = parseInt(weaponInfo[4].textContent); //defense bonus is stored as plaintext
        
        let rarityData = weaponInfo[5].textContent.split(/\s/g); //rarity data is stored as plaintext seperated by spaces         
        let rarity = parseInt(rarityData[1]);

        let rampageSkillData = Array.from(weaponInfo[6].querySelector('ul').children); //rampage skills are stored as list items
        let rampageSkills = [];
        rampageSkillData.forEach((skill) => {

          if (skill.querySelector('a')) { //rampage weapons don't have links to skills
            let name = skill.querySelector('a').textContent;
            rampageSkills.push(new RampageSkill({
              name: name,
            }));            
          } else {
            rampageSkills.push(new RampageSkill({
              name: 'Any',
            })); 
          }
        });

        //weaponInfo[7] IS AN EMPTY DIV FOR GREAT SWORD
        
        let materialData = Array.from(weaponInfo[8].querySelector('ul').children); //materials are stored as list items
        let materials = [];
        materialData.forEach((mat) => {

          if (!isNaN(parseInt(mat.textContent))) { //if the material is an integer, it is the zenny cost
            materials.push(new Material({
              name: 'Zenny',
              quantity: parseInt(mat.textContent),
            }));

          } else {
            let rawData = mat.textContent; //material info is stored as plain text

            let splitData = rawData.split('x'); //name and quantity are displayed as string with the quanity displayed as x1, x2, etc.                

            let name = '';
            for (let i = 0; i < splitData.length - 1; i++) {
              if (splitData[i] == 'Ape') splitData[i] = 'Apex'; //splitting by x removed x in apex, add x back and reattach
              name += splitData[i];
            }
            name = name.trim();                              

            if (splitData[splitData.length-1].includes('Points')) { //some materials are a category rather than item
              materials.push(new Material({
                name: name,
                quantity: splitData[splitData.length-1],
              }));
            } else {
              materials.push(new Material({
                name: name,
                quantity: parseInt(splitData[splitData.length-1]),
              }));
            }
            
          }
        });        

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

        //fs.writeFileSync(`great_swords/${fileName}.json`, weaponString);
        console.log(weapon);
      });
  });
  
});

longSwordReq.on('error', error => {
  console.error(error);
});
longSwordReq.end();

