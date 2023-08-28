const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

let currentInput = "";
let currentOperator = "";
let previousInput = "";

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentInput += button.textContent;
        display.value = currentInput;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentInput !== "") {
            if (previousInput !== "") {
                calculate();
            }
            currentOperator = button.textContent;
            previousInput = currentInput;
            currentInput = "";
        }
    });
});

equalsButton.addEventListener("click", calculate);

clearButton.addEventListener("click", () => {
    currentInput = "";
    currentOperator = "";
    previousInput = "";
    display.value = "";
});

function calculate() {
    if (previousInput && currentOperator && currentInput) {
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);
        let result;
        switch (currentOperator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
        }
        display.value = result;
        previousInput = result.toString();
        currentInput = "";
        currentOperator = "";
    }
}
