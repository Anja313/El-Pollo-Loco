class MovableObject extends DrawableObjekt {
   
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    energy = 100;
    // energyUp = 0;
    lastHit = 0;
    groundPosition = 0

    // charakter fallen mit - / 
    applyGravity(){
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0) {  // bis wo er fällt s.u. / springen wenn er bei y=0 ist 
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            };
        },  800/50); //wie schnell er fällt 
    }
    
  isAboveGround(){
    if( this instanceof ThrowableObjekt) {
        return true;
    }else{
        return this.y < 210 // bis wo er fällt 
    }
    
  }


  animate(){
    setInterval(() => {
        this.moveLeft(); 
    }, 1000 /60);

     this.moveLeft();
     setInterval(() => {
        this.playAnimation(this.ImagesWalking);
        
     },100); 
 }
  
    isColliding(mo){
        return this.x + this.width > mo.x && // berechnung des punktes der collidierung 
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y +mo.height
    }; 

   
    hit(){
        
        this.energyDown -=5; // von 100 5 abziehen 
        if( this.energy < 0){ //bei 0 nichts mehr abziehen 
            this.energy = 0
        } else {
            this.lastHit = new Date().getTime();
        }
    }
    // hitCoin(){
        
    //     this.energyUp -=5; // von 100 5 abziehen 
    //     if( this.energyUp > 100){ //bei 0 nichts mehr abziehen 
    //         this.energy = 100
    //     } else {
    //         this.lastHit = new Date().getTime();
    //     }
    // }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit // Diffrence in ms
        timepassed = timepassed/1000 // Difference is s
        return timepassed < 0.5;
    }
    isDead(){
        return this.energy == 0;
    }


    playAnimation(images){
        let i = this.currentImage % images.length; //i = 0 rest von images.lenght
        let path = images[i]; //images ?
        this.img = this.imageCach[path];
        this.currentImage++; 
    };


  
    moveRight(){
        this.x +=this.speed;
        this.otherDirection ;

    };


    moveLeft(){
        this.x -=this.speed;
        this.otherDirection ;
    };
       

    jump(){
        this.speedY = 18;// wie hoch er springt
    }

    
}
