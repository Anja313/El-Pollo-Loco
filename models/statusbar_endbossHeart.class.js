class StatusEndbossHeart extends DrawableObjekt {

    ImagesEndbossHeart = [
        'img/7_statusbars/2_statusbar_endboss/orange.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',
    ]

    constructor() {
        super().loadImage('img/7_statusbars/2_statusbar_endboss/orange.png')
        this.loadImages(this.ImagesEndbossHeart)
        this.setPercentage(100)
        this.y = 10
        this.x = 500
        this.width = 200
        this.height = 50
    }
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.ImagesEndbossHeart[this.resolveImagesIndex()];
        this.img = this.imageCach[path]
    };

    resolveImagesIndex() {
        if (this.percentage == 100) {
            return 5
        } else if (this.percentage >= 80) {
            return 4
        } else if (this.percentage >= 60) {
            return 3
        } else if (this.percentage >= 40) {
            return 2
        } else if (this.percentage >= 20) {
            return 1
        } else {
            return 0
        }
    }
}









