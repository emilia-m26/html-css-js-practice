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
const MOVE_AMOUNT = 20; //true const, never change

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
//ctx.strokeStyle = `hsl(180, 100%, 50%)`; - turquoise start
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

ctx.beginPath(); //starts the drawing
ctx.moveTo(x, y); //200px in, 200px from top
ctx.lineTo(x, y);
ctx.stroke();


//write a draw function -using options object to allow for several handins
//{key} - object destructuring
function draw({ key }) {
    hue = hue + 10;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    console.log(key);
    //start path
    ctx.beginPath();
    ctx.moveTo(x, y); 
    //move x and y values depending on what user did
    switch (key) {
        case 'ArrowUp': 
            y = y - MOVE_AMOUNT;
            break;
        case 'ArrowRight': 
            x = x + MOVE_AMOUNT;
            break;
        case 'ArrowDown': 
            y = y + MOVE_AMOUNT;
            break;
        case 'ArrowLeft': 
            x = x - MOVE_AMOUNT;
            break;    
        default: 
            break;
    }
    
    ctx.lineTo(x,y);
    ctx.stroke();
};

///write handler for keys - handing key to draw function
function handleKey(event) {
    if (event.key.includes('Arrow')) {
        event.preventDefault();
        draw({key: event.key});
    }
};


//clear or shake function
function clearCanvas() {
    canvas.classList.add('shake');
    canvas.addEventListener('animationend', function() {
        canvas.classList.remove('shake');
    });
};

//listen for arrow keys
//window to listen site-wide
window.addEventListener('keydown', handleKey);
