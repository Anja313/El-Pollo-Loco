class Bottle extends MovableObject {
    height = 80;
    width = 80;
    ImagesCoin = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
       
    ];
   
    constructor(){
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.ImagesCoin);
            
        this.x = 250 + Math.random() * 2000;
        this.y = 30 - Math.random() * 100
    }     
};

   