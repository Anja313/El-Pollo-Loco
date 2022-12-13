class Cloud extends MovableObject {

    y = 30;
    height = 250;
    width = 500;
   
   

    constructor(){
        super().loadImage('img/5_background/layers/4_clouds/2.png');
        

        this.x =Math.random()*500;
        this.animate();
        
    };

    
    animate(){
        this.moveLeft();
      
    }


  

}