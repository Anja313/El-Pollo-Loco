class Level {
    enemies;
    clouds;
    backgroundObject;
    level_end_x = 2250;
    coins;
  
    constructor(enemies, clouds, backgroundObject) {
        this.enemies = enemies;
        this.backgroundObject = backgroundObject;
        this.clouds = clouds;
    }

} 