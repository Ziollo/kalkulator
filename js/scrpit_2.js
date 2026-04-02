const currency_input = document.getElementById('results');
const currency_output = document.getElementById('results-converted');
const currency_from = document.getElementById('currency-from');
const currency_to = document.getElementById('currency-to');

let exchangeRates = {
    PLN: 1
};
async function fetchRates() {
    try {
        const response = await fetch('https://api.nbp.pl/api/exchangerates/tables/A/?format=json');
        const data = await response.json();
        const ratesArray = data[0].rates;
        ratesArray.forEach(r => {
            exchangeRates[r.code] = r.mid;
        });
        console.log(exchangeRates);
    }
    catch(err) {
        console.error("fetchRates failed");
        if (currency_output) {
            currency_output.value = "Błąd pobierania kursów";
            currency_output.style.fontSize = "16px";
        }
    }
}
function calculateConversion(){
    amount = parseFloat(currency_input.value);
    if (isNaN(amount)) {
        currency_output.value = "";
    return;
    }

    const from = currency_from.value;
    const to = currency_to.value;

    const rateFrom = exchangeRates[from];
    const rateTo = exchangeRates[to];
    const result = (amount * rateFrom)/ rateTo;
    currency_output.value = result.toFixed(2);

}

fetchRates();
currency_from.addEventListener('change', calculateConversion);

