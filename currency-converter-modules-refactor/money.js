const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');
const toAmount = document.querySelector('.to_amount');
const form = document.querySelector('.app form');
const endpoint = 'https://api.exchangeratesapi.io/latest';
//going to store all rates so we aren't fetching constantly
const ratesByBase = {};








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