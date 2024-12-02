import { story } from './data.js';

// Element retrieval
const storyboardEl = document.getElementById('storyboard');
const optionAEl = document.getElementById('optionA');
const optionBEl = document.getElementById('optionB');

let currentStoryIndex = 0;

function startGame() {
  showStoryNode(0);
}

function showStoryNode(index) {
  if (story[index]) {
    currentStoryIndex = index;
    const node = story[index];

    // Update the story text
    storyboardEl.innerText = node.text;

    // Update option buttons
    updateButton(optionAEl, node.option[0]);
    updateButton(optionBEl, node.option[1]);

    // Update the background of the entire page
    updatePageBackground(node.image);

  } else {
    console.error("Invalid story index:", index);
  }
}

function updatePageBackground(image) {
  const bodyElement = document.body;

  if (image) {
    bodyElement.style.backgroundImage = `url(${image})`;
    bodyElement.style.backgroundSize = 'cover';
    bodyElement.style.backgroundPosition = 'center';
    bodyElement.style.transition = 'background-image 1s ease-in-out';
  } else {
    bodyElement.style.backgroundImage = 'none';
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
  if (story[currentStoryIndex]?.option[optionIndex - 1]) {
    showStoryNode(story[currentStoryIndex].option[optionIndex - 1].next);
  } else {
    console.error("Invalid option selection");
  }
}

// Event listeners setup
document.addEventListener('DOMContentLoaded', () => {
  // Touch Event Listeners for Mobile Devices
  optionAEl?.addEventListener('touchstart', () => handleOptionSelection(1));
  optionBEl?.addEventListener('touchstart', () => handleOptionSelection(2));
});

// Make handleOptionSelection function accessible globally
window.handleOptionSelection = handleOptionSelection;

// Start the game on window load
window.onload = startGame;