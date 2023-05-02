class ThrowableObject extends MovableObject {
    inter;

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        // this.loadImages(this.IMAGESTHROWNd);
        this.height = 100;
        this.width = 90;
        this.x = x;
        this.y = y;
        this.applyGravity();
        this.throw(); //    wohin und wié hoch die flasche fliegt 
    }

    throw() {
        this.speedY = 25;
        this.inter = setInterval(() => {
            this.x += 20;
            if(this.y == this.getGround() ){
                clearInterval(this.inter);
            }
        }, 50)
    }
}
