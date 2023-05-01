class MovableObject extends DrawableObjekt {
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
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
                if(this.y >= 210){
                    this.y = 210;
                    this.speedY = 0;
                }
            };
        }, 800 / 50); //wie schnell er fällt 
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) { // rahmen nur für bestimmte objekte zeichnen
            return true;
        } else {
            return this.y < 210 // bis wo er fällt 
        }
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
