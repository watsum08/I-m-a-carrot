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
        } else {
            this.sprite = IMG_SWITCHOFF;
            darkToggle = true;
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
        ctx.drawImage(this.sprite, this.x, this.y + canvasOffset, this.width, this.height);
    }
}

function Pot(x, y, image) {
    this.x = x;
    this.y = y;
    this.width = image.width;
    this.height = image.height;
    this.sprite = image;

    this.update = function() {

        this.draw();
    }

    this.draw = function() {
        ctx.drawImage(this.sprite, this.x, this.y + canvasOffset, this.width, this.height);
    }
}

function Window(x, y, image) {
    this.x = x;
    this.y = y;
    this.width = image.width;
    this.height = image.height;
    this.sprite = image;

    this.update = function() {

        this.draw();
    }

    this.draw = function() {
        ctx.drawImage(this.sprite, this.x, this.y + canvasOffset, this.width, this.height);
    }
}

function Aquarium(x, y, image) {
    this.x = x;
    this.y = y;
    this.width = image.width;
    this.height = image.height;
    this.sprite = image;

    this.update = function() {

        this.draw();
    }

    this.draw = function() {
        ctx.drawImage(this.sprite, this.x, this.y + canvasOffset, this.width, this.height);
    }
}

function Dog(x, y, image) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.sprite = image;
    this.animationFrame = 0;

    this.update = function() {
        if (!(frames%20)) {
            if (this.animationFrame < 3) {
                this.animationFrame++;
            } else {
                this.animationFrame = 0;
            }
        }

        this.draw();
    }

    this.draw = function() {
        let sourceX = (this.width + 10) * this.animationFrame;
        ctx.drawImage(this.sprite, sourceX, 0, this.width, this.height, this.x, this.y + canvasOffset, this.width, this.height);
    }
}

function Carrot(x, y, image) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 128;
    this.sprite = image;
    this.animationFrame = 2;
    this.isBaby = true;
    this.isAdult = false;
    this.speedX = 0;
    this.speedY = 0;
    this.maxSpeed = 4;

    this.move = function() {
        if (this.isBaby) {
            if (leftKeyDown && !rightKeyDown) {
                this.animationFrame = 0;
            } else if (rightKeyDown && !leftKeyDown) {
                this.animationFrame = 1;
            } else {
                this.animationFrame = 2;
            }
        } else if (this.isAdult) {
            if (!isCarrotRightOfCol(this, colliders[0]) &&
                !isCarrotRightOfCol(this, colliders[1]) &&
                leftKeyDown && !rightKeyDown) {
                if (this.animationFrame < 47) {
                    if (!(frames%2)) {
                        this.animationFrame++;
                    }
                } else {
                    this.animationFrame = 39;
                }
                if (this.speedX > -this.maxSpeed) {
                    this.speedX--;
                }
            } else if (!isCarrotLeftOfCol(this, colliders[0]) &&
                        !isCarrotLeftOfCol(this, colliders[1]) &&
                        rightKeyDown && !leftKeyDown) {
                if (this.animationFrame < 47) {
                    if (!(frames%2)) {
                        this.animationFrame++;
                    }
                } else {
                    this.animationFrame = 39;
                }
                if (this.speedX < this.maxSpeed) {
                    this.speedX++;
                }
            } else {
                this.animationFrame = 39;
                this.speedX = 0;
            }
        }
        
        this.x += this.speedX/2;
    }

    this.update = function() {
        if (canvasOffset < -160 && !this.isAdult) {
            this.isBaby = false;

            if (this.animationFrame < 39) {
                if (!(frames%2)) {
                    this.animationFrame++;
                }
            } else {
                this.isAdult = true;
            }
        }


        this.move();
        this.draw();
    }

    this.draw = function() {
        let posY = Math.floor(this.animationFrame/8) + 1;
        let sourceX = this.width * (this.animationFrame - (posY * 8) + 8);
        let sourceY = this.height * (posY-1);

        ctx.drawImage(this.sprite, sourceX, sourceY, this.width, this.height, this.x, this.y + canvasOffset, this.width, this.height);
    }
}