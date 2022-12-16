class Character extends MovableObject {
    
    height = 220;
    width = 120;
    y = 80;
    speed =5;
   

   

    

    ImagesWalking = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ]
 
    
    ImagesJumping = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ]
 
  
    ImagesDead = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',
        'img/2_character_pepe/4_hurt/H-43.png',
       
      
    ]

    world;
 
  
    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.ImagesWalking);
        this.loadImages(this.ImagesJumping);
        this.loadImages(this.ImagesDead);
        this.applyGravity();
        this.animate();

    }

    animate(){
        
        setInterval(() => {
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
            }
                                           
            if(this.world.keyboard.LEFT && this.x > 100 )  {  // läuft nicht links aus dem Bild raus 
                this.moveLeft();
              
            }
                          
            if(this.world.keyboard.UP && !this.isAboveGround()){ // springe bei knopfdruck / springen nur auf dem boden sprich bei y = boden 
                this.jump();
              
                 
            }
            this.world.camera_x = -this.x + 100;   //charakter startet leicht mittig 
        });

        setInterval(() => {
            if(this.isDead()){
               
                this.playAnimation(this.ImagesDead);
            }else{

          
                if(this.isAboveGround()) {
                 
                    this.playAnimation(this.ImagesJumping); // 
                } else{

               

                    if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {

                        this.playAnimation(this.ImagesWalking);
            
                    }
                } 
                }
            
        }, 100);
   
    }


  


}