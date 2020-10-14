const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');
const toAmount = document.querySelector('.to_amount');
const form = document.querySelector('.app form');
const endpoint = 'https://api.exchangeratesapi.io/latest';
//going to store all rates so we aren't fetching constantly
const ratesByBase = {};




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