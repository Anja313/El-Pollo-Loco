class Character extends MovableObject {
    height = 220; // gr. der charakter
    width = 120;
    speed = 5;
    y = 210;

    moveLeftProp = false;
    moveRightProp = false;
    jumpProp = false;
    throwProp = false;

    ImagesWalking = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];

    ImagesJumping = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];

    ImagesHurt = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',
    ];

    ImagesDead = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png',
    ];

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.ImagesWalking);
        this.loadImages(this.ImagesJumping);
        this.loadImages(this.ImagesHurt);
        this.loadImages(this.ImagesDead);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            if ((this.world.character.moveRightProp || this.world.keyboard.RIGHT) && this.x < this.world.level.level_end_x) {
                this.moveRight(); // level_end_x = 2250;
                this.otherDirection = false;
            }

            if ((this.moveLeftProp || this.world.keyboard.LEFT) && this.x > 100) {
                // läuft nicht links aus dem Bild raus
                this.moveLeft();
                this.otherDirection = true;
            }

            if ((this.jumpProp == true || this.world.keyboard.UP) && !this.isAboveGround()) {
                this.jump();
            }
            this.world.camera_x = -this.x + 100;   //charakter startet leicht mittig 
        }, 30);


        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.ImagesDead);
            } else
                if (this.isHurt()) {
                    this.playAnimation(this.ImagesHurt);
                } else
                    if (this.isAboveGround()) {
                        this.playAnimation(this.ImagesJumping); // 
                    } else {
                        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.moveLeftProp || this.moveRightProp) {
                            this.playAnimation(this.ImagesWalking);
                        }

                    }
        }, 100);

    }

    jump() {
        this.speedY = 25;// wie hoch er springt
    }
}
