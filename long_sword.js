import { ElementDamage, LongSword, Material, RampageSkill, Sharpness, SkillSlot } from './lib.js';
import { WeaponTypeInfo } from './consts.js';
import * as fs from 'fs';
import * as https from 'https';
import * as jsdom from 'jsdom';
const { JSDOM } = jsdom;
        
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

const req = https.request(options, res => {
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
        
        let untestedName = weaponInfo[longSwordIndeces.NameSkillSharpness].querySelector('a').innerHTML; //weapon name is <a> element, sometimes contains slot info        
        let skillSlots = null;

        let nameContainer = weaponInfo[longSwordIndeces.NameSkillSharpness];
        let name = nameContainer.textContent;        

        if (untestedName.includes('<img>')) { //test if element includes just name or name and slots            
            name = weaponInfo[longSwordIndeces.NameSkillSharpness].querySelector('a').textContent;

            let uncheckedSkillSlots = Array.from(weaponInfo[longSwordIndeces.NameSkillSharpness].querySelector('a').children);            
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

            let uncheckedSkillSlots = Array.from(weaponInfo[longSwordIndeces.NameSkillSharpness].querySelectorAll('img'));
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

        let sharpnessData = Array.from(weaponInfo[longSwordIndeces.NameSkillSharpness].querySelector('.progress').children); //sharpness is stored as a series of divs
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

        let damage = parseInt(weaponInfo[longSwordIndeces.Damage].textContent);

        let elementDamage = null;
        let elementString = weaponInfo[longSwordIndeces.ElementDamage].textContent;        
        
        if ((elementString != '--') && (elementString != 'None')) {     
          let elementData = elementString.split(/\s/g); //element data is stored as plaintext seperated by spaces         
          
          elementDamage = new ElementDamage({
            element: elementData[0],
            damage: elementData[elementData.length-1],
          });          

        }

        let affinity = parseInt(weaponInfo[longSwordIndeces.Affinity].textContent); //affinity is stored as plaintext                

        let defenseBonus = parseInt(weaponInfo[longSwordIndeces.DefenseBonus].textContent); //defense bonus is stored as plaintext
        
        let rarityData = weaponInfo[longSwordIndeces.Rarity].textContent.split(/\s/g); //rarity data is stored as plaintext seperated by spaces         
        let rarity = parseInt(rarityData[1]);

        let rampageSkillData = Array.from(weaponInfo[longSwordIndeces.RampageSkills].querySelector('ul').children); //rampage skills are stored as list items
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

        let hasMaterials = Boolean(weaponInfo[longSwordIndeces.Crafting].querySelector('ul')); //One item has no materials        

        let materials = [];
        if (hasMaterials) {
          let materialData = Array.from(weaponInfo[longSwordIndeces.Crafting].querySelector('ul').children); //materials are stored as list items

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

        } else {
          materials = weaponInfo[longSwordIndeces.Crafting].textContent;
        }
                            
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
  
});

req.on('error', error => {
  console.error(error);
});
req.end();

