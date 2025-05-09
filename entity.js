const Entity = function(id) {
    this.ID = id;
    this.type = Entity.TYPE.NONE;
    this.index = -1;

    this.life = 0;
    this.maxLife = 0;
    this.damage = 0;
    this.damageType = "";
    this.minR = 1;
    this.maxR = 1;
    this.armor = "";
    this.speed = 0;
    this.movementType = "";

    this.x = -1;
    this.y = -1;
    this.unitType = -1;

    this.faction = -1;
    this.coallition = "";
    this.morale = 0;
    this.direction = Battalion.DIRECTION.NONE;
    this.cargo = 0;
    this.isCloaked = false;
    this.specialNameID = -1;
    this.specialDescID = -1;
    this.customName = "";
    this.customDesc = "";
    this.canEncore = false;
    this.isVized = false;
    this.willAmbush = false;
    this.building = -1;
    this.constructionTime = 0;
}

Entity.TYPE = {
    NONE: 0,
    UNIT: 1,
    CONSTRUCTION: 2,
    BUILDING: 3
};

Entity.prototype.updateMorale = function(value) {
    const nextMorale = this.morale + value;
    const updatedMorale = MoraleHandler.clampMoraleValue(nextMorale);

    this.morale = updatedMorale;

    return this.morale;
}

Entity.prototype.onTurnPassed = function() {
    
}

Entity.prototype.initDefault = function(id) {
    if(id < 0 || id >= UNITS.length) {
        return;
    }

    const unitType = UNITS[id];

    this.unitType = id;
    this.life = unitType.HP;
    this.maxLife = unitType.HP;
    this.damage = unitType.Attack; 	
    this.damageType = unitType.Weapon;
    this.minR = unitType.MinRange;
    this.maxR = unitType.MaxRange; 
    this.armor = unitType.Armor; 
    this.speed = unitType.Speed; 
    this.movementType = unitType.Movement; 
}

Entity.prototype.init = function(config, type, index) {
    const { 
        id = -1, //int
        faction = -1, //int
        x = -1, //int
        y = -1, //int
        morale = 0, //float
        direction = Battalion.DIRECTION.NONE, //int
        hpModifier = 0, //float
        cargo = 0, //int
        CustomName = "", //string
        CustomDescription = "", //string
        SpecialName = -1, //int
        SpecialDescription = -1 //int
    } = config;

    this.initDefault(id);

    this.type = type;
    this.index = index;

    this.x = x; 
    this.y = y; 
    this.faction = faction;
    this.coallition = Factions[faction].faction; 
    this.life *= (1 + hpModifier); 
    this.direction = direction;
    this.cargo = cargo;
    this.isCloaked = Cloak(x, y, id, Factions[faction].faction);
    this.specialNameID = SpecialName;
    this.specialDescID = SpecialDescription;
    this.customName = CustomName;
    this.customDesc = CustomDescription;
    this.updateMorale(morale);
}

Entity.prototype.completeBuilding = function() {
    if(this.type !== Entity.TYPE.CONSTRUCTION) {
        return;
    }

    this.initDefault(this.building);

    this.building = -1;
    this.morale = 0;
    this.direction = Battalion.DIRECTION.SOUTH;
    this.type = Entity.TYPE.BUILDING;
}

Entity.prototype.getDescription = function(battalion) {
    const { language } = battalion;

    if(this.customDesc) {
        return this.customDesc;
    }
    
    if(this.specialDescID !== -1) {
        const desc = Language.UnitSpecialDesc[this.specialDescID];

        if(!desc || desc.length === 0) {
            return "NOT_TRANSLATED_YET";
        }

        return desc;
    } 

    const unitType = UNITS[this.unitType];
    const desc = language.get(unitType.desc);

    return desc;
}

Entity.prototype.getName = function(battalion) {
    const { language } = battalion;

    if(this.customName) {
        return this.customName;
    }
    
    if(this.specialNameID !== -1) {
        const name = Language.UnitSpecialNames[this.specialNameID];

        if(!name || name.length === 0) {
            return "NOT_TRANSLATED_YET";
        }

        return name;
    }

    const unitType = UNITS[this.unitType];
    const name = language.get(unitType.name);

    return name;
}