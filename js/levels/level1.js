const level1 = new Level(
    [
        new ChickenNormal(),
        new ChickenNormal(),
        new ChickenNormal(),

        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
       
        new Endboss(),
      
    ],
    [
        new Cloud(),
        new Cloud() 
    ],
    [
        //    hintergrund einfühgen an der koordinate 0
        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),

        //    hintergrund einfühgen an der koordinate 719
        new BackgroundObject('img/5_background/layers/air.png', 719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

             //    hintergrund einfühgen an der koordinate 719*2 usw
        new BackgroundObject('img/5_background/layers/air.png',719*2), // hintergrung himmel
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*2),

        new BackgroundObject('img/5_background/layers/air.png', 719*3),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719*3),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719*3),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719*3), 
    ]
);
