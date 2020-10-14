import { generateOptions } from './utils.js';
import currencies from './currencies.js';
import { handleInput } from './handlers.js';

const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');
const toAmount = document.querySelector('.to_amount');
const form = document.querySelector('.app form');
const endpoint = 'https://api.exchangeratesapi.io/latest';
//going to store all rates so we aren't fetching constantly
const ratesByBase = {};

const optionsHTML = generateOptions(currencies);
//console.log(optionsHTML);

//populate options elements on page load
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

//event listener - listening on form to cover all inputs at once
form.addEventListener('input',handleInput);