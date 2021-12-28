let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
const CANVAS_WIDTH = 1280;
const CANVAS_HEIGHT = 720;
canvas.height = CANVAS_HEIGHT;
let canvasOffset = 0;

let objects = [];

let darkToggle = true;

let background = new Background(IMG_BACKGROUND);
objects.push(background);

let theSwitch = new Switch(100, 200, IMG_SWITCHOFF);
objects.push(theSwitch);

let lightBulb = new Lightbulb((CANVAS_WIDTH-IMG_LIGHTBULBOFF.width)/2, 0, IMG_LIGHTBULBOFF);
objects.push(lightBulb);

let table = new Table((CANVAS_WIDTH-IMG_TABLE.width)/2, CANVAS_HEIGHT-240, IMG_TABLE);
objects.push(table);

document.addEventListener('click', function (e) {
    if (isMouseOn(e, theSwitch)) {
        theSwitch.interact();
    }

});

function isMouseOn(mouse, object) {
    if (mouse.x >= object.x && mouse.x <= object.x + object.width
        && mouse.y >= object.y && mouse.y <= object.y + object.height) {
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

    if (darkToggle) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

main();