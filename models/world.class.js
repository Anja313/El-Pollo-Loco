class World {
    //ctx context = erlaubt auf den canvas zu mahlen 
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    level;
    throwableObjects = [];
    //
    leftButton = new MobileButton('img/background/Left2.png', 30, 420, 40, 40);
    rightButton = new MobileButton('img/background/right3.png', 120, 420, 40, 40);
    upButton = new MobileButton('img/background/UP2.png', 550, 420, 40, 40);
    throwButton = new MobileButton('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 620, 390, 90, 80);
    fullscreenButton = new MobileButton('img/background/Fullscreen3.png', 650, 425, 30, 30)
    startGameButton = new MobileButton('img/background/StartGame2.png', 230, 410, 300, 60)
    character = new Character();
    statusBar = new StatusBar();

    statusBarBottle = new StatusBarBottle();
    statusBarCoin = new StatusBarCoin();
    statusEndbossHeart = new StatusEndbossHeart();
    coins = [new Coin(), new Coin(), new Coin(), new Coin(), new Coin(), new Coin()];
    bottle = [new Bottle(), new Bottle(), new Bottle(), new Bottle(), new Bottle(), new Bottle(), new Bottle()]
    amount = 0;
    bottlecount = 0;
    energy = 100;
    bottleadded = 0;

    startScreen = new StartScreen();
    gameOverScreen = new GameOverScreen();

    gameover = false;
    gamestarted = false;

    waitforKeyInterval;

    constructor(canvas, keyboard) {
        this.level = level1
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;

        this.draw();
        this.setWorld();
        this.run();


        canvas.addEventListener('click', function (event) {
            const rect = canvas.getBoundingClientRect()
            const x = event.clientX - rect.left
            const y = event.clientY - rect.top
            if (x > 30 && x < 70 && y > 420 && y < 460) {
                world.gamestarted = true;
            }
        }, false);


    };

    setWorld() {
        this.character.world = this;
    };

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 50)
    }

    checkThrowObjects() {
        if (this.keyboard.D) {
            if (this.bottlecount > 0 && (new Date().getTime() - this.bottleadded > 1000)) { // Damit kein dauerwerfen möglich ist, nur eine flasche pro sekunde
                let bottle = new ThrowableObject(this.character.x + this.character.width, this.character.y + 40);
                this.bottleadded = new Date().getTime();
                this.throwableObjects.push(bottle);
                this.bottlecount--;
                this.statusBarBottle.setPercentage(this.bottlecount * 10)
            }
        }
        this.throwableObjects.forEach(throwableObject => {
            this.level.enemies.forEach(enemy => {
                if (!enemy.isDead()) {
                    if (throwableObject.isColliding(enemy)) {
                        throwableObject.deactivate()
                        if (enemy instanceof Endboss) {
                            enemy.hit(20);
                            this.statusEndbossHeart.setPercentage(enemy.energy)
                            if (enemy.isDead()) {
                                setTimeout(() => {
                                    world.gameover = true;
                                }, 1000);
                            }
                        } else {
                            enemy.kill();
                        }
                    }
                }
            });
        });
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !enemy.isDead()) {
                if (this.character.speedY < 0) {
                    enemy.kill();
                    this.character.speedY = 0;
                } else {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                }
            }
        });

        //Collision with coin
        this.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                coin.deactivate();
                this.amount++;
                this.statusBarCoin.setPercentage(this.amount * 20);
            }
        });

        // Collision with Bottle 
        this.bottle.forEach((bottle) => {
            if (this.character.isColliding(bottle) && bottle.height != 0 && bottle.width != 0) {
                bottle.deactivate();
                this.bottlecount++;
                this.statusBarBottle.setPercentage(this.bottlecount * 10)
            }
        })
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Welt leeren
        this.ctx.translate(this.camera_x, 0);
        if (this.gamestarted) {
            this.addObjectsToMapFunction();
            this.ctx.translate(-this.camera_x, 0); //cam back bestimmte objekte laufen nicht mit wie energystatus
            this.addDrawableObjectToMap(this.statusBar);
            this.addDrawableObjectToMap(this.statusBarBottle);
            this.addDrawableObjectToMap(this.statusBarCoin);
            this.addDrawableObjectToMap(this.statusEndbossHeart);
            this.addDrawableObjectToMap(this.leftButton)
            this.addDrawableObjectToMap(this.rightButton)
            this.addDrawableObjectToMap(this.upButton)
            this.addDrawableObjectToMap(this.throwButton)
            this.ctx.translate(this.camera_x, 0);
            this.addToMap(this.character);
            this.ctx.translate(-this.camera_x, 0);

        } else if (this.gameover) {
            debugger;
            this.ctx.translate(-this.camera_x, 0);
            this.addDrawableObjectToMap(this.gameOverScreen); 
        } else {
            this.ctx.translate(-this.camera_x, 0);
            this.addDrawableObjectToMap(this.startScreen);
            // this.addDrawableObjectToMap(this.leftButton)
        
            this.addDrawableObjectToMap(this.fullscreenButton)
            this.addDrawableObjectToMap(this.startGameButton)
        }

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

    addDrawableObjectToMap(drawableObject) {
        drawableObject.draw(this.ctx);
    }

    // MovableObject
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo); // spiegeln
        }

        mo.draw(this.ctx);

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
