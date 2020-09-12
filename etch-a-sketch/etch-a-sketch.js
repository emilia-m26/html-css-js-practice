console.log('it works');

//Select elements on page
const canvas = document.querySelector('#etch-a-sketch');
console.log(canvas);

const ctx = canvas.getContext('2d');

const shakeButton = document.querySelector('.shake');
console.log(shakeButton);


//setup canvas for drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

//write a draw function

///write handler for keys

//clear or shake function

//listen for arrow keys