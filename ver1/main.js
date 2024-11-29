import { story } from 'ver1/story_adventure_data.js';

let currentStoryIndex = 0;

// Start the game
function startGame() {
  showStoryNode(0); // First story node
}

// Update the story text
function showStoryNode(index) {
  if (story[index]) {
    currentStoryIndex = index;
    const node = story[index];
    document.getElementById('storyboard').innerText = node.text;

    if (node.option[0]) {
      document.getElementById('optionA').innerText = node.option[0].text;
      document.getElementById('optionA').style.display = 'inline-block';
    }

    if (node.option[1]) {
      document.getElementById('optionB').innerText = node.option[1].text;
      document.getElementById('optionB').style.display = 'inline-block';
    } else {
      document.getElementById('optionB').style.display = 'none';
    }
  } else {
    console.error("Invalid story index:", index);
  }
}

// Function to handle option
function option(optionIndex) {
  const nextNodeIndex = story[currentStoryIndex].option[optionIndex - 1].next;
  // Move to the next story node
  showStoryNode(nextNodeIndex);
}

// Make the option function accessible globally
window.option = option;

// Start game when the page is loaded
window.onload = startGame;