class StatusbarHealth extends Statusbar{

    percentage = 100;
   
   
        imgCoin = [
            'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png',
         
            ]
        
       
    constructor(){
        super();
        this.loadImages(this.imgCoin)
        this.setPercentage(100)
        this.x = 50
        this.y = 20
        this.width = 200
        this.height = 60
    }

   


    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.imgCoin[this.resolveImagesIndex()];
        this.img = this.imageCach[path]
    }

    resolveImagesIndex() 
        {
            if(this.percentage == 100) {
                return 5
            } else if(this.percentage > 80) {
                return 4
            } else if(this.percentage > 60) {
                return 3
            } else if(this.percentage > 40) {
                return 2
            } else if(this.percentage > 20) {
                return 1
            } else {
                return 0
            }
    }
   
    

}
