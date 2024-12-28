// Place the interactive buttons on the screen using JavaScript
const numButtonsDiv = document.querySelector(".number-buttons");

// Create the number buttons from digits 0-9
for (let i = 0; i <= 9; i++) {
    const numButton = document.createElement("button");

    numButton.textContent = i;

    // Placeholder, need to add event listener here

    numButtonsDiv.appendChild(numButton);
}

const operationButtonsDiv = document.querySelector(".operation-buttons");
// Need 4 basic functions (+, -, x, ÷) and =
const addButton = document.createElement("button");
const subtractButton = document.createElement("button");
const multiplyButton = document.createElement("button");
const divideButton = document.createElement("button");
const equalsButton = document.createElement("button");

addButton.textContent = "+";
subtractButton.textContent = "-";
multiplyButton.textContent = "x";
divideButton.textContent = "÷";
equalsButton.textContent = "=";

operationButtonsDiv.appendChild(addButton);
operationButtonsDiv.appendChild(subtractButton);
operationButtonsDiv.appendChild(multiplyButton);
operationButtonsDiv.appendChild(divideButton);
operationButtonsDiv.appendChild(equalsButton);

// Functions for the arithmetic operation logic
/**
 * Returns the sum of x and y
 * @param {*} x the first operand
 * @param {*} y the second operand
 */
function add(x, y)
{
    return x + y;    
}

/**
 * Returns the difference between x and y
 * @param {*} x the first operand
 * @param {*} y the second operand
 */
function subtract(x, y)
{
    return x - y;
}

/**
 * Returns the product of x and y
 * @param {*} x the first operand
 * @param {*} y the second operand
 */
function multiply(x, y)
{
    return x * y;
}

/**
 * Returns the quotient of x and y
 * @param {*} x the first operand
 * @param {*} y the second operand
 */
function divide(x, y)
{
    return x / y;
}
