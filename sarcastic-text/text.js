const textArea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = document.querySelectorAll('[name="filter"]');

//console.log(textArea);
//console.log(result);
//console.log(filterInputs);

//handler for outputting of text
function transformText(text) {
    console.log(text);
    result.textContent = text;
}

//listener for input event
textArea.addEventListener('input', event => transformText(event.target.value) );


