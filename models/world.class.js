class World {

  
    character = new Character();
    level = level1;
    canvas;
    ctx; 
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {

        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
     
    };

    setWorld() {
        this.character.world = this;
    };


    checkCollisions(){
        setInterval(() =>{
            this.level.enemies.forEach((enemy) =>{
                if(this.character.isColliding(enemy)){
                   
                    this.character.hit();
                    
                    console.log('Collision whit character', this.character.energy)
                }
                
            })

        }, 200)

    }





    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjektsToMap(this.level.backgroundObjekt);
        this.addToMap(this.character);
        this.addObjektsToMap(this.level.enemies);
        this.addObjektsToMap(this.level.clouds);
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
            this.flipImage(mo);
            }
       
            mo.draw(this.ctx);
            mo.drawFrame(this.ctx);

          
        

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
