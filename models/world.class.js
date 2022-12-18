class World {

  
    character = new Character();
    level = level1;
    canvas;
    ctx; 
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    throwableObjekts = [];
    statusBarBottle =  new StatusBarBottle();
    statusBarCoin = new StatusBarCoin();
    statusEndbossHeart = new StatusEndbossHeart();
    coins = [new Coin(), new Coin(),new Coin(), new Coin(),new Coin()];
    bottle = [new Bottle(), new Bottle(), new Bottle(), new Bottle(), new Bottle()]
    amount = 0;
   
    
   
   

    constructor(canvas, keyboard) {

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


   run(){
        setInterval(() =>{

            this.checkCollisions();
            this.checkThrowableObjekts();
        }, 200)
    }

    checkThrowableObjekts(){ // flashce ferfen 
        if(this.keyboard.D) {
        let bottle = new ThrowableObjekt(this.character.x + 100, this.character.y + 100);
        this.throwableObjekts.push(bottle);
    }
    }


    // checkThrowableObjekts(){ // flasche werfen 
    //     if(this.keyboard.D) {
    //         if(this.bottleAmount != 0) {
    //             let bottle = new ThrowableObjekt(this.character.x + 100, this.character.y + 100)
    //         this.throwableObjekts.push(bottle)
    //         this.bottleAmount --;
    //         this.statusBarBottle.setPercentage(this.bottleAmount*20)
    //         }
            
    //     }
    // }

    checkCollisions(){
        this.level.enemies.forEach((enemy) =>{
            if(this.character.isColliding(enemy)){
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });





        //Collision  with coin
        this.coins.forEach(coin => {
            if(this.character.isColliding(coin)) {
                coin.height = 0;
                coin.width = 0;
                this.amount ++;
                this.statusBarCoin.setPercentage(this.amount*20);
              
            }
        });

        // Collision with Bottle 
        this.bottle.forEach(bottle => {
            if(this.character.isColliding(bottle) && (bottle.heigth !=0 && bottle.width !=0)) {
              bottle.height = 0
              bottle.width = 0
              this.amount ++
              this.statusBar.setPercentage(this.amount*20)
            
            }
        })
    }

  
      

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Welt leeren
        this.ctx.translate(this.camera_x, 0);
        this.addObjektsToMapFunction();
        this.ctx.translate(-this.camera_x, 0); //cam back bestimmte objekte laufen nicht mit wie energystatus
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarBottle);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusEndbossHeart);
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);

        let self = this; // hilfs Variable da this hier nicht erkannt wird 
        requestAnimationFrame(() =>{ //   requestAnimationFrame js function x mal bild wieder geben 
            self.draw();
        });

      
    };



    addObjektsToMapFunction(){
        this.addObjektsToMap(this.level.backgroundObjekt);
        this.addObjektsToMap(this.level.enemies);
        this.addObjektsToMap(this.level.clouds);
        this.addObjektsToMap(this.throwableObjekts);
        this.addObjektsToMap(this.coins);
        this.addObjektsToMap(this.bottle);
     

    }

   




    addObjektsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        });
    };

      
   

    // MovableObject
    addToMap(mo) {
        if(mo.otherDirection){
            this.flipImage(mo); // spiegeln
            }

            mo.draw(this.ctx);
            mo.drawFrame(this.ctx); // zeichne den Rahmne

        if(mo.otherDirection){
            this.flipImageBack(mo);
        };
    }

    flipImage(mo){

        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    flipImageBack(mo){

        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}
