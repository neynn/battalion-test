const CameraContext = function(id, camera) {
    this.id = id;
    this.camera = camera;
    this.positionX = 0;
    this.positionY = 0;
    this.display = null;
    this.scale = CameraContext.BASE_SCALE;
    this.scaleMode = CameraContext.SCALE_MODE.NONE;
    this.positionMode = CameraContext.POSITION_MODE.FIXED;
    this.displayMode = CameraContext.DISPLAY_MODE.RESOLUTION_DEPENDENT;
    this.windowWidth = 0;
    this.windowHeight = 0;
}

CameraContext.BASE_SCALE = 1;

CameraContext.POSITION_MODE = {
    FIXED: 0,
    AUTO_CENTER: 1
};

CameraContext.DISPLAY_MODE = {
    RESOLUTION_DEPENDENT: 0,
    RESOLUTION_FIXED: 1
};

CameraContext.SCALE_MODE = {
    NONE: 0,
    WHOLE: 1,
    FRACTURED: 2
};

CameraContext.prototype.getID = function() {
    return this.id;
}

CameraContext.prototype.setWindow = function(windowWidth, windowHeight) {
    this.windowWidth = windowWidth;
    this.windowHeight = windowHeight;
}

CameraContext.prototype.setScaleMode = function(modeID) {
    switch(modeID) {
        case CameraContext.SCALE_MODE.NONE: {
            this.scaleMode = CameraContext.SCALE_MODE.NONE;
            break;
        }
        case CameraContext.SCALE_MODE.WHOLE: {
            this.scaleMode = CameraContext.SCALE_MODE.WHOLE;
            break;
        }
        case CameraContext.SCALE_MODE.FRACTURED: {
            this.scaleMode = CameraContext.SCALE_MODE.FRACTURED;
            break;
        }
        default: {
            console.warn(`Scale mode is not supported! ${modeID}`);
            break;
        }
    }

    this.reload();
}

CameraContext.prototype.setPositionMode = function(modeID) {
    switch(modeID) {
        case CameraContext.POSITION_MODE.FIXED: {
            this.positionMode = CameraContext.POSITION_MODE.FIXED;
            break;
        }
        case CameraContext.POSITION_MODE.AUTO_CENTER: {
            this.positionMode = CameraContext.POSITION_MODE.AUTO_CENTER;
            break;
        }
        default: {
            console.warn(`Position mode is not supported! ${modeID}`);
            break;
        }
    }
}

CameraContext.prototype.setDisplayMode = function(modeID) {
    switch(modeID) {
        case CameraContext.DISPLAY_MODE.RESOLUTION_DEPENDENT: {
            this.displayMode = CameraContext.DISPLAY_MODE.RESOLUTION_DEPENDENT;
            this.camera.setViewportSize(this.windowWidth, this.windowHeight);
            this.reload();
            break;
        }
        case CameraContext.DISPLAY_MODE.RESOLUTION_FIXED: {
            if(!this.display) {
                break;
            }

            this.displayMode = CameraContext.DISPLAY_MODE.RESOLUTION_FIXED;
            this.camera.setViewportSize(this.display.width, this.display.height);
            this.reload();
            break;
        }
        default: {
            console.warn(`DisplayMode ${modeID} is not supported!`);
            break;
        }
    }
}

CameraContext.prototype.setPosition = function(x, y) {
    this.positionX = Math.floor(x);
    this.positionY = Math.floor(y);
}

CameraContext.prototype.dragCamera = function(deltaX, deltaY) {
    const dragX = deltaX / this.scale;
    const dragY = deltaY / this.scale;

    this.camera.dragViewport(dragX, dragY);
}

CameraContext.prototype.getWorldPosition = function(screenX, screenY) {
    const { x, y } = this.camera.getViewport();

    return {
        "x": (screenX - this.positionX) / this.scale + x,
        "y": (screenY - this.positionY) / this.scale + y
    }
}

CameraContext.prototype.getBounds = function() {
    const { w, h } = this.camera.getViewport();

    return {
        "x": this.positionX,
        "y": this.positionY,
        "w": w * this.scale,
        "h": h * this.scale
    }
}

CameraContext.prototype.getCamera = function() {
    return this.camera;
}

CameraContext.prototype.reloadCamera = function() {
    if(this.positionMode === CameraContext.POSITION_MODE.AUTO_CENTER) {
        if(this.displayMode !== CameraContext.DISPLAY_MODE.RESOLUTION_FIXED) {
            this.camera.alignViewport();
        }

        this.centerCamera();
    }

    this.camera.reloadViewport();
}

CameraContext.prototype.reload = function() {
    this.reloadScale();
    this.reloadCamera();
}

CameraContext.prototype.onWindowResize = function(windowWidth, windowHeight) {
    this.windowWidth = windowWidth;
    this.windowHeight = windowHeight;

    if(this.displayMode !== CameraContext.DISPLAY_MODE.RESOLUTION_FIXED) {
        this.camera.setViewportSize(windowWidth, windowHeight);
    }

    this.reload();
}

CameraContext.prototype.centerCamera = function() {
    const { w, h } = this.camera.getViewport();
    const positionX = (this.windowWidth - this.scale * w) * 0.5;
    const positionY = (this.windowHeight - this.scale * h) * 0.5;

    this.setPosition(positionX, positionY);
}

CameraContext.prototype.getScale = function(width, height) {
    if(!this.display) {
        return CameraContext.BASE_SCALE;
    }

    let scaleX = CameraContext.BASE_SCALE;
    let scaleY = CameraContext.BASE_SCALE;

    switch(this.scaleMode) {
        case CameraContext.SCALE_MODE.FRACTURED: {
            scaleX = width / this.display.width;
            scaleY = height / this.display.height;
            break;
        }
        case CameraContext.SCALE_MODE.WHOLE: {
            scaleX = Math.floor(width / this.display.width);
            scaleY = Math.floor(height / this.display.height);
            break;
        }
    }

    const minScale = Math.min(scaleX, scaleY);

    if(minScale < CameraContext.BASE_SCALE) {
        return CameraContext.BASE_SCALE;
    }

    return minScale;
}

CameraContext.prototype.reloadScale = function() {
    if(this.displayMode === CameraContext.DISPLAY_MODE.RESOLUTION_DEPENDENT) {
        this.scale = CameraContext.BASE_SCALE;
        return;
    }

    let width = this.windowWidth;
    let height = this.windowHeight;

    if(this.positionMode === CameraContext.POSITION_MODE.FIXED) {
        width -= this.positionX;
        height -= this.positionY;
    }

    this.scale = this.getScale(width, height);
}

CameraContext.prototype.createBuffer = function(width, height) {
    if(!this.display) {
        this.display = new Display();
        this.display.init(width, height, Display.TYPE.BUFFER);
    }
}

CameraContext.prototype.destroyBuffer = function() {
    this.display = null;
    this.setDisplayMode(CameraContext.DISPLAY_MODE.RESOLUTION_DEPENDENT);
}

CameraContext.prototype.setResolution = function(width, height) {
    if(this.displayMode !== CameraContext.DISPLAY_MODE.RESOLUTION_FIXED) {
        return;
    }

    this.display.resize(width, height);
    this.camera.setViewportSize(width, height);
    this.reload();
}

CameraContext.prototype.update = function(gameContext, mainContext) {
    switch(this.displayMode) { 
        case CameraContext.DISPLAY_MODE.RESOLUTION_DEPENDENT: {
            mainContext.translate(this.positionX, this.positionY);

            this.camera.update(gameContext, mainContext);
            break;
        }
        case CameraContext.DISPLAY_MODE.RESOLUTION_FIXED: {
            const { canvas, context, width, height } = this.display;
            const { x, y, w, h } = this.getBounds();

            this.display.clear();
            this.camera.update(gameContext, context);

            mainContext.drawImage(canvas, 0, 0, width, height, x, y, w, h);
            break;
        }
    }
}
