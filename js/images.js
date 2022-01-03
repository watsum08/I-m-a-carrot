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

const IMG_POT = new Image();
IMG_POT.src = "img/Pot_v2.png";
images.push(IMG_POT);

const IMG_WINDOWNEW = new Image();
IMG_WINDOWNEW.src = "img/Window_New.png";
images.push(IMG_WINDOWNEW);

const IMG_WINDOWBROKEN = new Image();
IMG_WINDOWBROKEN.src = "img/Window_Broken.png";
images.push(IMG_WINDOWBROKEN);

const IMG_TILES_DOG = new Image();
IMG_TILES_DOG.src = "img/Dog_Tilesheet.png";

const IMG_TILES_GOLDFISH = new Image();
IMG_TILES_GOLDFISH.src = "img/Goldfish_Tilesheet.png";

const IMG_TILES_BOOKONSHELF = new Image();
IMG_TILES_BOOKONSHELF.src = "img/BooksOnShelf_Tilesheet.png";

const IMG_TILES_WATERFALL = new Image();
IMG_TILES_WATERFALL.src = "img/Waterfall_Tilesheet.png";

const IMG_TILES_CARROT = new Image();
IMG_TILES_CARROT.src = "img/Carrot_Tilesheet.png";

images[images.length-1].onload = start;