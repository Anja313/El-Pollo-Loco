class MovableObject {
    x = 120;
    y = 340;
    height = 150;
    width = 100;
    img;
    imageCach = {};


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
    moveRight(){
        console.log('Moving right');

    }


    moveLeft(){
    }
        
}