let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
const CANVAS_WIDTH = 1280;
const CANVAS_HEIGHT = 720;
canvas.height = CANVAS_HEIGHT;
let canvasOffset = 0;

let frames = 0;
let timer = 0;

let leftKeyDown = false;
let rightKeyDown = false;


let objects = [];
let colliders = [];
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

    theSwitch = new Switch(200, 200, IMG_SWITCHOFF);
    objects.push(theSwitch);
    
    lightBulb = new Lightbulb((CANVAS_WIDTH-IMG_LIGHTBULBOFF.width)/2, 0, IMG_LIGHTBULBOFF);
    objects.push(lightBulb);

    table = new Table((CANVAS_WIDTH-IMG_TABLE.width)/2, CANVAS_HEIGHT-200, IMG_TABLE);
    objects.push(table);
    colliders.push(Object.assign({}, table));
    colliders[0].height = 26;

    pot = new Pot((CANVAS_WIDTH-IMG_POT.width)/2, 451, IMG_POT);
    objects.push(pot);
    colliders.push(pot);

    aquarium = new Aquarium(200, 200, IMG_AQUARIUM);
    objects.push(aquarium); // a mettre ensemble shelf, books et aquarium (images et objet)

    theWindow = new Window(900, 80, IMG_WINDOWNEW);
    objects.push(theWindow);

    dog = new Dog(1051, 231, IMG_TILES_DOG);
    objects.push(dog);

    carrot = new Carrot(900, 350, IMG_TILES_CARROT);
    objects.push(carrot);

    canvas.addEventListener("click", function(e) {
        if (isMouseOn(e, theSwitch)) {
            theSwitch.interact();
        }
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

function isCarrotOnTopOfCol(obj) {
    if (obj.x+36 < col.x + col.width &&
        obj.x + obj.width-35 > col.x &&
        obj.y + obj.height === col.y) {
            return true;
        } else {
            return false;
        }
}

function isCarrotBesideOfCol(obj, col) {
    if (obj.x+36 < col.x + col.width &&
        obj.x + obj.width-35 > col.x &&
        obj.y < col.y + col.height &&
        obj.height + obj.y > col.y) {
        return true;
    } else { return false; }
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

function main() {
    requestAnimationFrame(main);
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

    objects.forEach(object => {
        object.update();
    });

    if (darkToggle) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}