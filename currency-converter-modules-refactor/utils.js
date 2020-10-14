export function generateOptions(options) {
    //console.log(options);
    return Object.entries(options).map(([currencyCode, currencyName]) => {
      //console.log(currencyCode, currencyName);
      return `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
    }).join('');
  }