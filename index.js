import "./style.css";

const counterElement = document.querySelector('.counter');
const incrementButton = document.querySelector('.increment');
const decrementButton = document.querySelector('.decrement');

let counterValue = 0;

function updateCounterDisplay() {
  counterElement.textContent = counterValue;
}

function handleIncrementClick() {
  counterValue++;
  updateCounterDisplay();
}

function handleDecrementClick() {
  counterValue--;
  updateCounterDisplay();
}

function handleIncrementMouseOver() {
  incrementButton.addEventListener('click', handleIncrementClick);
}


function handleDecrementMouseOver() {
  decrementButton.addEventListener('click', handleDecrementClick);
}

function handleMouseLeave() {
  incrementButton.removeEventListener('click', handleIncrementClick);
  decrementButton.removeEventListener('click', handleDecrementClick);
}

incrementButton.addEventListener('mouseover', handleIncrementMouseOver);
decrementButton.addEventListener('mouseover', handleDecrementMouseOver);
incrementButton.addEventListener('mouseleave', handleMouseLeave);
decrementButton.addEventListener('mouseleave', handleMouseLeave);

updateCounterDisplay();
