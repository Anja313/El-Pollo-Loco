class chicken extends MovableObject {
   height = 100;
   width = 80;

   

    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 120 + Math.random()*500;
      
      
    }

  

}