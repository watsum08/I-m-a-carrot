let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
const CANVAS_WIDTH = 1280;
const CANVAS_HEIGHT = 720;
canvas.height = CANVAS_HEIGHT;
let canvasOffset = 0;

let objects = [];

let darkToggle = true;
let background;
let theSwitch;
let lightBulb;
let table;

function start() {
    background = new Background(IMG_BACKGROUND);
    objects.push(background);

    theSwitch = new Switch(200, 200, IMG_SWITCHOFF);
    objects.push(theSwitch);
    
    lightBulb = new Lightbulb((CANVAS_WIDTH-IMG_LIGHTBULBOFF.width)/2, 0, IMG_LIGHTBULBOFF);
    objects.push(lightBulb);

    table = new Table((CANVAS_WIDTH-IMG_TABLE.width)/2, CANVAS_HEIGHT-240, IMG_TABLE);
    objects.push(table);

    canvas.addEventListener("click", function(e) {
        if (isMouseOn(e, theSwitch)) {
            theSwitch.interact();
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

function main() {
    requestAnimationFrame(main);

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

    /*if (darkToggle) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }*/
}