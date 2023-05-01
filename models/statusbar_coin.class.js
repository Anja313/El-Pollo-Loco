class StatusBarCoin extends DrawableObjekt {
    imgCoin = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png',
    ]
    percentage = 0

    constructor() {
        super().loadImage('img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png')
        this.loadImages(this.imgCoin)
        this.setPercentage(0)
        this.y = 105
        this.x = 30
        this.width = 200
        this.height = 60
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.imgCoin[this.resolveImagesIndex()];
        this.img = this.imageCach[path]
    }

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
            return 0;
        }
    }
}