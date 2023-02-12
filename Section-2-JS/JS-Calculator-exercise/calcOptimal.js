//Defining keys in button div
const keys = document.querySelector('.buttons');

// First, define variables to hold the calculator state
let displayValue = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

// Next, define a function that will update the display on the calculator
function updateDisplay() {
  const display = document.querySelector('#value');
  display.textContent = displayValue;
}

updateDisplay();

// A function to handle button clicks
function inputDigit(digit) {
  if (waitingForSecondOperand) {
    displayValue = digit;
    waitingForSecondOperand = false;
  } else {
    displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
}

function inputDecimal(dot) {
  if (waitingForSecondOperand) {
    displayValue = '0.';
    waitingForSecondOperand = false;
    return;
  }

  if (!displayValue.includes(dot)) {
    displayValue += dot;
  }
}


function handleOperator(nextOperator) {
  const inputValue = parseFloat(displayValue);

  if (operator && waitingForSecondOperand) {
    operator = nextOperator;
    return;
  }

  if (firstOperand == null) {
    firstOperand = inputValue;
  } else if (operator) {
    const result = performCalculation[operator](firstOperand, inputValue);
    displayValue = `${parseFloat(result.toFixed(7))}`;
    firstOperand = result;
  }

  waitingForSecondOperand = true;
  operator = nextOperator;
}

const performCalculation = {
  '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,

  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

  '=': (firstOperand, secondOperand) => secondOperand
};

// Now, add event listeners to each button on the calculator
keys.addEventListener('click', (event) => {
    const { target } = event;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    handleOperator(target.textContent);
    updateDisplay();
    return;
  }

  if (target.classList.contains('decimal')) {
    inputDecimal(target.textContent);
    updateDisplay();
    return;
  }

  if (target.classList.contains('all-clear')) {
    resetCalculator();
    updateDisplay();
    return;
  }

  inputDigit(target.textContent);
  updateDisplay();
});

// Finally, define a function to reset the calculator
function resetCalculator() {
  displayValue = '0';
  firstOperand = null;
  operator = null;
  waitingForSecondOperand = false;
}
