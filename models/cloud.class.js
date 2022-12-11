class cloud extends MovableObject {

    y = 30;
    height = 250;
    width = 500;
   

    constructor(){
        super().loadImage('img/5_background/layers/4_clouds/2.png');

        this.x = 0 + Math.random()*500;
       
    }

  

}