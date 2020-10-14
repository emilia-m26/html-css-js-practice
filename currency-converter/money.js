const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const endpoint = 'https://api.exchangeratesapi.io/latest';

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

const optionsHTML = generateOptions(currencies);
//console.log(optionsHTML);

//populate options elements on page load
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;