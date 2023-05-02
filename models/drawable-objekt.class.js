class DrawableObjekt   {
    x = 120;
    y = 340;
    height = 150;
    width = 100;
    img;
    imageCach = [];
    currentImage = 0;
    distance = 1;

    disabled = false

    loadImage(path){
        this.img = new Image(); //new Image() =get.elementById(ID).img
        this.img.src = path;
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    drawFrame(ctx){
        if(this instanceof Character || this instanceof ChickenNormal || this instanceof Endboss || this instanceof ChickenSmall || this instanceof Coin|| this instanceof Bottle){ // Rahmen zeichnen
            ctx.beginPath();
            // ctx.lineWidth = '5'; //breite der linie
            ctx.rect(this.x, this.y, this.width, this.height)

            ctx.rect(0, 210, 500, 1)
            ctx.stroke();
        }     
    }

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCach[path] = img;
        });
    }

    // Bei Kollisionen
    isActive(){
        return (this.width != 0 || this.height != 0)
    }

    deactivate() {
        this.width = 0;
        this.height = 0;
    }


}
