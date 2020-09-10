console.log("it works!")

const butts = document.querySelector('.butts');
console.log(butts);
const coolButton = document.querySelector('.cool');
console.log(coolButton);

//anonymous function directly into event listener
// butts.addEventListener('click', function(){
//     console.log('It got clicked!?!?');
// })

//Three Steps
//go get something
//listen for something
//do something

//outside function handed into even listener
function handleClick() {
    console.log('It got clicked!?!?');
}

butts.addEventListener('click', handleClick);

coolButton.addEventListener('click', handleClick);

