function Background(image) {
    this.x = 0;
    this.y = 0;
    this.width = CANVAS_WIDTH;
    this.height = CANVAS_HEIGHT;
    this.sprite = image;


    this.update = function() {
        
        this.draw();
    }

    this.draw = function() {
        ctx.drawImage(this.sprite, this.x, this.y + canvasOffset, this.width, this.height);
    }
}

function Switch(x, y, image) {
    this.x = x;
    this.y = y;
    this.width = image.width;
    this.height = image.height;
    this.sprite = image;
    
    
    this.interact = function() {
        if (darkToggle) {
            this.sprite = IMG_SWITCHON;
            darkToggle = false;

            console.log("Switch turned on!");
        } else {
            this.sprite = IMG_SWITCHOFF;
            darkToggle = true;

            console.log("Switch turned off!");
        }
    }

    this.update = function() {

        this.draw();
    }

    this.draw = function() {
        ctx.drawImage(this.sprite, this.x, this.y + canvasOffset, this.width, this.height);
    }
}

function Lightbulb(x, y, image) {
    this.x = x;
    this.y = y;
    this.width = image.width;
    this.height = image.height;
    this.sprite = image;


    this.update = function() {
        if (darkToggle) {
            this.sprite = IMG_LIGHTBULBOFF;
        } else {
            this.sprite = IMG_LIGHTBULBON;
        }

        this.draw();
    }

    this.draw = function() {
        ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
}

function Table(x, y, image) {
    this.x = x;
    this.y = y;
    this.width = image.width;
    this.height = image.height;
    this.sprite = image;


    this.update = function() {

        this.draw();
    }

    this.draw = function() {
        ctx.drawImage(image, this.x, this.y + canvasOffset, this.width, this.height);
    }
}