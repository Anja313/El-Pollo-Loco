class Coin extends MovableObject {
    height = 140;
    width = 140;

    ImagesCoin = [
        'img/8_coin/coin_1.png',
       
    ];
   
    constructor(){
        super().loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.ImagesCoin);
        this.x = 250  + Math.random() * 2000;
        this.y = 40;
        
    }
      
};

   
 







  
    

