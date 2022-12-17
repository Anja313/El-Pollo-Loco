class World {

  
    character = new Character();
    level = level1;
    canvas;
    ctx; 
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    throwableObjekts = [];

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

    checkCollisions(){
        this.level.enemies.forEach((enemy) =>{
            if(this.character.isColliding(enemy)){
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy) // coin abzug bei collision 
            
            }
            
        })
    };



    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // alle welten übernehmen 

        this.ctx.translate(this.camera_x, 0);
       
        this.addObjektsToMap(this.level.backgroundObjekt);
        this.addObjektsToMap(this.level.clouds);
        this.addToMap(this.character);
        
        this.ctx.translate(-this.camera_x, 0); //cam back bestimmte objekte laufen mit wie energystatus
        this.addToMap(this.statusBar);
        this.addObjektsToMap(this.throwableObjekts);
        this.ctx.translate(this.camera_x, 0);
        this.addObjektsToMap(this.level.enemies);
       
        // this.addObjektsToMap(this.level.endboss);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(() =>{
            self.draw();
        });

      
    };

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
