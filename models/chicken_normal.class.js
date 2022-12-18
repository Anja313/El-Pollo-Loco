class ChickenNormal extends MovableObject {
    height = 100;
    width = 80;

    
    ImagesWalking = [
     'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
     'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
     'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ]

 
     constructor(){
         super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
         this.loadImages(this.ImagesWalking);
         this.x = 200 + Math.random() * 2000;
         this.speed = 0.20 + Math.random() * 0.5;
 
         this.animate();
       
       
       
     }

 }