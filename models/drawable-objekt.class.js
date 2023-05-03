class DrawableObjekt   {
    x = 120;
    y = 340;
    height = 150;
    width = 100;
    img;
    imageCach = [];
    currentImage = 0;
    distance = 1;
    cb = null;
    cbMouseUp = null;
    cbMouseDown = null;
    disabled = false

    loadImage(path){
        this.img = new Image(); //new Image() =get.elementById(ID).img
        this.img.src = path;
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    // drawFrame(ctx){
    //     if(this instanceof Character || this instanceof ChickenNormal || this instanceof Endboss || this instanceof ChickenSmall || this instanceof Coin|| this instanceof Bottle){ // Rahmen zeichnen
    //         ctx.beginPath();
    //         // ctx.lineWidth = '5'; //breite der linie
    //         ctx.rect(this.x, this.y, this.width, this.height)

    //         ctx.rect(0, 210, 500, 1)
    //         ctx.stroke();
    //     }     
    // }

    isClicked(event, ctx){
        const rect = ctx.canvas.getBoundingClientRect()
        // Touchevents kann mehrere geben, deshalb andere behandlung
        let x = 0;
        let y = 0;

        if(event instanceof TouchEvent){
            x = event.changedTouches[0].clientX - rect.left;
            y = event.changedTouches[0].clientY - rect.top  
        } else {
            x = event.clientX - rect.left
            y = event.clientY - rect.top 
        }    
        if (x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height) {
            return true;
        } else {
            return false;
        }      
            
    }

    clicked() {
        if(this.cb != null) {
            this.cb();
        }
    }

    mouseUp() {
        if(this.cbMouseUp != null) {
            this.cbMouseUp();
        }
    }

    mouseDown() {
        if(this.cbMouseDown != null) {
            this.cbMouseDown();
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
