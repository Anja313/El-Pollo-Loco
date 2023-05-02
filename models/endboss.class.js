class Endboss extends MovableObject {

    height = 380;
    width = 260;
    y = 80;

    ImagesWalking = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];

    ImagesAlert= [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    ImagesHurt = [
        ' img/4_enemie_boss_chicken/4_hurt/G21.png',
        ' img/4_enemie_boss_chicken/4_hurt/G22.png',
        ' img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];

    ImagesDead = [
        ' img/4_enemie_boss_chicken/5_dead/G24.png',
        ' img/4_enemie_boss_chicken/5_dead/G25.png',
        ' img/4_enemie_boss_chicken/5_dead/G26.png',
    ];

    constructor() {
        super().loadImage(this.ImagesAlert[0]);
        this.loadImages(this.ImagesWalking);
        this.loadImages(this.ImagesAlert);
        this.loadImages(this.ImagesDead);
        this.loadImages(this.ImagesHurt);
        this.x = 2500 // x achse startet der endboss
        this.speed = 0.15 + Math.random() * 1; // die geschwindigkeit 
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.ImagesDead);
            } else {
                if (this.isHurt()) {
                    this.playAnimation(this.ImagesHurt);
                } else {
                   this.playAnimation(this.ImagesAlert);
                }
            }    
        }, 100);
    }
}
