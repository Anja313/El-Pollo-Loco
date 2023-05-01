class ChickenNormal extends MovableObject {
    height = 100;
    width = 80;
    y = 330;

    ImagesWalking = [
     'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
     'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
     'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ]
    // ImagesDead = [
    //     'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
      
    //    ]
 
    //  wer läuft von wo start bis wo ende und wie schnell
     constructor(){
         super().loadImage( 'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
         this.loadImages(this.ImagesWalking);
        //  this.loadImages(this.ImagesDead);
         // ckicken laufen an verschieden xachse und mit xy geschwindigkeit

         this.x = 200 + Math.random() * 2000;
         this.speed = 0.20 + Math.random() * 0.5;
 
         this.animate();
       
       
     };
   

     animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.ImagesWalking);
        }, 200);
    }

    //  animate() {
    //     setInterval(() => {
    //         this.otherDirection = this.otherDirection ? false : true;
    //     }, 5000);
    //     setInterval(() => {
    //         if (!this.isDead()) {
    //             if (this.otherDirection) {
    //                 this.moveRight();
    //             }
    //             else {
    //                 this.moveLeft();
    //             }
    //         }
    //     }, 100);
    //     setInterval(() => {
    //         if (this.isDead()) {
    //             this.playAnimation(this.ImagesDead);
    //         } else {
    //             this.playAnimation(this.ImagesWalking);
    //         }
    //     }, 200);
    // }
 };









 

   
 
  

