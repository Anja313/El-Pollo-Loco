class Level {

    enemies;
    clouds;
    backgroundObjekt;
    level_end_x = 2250;

    constructor(enemies, clouds, backgroundObjekt) {
        this.enemies = enemies;
        this.backgroundObjekt = backgroundObjekt;
        this.clouds = clouds;

    }

}