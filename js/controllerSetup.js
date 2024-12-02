   // controller.js
import {cycleOptions, handleOptionSelection, selectedOptionIndex} from './storyboard.js';

   function setupController() {
     const selectButtonEl = document.getElementById('selectButton');
     const startButtonEl = document.getElementById('startButton');
     const optionAButtonEl = document.querySelector('.button-a');
     const optionBButtonEl = document.querySelector('.button-b');

     selectButtonEl?.addEventListener('click', () => {
       console.log("Select button clicked");
       cycleOptions();
     });
     selectButtonEl?.addEventListener('touchstart', (event) => {
       console.log("Select button touched");
       event.preventDefault();
       cycleOptions();
     });

     startButtonEl?.addEventListener('click', () =>
     {console.log("Start button clicked");
       handleOptionSelection(selectedOptionIndex)});
     startButtonEl?.addEventListener('touchstart', (event) => {
       console.log("Select button touched");
       event.preventDefault();
       handleOptionSelection(selectedOptionIndex);
     });

     optionAButtonEl?.addEventListener('click', () => {
       console.log("A button clicked");
       handleOptionSelection(0)});
     optionBButtonEl?.addEventListener('click', () => {
       console.log("B button clicked");
       handleOptionSelection(1)
     });

     // Keyboard controls
     document.addEventListener('keydown', (event) => {
       if (event.code === 'Enter') {
         event.preventDefault();
         handleOptionSelection(selectedOptionIndex);
       } else if (event.code === 'Space') {
         event.preventDefault();
         cycleOptions();
       }
     });
   }

   document.addEventListener('DOMContentLoaded', setupController);