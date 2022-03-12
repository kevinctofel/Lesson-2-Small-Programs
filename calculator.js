const prompts = require('./modules/config.json');

// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
// February 22 refactor
// ask the user if they wanted to perform another calculation and
// start a new calculation when they respond with yes

const readline = require('readline-sync');
let repeat = 'N';
let language = '';

const prompt = (message) => ( // refactored function for nicer prompt
  console.log(`=> ${message}`));

const getLang = () => {
  prompt("Choose a Language: (E)nglish or (S)panish");
  language = readline.question();
  language = (language === 'E') ? 'en' : 'es';
  console.log(language);
};

const invalidNumber = (number) => (number.trimStart() === '' || Number.isNaN(Number(number)));
// refactored function to check for valid input number

const getFirstOperand = () => {
  console.clear();
  prompt(prompts[language].welcome);

  prompt(prompts[language].firstOp);
  let number1 = readline.question(); // Ask the user for the first number.

  while (invalidNumber(number1)) { // refactor to add validation function
    prompt(prompts[language].invalid);
    number1 = readline.question();
  }
  return number1;
};

const getSecondOperand = () => {
  prompt(prompts[language].secondOp);
  let number2 = readline.question(); // Ask the user for the second number.

  while (invalidNumber(number2)) { // refactor to add validation function
    prompt(prompts[language].invalid);
    number2 = readline.question();
  }

  return number2;
};

const getOperation = () => {
  prompt(prompts[language].getOperation);
  let operation = readline.question(); // Ask the user for an operation to perform.

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(prompts[language].chooseOperation);
    operation = readline.question();
  }
  return operation;
};

let output;

// if (operation === '1') { // Perform the operation on the two numbers.
//   output = Number(number1) + Number(number2); // convert strings to numbers
// } else if (operation === '2') {
//   output = Number(number1) - Number(number2);
// } else if (operation === '3') {
//   output = Number(number1) * Number(number2);
// } else if (operation === '4') {
//   output = Number(number1) / Number(number2);
// }
const calculate = (operation, number1, number2) => {
  switch (operation) { // refactored if/else with a switch
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }


  prompt(`The result is: ${output}`); // Print the result to the terminal
};

function appFlow() {
  // Get and store numeric inputs
  // Get operation
  // Calculate operation and return output
  // Prompt for another statement to calculate
  // End or clear console (console.clear) and rerun, based on request

  getLang();
  do {
    const number1 = getFirstOperand();
    const number2 = getSecondOperand();
    const operation = getOperation();
    calculate(operation, number1, number2);
    prompt(prompts[language].anotherCalc);
    repeat = readline.question();
  } while (repeat === 'Y');

}

appFlow();