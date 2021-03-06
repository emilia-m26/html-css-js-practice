import { generateOptions } from './utils.js';
import currencies from './currencies.js';
import { handleInput } from './handlers.js';
import { fromSelect, toSelect } from './elements.js';

const form = document.querySelector('.app form');


const optionsHTML = generateOptions(currencies);
//console.log(optionsHTML);

//populate options elements on page load
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

//event listener - listening on form to cover all inputs at once
form.addEventListener('input',handleInput);