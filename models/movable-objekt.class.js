class MovableObject  {
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
    energy = 100;

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
    return this.y < 210 // bis wo er fällt 
  }

  


    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    drawFrame(ctx){
        if(this instanceof Character || this instanceof Chicken || this instanceof Endboss){
            ctx.beginPath();
            ctx.lineWidth = '5'; //breite der linie
            ctx.rect(this.x, this.y, this.width, this.height)
            ctx.stroke();
            }
         
    }

    isColliding(mo){
        return this.x + this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y +mo.height
    }; 

   
    hit(){
        
        this.energy -=5;
        if( this.energy < 0){ //bei 0 nichts mehr abziehen 
            this.energy = 0
        };
    }

    isDead(){
        return this.energy == 0;
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
        console.log(this.imageCach)
        let i = this.currentImage % images.length; //i = 0 rest von images.lenght
        let path = images[i]; //images ?
        this.img = this.imageCach[path];
        this.currentImage++; 
        console.log(this.currentImage)
    };


    // playAnimation(images){

    //     let i = this.currentImage % images.length; //i = 0 rest von images.lenght
    //     let path = this.images[i]; //images ?
    //     this.img = this.imageCach[path];
    //     this.currentImage++; //0 ++
    // };


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
