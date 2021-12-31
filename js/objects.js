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
    this.gravitate = false;
    this.mouseSticking = false;


    this.mouseStick = function(e) {
        if (carrot.y + carrot.height + canvasOffset - e.offsetY < 15 &&
            carrot.y + carrot.height + canvasOffset - e.offsetY > -15 &&
            carrot.x+36 < e.offsetX &&
            carrot.x + carrot.width-35 > e.offsetX &&
            carrot.isAdult) { 

        this.mouseSticking = true;
        this.y = e.offsetY - this.height - canvasOffset - 3;
        let moveX = e.offsetX - this.x - this.width/2;
        this.x += moveX;

        } else {
                carrot.mouseSticking = false;
            }
    }

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
                !isCarrotRightOfCol(this, colliders[2]) &&
                !isCarrotRightOfCol(this, colliders[3]) &&
                !isCarrotRightOfCol(this, colliders[4]) &&
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
                        !isCarrotLeftOfCol(this, colliders[2]) &&
                        !isCarrotLeftOfCol(this, colliders[3]) &&
                        !isCarrotLeftOfCol(this, colliders[4]) &&
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
    
    }

    this.update = function() {
        if (canvasOffset < -160 && !this.isAdult && !darkToggle) {
            this.isBaby = false;

            if (this.animationFrame < 39) {
                if (!(frames%4)) {
                    this.animationFrame++;
                }
            } else {
                this.isAdult = true;
                this.gravitate = true;
            }
        }

        if (this.mouseSticking) {
            this.gravitate = false;
        }

       for (let i = 0; i < colliders.length; i++) {
            if (isCarrotOnTopOfCol(this, colliders[i])) {
                this.gravitate = false;
                break;
            } else if (!this.mouseSticking) {
                this.gravitate = true;
            }
        }

        if (this.isAdult && this.gravitate && !this.mouseSticking) {
            if (this.speedY < this.maxSpeed) {
                this.speedY++;
            }
        } else if (this.isAdult && !this.gravitate && !this.mouseSticking) {
            this.speedY = 0;
        }

        

        this.move();
        this.x += this.speedX/2;
        this.y += this.speedY;
        this.draw();
    }

    this.draw = function() {
        let posY = Math.floor(this.animationFrame/8) + 1;
        let sourceX = this.width * (this.animationFrame - (posY * 8) + 8);
        let sourceY = this.height * (posY-1);

        ctx.drawImage(this.sprite, sourceX, sourceY, this.width, this.height, this.x, this.y + canvasOffset, this.width, this.height);
    }
}