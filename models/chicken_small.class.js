class ChickenSmall extends MovableObject {
    height = 70;
    width = 50;
    y = 360;

    
 


 ImagesWalking = [
    'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
    'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
    'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
];
 
     constructor(){
         super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
         this.loadImages(this.ImagesWalking);
         this.x = 400 + Math.random() * 2000;
         this.speed = 0.15 + Math.random() * 0.5;
 
         this.animate();
       
       
       
     }

 }