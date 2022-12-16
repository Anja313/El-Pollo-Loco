class Endboss extends MovableObject{

    height = 380;
    width = 260;
    y = 80;
  
    ImagesWalking = [
     'img/4_enemie_boss_chicken/1_walk/G1.png',
     'img/4_enemie_boss_chicken/1_walk/G2.png',
     'img/4_enemie_boss_chicken/1_walk/G3.png',
     'img/4_enemie_boss_chicken/1_walk/G4.png',

    'img/4_enemie_boss_chicken/2_alert/G5.png',
    'img/4_enemie_boss_chicken/2_alert/G6.png',
    'img/4_enemie_boss_chicken/2_alert/G7.png',
    'img/4_enemie_boss_chicken/2_alert/G8.png',
    'img/4_enemie_boss_chicken/2_alert/G9.png',
    'img/4_enemie_boss_chicken/2_alert/G10.png',
    'img/4_enemie_boss_chicken/2_alert/G11.png',
    'img/4_enemie_boss_chicken/2_alert/G12.png',
 ];
 
     constructor(){
         super().loadImage('img/4_enemie_boss_chicken/1_walk/G1.png');
         this.loadImages(this.ImagesWalking);
         this.x = 900 // x achse startet der endboss
    
 
         this.animate();
       
     }
 
     animate(){
         this.moveLeft();
         setInterval(() => {
            this.playAnimation(this.ImagesWalking);
            
         },100);
        }
    }
 