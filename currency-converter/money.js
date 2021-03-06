const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');
const toAmount = document.querySelector('.to_amount');
const form = document.querySelector('.app form');
const endpoint = 'https://api.exchangeratesapi.io/latest';
//going to store all rates so we aren't fetching constantly
const ratesByBase = {};


const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};

function generateOptions(options) {
  //console.log(options);
  return Object.entries(options).map(([currencyCode, currencyName]) => {
    //console.log(currencyCode, currencyName);
    return `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
  }).join('');
}

async function fetchRates(base = 'USD') {
  const response = await fetch(`${endpoint}?base=${base}`);
  const rates = await response.json();
  //console.log(rates);
  return rates;
}

async function convert(amount, from, to) {
  if(!ratesByBase[from]) {
    console.log(`We don't have ${from} to convert to ${to}. Let's go get it.`
    );
    const rates = await fetchRates(from);
    console.log(rates);
    //store for next time
    ratesByBase[from] = rates;
  }
  //convert that amount that they passed in
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  console.log(`${amount}${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;
}

function formatCurrency(amount, currency) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

async function handleInput(e) {
  //changes each time
  //console.log(e.target); 
  //always the form
  //console.log(e.currentTarget);
  const rawAmount = await convert(fromInput.value, fromSelect.value, toSelect.value
    );
    //console.log(rawAmount);
    toAmount.textContent = formatCurrency(rawAmount,toSelect.value);
}

const optionsHTML = generateOptions(currencies);
//console.log(optionsHTML);

//populate options elements on page load
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

//event listener - listening on form to cover all inputs at once
form.addEventListener('input',handleInput);