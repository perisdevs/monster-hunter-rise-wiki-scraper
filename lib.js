export class Sharpness {
    constructor(props) {
        this.red = props.red;
        this.orange = props.orange;
        this.yellow = props.yellow;
        this.green = props.green;
        this.blue = props.blue;
        this.white = props.white;
    }
}

export class SkillSlot {
    constructor(props) {
        this.level = props.level;
        this.skill = props.skill;
    }
}

export class ElementDamage {
    constructor(props) {
        this.element = props.element;
        this.damage = props.damage;
    }
}

export class RampageSkill {
    constructor(props) {
        this.name = props.name;
    }
}

export class Material {
    constructor(props) {
        this.name = props.name;
        this.quantity = props.quantity;
    }
}

export class Weapon {
    constructor(props) {
        this.name = props.name;
        this.sharpness = props.sharpness;
        this.skillSlots = props.skillSlots;
        this.damage = props.damage;
        this.elementDamage = props.elementDamage;
        this.affinity = props.affinity;
        this.defenseBonus = props.defenseBonus;
        this.rarity = props.rarity;
        this.rampageSkills = props.rampageSkills;
        this.materials = props.materials;        
    }
}

export class ChargeBlade extends Weapon {
    constructor(props) {
        super(props);
        this.phial = props.phial;
    }
}

export class GreatSword extends Weapon {
    constructor(props) {
        super(props);
    }
}

export class LongSword extends Weapon {
    constructor(props) {
        super(props);
    }
}