let displayValue = '0';
let operator = '';
let firstOperand = 0;
let awaitingNextOperand = false;

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue;
}

function appendNumber(number) {
  if (awaitingNextOperand) {
    displayValue = number;
    awaitingNextOperand = false;
  } else {
    displayValue = displayValue === '0' ? String(number) : displayValue + number;
  }
  updateDisplay();
}

function appendOperator(op) {
  if (operator && !awaitingNextOperand) {
    calculate();
  }
  operator = op;
  firstOperand = parseFloat(displayValue);
  awaitingNextOperand = true;
}

function calculate() {
  const secondOperand = parseFloat(displayValue);
  switch (operator) {
    case '+':
      displayValue = (firstOperand + secondOperand).toString();
      break;
    case '-':
      displayValue = (firstOperand - secondOperand).toString();
      break;
    case '*':
      displayValue = (firstOperand * secondOperand).toString();
      break;
    case '/':
      displayValue = (firstOperand / secondOperand).toString();
      break;
    default:
      return;
  }
  operator = '';
  awaitingNextOperand = true;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  operator = '';
  firstOperand = 0;
  awaitingNextOperand = false;
  updateDisplay();
}

clearDisplay();
