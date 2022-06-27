export class Armor {
    constructor(props) {
        this.name = props.name;
        this.skills = props.skills;
        this.skillSlots = props.skillSlots;
        this.rarity = props.rarity;
        this.defense = props.defense;
        this.fire = props.fire;
        this.water = props.water;
        this.thunder = props.thunder;
        this.ice = props.ice;
        this.dragon = props.dragon;
    }
}

export class HeadArmor extends Armor {
    constructor(props) {
        super(props);
    }
}

export class ChestArmor extends Armor {
    constructor(props) {
        super(props);
    }
}

export class ArmsArmor extends Armor {
    constructor(props) {
        super(props);
    }
}

export class WaistArmor extends Armor {
    constructor(props) {
        super(props);
    }
}

export class LegsArmor extends Armor {
    constructor(props) {
        super(props);
    }
}