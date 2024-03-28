const API_KEY = 'bbaef4f4f7fdced29774fbd0'; // Reemplaza esto con tu API key

export async function getExchangeRate(fromCurrency, toCurrency) {
  const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`);
  
  if (!response.ok) {
    throw new Error(`An error occurred: ${response.statusText}`);
  }

  const data = await response.json();

  const rate = data.rates[toCurrency];
  if (!rate) {
    throw new Error(`Could not find the exchange rate from ${fromCurrency} to ${toCurrency}`);
  }

  return rate;
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