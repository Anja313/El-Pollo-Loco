class StatusBarBottle extends DrawableObjekt {

    imgBottle = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',

    ]

    percentage = 0
    constructor() {
        super().loadImage('img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png')
        this.loadImages(this.imgBottle)
        this.setPercentage(0)
        this.y = 60
        this.x = 30
        this.width = 200
        this.height = 60
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.imgBottle[this.resolveImagesIndex()];
        this.img = this.imageCach[path]
    }


    resolveImagesIndex() {
        if (this.percentage == 0) {
            return 0
        } else if (this.percentage < 20) {
            return 1
        } else if (this.percentage < 40) {
            return 2
        } else if (this.percentage < 60) {
            return 3
        } else if (this.percentage < 80) {
            return 4
        } else {
            return 5
        }

    }

}