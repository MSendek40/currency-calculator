
{
    const welcome = () => {
        console.log("welcome in my first calculator where I used switch-case")
    }

    const calculateResult = (amount, currency) => {
        const rateCHF = 4.79;
        const rateGBP = 5.39;
        const rateUSD = 4.55;
        const rateEUR = 4.70;
        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "CHF":
                return amount / rateCHF;

            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;
        }
    };
    
    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    }

const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    
    const currency = currencyElement.value;
    const amount = amountElement.value;

    const result = calculateResult(amount, currency);

   updateResultText(result, currency); 
}

    const init = () => {

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);    
    };

    init();
}
