import { story } from './data.js';

let currentStoryIndex = 0;
const storyboardEl = document.getElementById('storyboard');
const optionAEl = document.getElementById('optionA');
const optionBEl = document.getElementById('optionB');

function startGame() {
  showStoryNode(0);
}

function showStoryNode(index) {
  if (story[index]) {
    currentStoryIndex = index;
    const node = story[index];
    storyboardEl.innerText = node.text;

    updateButton(optionAEl, node.option[0]);
    updateButton(optionBEl, node.option[1]);
  } else {
    console.error("Invalid story index:", index);
  }
}

function updateButton(button, option) {
  if (option) {
    button.innerText = option.text;
    button.style.display = 'inline-block';
  } else {
    button.style.display = 'none';
  }
}

function handleOptionSelection(optionIndex) {
  if (story[currentStoryIndex] && story[currentStoryIndex].option[optionIndex - 1]) {
    showStoryNode(story[currentStoryIndex].option[optionIndex - 1].next);
  } else {
    console.error("Invalid option selection");
  }
}

// Listen for both arrow keys and 'A'/'B' keys for selecting options
document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  if (key === 'arrowleft' || key === 'a') {
    handleOptionSelection(1); // Option A
  } else if (key === 'arrowright' || key === 'b') {
    handleOptionSelection(2); // Option B
  }
});

// Add touch event listeners for mobile devices
optionAEl.addEventListener('touchstart', () => handleOptionSelection(1));
optionBEl.addEventListener('touchstart', () => handleOptionSelection(2));

// Make the handleOptionSelection function accessible globally
window.handleOptionSelection = handleOptionSelection;

window.onload = startGame;