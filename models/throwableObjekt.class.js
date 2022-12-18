class ThrowableObjekt extends MovableObject {

    
    constructor(x, y){
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        // this.loadImages(this.ImagesWalking);
        this.x = x;
        this.y = y;
        this.height = 100; 
        this.width =90;
        this.trow(140,400); //    wohin und wié hoch die flasche fliegt 
    }

    trow(){
      
        this.speedY = 30;
        this.applyGravity();
        setInterval (() => {
            this.x = 10;
        }, 25);

    }

    }