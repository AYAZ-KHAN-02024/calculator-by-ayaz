let display = document.getElementById('display');
let opr = '+=-*/.';
let point = ".";
let allowedChars = '0123456789+-*/.';

function isAllowedChar(digit) {
  return allowedChars.includes(digit);
}

function appendToDisplay(value) {
  let lastDigit = display.value.slice(-1);
  if (opr.includes(value) && opr.includes(lastDigit)) {
    return null;
  }

  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function cut() {
  display.value = display.value.slice(0, -1)
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = null;
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === 'Enter') {
    calculate();
  }
});

document.addEventListener("keypress", (event) => {
  if (!isAllowedChar(event.key)) {
    event.preventDefault();
  }
  let display = document.getElementById('display');
  let lastDigit = display.value.slice(-1);
  let opr = '+=-*/.';
  if (opr.includes(event.key) && opr.includes(lastDigit)) {
    event.preventDefault();
  }
});


