class ChickenSmall extends MovableObject {
    height = 70;
    width = 50;
    y = 360;
    energy = 5;

    ImagesWalking = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];

    ImagesDead = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png',
    ]

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.ImagesWalking);
        this.loadImages(this.ImagesDead);
        this.x = 400 + Math.random() * 2000;
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
    }

    animate() {
        this.animateInterval = setInterval(() => {
            if (!this.isDead()) {
                this.moveLeft();
            }
        }, 100);

        this.playInterval = setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.ImagesDead);
            } else {
                this.playAnimation(this.ImagesWalking);
            }
        }, 200);
    }
};
