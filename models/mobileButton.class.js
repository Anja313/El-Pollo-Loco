class MobileButton extends DrawableObjekt {
    constructor(path, x, y, width, height) {
        super().loadImage(path);
        this.y = y;
        this.x = x; 
        this.width = width;
        this.height = height;
    }
}