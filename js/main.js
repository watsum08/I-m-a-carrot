let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
const CANVAS_WIDTH = 1280;
const CANVAS_HEIGHT = 720;
canvas.height = CANVAS_HEIGHT;
let canvasOffset = 0;

let frames = 0;
let timer = 0;

let mousePos = [];
let clickPos = [];
let leftKeyDown = false;
let rightKeyDown = false;


let objects = [];
let colliders = [];
let browserXPos = [];
let browserMoving = false;
let background;
let theSwitch;
let lightBulb;
let table;
let pot;
let aquarium;
let theWindow;
let dog;
let carrot;
let darkToggle = true;

function start() {
    background = new Background(IMG_BACKGROUND);
    objects.push(background);
    let bgCollider = new Object();
    bgCollider.width = 1280;
    bgCollider.height = 1;
    bgCollider.x = 0;
    bgCollider.y = CANVAS_HEIGHT-20;
    colliders.push(bgCollider);

    let leftBorderCollider = new Object();
    leftBorderCollider.width = 1;
    leftBorderCollider.height = CANVAS_HEIGHT;
    leftBorderCollider.x = 0;
    leftBorderCollider.y = 0;
    colliders.push(leftBorderCollider);

    let rightBorderCollider = new Object();
    rightBorderCollider.width = 1;
    rightBorderCollider.height = CANVAS_HEIGHT;
    rightBorderCollider.x = 1280;
    rightBorderCollider.y = 0;
    colliders.push(rightBorderCollider);

    theSwitch = new Switch(150, 280, IMG_SWITCHOFF);
    objects.push(theSwitch);
    
    lightBulb = new Lightbulb((CANVAS_WIDTH-IMG_LIGHTBULBOFF.width)/2, 0, IMG_LIGHTBULBOFF);
    objects.push(lightBulb);

    table = new Table((CANVAS_WIDTH-IMG_TABLE.width)/2, 520, IMG_TABLE);
    objects.push(table);
    let tableCollider = Object.assign({}, table);
    tableCollider.height = 30;
    tableCollider.y += 3;
    colliders.push(tableCollider);

    theWindow = new Window(900, 80, IMG_WINDOWNEW);
    objects.push(theWindow);

    dog = new Dog(1051, 231, IMG_TILES_DOG);
    objects.push(dog);

    bookshelfaquarium = new BookShelfAquarium(305, 100, IMG_TILES_BOOKONSHELF);
    objects.push(bookshelfaquarium);
    let shelfCollider = Object.assign({}, bookshelfaquarium);
    shelfCollider.y += shelfCollider.height - 16;
    shelfCollider.height = 16;
    colliders.push(shelfCollider);

    pot = new Pot((CANVAS_WIDTH-IMG_POT.width)/2, 451, IMG_POT);
    objects.push(pot);
    colliders.push(pot);

    carrot = new Carrot((CANVAS_WIDTH-100)/2, 325, IMG_TILES_CARROT);
    objects.push(carrot);

    canvas.addEventListener('click', function(e) {
        if (isMouseOn(e, theSwitch)) {
            theSwitch.interact();
        }
    });

    canvas.addEventListener('mousemove', function(e) {
        mousePos[0] = e.offsetX;
        mousePos[1] = e.offsetY;
    });

    canvas.addEventListener('mousedown', function(e) {
        if (isMouseOn(e, pot)) {
            pot.hold();
        }
    });

    canvas.addEventListener('mouseup', function(e) {
        pot.release();
    });

    document.addEventListener('keydown', function(event) {
        if(event.key === 'ArrowLeft') {
            leftKeyDown = true;
        }
        else if(event.key === 'ArrowRight') {
            rightKeyDown = true;
        }
    });

    document.addEventListener('keyup', function(event) {
        if(event.key === 'ArrowLeft') {
            leftKeyDown = false;
        }
        else if(event.key === 'ArrowRight') {
            rightKeyDown = false;
        }
    });

    main();
}

function isMouseOn(mouse, object) {
    if (mouse.offsetX >= object.x && mouse.offsetX <= object.x + object.width
        && mouse.offsetY >= object.y+canvasOffset && mouse.offsetY <= object.y+canvasOffset + object.height) {
            return true;
        } else {
            return false;
        }
}

function isCarrotOnTopOfMouse(obj, mouse) {
    if (obj.x+36 < mouse.x + mouse.width &&
        obj.x + obj.width-35 > mouse.x &&
        obj.y + obj.height < mouse.y &&
        obj.y + obj.height > mouse.y) {
            return true;
        } else {
            return false;
        }
}

function isCarrotOnTopOfCol(obj, col) {
    if (obj.x+36 < col.x + col.width &&
        obj.x + obj.width-35 > col.x &&
        obj.y + obj.height < col.y+3 &&
        obj.y + obj.height > col.y-3) {
            return true;
        } else {
            return false;
        }
}

function isCarrotLeftOfCol(obj, col) {
    if ((obj.x+obj.width-35 - col.x) < 3 &&
        (obj.x+obj.width-35 - col.x) > -3 &&
        obj.y < col.y + col.height &&
        obj.y + obj.height > col.y) {
        return true;
    } else {
        return false;
    }
}

function isCarrotRightOfCol(obj, col) {
    if ((obj.x+36 - (col.x+col.width)) < 3 &&
        (obj.x+36 - (col.x+col.width)) > -3 &&
        obj.y < col.y + col.height &&
        obj.y + obj.height > col.y) {
        return true;
    } else {
        return false;
    }
}

function isBrowserMoving() {
    if (browserXPos.length < 10) {
        browserXPos.push(window.screenX);
    } else {
        browserXPos.splice(0, 1);
        browserXPos.push(window.screenX);

        let movementTot = 0;

        for (let i = 0; i < 8; i++) {
            movementTot += Math.abs(browserXPos[i] - browserXPos[i+1])
        }

        if (movementTot > 600) {
            browserMoving = true;
        }
    }
}

function main() {
    requestAnimationFrame(main);
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    frames++;
    if(!(frames%60)) {
        timer++;
        frames = 0;
    }

    if(window.innerHeight >= CANVAS_HEIGHT) {
        canvas.height = CANVAS_HEIGHT
        canvasOffset = 0;
    } else {
        canvas.height = window.innerHeight;
        canvasOffset = window.innerHeight - CANVAS_HEIGHT;
    }

    isBrowserMoving();

    objects.forEach(object => {
        object.update();
    });

    if (darkToggle) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
        ctx.fillRect(theWindow.x+16, theWindow.y+canvasOffset+16, theWindow.width-32, theWindow.height-32);
        ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
        ctx.fillRect(0, 0, theWindow.x+19, CANVAS_HEIGHT);
        ctx.fillRect(theWindow.x+19, 0, theWindow.width-38, theWindow.y+canvasOffset+19);
        ctx.fillRect(theWindow.x+theWindow.width-19, 0, CANVAS_WIDTH-theWindow.x, CANVAS_HEIGHT);
        ctx.fillRect(theWindow.x+19, theWindow.y+theWindow.height+canvasOffset-19, theWindow.width-38, CANVAS_HEIGHT-theWindow.height-theWindow.y-canvasOffset);
    } else {
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
        ctx.fillRect(theWindow.x+16, theWindow.y+canvasOffset+16, theWindow.width-32, theWindow.height-32);
    }
}