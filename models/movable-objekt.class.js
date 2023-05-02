class MovableObject extends DrawableObjekt {
    BASELINE = 430
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    energy = 100;
    // energyUp = 0;
    // lastHit = 0;
    x = 120;
    y = 280;
    // imageCache = {};
    acceleration = 1.5;

    // charakter fallen mit - / 
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {  // bis wo er fällt s.u. / springen wenn er bei y=0 ist 
                debugger;
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
                // Durch das Intervall kann y unter den Boden liegen. dieses If setzt die y koordinate auf den boden
                if(this.y >= this.getGround()){
                    this.y = this.getGround();
                    this.speedY = 0;
                }
            };
        }, 16); //wie schnell er fällt 
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) { 
            return true;
        } else {
            return this.y < this.getGround();
        }
    }

    // Gibt die y koordinate des bodens zurück - Boden ist bei 430 minus die Höhe des Objekts
    getGround() {
        return this.BASELINE - this.height;
    }

    isColliding(mo) {
        return this.x + this.width > mo.x && // berechnung des punktes der collidierung 
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    };

    // abziehen an herzen bei kolision
    hit() {
        this.energy -= 5; // von 100 5 abziehen 
        if (this.energy < 0) { //bei 0 nichts mehr abziehen 
            this.energy = 0
        } else {
            this.lastHit = new Date().getTime();    // zeit einbinden um die zeitspanne rechnen zu können
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit // Diffrence in ms
        timepassed = timepassed / 1000; // Difference is s
        return timepassed < 0.5;  // zeitspanne für die collision || wie lange soll die hurt dauern 
    }

    isDead() {
        return this.energy == 0; // wenn die energy 0 ist dann zeige die bilder 
    }

    //  vorschlneife für bilder 
    playAnimation(images) {
        let i = this.currentImage % images.length; //i = 0 rest von images.lenght :länge der array % zurück auf img 0 
        let path = images[i];
        this.img = this.imageCach[path];
        this.currentImage++;
    };

    moveRight() {
        this.x += this.speed;
    };

    moveLeft() {
        this.x -= this.speed;
    };

    jump() {
        this.speedY = 30;// wie hoch er springt
    }
}
