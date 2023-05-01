class StatusBar extends DrawableObjekt {
    percentage = 100;  // startwert 100% 

    imgStatus = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png',

    ]
    constructor() {
        super().loadImage('img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png');
        this.loadImages(this.imgStatus)
        this.setPercentage(100)
        this.x = 30 // position von statusbar
        this.y = 10// position von statusbar
        this.width = 200// position von statusbar
        this.height = 60// position von statusbar
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.imgStatus[this.resolveImagesIndex()];
        this.img = this.imageCach[path]
    }

    resolveImagesIndex() {
        if (this.percentage == 100) {
            return 5
        } else if (this.percentage > 80) {
            return 4
        } else if (this.percentage > 60) {
            return 3
        } else if (this.percentage > 40) {
            return 2
        } else if (this.percentage > 20) {
            return 1
        } else {
            return 0
        }
    }
}
