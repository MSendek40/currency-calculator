
{   const welcome = () => {
    console.log ("welcome in my first calculator where I used switch-case")
}

const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");

const CHF = 4.79;
const GBP = 5.39;
const USD = 4.55;
const EUR = 4.70;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const currency = currencyElement.value;
    const amount = amountElement.value;

    let result;

    switch (currency) {
        case "EUR":
        result = (amount/EUR);
        break;

        case "CHF":
        result =(amount/CHF);
        break;

        case "USD":
            result =(amount/USD);
            break;

        case "GBP":
            result = (amount/GBP);
            break;
    }

    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});
  
}