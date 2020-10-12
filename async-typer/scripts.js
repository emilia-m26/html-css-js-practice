function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()){
    return Math.floor(randomNumber * (max - min) + min);
}

function draw(element){
    console.log(element);
}

// //selecting elements
// const els = document.querySelectorAll('[data-type]');

// els.forEach(el => draw(el));

//same as above commented out
document.querySelectorAll('[data-type]').forEach(draw);