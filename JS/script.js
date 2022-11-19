let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let CHF = 4.79;
let GBP = 5.39;
let USD = 4.55;
let EUR = 4.70;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = amountElement.value;
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
    resultElement.innerText = result.toFixed(2)
})