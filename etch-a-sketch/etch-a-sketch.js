console.log('it works');

//Select elements on page
const canvas = document.querySelector('#etch-a-sketch');
console.log(canvas);

const ctx = canvas.getContext('2d');

const shakeButton = document.querySelector('.shake');
console.log(shakeButton);


//setup canvas for drawing
//make variable using destructuring, from same property on our canvas
const { width, height } = canvas;
console.log(width, height);

//create random x and y starting points on canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); //starts the drawing
ctx.moveTo(x, y); //200px in, 200px from top
ctx.lineTo(x, y);
ctx.stroke();


//write a draw function

///write handler for keys
function handleKey(event) {
    event.preventDefault();
    console.log('handling keys');
};


//clear or shake function

//listen for arrow keys
//window to listen site-wide
window.addEventListener('keydown', handleKey);
