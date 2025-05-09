const TERRAIN = [
	{name: "", passThrough: true, flyThrough: true, sailThrough: false, src:"", traverseFactor:1, protectionFactor:1,Variants:8,Offsets:[0,0,0,0,0,0,0,0]}, 

	//1-5

	{name: "Plains", WalkThrough: 1, DriveThrough: 1.2, RollThrough: 1.2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:1, protectionFactor:1,Urbanistics:0,Constructible:true,tag1:"Uneven",tag2:"",tag3:"",tag4:"", Class:"LF",BiomeIndex:1,Variants:8,Offsets:[0,0,0,0,0,0,0,0]},
	{name: "Forest", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:1.5, protectionFactor:0.8,Urbanistics:0,Constructible:true,tag1:"Rugged",tag2:"Concealment",tag3:"",tag4:"", Class:"LF",Variants:4,Offsets:[0,-4,-3,-12],StD:0},
	{name: "Hills", WalkThrough: 1.5, DriveThrough: 1.5, RollThrough: 1.5, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:1.5, protectionFactor:0.8,Urbanistics:0,Constructible:true,tag1:"Rugged",tag2:"Concealment",tag3:"Vantage",tag4:"", Class:"LF",Variants:4,Offsets:[0,0,-4,-5],StD:0},
	{name: "Mountains", WalkThrough: 2, DriveThrough: 3, RollThrough: 5, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:0.6,Urbanistics:0,Constructible:false,tag1:"Precipitous",tag2:"Bunker",tag3:"Vantage",tag4:"", Class:"LF",Variants:4,Offsets:[0,-4,-9,-10],StD:-9},	
	{name: "Megamountains", WalkThrough: 5, DriveThrough: 100, RollThrough: 100, FlyThrough: 100, SailThrough: 100, DeepSailThrough:100, WadeThrough:100, protectionFactor:0.4,Urbanistics:0,Constructible:false,tag1:"Impassable",tag2:"",tag3:"",tag4:"", Class:"LF",Variants:2,Offsets:[-21,-21,-21,-21],StD:-21},

	//6-14

	{name: "Road", WalkThrough: 1, DriveThrough: 1, RollThrough: 1, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:1, protectionFactor:1,Urbanistics:1,Constructible:true,tag1:"",tag2:"",tag3:"",tag4:"", Class:"LA"},
	{name: "Ruins", WalkThrough: 2, DriveThrough: 3, RollThrough: 3, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:0.8,Urbanistics:1,Constructible:true,tag1:"Rugged",tag2:"",tag3:"",tag4:"", Class:"LF",Variants:2,Offsets:[-14,-14,-14,-14],StD:-14},
	{name: "Urban District", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:0.8,Urbanistics:1,Constructible:true,revenue:0,tag1:"Rugged",tag2:"",tag3:"",tag4:"", Class:"LF",Variants:4,Offsets:[-14,-14,-14,-14],StD:-14},
	{name: "Industrial District", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:1,Urbanistics:2,Constructible:true,revenue:200,tag1:"Fiscal Center",tag2:"",tag3:"",tag4:"", Class:"S", StD:-10},
	{name: "Military-Industrial Complex", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:1,Urbanistics:3,Constructible:false,tag1:"",tag2:"",tag3:"",tag4:"", Class:"S", StD:-8},
	{name: "Aviation Industrial Facility", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:1,Urbanistics:3,Constructible:false,tag1:"",tag2:"",tag3:"",tag4:"", Class:"S", StD:-14},
	{name: "Shipbuilding Facility", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:1,Urbanistics:3,Constructible:false,tag1:"",tag2:"",tag3:"",tag4:"", Class:"S", StD:-14},
	{name: "Headquarters", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:0.5,Urbanistics:4,Constructible:true,revenue:100,tag1:"Financial Center",tag2:"",tag3:"",tag4:"", Class:"S", StD:0},
	{name: "Command Center", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:0.5,Urbanistics:5,Constructible:true,revenue:300,tag1:"Fiduciary Center",tag2:"",tag3:"",tag4:"", Class:"S", StD:-18},

	//15-19

	{name: "Taiga", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:0.8,logisticFactor:0.8,Urbanistics:0,Constructible:true,tag1:"Rugged",tag2:"Concealment",tag3:"",tag4:"", Class:"LF",BiomeIndex:3,Variants:4,Offsets:[0,-4,-3,-12]},
	{name: "Desert", WalkThrough: 1, DriveThrough: 1.2, RollThrough: 1.2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:1, protectionFactor:1,logisticFactor:0.8,Urbanistics:0,Constructible:true,tag1:"Uneven",tag2:"",tag3:"",tag4:"", Class:"LF",BiomeIndex:2,Variants:3,Offsets:[0,0,0,0,0,0,0,0]},
	{name: "Tundra", WalkThrough: 1, DriveThrough: 1.2, RollThrough: 1.2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:1, protectionFactor:0.8,logisticFactor:0.8,Urbanistics:0,Constructible:true,tag1:"Uneven",tag2:"",tag3:"",tag4:"", Class:"LF",BiomeIndex:3,Variants:8,Offsets:[0,0,0,0,0,0,0,0]},
	{name: "Extreme Desert", WalkThrough: 2, DriveThrough: 5, RollThrough: 3, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:5, protectionFactor:1,logisticFactor:0.6,Urbanistics:0,Constructible:true,tag1:"",tag2:"",tag3:"",tag4:"", Class:"LF",BiomeIndex:4,Variants:3,Offsets:[0,0,0,0,0,0,0,0]},
	{name: "Arctic Hellhole", WalkThrough: 2, DriveThrough: 5, RollThrough: 3, FlyThrough: 2, SailThrough: 100, DeepSailThrough:100, WadeThrough:5, protectionFactor:1,logisticFactor:0.6,Urbanistics:0,Constructible:true,tag1:"",tag2:"",tag3:"",tag4:"", Class:"LF",BiomeIndex:5,Variants:8,Offsets:[0,0,0,0,0,0,0,0]},

	//20-21


	{name: "Bridge", WalkThrough: 1, DriveThrough: 1, RollThrough: 1, FlyThrough: 1, SailThrough: 50, DeepSailThrough:50, WadeThrough:1, protectionFactor:1,Urbanistics:1,Constructible:true,tag1:"",tag2:"",tag3:"",tag4:"", Class:"MC"},
	{name: "High Bridge", WalkThrough: 1, DriveThrough: 1, RollThrough: 1, FlyThrough: 1, SailThrough: 1, DeepSailThrough:2, WadeThrough:1, protectionFactor:1,Urbanistics:1,Constructible:true,tag1:"",tag2:"",tag3:"",tag4:"", Class:"MC"},

	//22-30

	{name: "River", WalkThrough: 100, DriveThrough: 100, RollThrough: 100, FlyThrough: 1, SailThrough: 1, DeepSailThrough:100, WadeThrough:3, protectionFactor:1.4,Urbanistics:0,Constructible:false,tag1:"Shallow",tag2:"",tag3:"",tag4:"", Class:"WA"},
	{name: "Sea", WalkThrough: 100, DriveThrough: 100, RollThrough: 100, FlyThrough: 1, SailThrough: 1, DeepSailThrough:1, WadeThrough:100, protectionFactor:1,Urbanistics:0,Constructible:false,tag1:"",tag2:"",tag3:"",tag4:"", Class:"WE"},
	{name: "Reef", WalkThrough: 100, DriveThrough: 100, RollThrough: 100, FlyThrough: 1, SailThrough: 1.2, DeepSailThrough:2, WadeThrough:100, protectionFactor:0.8,Urbanistics:0,Constructible:false,tag1:"Tricky Waters",tag2:"Naval Concealment",tag3:"",tag4:"", Class:"WF",Variants:4,Offsets:[0,0,0,0]},
	{name: "Floes", WalkThrough: 100, DriveThrough: 100, RollThrough: 100, FlyThrough: 1, SailThrough: 2, DeepSailThrough:1.25, WadeThrough:100, protectionFactor:0.8,Urbanistics:0,Constructible:false,tag1:"Tricky Waters",tag2:"Naval Concealment",tag3:"",tag4:"", Class:"WF",Variants:4,Offsets:[0,0,0,0]},
	{name: "Archipelago", WalkThrough: 100, DriveThrough: 100, RollThrough: 100, FlyThrough: 1, SailThrough: 1.5, DeepSailThrough:2, WadeThrough:100, protectionFactor:0.6,Urbanistics:0,Constructible:false,tag1:"Tricky Waters",tag2:"Naval Concealment",tag3:"",tag4:"", Class:"WF",Variants:4,Offsets:[0,0,0,0]},
	{name: "Rocks", WalkThrough: 100, DriveThrough: 100, RollThrough: 100, FlyThrough: 1, SailThrough: 1.5, DeepSailThrough:2, WadeThrough:100, protectionFactor:0.6,Urbanistics:0,Constructible:false,tag1:"Bunker",tag2:"Tricky Waters",tag3:"Dangerous",tag4:"", Class:"WF",Variants:4,Offsets:[0,0,0,0]},
	{name: "Icebergs", WalkThrough: 100, DriveThrough: 100, RollThrough: 100, FlyThrough: 1, SailThrough: 1.5, DeepSailThrough:2, WadeThrough:100, protectionFactor:0.6,Urbanistics:0,Constructible:false,tag1:"Bunker",tag2:"Tricky Waters",tag3:"Dangerous",tag4:"", Class:"WF",Variants:4,Offsets:[0,0,0,0]},
	{name: "Shore", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 2, FlyThrough: 1, SailThrough: 1.5, DeepSailThrough:100, WadeThrough:1.5, protectionFactor:1.2,Urbanistics:0,Constructible:true,tag1:"Shallow",tag2:"Uneven",tag3:"",tag4:"", Class:"B"},
	{name: "Oil Rig", WalkThrough: 100, DriveThrough: 100, RollThrough: 100, FlyThrough: 1, SailThrough: 1, DeepSailThrough:1, WadeThrough:100, protectionFactor:1,Urbanistics:2,Constructible:false,revenue:200,tag1:"Fiscal Center",tag2:"",tag3:"",tag4:"", Class:"WS", StD:-9},

	//31-40
	{name: "Marsh", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 3, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:1.2, protectionFactor:0.8,Urbanistics:0,Constructible:false,tag1:"Rugged",tag2:"Concealment",tag3:"",tag4:"", Class:"LF",Variants:3,Offsets:[0,0,0]},
	{name: "Volcano", WalkThrough: 3, DriveThrough: 4, RollThrough: 5, FlyThrough: 2, SailThrough: 100, DeepSailThrough:100, WadeThrough:3, protectionFactor:0.6,Urbanistics:0,Constructible:false,tag1:"Precipitous",tag2:"Vantage",tag3:"Bunker",tag4:"", Class:"LF",Variants:1,Offsets:[-8],StD:-8},
	{name: "Moon", WalkThrough: 2, DriveThrough: 2, RollThrough: 1.5, FlyThrough: 2, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:0.9,Urbanistics:0,Constructible:true,tag1:"Uneven",tag2:"Rugged",tag3:"",tag4:"", Class:"LF",BiomeIndex:6,Variants:4,Offsets:[0,0,0,0]},
	{name: "Mars", WalkThrough: 2, DriveThrough: 2, RollThrough: 1.5, FlyThrough: 2, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:0.9,Urbanistics:0,Constructible:true,tag1:"Uneven",tag2:"Rugged",tag3:"",tag4:"", Class:"LF",BiomeIndex:7,Variants:4,Offsets:[0,0,0,0]},
	{name: "Cosmos", WalkThrough: 100, DriveThrough: 100, RollThrough: 100, FlyThrough: 4, SailThrough: 100, DeepSailThrough:100, WadeThrough:100, protectionFactor:1,Urbanistics:0,Constructible:false,tag1:"",tag2:"",tag3:"",tag4:"", Class:"WA",Variants:8,Offsets:[0,0,0,0,0,0,0,0]},
	//{name: "Landmines", WalkThrough: 3, DriveThrough: 4, RollThrough: 5, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:3, protectionFactor:0.6,Urbanistics:0,Constructible:false,tag1:"Rugged",tag2:"Concealment",tag3:"",tag4:"", Class:"LF",Variants:4,Offsets:[0,0,0,0]},
	//{name: "Naval Mines", WalkThrough: 3, DriveThrough: 4, RollThrough: 5, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:3, protectionFactor:0.6,Urbanistics:0,Constructible:false,tag1:"Rugged",tag2:"Concealment",tag3:"",tag4:"", Class:"LF",Variants:4,Offsets:[0,0,0,0]},
	//{name: "Railway", WalkThrough: 0.3, DriveThrough: 0.6, RollThrough: 0.5, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:0.4, protectionFactor:1,Urbanistics:1,Constructible:true,tag1:"",tag2:"",tag3:"",tag4:"", Class:"LA"},
	//{name: "Canyon"},
	//{name: ""},
	//{name: "RiverSource", WalkThrough: 100, DriveThrough: 100, RollThrough: 100, FlyThrough: 1, SailThrough: 1, DeepSailThrough:100, WadeThrough:2, protectionFactor:100,Urbanistics:0,tag1:"",tag2:"",tag3:"",tag4:""},
];

const BIOMES = [
	{ "name": "", "nominator": "", "logisticIndex": 0, "icon": "Assets/Traits/.png", "edgeA": "Assets/Tiles/EdgeA.png", "edgeB": "Assets/Tiles/EdgeB.png", "edgeC": "Assets/Tiles/EdgeC.png", "edgeD": "Assets/Tiles/EdgeD.png" },
	{ "name": "Temperate", "nominator": "Temperate", "logisticIndex": 1, "icon": "Assets/Traits/Temperate.png", "edgeA": "Assets/Tiles/EdgeA.png", "edgeB": "Assets/Tiles/EdgeB.png", "edgeC": "Assets/Tiles/EdgeC.png", "edgeD": "Assets/Tiles/EdgeD.png" },
	{ "name": "Desert", "nominator": "Arid", "logisticIndex": 0.75, "icon": "Assets/Traits/Arid.png", "edgeA": "Assets/Tiles/EdgeAArid.png", "edgeB": "Assets/Tiles/EdgeBArid.png", "edgeC": "Assets/Tiles/EdgeCArid.png", "edgeD": "Assets/Tiles/EdgeDArid.png" },
	{ "name": "Tundra", "nominator": "Boreal", "logisticIndex": 0.75, "icon": "Assets/Traits/Boreal.png", "edgeA": "Assets/Tiles/EdgeABoreal.png", "edgeB": "Assets/Tiles/EdgeBBoreal.png", "edgeC": "Assets/Tiles/EdgeCBoreal.png", "edgeD": "Assets/Tiles/EdgeDBoreal.png" },
	{ "name": "Extreme Desert", "nominator": "Barren", "logisticIndex": 0.5, "icon": "Assets/Traits/Barren.png", "edgeA": "Assets/Tiles/EdgeABarren.png", "edgeB": "Assets/Tiles/EdgeBBarren.png", "edgeC": "Assets/Tiles/EdgeCBarren.png", "edgeD": "Assets/Tiles/EdgeDBarren.png" },
	{ "name": "Extreme Tundra", "nominator": "Arctic", "logisticIndex": 0.5, "icon": "Assets/Traits/Arctic.png", "edgeA": "Assets/Tiles/EdgeAArctic.png", "edgeB": "Assets/Tiles/EdgeBArctic.png", "edgeC": "Assets/Tiles/EdgeCArctic.png", "edgeD": "Assets/Tiles/EdgeDArctic.png" },
	{ "name": "Lunar", "nominator": "Lunar", "logisticIndex": 0.25, "icon": "Assets/Traits/Lunar.png", "edgeA": "Assets/Tiles/EdgeALunar.png", "edgeB": "Assets/Tiles/EdgeBLunar.png", "edgeC": "Assets/Tiles/EdgeCLunar.png", "edgeD": "Assets/Tiles/EdgeDLunar.png" },
	{ "name": "Martian", "nominator": "Martian", "logisticIndex": 0.25, "icon": "Assets/Traits/Martian.png", "edgeA": "Assets/Tiles/EdgeAMartian.png", "edgeB": "Assets/Tiles/EdgeBMartian.png", "edgeC": "Assets/Tiles/EdgeCMartian.png", "edgeD": "Assets/Tiles/EdgeDMartian.png" },
];

const UNIT = {
	CONSTRUCTION: 0,
	LIGHT_INFANRY: 1,
	INFANTRY: 2,
	ASSAULT_INFANTRY: 3,
	SNIPER: 4,
	MARINE: 5,
	STORMTROOPER: 6,
	SPEC_OPS: 7,
	GUARDS: 8,
	SUICIDE_BOMBERS: 9,
	PALADIN: 10,
	CAVALRY: 11,
	MOTORIZED_INFANTRY: 12,
	SUPPLY_TRUCK: 13,
	FLAK_TANK: 14,
	CRAB_TANK: 15,
	SCADP: 16,
	TROSKY_WARMACHINE: 17,
	SISU_APC: 18,
	BOING_SH11_MEGOCOCKTER: 19,
	AYIN: 20,
	COCKROACH_TANK: 21,
	BOLT_TANK: 22,
	ASEKARA_TANK: 23,
	GORLITZ_TANK: 24,
	TANK_HUNTER: 25,
	AMPAC: 26,
	KOSCHEI_TANK: 27,
	IMPERRITERTUS_TANK: 28,
	ENTWICKLUNG_PANTSER: 29,
	GBC_ROLAND_MKIII: 30,
	HOWITZER_BATTERY: 31,
	AA_ARTILLERY: 32,
	ANTI_TANK_ARTILLERY: 33,
	MOLDAN_BATTERY: 34,
	SPAB: 35,
	ROCKET_TANK: 36,
	BIG_BERTHA_BATTERY: 37,
	PULA_SRBMDP: 38,
	TUGARIN_ATMB: 39,
	BRIMSTONE_BATTERY: 40,
	STORK_TRANSPORT: 41,
	PELICAN_TRANSPORT: 42,
	RAPTOR_FIGHTER: 43,
	EAGLE_STRIKER: 44,
	CONDOR_BOMBER: 45,
	AKONTIO_TORPEDOR: 46,
	ZEUS_STORMLORD: 47,
	SOLOVEY_SUPERBOMBER: 48,
	AVN1_STIHIE: 49,
	ALEPH: 50,
	BARGE_CONVOY: 51,
	INTREPID: 52,
	SUBMERSIBLE: 53,
	DESTROYER: 54,
	LIGHT_CRUISER: 55,
	HEAVY_CRUISER: 56,
	CAPITAL_SHIP: 57,
	AIRCRAFT_CARRIER: 58,
	SUPERBATTLESHIP: 59,
	SUPERCARRIER: 60,
	BARRICADE: 61,
	BUNKER: 62,
	TURRET: 63,
	FLAK_TOWER: 64,
	COASTAL_BATTERY: 65,
	WORKSHOP: 66,
	MISSILE_SILO: 67,
	BASTION: 68,
	SUPPLY_DEPOT: 69,
	FORTRESS: 70,
	MEME_SPARTANS: 71,
};

const UNITS = [
	{name: "UNIT_NAME_CONSTRUCTION", desc: "UNIT_DESC_CONSTRUCTION", shortname:"Skele", HP:50, Armor: "Medium", Attack: 0, Weapon: "Medium", Speed:0, Movement: "Foot", MinRange:1, MaxRange:1, Cost:0 ,tag1:"Inertial", tag2:"", tag3:"", tag4:"",StaticOffsetX:[0,0,0,0,0],StaticOffsetY:[0,0,0,0,0],MovementBoxX:0,MovementBoxY:0,MovementOffsetX:[0,0,0,0,0],MovementOffsetY:[0,0,0,0,0],AttackOffsetX:[0,0,0,0,0],AttackOffsetY:[0,0,0,0,0],IdleOffsetX:[0,0,0,0,0],IdleOffsetY:[0,0,0,0,0]},

	{name: "UNIT_NAME_LIGHT_INFANRY", desc: "UNIT_DESC_LIGHT_INFANTRY", HP:50, shortname: "LightInf", MLPR:false, Armor: "Light", Attack: 10, Weapon: "Light", Speed:4, Movement: "Foot", MinRange:1, MaxRange:1, Cost:100, TechLevel:1, Power:10, Role:"", tag1:"Conqueror", tag2:"Streamlined", tag3:"", tag4:"",AttackOffsetX:[0,-1,8,-1,-12]},
	{name: "UNIT_NAME_INFANTRY", desc: "UNIT_DESC_INFANTRY", HP:70, shortname: "Infantry", MLPR:false, Armor: "Light", Attack: 20, Weapon: "Light", Speed:3, Movement: "Foot", MinRange:1, MaxRange:1, Cost:150, TechLevel:1, Power:15, Role:"", tag1:"Conqueror", tag2:"", tag3:"", tag4:"" ,AttackOffsetX:[0,0,9,0,-9]},
	{name: "UNIT_NAME_ASSAULT_INFANTRY", desc: "UNIT_DESC_ASSAULT_INFANTRY", shortname: "AssaultInf", MLPR:false, HP:80, Armor:"Light", Attack: 25, Weapon: "Medium", Speed:3, Movement: "Foot", MinRange:1, MaxRange:1, Cost:200, TechLevel:2, Power:25, Role:"", tag1:"Conqueror", tag2:"Schwerpunkt", tag3:"", tag4:"",AttackOffsetX:[0,0,12,0,-12]},
	{name: "UNIT_NAME_SNIPER", desc: "UNIT_DESC_SNIPER", shortname: "Snipers", MLPR:false, HP:70, Armor: "Light", Attack: 30, Weapon: "Light", Speed:4, Movement: "Foot", MinRange:1, MaxRange:1, Cost:250, TechLevel:3, Power:35, Role:"", tag1:"Conqueror", tag2:"Commando", tag3:"", tag4:"", FactionSpecificity:3,AttackOffsetX:[0,-2,8,-2,-12]},
	{name: "UNIT_NAME_MARINE", desc: "UNIT_DESC_MARINE", shortname: "Marines", MLPR:false, HP:80, Armor: "Light", Attack: 25, Weapon: "Light", Speed:4, Movement: "Amphibious", MinRange:1, MaxRange:1, Cost:250, TechLevel:3, Power:30, Role:"", tag1:"Conqueror", tag2:"Crab", tag3:"", tag4:"", FactionSpecificity:4,AttackOffsetX:[0,0,13,0,-13]},
	{name: "UNIT_NAME_STORMTROOPER", desc: "UNIT_DESC_STORMTROOPER", shortname: "Stormtroopers", MLPR:false, HP:70, Armor: "Light", Attack: 30, Weapon: "Medium", Speed:3, Movement: "Foot", MinRange:1, MaxRange:3, Cost:250, TechLevel:3, Power:25, Role:"", tag1:"Conqueror", tag2:"", tag3:"", tag4:"", FactionSpecificity:5,AttackOffsetX:[0,0,10,0,-10]},
	{name: "UNIT_NAME_SPEC_OPS", desc: "UNIT_DESC_SPEC_OPS", shortname: "SpecOps", MLPR:false, HP:50, Armor: "Light", Attack: 20, Weapon: "Medium", Speed:4, Movement: "Foot", MinRange:1, MaxRange:1, Cost:300, TechLevel:4, Power:25, Role:"", tag1:"Conqueror", tag2:"Anti-Structure", tag3:"Stealth", tag4:"Airborne", FactionSpecificity:2, AttackOffsetX:[0,0,13,0,-13]},
	{name: "UNIT_NAME_GUARDS", desc: "UNIT_DESC_GUARDS", shortname: "Guards", MLPR:true, HP:105, Armor: "Light", Attack: 35, Weapon: "Medium", Speed:3, Movement: "Foot", MinRange:1, MaxRange:1, Cost:350, TechLevel:5, Power:50, Role:"", tag1:"Conqueror", tag2:"Indomitable", tag3:"", tag4:"", FactionSpecificity:1, AttackOffsetX:[0,0,8,0,-8]},
	{name: "UNIT_NAME_SUICIDE_BOMBERS", desc: "UNIT_DESC_SUICIDE_BOMBERS", shortname: "Suicide", MLPR:true, HP:50, Armor: "Light", Attack: 23, Weapon: "Heavy", Speed:3, Movement: "Foot", MinRange:1, MaxRange:1, Cost:250, TechLevel:1, Power:25, Role:"", tag1:"Self-Destruct", tag2:"Indomitable", tag3:"Cavitation Explosion", tag4:"Tank-Hunter", FactionSpecificity:5,AttackOffsetX:[0,0,0,0,0]},
	{name: "UNIT_NAME_PALADIN", desc: "UNIT_DESC_PALADIN", shortname:"Paladin", MLPR:true, HP: 140, Armor:"Medium", Attack:50, Weapon:"Medium",Speed:2, Movement:"Foot", MinRange:1, MaxRange:1, Cost:700, TechLevel:6, Power:110, Role:"", tag1: "Conqueror", tag2: "Indomitable", tag3: "Heroic", tag4: "", FactionSpecificity:1},

	{name: "UNIT_NAME_CAVALRY", desc: "UNIT_DESC_CAVALRY", shortname:"Cavalry", MLPR:true, HP:80, Armor: "Light", Attack: 20, Weapon: "Light", Speed:5, Movement: "Foot", MinRange:1, MaxRange:1, Cost:200, TechLevel:1, Power:20, Role:"", tag1:"Conqueror", tag2:"", tag3:"", tag4:"",StaticOffsetX:[0,9,-3,9,-3],StaticOffsetY:[0,1,5,1,5],MovementOffsetX:[0,14,0,14,0],MovementOffsetY:[0,0,8,0,8],AttackOffsetX:[0,10,0,10,0],AttackOffsetY:[0,0,5,0,5]},
	{name: "UNIT_NAME_MOTORIZED_INFANTRY", desc: "UNIT_DESC_MOTORIZED_INFANTRY", shortname: "MotorInf", MLPR:true, HP:80, Armor: "Light", Attack: 25, Weapon: "Medium", Speed:6, Movement: "Wheeled", MinRange:1, MaxRange:1, Cost:200, TechLevel:2, Power:30, Role:"", tag1:"Conqueror", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,0,0,0,-14]},
	{name: "UNIT_NAME_SUPPLY_TRUCK", desc: "UNIT_DESC_SUPPLY_TRUCK", shortname:"Supply", MLPR:true, HP:30, Armor:"Light", Attack:20, Weapon:"None", Speed:6, Movement:"Wheeled", MinRange:1, MaxRange:3, Cost:400, TechLevel:2, Power:10, Role:"", tag1:"Supply Distribution", tag2:"", tag3:"", tag4:""},
	{name: "UNIT_NAME_FLAK_TANK", desc: "UNIT_DESC_FLAK_TANK", shortname: "Flak", MLPR:true, HP:60, Armor: "Medium", Attack: 20, Weapon: "Light", Speed:5, Movement: "Tracked", MinRange:1, MaxRange:3, Cost:485, TechLevel:3, Power:25, Role:"", tag1:"Skysweeper", tag2:"Anti-Air", tag3:"", tag4:"",AttackOffsetX:[0,0,-10,-21,-40],AttackOffsetY:[0,-33,-44,-21,-44]},
	{name: "UNIT_NAME_CRAB_TANK", desc: "UNIT_DESC_CRAB_TANK", shortname: "Crab", MLPR:true, HP:90, Armor: "Medium", Attack: 30, Weapon: "Light", Speed:6, Movement: "Amphibious", MinRange:1, MaxRange:1, Cost:325, TechLevel:3, Power:35, Role:"" ,tag1:"Crab", tag2:"", tag3:"", tag4:"", FactionSpecificity:4, AttackOffsetX:[0,-16,-15,-15,-15], AttackOffsetY:[0,-19,-13,-17,-13]},
	{name: "UNIT_NAME_SCADP", desc: "UNIT_DESC_SCADP", shortname: "SCADP", MLPR:true, HP:40, Armor: "Light", Attack: 20, Weapon: "Light", Speed:6, Movement: "Wheeled", MinRange:1, MaxRange:3,  Cost:940, TechLevel:5, Power:60, Role:"", tag1:"Anti-Infantry", tag2:"Dispersion", tag3:"", tag4:"",AttackOffsetX:[0,0,0,0,-14],AttackOffsetY:[0,-18,0,-2,0]},	
	{name: "UNIT_NAME_TROSKY_WARMACHINE", desc: "UNIT_DESC_TROSKY_WARMACHINE", shortname:"Warmachine", MLPR:true, HP:100, Armor: "Medium", Attack: 25, Weapon: "Medium", Speed:4, Movement: "Tracked", MinRange:2, MaxRange:6, Cost:2000, TechLevel:1, Power:50, Role:"", tag1:"Tank Pooper", tag2:"", tag3:"", tag4:"",StaticOffsetY:[0,-23,-23,-23,-23],MovementOffsetX:[0,-23,-23,-23,-23],MovementBoxY:79,MovementOffsetY:[0,0,0,0,0]},
	{name: "UNIT_NAME_SISU_APC", desc: "UNIT_DESC_SISU_APC", shortname:"Sisu", MLPR:true, HP:100, Armor:"Light", Attack:30, Weapon: "Light", Speed:5, Movement:"Wheeled", MinRange:1, MaxRange:1, Cost:640, TechLevel:4, Power:45, Role:"", tag1:"Conqueror", tag2:"Commando", tag3:"", tag4:"", FactionSpecificity:3},
	{name: "UNIT_NAME_BOING_SH11_MEGOCOCKTER", desc: "UNIT_DESC_BOING_SH11_MEGOCOCKTER", shortname:"Megacockter", MLPR:true, HP:30, Armor:"Light", Attack: 30, Weapon: "Light", Speed:7, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:500, TechLevel:5, Power:50, Role:"", tag1:"Bewegungskrieg", tag2:"Schwerpunkt", tag3:"", tag4:"", FactionSpecificity:4, AttackOffsetX:[0,0,0,0,-7], AttackOffsetY:[0,-14,0,0,0]},
	{name: "UNIT_NAME_AYIN", desc: "UNIT_DESC_AYIN", shortname:"AYIN", MLPR:true, HP:40, Armor:"Medium", Attack:25, Weapon:"Medium", Speed:5, Movement:"Tracked", MinRange:1, MaxRange:7, Cost:1885, TechLevel:6, Power:50, Role:"", tag1:"Streamblast", tag2:"", tag3:"", tag4:""},

	{name: "UNIT_NAME_COCKROACH_TANK", desc: "UNIT_DESC_COCKROACH_TANK", shortname: "Cockroach", MLPR:true, HP:50, Armor:"Light", Attack:15, Weapon:"Light", Speed:8, Movement:"Tracked", MinRange:1, MaxRange:1, Cost:190, TechLevel:1, Power:15, Role:"", tag1:"Streamlined", tag2:"", tag3:"", tag4:""},
	{name: "UNIT_NAME_BOLT_TANK", desc: "UNIT_DESC_BOLT_TANK", shortname: "Bolt", MLPR:true, HP:75, Armor: "Light", Attack: 25, Weapon: "Light", Speed:6, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:340, TechLevel:2, Power:30, Role:"", tag1:"Schwerpunkt", tag2:"", tag3:"", tag4:"", AttackOffsetX:[0,-12,-0,-12,-20], AttackOffsetY:[0,-9,-0, 9,-0]},
	{name: "UNIT_NAME_ASEKARA_TANK", desc: "UNIT_DESC_ASEKARA_TANK", shortname: "Asekara", MLPR:false, HP:100, Armor: "Medium", Attack: 35, Weapon: "Medium", Speed:5, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:500, TechLevel:3, Power:40, Role:"", tag1:"Streamlined", tag2:"Schwerpunkt", tag3:"Bewegungskrieg", tag4:"", MovementOffsetY:[0,0,0,0,0], AttackOffsetX:[0,-16,-15,-15,-15], AttackOffsetY:[0,-19,-13,-17,-13]},
	{name: "UNIT_NAME_GORLITZ_TANK", desc: "UNIT_DESC_GORLITZ_TANK", shortname: "Gorlitz", MLPR:true, HP:110, Armor: "Heavy", Attack: 50, Weapon: "Heavy", Speed:4, Movement: "Tracked", MinRange:1, MaxRange:1,  Cost:800, TechLevel:4, Power:50, Role:"", tag1:"", tag2:"", tag3:"", tag4:"", StaticOffsetX:[0,0,-7,0,-7], AttackOffsetX:[0,0,-14,0,-14]},
	{name: "UNIT_NAME_TANK_HUNTER", desc: "UNIT_DESC_TANK_HUNTER", shortname: "Hunter", MLPR:true, HP:100, Armor: "Medium", Attack: 35, Weapon: "Medium", Speed:5, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:425, TechLevel:3, Power:40, Role:"", tag1:"Anti-Tank", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,8,-10,7,-49],AttackOffsetY:[0,-40,-44,0,-2]},
	{name: "UNIT_NAME_AMPAC", desc: "UNIT_DESC_AMPAC", shortname: "AMPAC", MLPR:true, HP:100, Armor: "Medium", Attack: 35, Weapon: "Heavy", Speed:6, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:650, TechLevel:4, Power:60, Role:"" ,tag1:"Anti-Tank", tag2:"Tank-Hunter", tag3:"Streamlined", tag4:"", FactionSpecificity:5,StaticOffsetX:[0,-3,0,-3,-10],AttackOffsetX:[0,-11,-1,-11,-23],AttackOffsetY:[0,-10,-5,5,-5]},
	{name: "UNIT_NAME_KOSCHEI_TANK", desc: "UNIT_DESC_KOSCHEI_TANK", shortname: "Koschei", MLPR:true, HP:120, Armor: "Heavy", Attack: 55, Weapon: "Medium", Speed:5, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:950, TechLevel:5, Power:120, Role:"" ,tag1:"Schwerpunkt", tag2:"Bewegungskrieg", tag3:"", tag4:"", FactionSpecificity:2, AttackOffsetX:[0,-19,-10,-19,-25], AttackOffsetY:[0,-28,-15,0,-15]},
	{name: "UNIT_NAME_IMPERRITERTUS_TANK", desc: "UNIT_DESC_IMPERRITERTUS_TANK", shortname: "Imperterritus", MLPR:true, HP:175, Armor: "Heavy", Attack: 55, Weapon: "Heavy", Speed:3, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:2450, TechLevel:5, Power:200, Role:"" ,tag1:"Cemented Steel Armor", tag2:"Terrifying", tag3:"", tag4:"", FactionSpecificity:1, StaticOffsetX:[0,-22,0,-23,-44], StaticOffsetY:[0,-20,0,-2,0], AttackOffsetX:[0,-31,-3,-33,-59], AttackOffsetY:[0,-25,-5,-5,-5],MovementOffsetX:[0,-20,0,-0,0],MovementOffsetY:[0,-20,0,-20,-44]},
	{name: "UNIT_NAME_ENTWICKLUNG_PANTSER", desc: "UNIT_DESC_ENTWICKLUNG_PANTSER", shortname:"Entwicklung", MLPR:true, HP:170, Armor:"Heavy", Attack:65, Weapon:"Medium", Speed:7, Movement:"Tracked", MinRange:1, MaxRange:1, Cost:1500, TechLevel:6, Power:340, Role:"" ,tag1:"Schwerpunkt", tag2:"Bewegungskrieg", tag3:"Mobile Battery", tag4:"Terrifying", AttackOffsetX:[0,-19,-10,-19,-25], AttackOffsetY:[0,-28,-15,0,-15]},
	{name: "UNIT_NAME_GBC_ROLAND_MKIII", desc: "UNIT_DESC_GBC_ROLAND_MKIII",shortname:"Roland", MLPR:true, HP:245, Armor:"Heavy", Attack:70, Weapon:"Heavy", Speed:5, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:3500, TechLevel:6, Power:500, Role:"", tag1:"Cemented Steel Armor", tag2:"Schwerpunkt", tag3:"Bewegungskrieg", tag4:"Terrifying", StaticOffsetX:[0,-22,0,-23,-44], StaticOffsetY:[0,-20,0,-2,0], AttackOffsetX:[0,-31,-3,-33,-59], AttackOffsetY:[0,-25,-5,-5,-5],MovementOffsetX:[0,-20,0,-0,0],MovementOffsetY:[0,-20,0,-20,-44]},

	{name: "UNIT_NAME_HOWITZER_BATTERY", desc: "UNIT_DESC_HOWITZER_BATTERY", shortname: "Howitzer", MLPR:true, HP:40, Armor: "Light", Attack: 25, Weapon: "Medium", Speed:3, Movement: "Foot", MinRange:2, MaxRange:5, Cost:375, TechLevel:2, Power:20, Role:"", tag1:"Anti-Structure", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,-9,0,-9,-7], AttackOffsetY:[0,-14,-7,-14,-14]},
	{name: "UNIT_NAME_AA_ARTILLERY", desc: "UNIT_DESC_AA_ARTILLERY", shortname:"AA", MLPR:true, HP:40, Armor:"Light", Attack:20, Weapon:"Light", Speed:3, Movement: "Foot", MinRange:1, MaxRange:3, Cost:340, TechLevel:2, Power:20, Role:"", tag1:"Skysweeper",tag2:"Anti-Air",tag3:"",tag4:"",AttackOffsetX:[0,0,7,0,-7],AttackOffsetY:[0,-14,-7,-14,-7]},
	{name: "UNIT_NAME_ANTI_TANK_ARTILLERY", desc: "UNIT_DESC_ANTI_TANK_ARTILLERY", shortname:"AT", MLPR:true, HP:40, Armor:"Light", Attack:30, Weapon:"Heavy",Speed:3, Movement:"Foot", MinRange:1, MaxRange:3, Cost:420, TechLevel:2, Power:25, Role:"", tag1:"", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,0,0,0,-21],AttackOffsetY:[0,-21,0,-7,0]},
	{name: "UNIT_NAME_MOLDAN_BATTERY", desc: "UNIT_DESC_MOLDAN_BATTERY", shortname: "Moldan", MLPR:true, HP:40, Armor: "Light", Attack: 25, Weapon: "Medium", Speed:6, Movement: "Wheeled", MinRange:2, MaxRange:4,  Cost:550, TechLevel:3, Power:35, Role:"", tag1:"Mobile Battery", tag2:"Schwerpunkt", tag3:"", tag4:"",StaticOffsetX:[0,0,-7,0,-7],StaticOffsetY:[0,0,-12,0,-12],AttackOffsetX:[0,0,-7,0,-20],AttackOffsetY:[0,-35,-22,-3,-22]},
	{name: "UNIT_NAME_SPAB", desc: "UNIT_DESC_SPAB", shortname: "SPAB", MLPR:true,HP:60, Armor:"Medium", Attack:30, Weapon:"Medium", Speed:5, Movement:"Tracked", MinRange:2, MaxRange:5, Cost:580, TechLevel:3, Power:40, Role:"", tag1:"Anti-Structure", tag2:"Mobile Battery", tag3:"", tag4:"",AttackOffsetX:[0,0,0,0,-14],AttackOffsetY:[0,-14,0,0,0]},
	{name: "UNIT_NAME_ROCKET_TANK", desc: "UNIT_DESC_ROCKET_TANK", shortname:"Rocketank", MLPR:true, HP:60, Armor: "Light", Attack: 30, Weapon: "Light", Speed:4, Movement: "Foot", MinRange:1, MaxRange:4, Cost:500, TechLevel:4, Power:40, Role:"", tag1:"Schwerpunkt", tag2:"Mobile Battery", tag3:"", tag4:"",AttackOffsetX:[0,0,-2,0,-12],AttackOffsetY:[0,-7,-16,0,-16]},
	{name: "UNIT_NAME_BIG_BERTHA_BATTERY", desc: "UNIT_DESC_BIG_BERTHA_BATTERY", shortname: "Bertha", MLPR:true, HP:80, Armor: "Medium", Attack: 45, Weapon: "Heavy", Speed:2, Movement: "Tracked", MinRange:3, MaxRange:7, Cost:1100, TechLevel:5, Power:150, Role:"" ,tag1:"Anti-Structure", tag2:"", tag3:"", tag4:"", FactionSpecificity:3, StaticOffsetX:[0,0,-5,0,-6], StaticOffsetY:[0,-10,0,-10,0], AttackOffsetX:[0,0,0,0,-11], AttackOffsetY:[0,-39,-26,-10,-26]},
	{name: "UNIT_NAME_PULA_SRBMDP", desc: "UNIT_DESC_PULA_SRBMDP", shortname:"Pula", MLPR:true, HP:60, Armor:"Medium", Attack:20, Weapon:"Medium", Speed:5, Movement:"Wheeled", MinRange:3, MaxRange:10, Cost: 1000, TechLevel:5, Power:50, Role:"", tag1:"Anti-Structure", tag2:"", tag3:"", tag4:"", AttackOffsetX:[0,0,-6,0,3], AttackOffsetY:[0,6,-38,-7,-38]},
	{name: "UNIT_NAME_TUGARIN_ATMB", desc: "UNIT_DESC_TUGARIN_ATMB", shortname:"Tugarin", MLPR:true, HP:90, Armor:"Light", Attack:50, Weapon:"Heavy", Speed:5, Movement:"Wheeled", MinRange:2, MaxRange:5, Cost:1500, TechLevel:6, Power:180, Role:"", tag1:"Tank Hunter", tag2:"Anti-Tank", tag3:"Mobile Battery", tag4:"Bewegungskrieg",AttackOffsetX:[0,0,0,0,-14],AttackOffsetY:[0,-18,0,-2,0]},
	{name: "UNIT_NAME_BRIMSTONE_BATTERY", desc: "UNIT_DESC_BRIMSTONE_BATTERY", shortname:"Brimstone", MLPR:true, HP:100, Armor:"Light", Attack:70, Weapon:"Medium", Speed:5, Movement:"Wheeled", MinRange:3, MaxRange:7, Cost: 2500, TechLevel:6, Power:350, Role:"", tag1:"Bewegungskrieg", tag2:"Schwerpunkt", tag3:"Mobile Battery", tag4:"", StaticOffsetX:[0,0,-5,0,-6], StaticOffsetY:[0,-10,0,-10,0], AttackOffsetX:[0,0,0,0,-11], AttackOffsetY:[0,-39,-26,-10,-26]},
	
	{name: "UNIT_NAME_STORK_TRANSPORT", desc: "UNIT_DESC_STORK_TRANSPORT", shortname: "Stork", MLPR:true, HP:30, Armor: "Light", Attack:0, Weapon:"None", Speed:7, Movement:"Flight", MinRange:1, MaxRange:1, Cost:150, TechLevel:2, Power:0, Role:"", tag1:"Air Transport",tag2:"",tag3:"",tag4:""},
	{name: "UNIT_NAME_PELICAN_TRANSPORT", desc: "UNIT_DESC_PELICAN_TRANSPORT", shortname:"Pelikan", MLPR:true, HP:30, Armor: "Light", Attack:30, Weapon:"None", Speed:6, Movement:"Flight", MinRange:1, MaxRange:1, Cost:500, TechLevel:3, Power:15, Role:"", tag1:"Supply Distribution",tag2:"",tag3:"",tag4:""},
	{name: "UNIT_NAME_RAPTOR_FIGHTER", desc: "UNIT_DESC_RAPTOR_FIGHTER", shortname: "Raptor", MLPR:true, HP:50, Armor: "Light", Attack: 15, Weapon: "Light", Speed:8, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:400, TechLevel:3, Power:20, Role:"", tag1:"Skysweeper", tag2:"", tag3:"", tag4:""},
	{name: "UNIT_NAME_EAGLE_STRIKER", desc: "UNIT_DESC_EAGLE_STRIKER", shortname: "Eagle", MLPR:true, HP:50, Armor: "Light", Attack: 25, Weapon: "Medium", Speed:7, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:450, TechLevel:3, Power:25, Role:"", tag1:"", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,-2,0,-2,-4]},
	{name: "UNIT_NAME_CONDOR_BOMBER", desc: "UNIT_DESC_CONDOR_BOMBER", shortname: "Condor", MLPR:true, HP:50, Armor: "Light", Attack: 35, Weapon: "Medium", Speed:6, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:550, TechLevel:4, Power:35, Role:"", tag1:"Cavitation Explosion", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,0,0,0,-56],AttackOffsetY:[0,-56,0,0,0]},
	{name: "UNIT_NAME_AKONTIO_TORPEDOR", desc: "UNIT_DESC_AKONTIO_TORPEDOR", shortname: "Akontio", MLPR:true, HP:50, Armor: "Light", Attack: 50, Weapon: "Medium", Speed:5, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:550, TechLevel:4, Power:50, Role:"", tag1:"Seabound", tag2:"Cavitation Explosion", tag3:"", tag4:""},
	{name: "UNIT_NAME_ZEUS_STORMLORD", desc: "UNIT_DESC_ZEUS_STORMLORD", shortname: "Zeus", MLPR:true, HP:70, Armor: "Light", Attack: 35, Weapon: "Medium", Speed:10, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:910, TechLevel:5, Power:80, Role:"", tag1:"Skysweeper", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,-2,0,-2,0]},
	{name: "UNIT_NAME_SOLOVEY_SUPERBOMBER", desc: "UNIT_DESC_SOLOVEY_SUPERBOMBER", shortname:"Solovey", MLPR:true, HP:100, Armor:"Light", Attack:40, Weapon:"Heavy", Speed:6, Movement:"Flight",MinRange:1, MaxRange:1, Cost:850, TechLevel:5, Power:80, Role:"", tag1:"Anti-Structure", tag2:"", tag3:"", tag4:"", FactionSpecificity:2,AttackOffsetX:[0,0,0,0,-56],AttackOffsetY:[0,-56,0,0,0]},
	{name: "UNIT_NAME_AVN1_STIHIE", desc: "UNIT_DESC_AVN1_STIHIE", shortname:"Stihie", MLPR:true, HP: 70, Armor:"Light", Attack: 40, Weapon: "Light", Speed:10, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:1400, TechLevel:6, Power:150, Role:"", tag1:"Skysweeper", tag2:"Stealth", tag3:"", tag4:""},
	{name: "UNIT_NAME_ALEPH", desc: "UNIT_DESC_ALEPH", shortname: "ALEPH", MLPR:true, HP:50, Armor: "Light", Attack: 5000, Weapon: "Heavy", Speed:6, Movement: "Flight", MinRange:1, MaxRange:1, Cost:5000, TechLevel:7, Power:1000, Role:"" ,tag1:"JUDGEMENT", tag2:"Indomitable", tag3:"Self-Destruct", tag4:"Inertial",AttackOffsetX:[0,0,0,0,-56],AttackOffsetY:[0,-56,0,0,0]},
	
	{name: "UNIT_NAME_BARGE_CONVOY", desc: "UNIT_DESC_BARGE_CONVOY", shortname: "Convoy", MLPR:true, HP:100, Armor: "Medium", Attack:0, Weapon:"None", Speed:5, Movement: "Rudder", MinRange:1, MaxRange:1, Cost:100, TechLevel:1, Power:0, Role:"", tag1:"Naval Transport", tag2:"", tag3:"", tag4:"", StaticOffsetY:[0,-25,-22,-22,-22],MovementOffsetX:[0,-25,-22,-22,-22]},
	{name: "UNIT_NAME_INTREPID", desc: "UNIT_DESC_INTREPID", shortname: "Intrepid", MLPR:true, HP:50, Armor: "Light", Attack: 15, Weapon: "Light", Speed:6, Movement: "Rudder", MinRange:1, MaxRange:1, Cost:170, TechLevel:1, Power:10, Role:"" ,tag1:"Conqueror", tag2:"", tag3:"", tag4:"", SpriteOffset:[0,0,0,0,0], AttackOffsetX:[0,0,0,0,-9],AttackOffsetY:[0,-5,2,-5,2]},
	{name: "UNIT_NAME_SUBMERSIBLE", desc: "UNIT_DESC_SUBMERSIBLE", shortname: "Submersible", MLPR:true, HP:50, Armor: "Light", Attack: 50, Weapon: "Medium", Speed:3, Movement: "Heavy Rudder", MinRange:1, MaxRange:1, Cost:500, TechLevel:2, Power:50, Role:"" ,tag1:"Submerged", tag2:"Seabound", tag3:"Stealth", tag4:"", SpriteOffset:[0,0,0,0,0], AttackSpriteOffset:[0,0,0,0,0]},
	{name: "UNIT_NAME_DESTROYER", desc: "UNIT_DESC_DESTROYER", shortname: "Destroyer", MLPR:true, HP:100, Armor: "Medium", Attack: 25, Weapon: "Medium", Speed:6, Movement: "Rudder", MinRange:1, MaxRange:1, Cost:300, TechLevel:2, Power:50, Role:"" ,tag1:"Depth Charge", tag2:"Skysweeper", tag3:"Sonar", tag4:"Steer", AttackOffsetX:[0,0,0,0,-28], AttackOffsetY:[0,-4,-14,0,-14]},
	{name: "UNIT_NAME_LIGHT_CRUISER", desc: "UNIT_DESC_LIGHT_CRUISER", shortname: "CruiserL", MLPR:true, HP:250, Armor: "Medium", Attack: 30, Weapon: "Medium", Speed:5, Movement: "Rudder", MinRange:1, MaxRange:3, Cost:1000, TechLevel:3, Power:150, Role:"" ,tag1:"Depth Charge", tag2:"Skysweeper", tag3:"Sonar", tag4:"Anti-Air", AttackOffsetX:[0,-44,-44,-44,-44], AttackOffsetY:[0,-37,-37,-35,-37]},
	{name: "UNIT_NAME_HEAVY_CRUISER", desc: "UNIT_DESC_HEAVY_CRUISER", shortname: "CruiserH", MLPR:true, HP:500, Armor: "Heavy", Attack: 60, Weapon: "Heavy", Speed:4, Movement: "Rudder", MinRange:2, MaxRange:5, Cost:2000, TechLevel:3, Power:500, Role:"" ,tag1:"Skysweeper", tag2:"", tag3:"", tag4:"", SpriteOffset:[0,0,0,0,0], AttackOffsetX:[0,10,-6,9.75,-40],AttackOffsetY:[0,-25,-42,-3,-42]},
	{name: "UNIT_NAME_CAPITAL_SHIP", desc: "UNIT_DESC_CAPITAL_SHIP", shortname: "Battleship", MLPR:true, HP:1500, Armor: "Heavy", Attack: 100, Weapon: "Heavy", Speed:4, Movement: "Heavy Rudder", MinRange:3, MaxRange:7, Cost:5000, TechLevel:4, Power:3000, Role:"" ,tag1:"Skysweeper", tag2:"Cemented Steel Armor", tag3:"", tag4:"", AttackOffsetX:[0,-44,-49,-44,-39], AttackOffsetY:[0,-32,-33,-35,-33]},
	{name: "UNIT_NAME_AIRCRAFT_CARRIER", desc: "UNIT_DESC_AIRCRAFT_CARRIER", shortname: "Carrier", MLPR:true, HP:1050, Armor: "Heavy", Attack: 70, Weapon: "Medium", Speed:4, Movement: "Heavy Rudder", MinRange:3, MaxRange:10, Cost:7000, TechLevel:5, Power:5000, Role:"" ,tag1:"Skysweeper", tag2:"Anti-Ship", tag3:"Mobile Battery", tag4:"Cemented Steel Armor", StaticOffsetX:[0,-10,-20,-10,-31], StaticOffsetY:[0,-20,-20,-20,-20],MovementOffsetX:[0,-20,-20,-10,-20],MovementOffsetY:[0,-10,0,-10,-15], AttackOffsetX:[0,-10,-20,-10,-31], AttackOffsetY:[0,-20,-20,-20,-20]},
	{name: "UNIT_NAME_SUPERBATTLESHIP", desc: "UNIT_DESC_SUPERBATTLESHIP", shortname: "Superbattleship", MLPR:true, HP:2500, Armor: "Heavy", Attack: 250, Weapon: "Heavy", Speed:4, Movement: "Heavy Rudder", MinRange:4, MaxRange:8, Cost:10000, TechLevel:5, Power:10000, Role:"" ,tag1:"Skysweeper", tag2:"Cemented Steel Armor", tag3:"", tag4:"", AttackOffsetX:[0,-44,-49,-44,-39], AttackOffsetY:[0,-32,-33,-35,-33]},
	{name: "UNIT_NAME_SUPERCARRIER", desc: "UNIT_DESC_SUPERCARRIER", shortname: "Supercarrier", MLPR:true, HP:2450, Armor: "Heavy", Attack: 200, Weapon: "Medium", Speed:4, Movement: "Heavy Rudder", MinRange:3, MaxRange:10, Cost:15000, TechLevel:6, Power:25000, Role:"" ,tag1:"Skysweeper", tag2:"Anti-Ship", tag3:"Seabound", tag4:"Cemented Steel Armor", StaticOffsetX:[0,-10,-20,-10,-31], StaticOffsetY:[0,-20,-20,-20,-20],MovementOffsetX:[0,-20,-20,-10,-20],MovementOffsetY:[0,-10,0,-10,-15], AttackOffsetX:[0,-10,-20,-10,-31], AttackOffsetY:[0,-20,-20,-20,-20]},
	
	{name: "UNIT_NAME_BARRICADE", desc: "UNIT_DESC_BARRICADE", shortname:"Barricade", MLPR:true, HP:100, Armor:"Medium", Attack:0, Weapon:"None", Speed:0, Movement:"Stationary", MinRange:1, MaxRange:1, Cost:200, TechLevel:1, Power:0, Role:"", Timer:1, tag1:"Inertial", tag2:"", tag3:"", tag4:"", SpriteOffset:[0,0,0,0,0], AttackSpriteOffset:[0,0,0,0,0]},
	{name: "UNIT_NAME_BUNKER", desc: "UNIT_DESC_BUNKER", shortname:"Bunker", MLPR:true,HP:100,Armor:"Medium",Attack:25,Weapon:"Light",Speed:0,Movement:"Stationary",MinRange:1,MaxRange:1,Cost:250, TechLevel:1, Power:20, Role:"", Timer:1, tag1:"", tag2:"", tag3:"", tag4:"", SpriteOffsetY:[0,0,0,0,0], AttackOffsetX:[0,-44,-44,-44,-44],AttackOffsetY:[0,-44,-44,-44,-44]},
	{name: "UNIT_NAME_TURRET", desc: "UNIT_DESC_TURRET", shortname:"Turret", MLPR:true,HP:150,Armor:"Medium",Attack:30,Weapon:"Medium",Speed:0,Movement:"Stationary",MinRange:2,MaxRange:5,Cost:350, TechLevel:2, Power:70, Role:"", Timer:1, tag1:"", tag2:"", tag3:"", tag4:"", AttackOffsetX:[0,-45,-44,-44,-44],AttackOffsetY:[0,-34,-34.5,-34.5,-34.5]},
	{name: "UNIT_NAME_FLAK_TOWER", desc: "UNIT_DESC_FLAK_TOWER", shortname:"FlakTower", MLPR:true,HP:150,Armor:"Medium",Attack:25,Weapon:"Light",Speed:0,Movement:"Stationary",MinRange:2,MaxRange:5,Cost:350, TechLevel:3, Power:90, Role:"", Timer:1, tag1:"Skysweeper", tag2:"Anti-Air", tag3:"", tag4:"", StaticOffsetX:[0,0,0,0,-7], StaticOffsetY:[0,-14,0,0,0], AttackOffsetX:[0,0,0,0,-14],AttackOffsetY:[0,-21,0,0,0]},
	{name: "UNIT_NAME_COASTAL_BATTERY", desc: "UNIT_DESC_COASTAL_BATTERY", shortname:"Coastal", MLPR:true,HP:500,Armor:"Heavy",Attack:120,Weapon:"Heavy",Speed:0,Movement:"Stationary",MinRange:3,MaxRange:7,Cost:800, TechLevel:3, Power:500, Role:"", Timer:1, tag1:"Seabound", tag2:"Cavitation Explosion", tag3:"", tag4:"", StaticOffsetX:[0,-7,5,0,-20], StaticOffsetY:[0,-25,0,0,0] , AttackOffsetX:[0,-55,-58,-56,-53],AttackOffsetY:[0,-49,-46,-48,-45]},
	{name: "UNIT_NAME_WORKSHOP", desc: "UNIT_DESC_WORKSHOP", shortname:"Workshop", MLPR:true,HP:50,Armor:"Medium",Attack:0,Weapon:"None",Speed:0,Movement:"Stationary",MinRange:1,MaxRange:3,Cost:1000, TechLevel:3, Power:0, Role:"", Timer:2, tag1:"Supply Distribution", tag2:"Financial Center", tag3:"Inertial", tag4:"", AttackOffsetX:[0,0,0,0,0],AttackOffsetY:[0,0,0,0,0]},
	{name: "UNIT_NAME_MISSILE_SILO", desc: "UNIT_DESC_MISSILE_SILO", shortname:"Missile", MLPR:true,HP:160,Armor:"Medium",Attack:50, Weapon:"Medium",Speed:0,Movement:"Stationary",MinRange:2,MaxRange:7,Cost:1200, TechLevel:5, Power:160, Role:"", Timer:2, tag1:"Skysweeper", tag2:"", tag3:"", tag4:"", StaticOffsetX:[0,0,0,0,0], StaticOffsetY:[0,-21,-14,-21,-14], AttackOffsetX:[0,0,0,0,-14],AttackOffsetY:[0,-51,-14,-14,-14]},
	{name: "UNIT_NAME_BASTION", desc: "UNIT_DESC_BASTION", shortname:"Bastion", MLPR:true, HP:250, Armor:"Heavy",Attack:0, Weapon:"None", Speed:0, Movement:"Stationary",MinRange:1,MaxRange:1, Cost:2000, TechLevel:4, Power:0, Role:"", Timer: 2, tag1:"Inertial", tag2:"", tag3:"", tag4:""},
	{name: "UNIT_NAME_SUPPLY_DEPOT", desc: "UNIT_DESC_SUPPLY_DEPOT", shortname:"Depot", MLPR:true, HP:100, Armor:"Medium", Attack:35 , Weapon:"None", Speed:0, Movement:"Stationary", MinRange:1, MaxRange:7, Cost:1300, TechLevel:2, Power:75, Role:"", Timer:2, tag1:"Supply Distribution", tag2:"", tag3:"", tag4:""},
	{name: "UNIT_NAME_FORTRESS", desc: "UNIT_DESC_FORTRESS", shortname:"Fortress", MLPR:true, HP:1000, Armor:"Heavy",Attack:50, Weapon:"Medium", Speed:0, Movement:"Stationary",MinRange:1,MaxRange:7, Cost:5000, TechLevel:5, Power:1000, Role:"", Timer: 5, tag1:"Skysweeper", tag2:"", tag3:"", tag4:""},
	
	{name: "UNIT_NAME_MEME_SPARTANS", desc: "UNIT_DESC_MEME_SPARTANS", shortname:"Guards", MLPR:true, HP:220, Armor:"Medium", Attack:90, Weapon:"Medium", Speed:5, Movement:"Foot", MinRange:1, MaxRange:1, Cost:1337, tag1:"Indomitable", tag2:"", tag3:"", tag4:"", AttackOffsetX:[0,0,8,0,-8]}
];

const CampaignFactions = [
	{name:"Null", faction:"Idk, man. Neutrals maybe?", color:"Gray", ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(100%)"},
	{name:"Synarchy of Somertin", powerRanking:"Major Power", faction:"Continental Security League", Access:true , Preffix:"SOM",color:"White",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(250%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false],SpecialTechnology:[true,false,false,false,false],Currency:"Ɬ",ExchangeRate:0.8},
	{name:"Kargit Revolutionary Gosudarstvo", powerRanking:"Major Power", faction:"Glorious Coallition", Access:true , Preffix:"KAR",color:"Black",ChromaCode:"hue-rotate(0deg) saturate(0%) brightness(70%) contrast(125%)",SpecialInfantry:[false,true,false,false,false],SpecialVehicles:[false,true,false,false,false],SpecialTechnology:[false,true,false,false,false],Currency:"Ꞣ",ExchangeRate:1},
	{name:"Commonwealth of Transkal", powerRanking:"Regional Power", faction:"Continental Security League", Access:true , Preffix:"TRK",color:"Grey",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(125%)", SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,true,false,false],SpecialTechnology:[false,true,true,false,false],Currency:"₭",ExchangeRate:2},
	{name:"Polasie People's Federation", powerRanking:"Regional Power", faction:"Glorious Coallition", Access:true , Preffix:"POE",color:"DarkBlue",ChromaCode:"hue-rotate(250deg) saturate(125%) brightness(70%)", SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false],SpecialTechnology:[false,true,false,true,false],Currency:"₽",ExchangeRate:10},
	{name:"Sublime Caliphate of Elam", powerRanking:"Regional Power", faction:"Glorious Coallition", Access:true , Preffix:"ELM",color:"Green",ChromaCode:"hue-rotate(150deg) saturate(100%) brightness(120%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[false,false,false,false,true],SpecialTechnology:[false,true,false,false,true],Currency:"﷼",ExchangeRate:5},
	{name:"Commandment of Somertin Cohorts", faction:"Vladovite Redemptionary Front", Access:false , Preffix:"VLD",color:"Darkslategray",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(70%)",SpecialInfantry:[true,true,false,false,false],SpecialVehicles:[true,true,false,false,false],Currency:"Ꞣ",ExchangeRate:1},
	{name:"United Liberation Front", faction:"Continental Security League", Access:false , Preffix:"SLR",color:"Chartreuse",ChromaCode:"hue-rotate(100deg) saturate(140%) brightness(250%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false],Currency:"Ɬ",ExchangeRate:0.8},
	{name:"Arhus Structuralist Junta", faction:"Glorious Coallition", Access:false,Preffix:"ARH",color:"Brown",ChromaCode:"hue-rotate(50deg) saturate(70%) brightness(100%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,true,false,false],Currency:"₭",ExchangeRate:2},
	{name:"Free Syndicates of Polasie", faction:"L'Internationale", Access:false , Preffix:"SOC",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false],Currency:"₽",ExchangeRate:10},
	{name:"United States of Eagleland", faction:"Continental Security League", Access:false , Preffix:"USE",color:"Blue",ChromaCode:"hue-rotate(250deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[false,false,false,false,true],Currency:"$",ExchangeRate:0.8},
	{name:"Synarchy of Maharlika", powerRanking:"Extracontinental Power", faction:"Continental Security League", Access:false , Preffix:"MAH",color:"Pink",ChromaCode:"hue-rotate(325deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false],Currency:"Ɬ",ExchangeRate:0.8},
	{name:"Albion Empire", powerRanking:"Extracontinental Power", faction:"Albion Commonwealth", Access:false , Preffix:"ALB",color:"Purple",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(250%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false],Currency:"Ɬ",ExchangeRate:0.8},
	{name:"Gyros Republic", powerRanking:"Extracontinental Power", faction:"Continental Security League", Access:false , Preffix:"GYR",color:"Cyan",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(250%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false],Currency:"Ɬ",ExchangeRate:0.8},
	{name:"LKSA", powerRanking:"Extracontinental Power", faction:"Greater East Assyian Co-Prosperity Sphere", Access:false , Preffix:"LKSA",color:"Orange",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(250%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false],Currency:"Ɬ",ExchangeRate:0.8},
	{name:"Akkadian Mahdist Jihadi Front", powerRanking:"Extracontinental Power", faction:"Glorious Coallition", Access:false , Preffix:"JIH",color:"Maroon",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(250%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false],Currency:"Ɬ",ExchangeRate:0.8},
	{name:"Astartian Continental Reclamation Front", faction:"Continental Avengance League", Access:false , Preffix:"ACSF",color:"White", ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(700%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false],Currency:"Z",ExchangeRate:1},
	{name:"Greater Kargian Hegemony"},
	{name:"National Continentalist Unification Army"},
	{name:"Socialist Revolutionary Front"},
	{name:"Generalgouvernement Mazowien"},
	{name:"Polasian Redemptionary Military Governorate"},
	{name:"Transkal Loyalist Liberation Front"},
	{name:"Shallah's Sacrosanct Jihadi Front"},
	{name:"Rayon Unichtozheniya Skalistykhgor"},
	{name:"Pulanskiy Morskoy Consortium"}
];

const ConquestRegions = [
	{name:"null", X:0, Y:0, DeJureOwner:0, DeFactoOwner:0, Population:0, Infrastructure:0, Economy:[], FortificationLevel:0, TechLevel:0, AgriculturalProduce:0, CivilianGoods:0, Hydrocarbons:0, Steel:0, Bauxite:0, RareMetals:0, FissileMaterials:0, Armies:[], Terrain:{Plains:0, Tundra:0, Desert:0, Arctic:0, Hellhole:0, Forests:0, Taiga:0, Hills:0, Mountains:0, Supermountains:0, Urban:0, River:0, RiverAxis:"H", Swamp:0, Sea:0, ArcticWater:0, Islets:0}},
	{name:"null", X:0, Y:0, DeJureOwner:0, DeFactoOwner:0, Population:0, Infrastructure:0, Economy:[], FortificationLevel:0, TechLevel:0, AgriculturalProduce:0, CivilianGoods:0, Hydrocarbons:0, Steel:0, Bauxite:0, RareMetals:0, FissileMaterials:0, Armies:[]},
	{name:"null", X:0, Y:0, DeJureOwner:0, DeFactoOwner:0, Population:0, Infrastructure:0, Economy:[], FortificationLevel:0, TechLevel:0, AgriculturalProduce:0, CivilianGoods:0, Hydrocarbons:0, Steel:0, Bauxite:0, RareMetals:0, FissileMaterials:0, Armies:[]},
	{name:"null", X:0, Y:0, DeJureOwner:0, DeFactoOwner:0, Population:0, Infrastructure:0, Economy:[], FortificationLevel:0, TechLevel:0, AgriculturalProduce:0, CivilianGoods:0, Hydrocarbons:0, Steel:0, Bauxite:0, RareMetals:0, FissileMaterials:0, Armies:[]},
	{name:"null", X:0, Y:0, DeJureOwner:0, DeFactoOwner:0, Population:0, Infrastructure:0, Economy:[], FortificationLevel:0, TechLevel:0, AgriculturalProduce:0, CivilianGoods:0, Hydrocarbons:0, Steel:0, Bauxite:0, RareMetals:0, FissileMaterials:0, Armies:[]},
];

const CommanderTraitDatabase = [
	[{DoctrineName:"", OffensiveImpact:0, DefensiveImpact:0, LogisticalImpact:0, CommandImpact:0},{}],
	[{SpecialisationName:0, AdministrationImpact:0}],
	[{PoliticalAffiliation:"Rebellious",PoliticalImpact:-20},{PoliticalAffiliation:"Divergent",PoliticalImpact:-10},{PoliticalAffiliation:"Apolitical",PoliticalImpact:0},{PoliticalAffiliation:"Loyal",PoliticalImpact:10},{PoliticalAffiliation:"Sycophant",PoliticalImpact:20}],
	[{OffensiveTrait:"Idiot",OffensiveImpact:-5},{OffensiveTrait:"Haphazard",OffensiveImpact:-3},{OffensiveTrait:"Craven",OffensiveImpact:-2},{OffensiveTrait:"Indecisive",OffensiveImpact:-1},{OffensiveTrait:"Temperate",OffensiveImpact:0},{OffensiveTrait:"Brash",OffensiveImpact:1},{OffensiveTrait:"Aggressive",OffensiveImpact:2},{OffensiveTrait:"Manic",OffensiveImpact:3},{OffensiveTrait:"Offensive Genius",OffensiveImpact:5}],
	[{DefensiveTrait:"Imbecile",DefensiveImpact:-5},{DefensiveTrait:"Cowardly",DefensiveImpact:-3},{DefensiveTrait:"Dull-witted",DefensiveImpact:-2},{DefensiveTrait:"Forgetful",DefensiveImpact:-1},{DefensiveTrait:"Average",DefensiveImpact:0},{DefensiveTrait:"Cautious",DefensiveImpact:1},{DefensiveTrait:"Sharp-witted",DefensiveImpact:2},{DefensiveTrait:"Eidetic",DefensiveImpact:3},{DefensiveTrait:"Defensive Genius",DefensiveImpact:5}],
	[{LogisticalTrait:"Stupid",LogisticalImpact:-5},{LogisticalTrait:"Wasteful",LogisticalImpact:-3},{LogisticalTrait:"Insecure",LogisticalImpact:-2},{LogisticalTrait:"Indifferent",LogisticalImpact:-1},{LogisticalTrait:"Measured",LogisticalImpact:0},{LogisticalTrait:"Frugal",LogisticalImpact:1},{LogisticalTrait:"Thrifty",LogisticalImpact:2},{LogisticalTrait:"Rigourous",LogisticalImpact:3},{LogisticalTrait:"Logistical Genius",LogisticalImpact:5}],
	[{CommandTrait:"Retarded",CommandImpact:-10},{CommandTrait:"Chaotic",CommandImpact:-7},{CommandTrait:"Abrasive",CommandImpact:-5},{CommandTrait:"Introverted",CommandImpact:-3},{CommandTrait:"Ambiverted",CommandImpact:0},{CommandTrait:"Extroverted",CommandImpact:3},{CommandTrait:"Charismatic",CommandImpact:5},{CommandTrait:"Organized",CommandImpact:7},{CommandTrait:"Command Genius",CommandImpact:10}]
];

var ArmyNamesNoon = {};

var ArmyNamesMidnight = {};

var GenericFactions = [
	{name:"Null", faction:"Idk, man. Neutrals maybe?", color:"Gray", ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(100%)"},
	{name:"White", powerRanking:"Major Power", faction:"White", Access:true , Preffix:"SOM",color:"White",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(250%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false]},
	{name:"Black", powerRanking:"Major Power", faction:"Black", Access:true , Preffix:"KAR",color:"Black",ChromaCode:"hue-rotate(0deg) saturate(0%) brightness(70%) contrast(125%)",SpecialInfantry:[false,true,false,false,false],SpecialVehicles:[false,true,false,false,false]},
	{name:"Grey", powerRanking:"Regional Power", faction:"Grey", Access:true , Preffix:"TRK",color:"Grey",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(125%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,true,false,false]},
	{name:"Indigo", powerRanking:"Regional Power", faction:"Indigo", Access:true , Preffix:"POE",color:"DarkBlue",ChromaCode:"hue-rotate(250deg) saturate(125%) brightness(70%)",SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false]},
	{name:"Green", powerRanking:"Regional Power", faction:"Green", Access:true , Preffix:"ELM",color:"Green",ChromaCode:"hue-rotate(150deg) saturate(100%) brightness(120%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[false,false,false,false,true]},
	{name:"Dark Grey", faction:"Dark Grey", Access:false , Preffix:"VLD",color:"Darkslategray",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(70%)",SpecialInfantry:[true,true,false,false,false],SpecialVehicles:[true,true,false,false,false]},
	{name:"Light Green", faction:"Light Green", Access:false , Preffix:"SLR",color:"Chartreuse",ChromaCode:"hue-rotate(100deg) saturate(140%) brightness(250%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false]},
	{name:"Brown", faction:"Brown", Access:false,Preffix:"TRS",color:"Brown",ChromaCode:"hue-rotate(50deg) saturate(70%) brightness(100%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,true,false,false]},
	{name:"Red", faction:"Red", Access:false , Preffix:"SOV",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false]},
	{name:"Blue", faction:"Blue", Access:false , Preffix:"ELA",color:"Blue",ChromaCode:"hue-rotate(250deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[false,false,false,false,true]},
];

var MetacanonicalFactions = [
	{name:"Null", faction:"Idk, man. Neutrals maybe?", color:"Gray", ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(100%)"},
	{name:"Somertin Federation", powerRanking:"Major Power", faction:"Continental Security League", Access:true , Preffix:"SOM",color:"White",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(250%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false]},
	{name:"Kargit Order State", powerRanking:"Major Power", faction:"Glorious Coallition", Access:true , Preffix:"KAR",color:"Black",ChromaCode:"hue-rotate(0deg) saturate(0%) brightness(70%) contrast(125%)",SpecialInfantry:[false,true,false,false,false],SpecialVehicles:[false,true,false,false,false]},
	{name:"Commonwealth of Transkal", powerRanking:"Regional Power", faction:"Continental Security League", Access:true , Preffix:"TRK",color:"Grey",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(125%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,true,false,false]},
	{name:"Polasie Federation", powerRanking:"Regional Power", faction:"Glorious Coallition", Access:true , Preffix:"POE",color:"DarkBlue",ChromaCode:"hue-rotate(250deg) saturate(125%) brightness(70%)",SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false]},
	{name:"Elamite Empire", powerRanking:"Regional Power", faction:"Glorious Coallition", Access:true , Preffix:"ELM",color:"Green",ChromaCode:"hue-rotate(150deg) saturate(100%) brightness(120%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[false,false,false,false,true]},
	{name:"Republic of Cobrastan", faction:"Pula Gulf League", Access:false, Preffix:"COB", color:"Orange",ChromaCode:"hue-rotate(100deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Penistan Phallocracy", faction:"Pula Gulf League", Access:false, Preffix:"DICK", color:"Beige",ChromaCode:"hue-rotate(100deg) saturate(35%) brightness(200%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Gyros Federal Republic", faction:"Continental Security League", Access:false, Preffix:"GYR", color:"Cyan",ChromaCode:"hue-rotate(100deg) saturate(35%) brightness(200%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
];

var ParacanonicalFactions = [];

var MemeFactions = [
	{name:"Neutral", faction:"Neutral", color:"Gray"},
	{name:"Militarbezirsk Ohienstaat", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Republic of Kentucky", faction:"Anti-Ohio Bulwark", Access:true , Preffix:"KEN",color:"DarkBlue",ChromaCode:"hue-rotate(250deg) saturate(150%) brightness(50%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Free Legion of West Virginia", faction:"Anti-Ohio Bulwark", Access:true , Preffix:"WEV",color:"Blue",ChromaCode:"hue-rotate(250deg) saturate(100%) brightness(140%)",SpecialInfantry:[true,true,true,false,true],SpecialVehicles:[true,true,true,false,true]},
	{name:"Philadelphia Regional Administration", faction:"Anti-Ohio Bulwark", Access:true , Preffix:"PHL",color:"Black",ChromaCode:"hue-rotate(0deg) saturate(0%) brightness(70%) contrast(125%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Indiana MegaCornCorp", faction:"Anti-Ohio Bulwark", Access:true , Preffix:"IDN",color:"Green",ChromaCode:"hue-rotate(150deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Zombie Horde", faction:"BRAAAAAINZZZZZ", Access:true , Preffix:"ZOM",color:"Green",ChromaCode:"hue-rotate(150deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Survivors", faction:"Con Artist Gang", Access:true , Preffix:"ZSU",color:"Grey",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(100%)",SpecialInfantry:[false,false,true,true,true],SpecialVehicles:[false,false,false,false,false]},
	{name:"Task Force Tucker", faction:"Task Force Tucker",Access:true,Preffix:"TFT",color:"White",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(300%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Cockroach Horde", faction:"Cockroach Coallition",Access:true,Preffix:"COK",color:"Brown",ChromaCode:"hue-rotate(50deg) saturate(70%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Kanye West's Junta", faction:"Kanye West",Access:true,Preffix:"KAN",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"New York Defense Force", faction:"USA",Access:true,Preffix:"USA",color:"Indigo",ChromaCode:"hue-rotate(250deg) saturate(125%) brightness(70%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]}			
];

var RomaniaFactions = [
	{name:"Muntenia", faction:"Muntenia", Access:true , Preffix:"OHI",color:"Indigo",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Moldova", faction:"Moldova", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Transilvania", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Basarabia", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Banat", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Oltenia", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Crisana", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Dobrogea", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Maramures", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Tara Secuiasca", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Bugeac", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Bucovina", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Banatul de Vest", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
];

var EuropeFactions = [
	{name:"Neutral", faction:"Neutral", color:"Gray",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(100%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Romania", faction:"Romania", color:"Yellow",ChromaCode:"hue-rotate(100deg) saturate(140%) brightness(250%)",SpecialInfantry:[false,true,true,false,false],SpecialVehicles:[false,true,false,true,true]},
	{name:"Hungary", faction:"Hungary", color:"LimeGreen",ChromaCode:"hue-rotate(100deg) saturate(100%) brightness(200%)",SpecialInfantry:[false,true,false,false,false],SpecialVehicles:[false,true,false,false,false]},
	{name:"Bulgaria", faction:"Bulgaria", color:"Olive",ChromaCode:"hue-rotate(100deg) saturate(100%) brightness(150%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,true]},
	{name:"Serbia", faction:"Serbia", color:"Magenta",ChromaCode:"hue-rotate(300deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,true,false,false,false]},
	{name:"Greece", faction:"Greece", color:"LightSkyBlue",ChromaCode:"hue-rotate(200deg) saturate(100%) brightness(200%)",SpecialInfantry:[false,false,true,true,false],SpecialVehicles:[false,true,false,true,true]},
	{name:"Croatia", faction:"Croatia", color:"#F56FA1",ChromaCode:"hue-rotate(300deg) saturate(100%) brightness(150%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Albania", faction:"Albania", color:"Crimson",ChromaCode:"hue-rotate(0deg) saturate(140%) brightness(70%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,false,false,true]},
	{name:"Bosnia", faction:"Bosnia", color:"DarkMagenta",ChromaCode:"hue-rotate(300deg) saturate(100%) brightness(60%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[false,false,true,false,true]},
	{name:"Montenegro", faction:"Montenegro", color:"#A00000",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(70%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,false,false,true]},
	{name:"Slovakia",faction:"Slovakia", color:"#2916F5",ChromaCode:"hue-rotate(250deg) saturate(100%) brightness(80%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,false,false,true]},
	{name:"Kosovo", faction:"Kosovo", color:"Maroon",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(50%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Slovenia", faction:"Slovenia", color:"DeepPink",ChromaCode:"hue-rotate(300deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Macedonia", faction:"Macedonia", color:"#FFA600",ChromaCode:"hue-rotate(45deg) saturate(100%) brightness(150%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	

	{name:"Czechia",faction:"Czechia", color:"DarkBlue",ChromaCode:"hue-rotate(250deg) saturate(100%) brightness(50%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,false,false,true]},
	{name:"Poland",faction:"Poland", color:"E41B17",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(200%)",SpecialInfantry:[false,true,true,false,false],SpecialVehicles:[false,true,false,false,true]},
	{name:"Ukraine",faction:"Ukraine", color:"Chartreuse",ChromaCode:"hue-rotate(100deg) saturate(100%) brightness(350%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,true,false,false,false]},
	{name:"Belarus",faction:"Belarus", color:"#7E3817",ChromaCode:"hue-rotate(100deg) saturate(50%) brightness(100%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,false,true,false]},
	{name:"Lithuania",faction:"Lithuania", color:"#8B4513",ChromaCode:"hue-rotate(100deg) saturate(70%) brightness(100%)",SpecialInfantry:[false,false,true,false,true],SpecialVehicles:[false,false,false,false,true]},
	{name:"Latvia",faction:"Latvia", color:"#C11B17",ChromaCode:"hue-rotate(0deg) saturate(70%) brightness(100%)",SpecialInfantry:[false,false,false,true,true],SpecialVehicles:[false,false,false,true,true]},
	{name:"Estonia",faction:"Estonia",color:"Indigo",ChromaCode:"hue-rotate(300deg) saturate(100%) brightness(50%)",SpecialInfantry:[false,false,true,false,true],SpecialVehicles:[false,false,false,false,true]},
	{name:"Russia",faction:"Russia", color:"#FF2400",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,true,true,true,true],SpecialVehicles:[true,true,false,false,true]},
	{name:"Turkey",faction:"Turkey", color:"#B22222",ChromaCode:"hue-rotate(0deg) saturate(80%) brightness(100%)",SpecialInfantry:[false,false,true,false,true],SpecialVehicles:[false,true,false,false,true]},

	{name:"Finland",faction:"Finland", color:"Azure",ChromaCode:"hue-rotate(224deg) saturate(100%) brightness(350%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,true,false,true]},
	{name:"Sweden",faction:"Sweden", color:"#FFDB58",ChromaCode:"hue-rotate(100deg) saturate(60%) brightness(250%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,true,false,false,true]},
	{name:"Norway",faction:"Norway", color:"#C24641",ChromaCode:"hue-rotate(0deg) saturate(80%) brightness(200%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,false,false,true]},
	{name:"Denmark",faction:"Denmark", color:"Tomato",ChromaCode:"hue-rotate(10deg) saturate(60%) brightness(200%)",SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false]},
	{name:"Iceland",faction:"Iceland", color:"Azure",ChromaCode:"hue-rotate(250deg) saturate(80%) brightness(250%)",SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false]},

	{name:"Germany",faction:"Germany", color:"Gold",ChromaCode:"hue-rotate(100deg) saturate(90%) brightness(250%)",SpecialInfantry:[false,true,true,false,false],SpecialVehicles:[true,true,false,false,true]},
	{name:"Austria",faction:"Austria", color:"Brown",ChromaCode:"hue-rotate(0deg) saturate(35%) brightness(150%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,false,false,true]},
	{name:"Switzerland",faction:"Switzerland", color:"Chocolate",ChromaCode:"hue-rotate(0deg) saturate(60%) brightness(150%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,true,false,true]},
	{name:"Italy",faction:"Italy", color:"Green",ChromaCode:"hue-rotate(100deg) saturate(100%) brightness(140%)",SpecialInfantry:[false,true,false,false,false],SpecialVehicles:[false,true,false,false,true]},
	{name:"Netherlands",faction:"Netherlands", color:"Orange",ChromaCode:"hue-rotate(30deg) saturate(100%) brightness(250%)",SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false]},
	{name:"Belgium",faction:"Belgium", color:"Black",ChromaCode:"hue-rotate(0deg) saturate(0%) brightness(70%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},

	{name:"France",faction:"France", color:"Blue",ChromaCode:"hue-rotate(250deg) saturate(100%) brightness(150%)",SpecialInfantry:[false,true,false,true,true],SpecialVehicles:[false,true,false,true,true]},
	{name:"Spain",faction:"Spain", color:"#8B8000",ChromaCode:"hue-rotate(100deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,true,false,false,true],SpecialVehicles:[false,true,false,false,true]},
	{name:"Portugal",faction:"Portugal",color:"DarkGreen",ChromaCode:"hue-rotate(30deg) saturate(100%) brightness(150%)",SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false]},
	{name:"Britain",faction:"Britain",color:"Purple",ChromaCode:"hue-rotate(300deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,true,false,true,false],SpecialVehicles:[false,true,false,true,false]},
	{name:"Ireland",faction:"Ireland",color:"#5FFB17",ChromaCode:"hue-rotate(100deg) saturate(100%) brightness(175%)",SpecialInfantry:[false,false,true,false,true],SpecialVehicles:[false,false,false,true,false]},

	{name:"Transnistria",faction:"Transnistria",color:"#004225",ChromaCode:"hue-rotate(0deg) saturate(35%) brightness(100%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Freeland",faction:"Freeland",color:"Azure",ChromaCode:"hue-rotate(250deg) saturate(50%) brightness(250%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},	
	{name:"San Marino",faction:"San Marino",color:"Turquoise",ChromaCode:"hue-rotate(175deg) saturate(100%) brightness(150%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Vatican",faction:"Vatican", color:"White",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(315%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false]},
	{name:"Malta",faction:"Malta", color:"Aquamarine",ChromaCode:"hue-rotate(175deg) saturate(100%) brightness(224%)",SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false]},
	{name:"Luxembourg",faction:"Luxembourg",color:"LightSkyBlue",ChromaCode:"hue-rotate(200deg) saturate(140%) brightness(200%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},{name:"Liechtenstein",faction:"Liechtenstein", color:"Purple",ChromaCode:"hue-rotate(300deg) saturate(100%) brightness(120%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Liechtenstein",faction:"Liechtenstein", color:"Purple",ChromaCode:"hue-rotate(300deg) saturate(100%) brightness(120%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Monaco",faction:"Monaco",color:"Purple",ChromaCode:"hue-rotate(335deg) saturate(100%) brightness(120%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Andorra",faction:"Andorra",color:"Blue-Orange",ChromaCode:"hue-rotate(30deg) saturate(100%) brightness(130%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Sealand",faction:"Sealand",color:"LightSkyBlue",ChromaCode:"hue-rotate(250deg) saturate(70%) brightness(150%)",SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false]},
	{name:"Georgia",faction:"Georgia",color:"#7E3817",ChromaCode:"hue-rotate(100deg) saturate(50%) brightness(140%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,false,false,true]},
	{name:"Israel",faction:"Israel",color:"LightSkyBlue",ChromaCode:"hue-rotate(225deg) saturate(100%) brightness(350%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,true,false,false,true]},
];

var HistoricalFactions = {};

var NostalgiaFactions = [
	{name:"Null", faction:"Idk, man. Neutrals maybe?", color:"Gray", ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(100%)"},
	{name:"Northern Federation", faction:"Federation Alliance", color:"Red", Preffix:"NFE", ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[true,true,false,false,true]},
	{name:"Akkadian Empire", faction:"Akkadian Alliance", color:"Blue", Preffix:"AKK", ChromaCode:"hue-rotate(250deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[true,true,false,false,true]},
	{name:"Dragoon Nation", faction:"Federation Alliance", color:"Green", Preffix:"DRG", ChromaCode:"hue-rotate(150deg) saturate(100%) brightness(120%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[true,true,false,false,true]},
	{name:"Space Marines", faction:"Akkadian Alliance", color:"Green", Preffix:"SPA", ChromaCode:"hue-rotate(150deg) saturate(100%) brightness(120%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Mystery Army", faction:"Federation Alliance", color:"Black", Preffix:"MYS", ChromaCode:"hue-rotate(0deg) saturate(0%) brightness(70%) contrast(125%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[false,false,false,false,false]}
];

var AnniversaryFactions = [
	{name:"Null", faction:"Idk, man. Neutrals maybe?", color:"Gray", ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(100%)"},
	{},
	{},
	{name:"Us and mings", faction:"Us", color:"Grey",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(125%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{},
	{},
	{},
	{},
	{name:"Beri many okok", faction:"Okok", color:"Brown",ChromaCode:"hue-rotate(50deg) saturate(70%) brightness(100%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{},
	{}
];