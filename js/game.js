let canvas;
let world;



function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
   


}

// ___________________________________________________________________________________________
// let canvas;
// let world;
// let keyboard = new Keyboard();



// function init() {
//     canvas = document.getElementById('canvas');
//     world = new World(canvas, keyboard);
   

// }

// window.addEventListener("keydown",(e) => {
//     if(e.key == 39){
//         keyboard.RIGHT = true;
//     }

//     if(e.key == 37){
//         keyboard.LEFT = true;
//     }

//     if(e.key == 38){
//         keyboard.UP = true;
//     }

//     if(e.key == 40){
//         keyboard.DOWN = true;
//     }

//     if(e.key == 32){
//         keyboard.SPACE = true;
//     }
   
// })

// window.addEventListener("keyup",(e) => {
//     if(e.key == 39){
//         keyboard.RIGHT = false;
//     };

//     if(e.key == 37){
//         keyboard.LEFT = false;
//     };

//     if(e.key == 38){
//         keyboard.UP = false;
//     };

//     if(e.key == 40){
//         keyboard.DOWN = false;
//     };

//     if(e.key == 32){
//         keyboard.SPACE = false;
//     };
   
// });