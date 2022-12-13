let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
   


}



window.addEventListener('keydown', (event) => {
    if(event.key == 39){
        keyboard.RIGHT = true;
    }

    if(event.key == 37){
        keyboard.LEFT = true;
    }

    if(event.key == 38){
        keyboard.UP = true;
    }

    if(event.key == 40){
        keyboard.DOWN = true;
    }

    if(event.key == 32){
        keyboard.SPACE = true;
    }
});




window.addEventListener("keyup",(event) => {
    if(event.key == 39){
        keyboard.RIGHT = false;
    };

    if(event.key == 37){
        keyboard.LEFT = false;
    };

    if(event.key == 38){
        keyboard.UP = false;
    };

    if(event.key == 40){
        keyboard.DOWN = false;
    };

    if(event.key == 32){
        keyboard.SPACE = false;
    };
   
});