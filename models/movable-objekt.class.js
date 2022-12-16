class MovableObject {
    x = 120;
    y = 340;
    height = 150;
    width = 100;
    img;
    imageCach = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;

    // charakter fallen mit - / mit + springt 
    applyGravity(){
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0) {  // bis wo er fällt s.u. / springen wenn er bei y=0 ist 
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            };
        },  800/50); //wie schnell er fällt 
    }
    
  isAboveGround(){
    return this.y < 210 // bis wo er fällt 
  }

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }


    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCach[path] = img;
    });

    }

    playAnimation(images){

        let i = this.currentImage % this.ImagesWalking.length;
        let path = this.ImagesWalking[i]; //images ?
        this.img = this.imageCach[path];
        this.currentImage++;
    };

    moveRight(){
        this.x +=this.speed;
        this.otherDirection;

    };


    moveLeft(){
        this.x -=this.speed;
        this.otherDirection;
        
      
    };
        

    jump(){
        this.speedY = 18;// wie hoch er springt
    }


}
