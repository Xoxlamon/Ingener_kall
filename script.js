let currentInput = '';
let operation = null;
let result = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === '' && op === '-') {
        currentInput = '-';
        updateDisplay();
        return;
    }

    if (currentInput !== '') {
        if (result !== null) {
            currentInput = result;
            result = null;
        }
        operation = op;
        currentInput = '';
        updateDisplay();
    }
}

function calculate() {
    if (operation !== null && currentInput !== '') {
        const num = parseFloat(currentInput);
        if (operation === '+') result = (result || 0) + num;
        else if (operation === '-') result = (result || 0) - num;
        else if (operation === '*') result = (result || 1) * num;
        else if (operation === '/') result = (result || 1) / num;
        else if (operation === 'sqrt') result = Math.sqrt(num);
        else if (operation === 'pow') result = Math.pow((result || 1), num);

        currentInput = result.toString();
        operation = null;
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    operation = null;
    result = null;
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
