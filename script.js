// Intialize both operands as null values
let operand1 = null;
let operand2 = null;
// Initialize operation as an empty String
let operation = "";

// Target the screen div
const screen = document.querySelector("#screen");

// Place the interactive buttons on the screen using JavaScript
const numButtonsDiv = document.querySelector(".number-buttons");

// Create the number buttons from digits 0-9
let value = 0;
for (let i = 0; i < 3; i++) {
    const rowDiv = document.createElement("div");
    for (let j = 0; j < 3; j++) {
        const numButton = document.createElement("button");

        numButton.setAttribute("id", value);
        numButton.textContent = value++;
        numButton.classList.add("digit");
    
        numButton.addEventListener("click", () => { parseNumber(Number(numButton.getAttribute("id"))); });

        rowDiv.appendChild(numButton);
    }
    numButtonsDiv.appendChild(rowDiv);
}

// Create a new row div for the 9 button and the clear button
const rowDiv = document.createElement("div");
// Buttons for digits 0-8 were created in a 3 x 3 grid, need to create button for 9 outside of the nested loop
const numButton = document.createElement("button");
numButton.setAttribute("id", value);
numButton.textContent = value++;
numButton.addEventListener("click", () => { parseNumber(Number(numButton.getAttribute("id"))); });
rowDiv.appendChild(numButton);
// Create the clear button
const clearButton = document.createElement("button");
clearButton.textContent = "Clear";
clearButton.addEventListener("click", () => {
    // Reset operand1, operand2, and operation to their initial values
    operand1 = null;
    operand2 = null;
    operation = "";
    screen.textContent = 0;
})
rowDiv.appendChild(clearButton);
numButtonsDiv.appendChild(rowDiv);

/**
 * Sets the respective operand and displays it on the screen given a digit 0-9
 * @param {*} number the digit to parse
 */
function parseNumber(number)
{
    let display;
    // Set the first operand if the operation has not been specified yet
    if (operation === "") {
        if (operand1 == null) {
            operand1 = number;
        }
        else {
            // Shift the previous value of operand1 to the left by 1 decimal place to make room for the new digit
            operand1 *= 10;
            operand1 += number;
        }
        display = operand1;
    }
    // Set the second operand if the operation has already been specified
    else {
        if (operand2 == null) {
            operand2 = number;
        }
        else {
            operand2 *= 10;
            operand2 += number;
        }
        display = operand2;
    }

    // Display the current operand on the screen
    screen.textContent = display;
}

// Target the div in the HTML that will serve as a container for the operation buttons
const operationButtonsDiv = document.querySelector(".operation-buttons");
// Need 4 basic functions (+, -, x, ÷) and =
// Create the button elements
const addButton = document.createElement("button");
const subtractButton = document.createElement("button");
const multiplyButton = document.createElement("button");
const divideButton = document.createElement("button");
const equalsButton = document.createElement("button");

// Set up their text contents
addButton.textContent = "+";
subtractButton.textContent = "-";
multiplyButton.textContent = "x";
divideButton.textContent = "÷";
equalsButton.textContent = "=";

// Add respective event listeners
addButton.addEventListener("click", () => { operation = "add"; });
subtractButton.addEventListener("click", () => { operation = "subtract"; });
multiplyButton.addEventListener("click", () => { operation = "multiply"; });
divideButton.addEventListener("click", () => { operation = "divide"; });
equalsButton.addEventListener("click", () => { operate(operation, operand1, operand2); });

// Append the buttons to the DOM as children of the container div
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

/**
 * Takes an operator and 2 numbers then calls one of the above functions on the numbers
 * @param {*} operator a String representing what operator to use for the calculation
 * @param {*} x the first operand
 * @param {*} y the second operand
 */
function operate(operator, x, y)
{
    let result;
    if (operator === "add") {
        result = add(x, y);
    }
    else if (operator === "subtract") {
        result = subtract(x, y);
    }
    else if (operator === "multiply") {
        result = multiply(x, y);
    }
    else if (operator === "divide") {
        result = divide(x, y);
    }

    // Display the result on the screen
    screen.textContent = result;

    operand1 = result;
    operand2 = null;
}
