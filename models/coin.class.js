class Coin extends DrawableObjekt {

    height = 150
    width =  150
    // y = 228
    // x = 200

    constructor(imagePath, x, y){
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
      
      
    };

   


// [
//     new CollectableObject(200, 200, 'bottle'),
//     new CollectableObject(400, 50, 'bottle'),
//     new CollectableObject(600, 200, 'bottle'),
//     new CollectableObject(1000, 200, 'bottle'),
//     new CollectableObject(1200, 50, 'bottle'),
//     new CollectableObject(1400, 200, 'bottle'),
//     new CollectableObject(2400, 200, 'bottle'),
//     new CollectableObject(2600, 50, 'bottle'),
//     new CollectableObject(2800, 200, 'bottle'),
//   ],
//   [
//     new CollectableObject(100, 100, 'coin'),
//     new CollectableObject(500, 200, 'coin'),
//     new CollectableObject(1000, 100, 'coin'),
//     new CollectableObject(2000, 50, 'coin'),
//     new CollectableObject(2500, 100, 'coin'),
//     new CollectableObject(2600, 500, 'coin'),
//     new CollectableObject(2800, 200, 'coin'),
//   ],
   
    // constructor() {
    //     super().loadImage('img/8_coin/coin_1.png')
    //     this.loadImages(this.imgCoin);
      
       
    //     this.x =  500; // rechts links
    //     this.y =  200 // hoch tief 
    // }


} 
  
    

