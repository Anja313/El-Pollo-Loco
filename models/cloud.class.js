class Cloud extends MovableObject {

    y = 30;

    height = 250;
    width = 500;
   

   
  
    ImagesCloud = [
    'img/5_background/layers/4_clouds/2.png',
    'img/5_background/layers/4_clouds/1.png',
  ]




constructor(){
    super().loadImage('img/5_background/layers/4_clouds/2.png');
    this.loadImages(this.ImagesCloud);
    this.x = 400 + Math.random()*2500;
    this.speed = 0.15 + Math.random() * 0.5;

   

   
    this.animate();
  
}

}
