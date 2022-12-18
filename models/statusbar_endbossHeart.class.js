class StatusEndbossHeart extends StatusBar{


    // x = 30
    // y = 10
    // width = 200
    // height = 60
  
    ImagesEndbossHeart = [
        'img/7_statusbars/2_statusbar_endboss/orange.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',
        
    ]

   
    constructor() {
        super().loadImage('img/7_statusbars/2_statusbar_endboss/orange.png');
        this.loadImages(this.ImagesEndbossHeart);
        
        this.x = 2500 // x achse startet der endboss
     
        // this.speed = 0.15 + Math.random() * 1;
   
       
        this.loadImages(this.imgCoin)
        this.setPercentage(100)
        this.x = 30
        this.y = 10
        this.width = 200
        this.height = 60

       
    }
  

}




 
 
