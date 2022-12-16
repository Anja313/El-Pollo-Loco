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
     
    };

    setWorld() {
        this.character.world = this;
    };


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
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height)
        if(mo.otherDirection){
            mo.x = mo.x * -1;
            this.ctx.restore();
        };
    }
}