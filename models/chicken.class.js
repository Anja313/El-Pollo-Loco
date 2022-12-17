class Chicken extends MovableObject {
    height = 100;
    width = 80;
    ImagesWalking = [
     'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
     'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
     'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
 ];
 
     constructor(){
         super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
         this.loadImages(this.ImagesWalking);
         this.x = 450 + Math.random() * 2300;
  
         this.speed = 0.15 + Math.random() * 1;
 
         this.animate();
       
     }
 
     animate(){
        setInterval(() => {
            this.moveLeft(); 
        }, 1000 /60);

         this.moveLeft();
         setInterval(() => {
            this.playAnimation(this.ImagesWalking);
            
         },100); 
     }
 }