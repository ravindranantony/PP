// Get elements from the DOM
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

// Initialize variables
let currentOperand = '';
let previousOperand = '';
let currentOperation = null;

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('number')) {
      handleNumber(button.innerText);
    } else if (button.classList.contains('operator')) {
      handleOperator(button.innerText);
    } else if (button.classList.contains('equal')) {
      handleEqual();
    } else if (button.classList.contains('clear')) {
      handleClear();
    } else if (button.classList.contains('delete')) {
      handleDelete();
    }
  });
});

// Functions for handling input
function handleNumber(number) {
  currentOperand += number;
  updateDisplay();
}

function handleOperator(operator) {
  if (currentOperation !== null) {
    handleEqual();
  }
  currentOperation = operator;
  previousOperand = currentOperand;
  currentOperand = '';
}

function handleEqual() {
  if (currentOperation === null) {
    return;
  }
  let result;
  const previous = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(previous) || isNaN(current)) {
    return;
  }
  switch (currentOperation) {
    case '+':
      result = previous + current;
      break;
    case '-':
      result = previous - current;
      break;
    case '*':
      result = previous * current;
      break;
    case '/':
      result = previous / current;
      break;
    default:
      return;
  }
  currentOperand = result.toString();
  currentOperation = null;
  updateDisplay();
}

function handleClear() {
  currentOperand = '';
  previousOperand = '';
  currentOperation = null;
  updateDisplay();
}

function handleDelete() {
  currentOperand = currentOperand.slice(0, -1);
  updateDisplay();
}

// Function for updating the display
function updateDisplay() {
  display.innerText = currentOperand;
}
