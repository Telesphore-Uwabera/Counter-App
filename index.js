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
  counterValue += 1; // Increase by 1
  updateCounterDisplay();
}

// Function to handle the decrement button click
function handleDecrementClick() {
  counterValue -= 1; // Decrease by 1
  updateCounterDisplay();
}

// Add click event listeners to the buttons
incrementButton.addEventListener('click', handleIncrementClick);
decrementButton.addEventListener('click', handleDecrementClick);

// Initial update of the counter display
updateCounterDisplay();
