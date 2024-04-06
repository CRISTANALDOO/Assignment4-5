const exchangeRate = 1.33; // This is the exchange rate of USD and CAD dollar.

function convertCurrency() {
  // Taking input from the user
  let usdAmount = document.getElementById('usdAmount').value;
  // Validating the input as asked by the question.
  if (!usdAmount || isNaN(usdAmount) || usdAmount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  document.getElementById('cadAmount').value = (usdAmount * exchangeRate).toFixed(3);
}

function swapCurrencies() {
  let usdFlag = document.querySelector('.currency-wrapper:nth-child(1) .flag');
  let cadFlag = document.querySelector('.currency-wrapper:nth-child(3) .flag');

  // Stroing the flag content temporarily 
  let tempFlag = usdFlag.textContent;
  usdFlag.textContent = cadFlag.textContent;
  cadFlag.textContent = tempFlag;

  let usdAmount = document.getElementById('usdAmount');
  let cadAmount = document.getElementById('cadAmount');
  let tempAmount = usdAmount.value;

  // Exchanging USD to CAD and vice versa
  usdAmount.value = cadAmount.value;
  cadAmount.value = tempAmount;
}

  
