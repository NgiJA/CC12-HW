function extractCurrencyValue(string, rate) {
  return "THB" + Number(string.slice(1)) * rate
}

console.log(extractCurrencyValue('$120', 30))