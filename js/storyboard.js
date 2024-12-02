   // story.js

   import { story } from './data.js';

   const storyboardEl = document.getElementById('storyboard');
   const optionAEl = document.getElementById('optionA');
   const optionBEl = document.getElementById('optionB');

   let currentStoryIndex = 0;
  export let selectedOptionIndex = 0;

   function startGame() {
     showStoryNode(0);
   }

   function showStoryNode(index) {
     if (story[index]) {
       currentStoryIndex = index;
       const node = story[index];

       storyboardEl.innerText = node.text;

       updateButton(optionAEl, node.option[0], 'A', 0);
       updateButton(optionBEl, node.option[1], 'B', 1);

       highlightSelectedOption();
       updateBackground(node.image);
     } else {
       console.error("Invalid story index:", index);
     }
   }

   function updateBackground(image) {
     const bodyElement = document.body;
     if (image) {
       bodyElement.style.backgroundImage = `url(${image})`;
       bodyElement.style.backgroundSize = 'cover';
       bodyElement.style.backgroundPosition = 'center';
     } else {
       bodyElement.style.backgroundImage = 'none';
     }
   }

   function updateButton(button, option, label, optionIndex) {
     if (option) {
       button.innerText = `${label}: ${option.text}`;
       button.style.display = 'inline-block';

       button.onclick = function() {
         handleOptionSelection(optionIndex);
       };
     } else {
       button.style.display = 'none';
     }
   }

   export function handleOptionSelection(optionIndex) {
     if (story[currentStoryIndex]?.option[optionIndex]) {
       showStoryNode(story[currentStoryIndex].option[optionIndex].next);
     } else {
       console.error("Invalid option selection");
     }
   }

   export function highlightSelectedOption() {
     optionAEl.classList.remove('highlighted');
     optionBEl.classList.remove('highlighted');
     if (selectedOptionIndex === 0) {
       optionAEl.classList.add('highlighted');
     } else {
       optionBEl.classList.add('highlighted');
     }
   }

  export function cycleOptions() {
     selectedOptionIndex = (selectedOptionIndex + 1) % 2;
     highlightSelectedOption();
   }

   window.onload = startGame;