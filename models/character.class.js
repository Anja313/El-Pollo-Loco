class Character extends MovableObject {
    
    height = 220;
    width = 120;
    y = 220;
    speed =10;

   

    ImagesWalking = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];
    // world;
 
  
    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.ImagesWalking);
       
        this.animate();

    }

    animate(){
        
        setInterval(() => {
            if(this.world.keyboard.RIGHT) {
                this.x +=this.speed;
           

            let i = this.currentImage % this.ImagesWalking.length;
            let path = this.ImagesWalking[i];
            this.img = this.imageCach[path];
            this.currentImage++;
          
        }
        },20);
   
    }


    // jump(){

    // }


}