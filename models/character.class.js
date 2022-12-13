class Character extends MovableObject {
    
    height = 220;
    width = 120;
    y = 220;
    keyboard = new Keyboard();
   

    characterWalking = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];

    world;
  
    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.characterWalking);
       
        this.animate();

    }

    animate(){
       

        setInterval(() => {

            if (this.world.keyboard.RIGHT){
                let i = this.currentImage % this.characterWalking.length;
                let path = this.characterWalking[i];
                this.img = this.imageCach[path];
                this.currentImage++;
                // this.x = this.x + 4;
                // if( this.x > 720) this.x = -30;
            }
        },100)
        
    }

    jump(){

    }


}