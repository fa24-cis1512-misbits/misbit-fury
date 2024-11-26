import story from './storyboard.js';
import controller from './controller.js';

let currentStoryIndex = 0;

//start the game
function startGame() {
  showStoryNode(0);  //first story node
}

//update the story text
function showStoryNode(index) {
  currentStoryIndex = index;
  const node = story[index];
  document.getElementById('storyboard').innerText = node.text;

  //update the first button text
  document.getElementById('optionA').innerText = node.option[0].text;

  //make sure it is visible
  document.getElementById('optionA').style.display = 'inline-block';

  //update second button text or hide
  if (node.option[1]) {
    document.getElementById('optionB').innerText = node.option[1].text;
    document.getElementById('optionB').style.display = 'inline-block';
  }
  else {//hide the second button if only one option
    document.getElementById('optionB').style.display = 'none';
  }

}

//function to handle option
function option(optionIndex) {

  const nextNodeIndex = story[currentStoryIndex].option[optionIndex - 1].next;
  //move to next story node
  showStoryNode(nextNodeIndex);
}

//start game when page isLoaded
window.onload = startGame;
