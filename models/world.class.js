class World {
    //ctx context = erlaubt auf den canvas zu mahlen 
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    level;
    throwableObjects = [];
    character = new Character();
    statusBar = new StatusBar();
    // clearRect =  new BackgroundObject('img/5_background/layers/air.png', 0, 0);

    statusBarBottle = new StatusBarBottle();
    statusBarCoin = new StatusBarCoin();
    statusEndbossHeart = new StatusEndbossHeart();
    coins = [new Coin(), new Coin(), new Coin(), new Coin(), new Coin()];
    bottle = [new Bottle(), new Bottle(), new Bottle(), new Bottle(), new Bottle()]
    amount = 0;
    energy = 100;

    constructor(canvas, keyboard) {
        this.level = level1
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    };

    setWorld() {
        this.character.world = this;
    };


    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200)
    }

    checkThrowObjects() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
        this.throwableObjects.forEach(throwableObject => {
            this.level.enemies.forEach(enemy => {
                if (!enemy.isDead()) {
                    if (throwableObject.isColliding(enemy)) {
                        enemy.kill();
                        setTimeout(() => {
                            let position = this.level.enemies.indexOf(enemy);
                            this.level.enemies.splice(position, 1);
                        }, 2000);
                    }
                }
            });
        });
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });

        //Collision with coin
        this.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                coin.height = 0;
                coin.width = 0;
                this.amount++;
                this.statusBarCoin.setPercentage(this.amount * 20);
            }
        });

        // Collision with Bottle 
        this.bottle.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                bottle.height = 0
                bottle.width = 0
                this.amount++
                //   this.character.hit();
                this.statusBarBottle.setPercentage(this.amount * 5)

            }
        })
    }



    // objekte werden zugefühgt
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Welt leeren
        // this.addToMap(this.clearRect);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMapFunction();
        this.ctx.translate(-this.camera_x, 0); //cam back bestimmte objekte laufen nicht mit wie energystatus
        this.addStatusBarToMap(this.statusBar);
        this.addStatusBarToMap(this.statusBarBottle);
        this.addStatusBarToMap(this.statusBarCoin);
     //   this.addStatusBarToMap(this.statusEndbossHeart);
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);

        let self = this; // hilfs Variable da this hier nicht erkannt wird 
        requestAnimationFrame(() => { //   requestAnimationFrame js function x mal bild wieder geben 
            self.draw();
        });


    };


    // alle mit cam bewegliche objekte 
    // aus welchen classen ich die daten ziehe zb level von level1
    addObjectsToMapFunction() {
        this.addObjectsToMap(this.level.backgroundObject);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.coins);
        this.addObjectsToMap(this.bottle);
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    };

    addStatusBarToMap(statusBar) {
        statusBar.draw(this.ctx);
        statusBar.drawFrame(this.ctx); // zeichne den Rahmne
    }

    // MovableObject
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo); // spiegeln
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx); // zeichne den Rahmne

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        };
    }

    flipImage(mo) {

        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    flipImageBack(mo) {

        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}
