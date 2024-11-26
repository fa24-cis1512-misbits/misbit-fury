export function controller() {

  const optionA = document.getElementById('optionA');
  const optionB = document.getElementById('optionB');
  const optionC = document.getElementById('optionC');

  switch (optionA || optionB || optionC) {
    case 'a':
    case 'A':
      console.log(`This is option ${optionA.toUpperCase()}`);
      break;
    case 'b':
    case 'B':
      console.log(`This is option ${optionB.toUpperCase()}`);
      break;
    case 'c':
    case 'C':
      console.log(`This is option ${optionC.toUpperCase()}`);
      break;
    default:
      console.log('Choose a correct answer choice.');
  }

}
