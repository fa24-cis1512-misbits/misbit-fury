import { story } from './data.js';

let currentStoryIndex = 0;
const storyboardEl = document.getElementById('storyboard');
const optionAEl = document.getElementById('optionA');
const optionBEl = document.getElementById('optionB');

function startGame() {
  showStoryNode(0); // Correcting the typo to match the function name
}

function showStoryNode(index) {
  if (story[index]) {
    currentStoryIndex = index;
    const node = story[index];
    storyboardEl.innerText = node.text; // Use the constant

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
  showStoryNode(story[currentStoryIndex].option[optionIndex - 1].next);
}

// Make the handleOptionSelection function accessible globally
window.handleOptionSelection = handleOptionSelection;

window.onload = startGame;