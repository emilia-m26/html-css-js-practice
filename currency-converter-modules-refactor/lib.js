export async function fetchRates(base = 'USD') {
    const response = await fetch(`${endpoint}?base=${base}`);
    const rates = await response.json();
    //console.log(rates);
    return rates;
  }
  
  export async function convert(amount, from, to) {
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