let displayValue = ''; // Stores the current input

// Append a number to the display
function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

// Append an operator to the display
function appendOperator(operator) {
    if (displayValue === '') return; // Prevent operator being added first
    displayValue += ` ${operator} `;
    updateDisplay();
}

// Update the display input field
function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

// Clear the entire display
function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

// Delete the last input character
function deleteLast() {
    displayValue = displayValue.trim().slice(0, -1);
    updateDisplay();
}

// Calculate the result of the expression
function calculate() {
    try {
        displayValue = eval(displayValue).toString(); // eval() for basic calculations
        updateDisplay();
    } catch (error) {
        displayValue = 'Error'; // Show 'Error' for invalid inputs
        updateDisplay();
    }
}
