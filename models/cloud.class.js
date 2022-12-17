class Cloud extends MovableObject {

    y = 30;
    height = 250;
    width = 500;
   

   
  
//   cloud = [
//     'img/5_background/layers/4_clouds/2.png'
//   ]




constructor(){
    super().loadImage('img/5_background/layers/4_clouds/2.png');
    // this.loadImages(this.cloud);
    // this.x = Math.random() * 2300;

    // this.speed = 0.15 + Math.random() * 1;

    this.x =Math.random()*500;
    this.animate();   
    
  
}
animate(){
    this.moveLeft();
}

}


// class Cloud extends MovableObject {

//     y = 30;
//     height = 250;
//     width = 500;
   

   
  
//   cloud = [
//     'img/5_background/layers/4_clouds/2.png'
//   ]




// constructor(){
//     super().loadImage('img/5_background/layers/4_clouds/2.png');
//     this.loadImages(this.cloud);
//     this.x = Math.random() * 2300;

//     this.speed = 0.15 + Math.random() * 1;

   
    
  
// }
// animate(){
//     this.moveLeft();
// }

// }