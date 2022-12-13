class Chicken extends MovableObject {
   height = 100;
   width = 80;
   chickenWalking = [
    'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
];

    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.chickenWalking);
        this.x = 120 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
      
    }

    animate(){
        this.moveLeft();

        setInterval(() => {
            let i = this.currentImage % this.chickenWalking.length;
            let path = this.chickenWalking[i];
            this.img = this.imageCach[path];
            this.currentImage++;
            // this.x = this.x + 4;
            // if( this.x > 720) this.x = -30;
           
        },100);
    }
}