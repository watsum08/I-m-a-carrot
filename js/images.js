let images = [];

const IMG_BACKGROUND = new Image();
IMG_BACKGROUND.src = "img/Background.png";
images.push(IMG_BACKGROUND);

const IMG_TABLE = new Image();
IMG_TABLE.src = "img/Table.png";
images.push(IMG_TABLE);

const IMG_SWITCHOFF = new Image();
IMG_SWITCHOFF.src = "img/Switch_Off.png";
images.push(IMG_SWITCHOFF);

const IMG_SWITCHON = new Image();
IMG_SWITCHON.src = "img/Switch_On.png";
images.push(IMG_SWITCHON);

const IMG_LIGHTBULBOFF = new Image();
IMG_LIGHTBULBOFF.src = "img/Lightbulb_Off.png";
images.push(IMG_LIGHTBULBOFF);

const IMG_LIGHTBULBON = new Image();
IMG_LIGHTBULBON.src = "img/LightBulb_On.png";
images.push(IMG_LIGHTBULBON);

images[images.length-1].onload = start;