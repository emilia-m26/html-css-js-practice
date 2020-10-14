import { convert } from './lib.js';
import { formatCurrency } from './utils.js';
import { fromInput, fromSelect, toSelect, toAmount } from './elements.js';

export async function handleInput(e) {
    //changes each time
    //console.log(e.target); 
    //always the form
    //console.log(e.currentTarget);
    const rawAmount = await convert(fromInput.value, fromSelect.value, toSelect.value
      );
      //console.log(rawAmount);
      toAmount.textContent = formatCurrency(rawAmount,toSelect.value);
  }