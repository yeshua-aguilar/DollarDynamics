const API_KEY = 'bbaef4f4f7fdced29774fbd0';

export async function getExchangeRate(fromCurrency, toCurrency, amount) {
  const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`);
  
  if (!response.ok) {
    throw new Error(`An error occurred: ${response.statusText}`);
  }

  const data = await response.json();

  if (data.result !== 'success') {
    throw new Error(`Could not find the exchange rate from ${fromCurrency} to ${toCurrency}`);
  }

  // Verifica si 'conversion_result' existe en 'data' antes de intentar acceder a él
  if (data.conversion_result) {
    return data.conversion_result;
  } else {
    throw new Error(`The API response does not include a 'conversion_result' property`);
  }
}

export async function getAvailableCurrencies() {
  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/codes`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.supported_codes;
  } catch (error) {
    console.error(error);
    return [];
  }
}