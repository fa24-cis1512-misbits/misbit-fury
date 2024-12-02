   // controller.js
import {cycleOptions, handleOptionSelection, selectedOptionIndex} from './storyboard.js';

   function setupController() {
     const selectButtonEl = document.getElementById('selectButton');
     const startButtonEl = document.getElementById('startButton');
     const optionAButtonEl = document.querySelector('.button-a');
     const optionBButtonEl = document.querySelector('.button-b');

     selectButtonEl?.addEventListener('click', () => {
       cycleOptions();
     });
     selectButtonEl?.addEventListener('touchstart', (event) => {
       event.preventDefault();
       cycleOptions();
     });

     startButtonEl?.addEventListener('click', () => handleOptionSelection(selectedOptionIndex));
     startButtonEl?.addEventListener('touchstart', (event) => {
       event.preventDefault();
       handleOptionSelection(selectedOptionIndex);
     });

     optionAButtonEl?.addEventListener('click', () => handleOptionSelection(0));
     optionBButtonEl?.addEventListener('click', () => handleOptionSelection(1));

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