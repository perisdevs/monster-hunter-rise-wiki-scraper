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

export class SwordAndShield extends Weapon {
    constructor(props) {
        super(props);
    }
}

export class DualBlades extends Weapon {
    constructor(props) {
        super(props);
    }
}

export class Hammer extends Weapon {
    constructor(props) {
        super(props);
    }
}

export class Melody {
    constructor(props) {
        this.color = props.color;
        this.name = props.name;
    }
}

export class HuntingHorn extends Weapon {
    constructor(props) {
        super(props);
        this.melodies = props.melodies;
    }
}

export class Lance extends Weapon {
    constructor(props) {
        super(props);
    }
}

export class Gunlance extends Weapon {
    constructor(props) {
        super(props);
        this.shellType = props.shellType;
        this.shellLevel = props.shellLevel;
    }
}

export class SwitchAxe extends Weapon {
    constructor(props) {
        super(props);
        this.phial = props.phial;
    }
}

export class InsectGlaive extends Weapon {
    constructor(props) {
        super(props);
        this.kinsectLevel = props.kinsectLevel;
    }
}

export class ChargeShot {
    constructor(props) {
        this.name = props.name;
        this.level = props.level;
    }
}

export class Bow extends Weapon {
    constructor(props) {
        super(props);
        this.arcShot = props.arcShot;
        this.chargeShot1 = props.chargeShot1;
        this.chargeShot2 = props.chargeShot2;
        this.chargeShot3 = props.chargeShot3;
        this.chargeShot4 = props.chargeShot4;
        this.coatings = props.coatings;
    }
}

export class LightBowgun extends Weapon {
    constructor(props) {
        super(props);
        this.deviation = props.deviation;
        this.recoil = props.recoil;
        this.reloadSpeed = props.reloadSpeed;
        this.clusterType = props.clusterType;
        this.specialAmmo = props.specialAmmo;
    }
}

export class HeavyBowgun extends Weapon {
    constructor(props) {
        super(props);
        this.deviation = props.deviation;
        this.recoil = props.recoil;
        this.reloadSpeed = props.reloadSpeed;
        this.clusterType = props.clusterType;
        this.specialAmmo = props.specialAmmo;
    }
}

export class Skill {
    constructor(props) {
        this.name = props.name;
        this.level = props.level;
    }
}