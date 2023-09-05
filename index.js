import "./style.css";

// Get references to the counter elements
const counterElement = document.querySelector('.counter');
const incrementButton = document.querySelector('.increment');
const decrementButton = document.querySelector('.decrement');

// Initialize the counter value
let counterValue = 0;

// Function to update the counter display
function updateCounterDisplay() {
  counterElement.textContent = counterValue;
}

// Function to handle the increment button click
function handleIncrementClick() {
  counterValue++;
  updateCounterDisplay();
}

// Function to handle the decrement button click
function handleDecrementClick() {
  counterValue--;
  updateCounterDisplay();
}

// Function to handle mouseover events for the increment button
function handleIncrementMouseOver() {
  incrementButton.addEventListener('click', handleIncrementClick);
}

// Function to handle mouseover events for the decrement button
function handleDecrementMouseOver() {
  decrementButton.addEventListener('click', handleDecrementClick);
}

// Function to handle mouseleave events for both buttons
function handleMouseLeave() {
  incrementButton.removeEventListener('click', handleIncrementClick);
  decrementButton.removeEventListener('click', handleDecrementClick);
}

// Add mouseover and mouseleave event listeners to the buttons
incrementButton.addEventListener('mouseover', handleIncrementMouseOver);
decrementButton.addEventListener('mouseover', handleDecrementMouseOver);
incrementButton.addEventListener('mouseleave', handleMouseLeave);
decrementButton.addEventListener('mouseleave', handleMouseLeave);

// Initial update of the counter display
updateCounterDisplay();
