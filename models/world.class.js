class World {

    // character = [
    //     new Character()
    // ];

  character = new Character();
    
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];

    backgroundObjekt = [
       
        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
    ];

    clouds = [
        new Cloud(),
        
    ];

    canvas;
    ctx; 
    keyboard;

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

        this.addObjektsToMap(this.backgroundObjekt);
        this.addToMap(this.character);
        this.addObjektsToMap(this.enemies);
        this.addObjektsToMap(this.clouds);

        let self = this;
        requestAnimationFrame(function() {
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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height)
    }
}



// ------------------------------------------------------------------------------------------------

// class World {

//     character = new Character();
    
//         enemies = [
//             new Chicken(),
//             new Chicken(),
//             new Chicken()
//         ];
    
//         clouds = [
//             new Cloud(),
            
//         ];
    
//         backgroundObjekt = [
           
//             new BackgroundObject('img/5_background/layers/air.png', 0),
//             new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
//             new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
//             new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
//         ];
    
       
    
//         canvas;
//         ctx; 
//         keyboard;
    
//         constructor(canvas, keyboard) {
    
//             this.ctx = canvas.getContext('2d');
//             this.canvas = canvas;
//             this.keyboard = keyboard;
//             this.draw();
//             this.setWorld();
            
         
//         };
    
//         setWorld(){
//             this.character.world = this;
    
    
//         }
    
//         draw(){
//             this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
//             this.addObjektsToMap(this.backgroundObjekt);
//             this.addObjektsToMap(this.character);
//             this.addObjektsToMap(this.enemies);
//             this.addObjektsToMap(this.clouds);
    
//             let self = this;
//             requestAnimationFrame(function() {
//                 self.draw();
//             });
    
          
//         };
    
//         addObjektsToMap(objects){
//             objects.forEach(object => {
//                 this.addToMap(object)
//             });
//         }
    
          
       
    
//         // MovableObject
//         addToMap(mo) {
//             this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height)
//         }
//     }