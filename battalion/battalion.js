const Battalion = function() {
    this.state = Battalion.STATE.NONE;
    
    this.soundPlayer = new SoundPlayer(SOUND);
    this.musicPlayer = new MusicPlayer(MUSIC, PLAYLIST);
    this.client = new Client();
    this.renderer = new Renderer();
    this.language = new LanguageHandler();
    this.story = new StoryHandler();
    this.morale = new RecruitMoraleHandler();
    this.uiHandler = new UIHandler();
    this.db = new BattalionDB();

    this.timer = new Timer();
    this.timer.input = () => this.client.update();
    this.timer.update = () => {}
    this.timer.render = () => this.renderer.update(this);
    
    //this.createCamera();

    this.client.cursor.events.on(Cursor.EVENT.BUTTON_CLICK, () => {
        const context = this.getContextAtMouse();

        console.log(context);
    });
}

Battalion.LANGUAGE = {
    ENGLISH: "ENGLISH",
    SPANISH: "SPANISH",
    PORTUGUESE: "PORTUGUESE",
    ROMANIAN: "ROMANIAN",
    TURKISH: "TURKISH",
    FRENCH: "FRENCH"
};

Battalion.STATE = {
    NONE: 0,
    MAIN_MENU: 1,
    MAP_EDITOR: 2,
    BATTLE: 3
};

Battalion.DIRECTION = {
    NONE: 0,
    NORTH: 1,
    WEST: 2,
    SOUTH: 3,
    EAST: 4
};

Battalion.DIRECTION_FLIP = {
    [Battalion.DIRECTION.NONE]: Battalion.DIRECTION.NONE,
    [Battalion.DIRECTION.NORTH]: Battalion.DIRECTION.SOUTH,
    [Battalion.DIRECTION.WEST]: Battalion.DIRECTION.EAST,
    [Battalion.DIRECTION.SOUTH]: Battalion.DIRECTION.NORTH,
    [Battalion.DIRECTION.EAST]: Battalion.DIRECTION.WEST
};

Battalion.prototype.init = function() {
    this.story.init();
    this.uiHandler.mainMenu.init(this);
    this.uiHandler.updateLanguage(this);
    this.setState(Battalion.STATE.MAIN_MENU);
    this.timer.start();
}

Battalion.prototype.createCamera = function() {
    const camera = new BattalionCamera();
    const context = this.renderer.createContext("BATTALION", camera);

    camera.setTileSize(56, 56);
    context.createBuffer(560, 560);
    context.setDisplayMode(CameraContext.DISPLAY_MODE.RESOLUTION_FIXED);

    return camera;
}

Battalion.prototype.getContextAtMouse = function() {
    const lookX = this.client.cursor.positionX;
    const lookY = this.client.cursor.positionY; 
    const context = this.renderer.getCollidedContext(lookX, lookY, this.client.cursor.radius);

    if(!context) {
        return null;
    }

    return context;
}

/**
 * neyn 11.04.2025
 * 
 * Creates, returns and downloads a list of all missing
 * language tags.
 * 
 * @returns {Map}
 */
Battalion.prototype.getMissingLanguageTags = function() {
	const file = new PrettyJSON(4);
	const missing = this.language.getAllMissingTags(LANGUAGE_TEMPLATE);

	file.open();

	for(const [languageID, obj] of missing) {
		const { regular } = obj;
		
		file.openList(languageID);

		for(const id of regular) {
			file.writeLine(id, "");
		}

		file.closeList();
	}

	file.close();
	file.download("missing_tags");

    return missing;
}

Battalion.prototype.setState = function(stateID) {
    if(!Object.values(Battalion.STATE).includes(stateID)) {
        return;
    }

    if(this.state === stateID) {
        return;
    }


    this.client.router.clear(this);

    console.log("Set state to", Object.keys(Battalion.STATE)[stateID]);

    switch(this.state) {}

    switch(stateID) {
        case Battalion.STATE.MAIN_MENU: {
            this.onMainState();
            break;
        }
        case Battalion.STATE.BATTLE: {
            this.onBattleState();
            break;
        }
        case Battalion.STATE.MAP_EDITOR: {
            this.onEditorState();
            break;
        }
    }

    this.state = stateID;
}

Battalion.prototype.onBattleState = function() {
	const { router } = this.client;

    router.load(this, INPUT_BATTLE);

    router.on("DISPLAY_REGIONS", () => {
		DisplayRegions();
	});

    router.on("TOGGLE_BATTLE_FLAGS", () => {
        ToggleBattleflags();
	});

    router.on("MAP_UP", () => {
		document.getElementById('RegionMap').scrollBy(0,-280);
		document.getElementById('regionMap').scrollBy(0,-280);
        document.getElementById('TopScrollBar').click();
	});

	router.on("MAP_LEFT", () => {
		document.getElementById('RegionMap').scrollBy(-280,0);
		document.getElementById('regionMap').scrollBy(-280,0);
        document.getElementById('LeftScrollBar').click();
	});

	router.on("MAP_DOWN", () => {
		document.getElementById('RegionMap').scrollBy(0,280);
		document.getElementById('regionMap').scrollBy(0,280);
        document.getElementById('BottomScrollBar').click();
	});

	router.on("MAP_RIGHT", () => {
		document.getElementById('RegionMap').scrollBy(280,0);
		document.getElementById('regionMap').scrollBy(280,0);
        document.getElementById('RightScrollBar').click();
	});
}

Battalion.prototype.onEditorState = function() {
    const { router } = this.client;

    router.load(this, INPUT_EDITOR);

    router.on("DISPLAY_REGIONS", () => {
		DisplayRegions();
	});

    router.on("TOGGLE_BATTLE_FLAGS", () => {
        ToggleBattleflags();
	});

    router.on("TOGGLE_TRACK_FILL_SWITCH", () => {
        TrackFillSwitch = !TrackFillSwitch;
	});

    router.on("SHRINK_TILE_CONTAINER", () => {
		document.getElementById("TileContainer").style.scale="10%";
		document.getElementById("TileContainer").style.overflow="visible";
		document.getElementById("TileContainer").style.top="-250px";
		document.getElementById("TileContainer").style.left="-700px";
		document.getElementById("TileContainer").style.zIndex="10";
	});

	router.on("MAP_UP", () => {
		document.getElementById('RegionMap').scrollBy(0,-280);
		document.getElementById('regionMap').scrollBy(0,-280);
        RollMapEditor(1);
	});

	router.on("MAP_LEFT", () => {
		document.getElementById('RegionMap').scrollBy(-280,0);
		document.getElementById('regionMap').scrollBy(-280,0);
        RollMapEditor(4);
	});

	router.on("MAP_DOWN", () => {
		document.getElementById('RegionMap').scrollBy(0,280);
		document.getElementById('regionMap').scrollBy(0,280);
        RollMapEditor(3);
	});

	router.on("MAP_RIGHT", () => {
		document.getElementById('RegionMap').scrollBy(280,0);
		document.getElementById('regionMap').scrollBy(280,0);
        RollMapEditor(2);
	});
}

Battalion.prototype.onMainState = function() {
	this.client.router.load(this, INPUT_DEFAULT);
    this.story.clear();
}