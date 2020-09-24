const textArea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = document.querySelectorAll('[name="filter"]');

//console.log(textArea);
//console.log(result);
//console.log(filterInputs);

//handler for outputting of text
function transformText(text) {
    //console.log(text);
//take text and loop over each letter
    const mod = Array.from(text).map(filters.sarcastic);
    result.textContent = text;
}

//listener for input event
textArea.addEventListener('input', event => transformText(event.target.value) );

//filters for different inputs

const filters {
    sarcastic(letter, index) {
        if (index % 2) {
            return letter.toUpperCase();
        }
        return letter.toLowerCase();
    },
    funky() {},
    unable() {},
}


