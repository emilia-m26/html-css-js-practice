function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()){
    return Math.floor(randomNumber * (max - min) + min);
}

//async for of loop
async function draw(element){
    //console.log(element);
    const text = element.textContent;
    let soFar = '';
    for(const letter of text) {
        console.log(letter);
        soFar += letter;
        //console.log(soFar);
        element.textContent = soFar;
        //wait for time
        //console.log(element.dataset);
        const { typeMin, typeMax } = element.dataset;
        const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
        await wait(amountOfTimeToWait);
    }
}

//recursion

// //selecting elements
// const els = document.querySelectorAll('[data-type]');

// els.forEach(el => draw(el));

//same as above commented out
document.querySelectorAll('[data-type]').forEach(draw);