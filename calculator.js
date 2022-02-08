// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

const prompt = (message) => ( // refactored function for nicer prompt
  console.log(`=> ${message}`));

const invalidNumber = (number) => (number.trimStart() === '' || Number.isNaN(Number(number)));
// refactored function to check for valid input number

prompt(`Welcome to Calculator!\n`);

prompt(`What's the first number?`);
let number1 = readline.question(); // Ask the user for the first number.

while (invalidNumber(number1)) { // refactor to add validation function
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = readline.question();
}

prompt(`What's the second number?`);
let number2 = readline.question(); // Ask the user for the second number.

while (invalidNumber(number2)) { // refactor to add validation function
  prompt("Hmm... that doesn't look like a valid number.");
  number2 = readline.question();
}

// console.log(`${number1} ${number2}`); log for test purposes only

prompt(`What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide`);
let operation = readline.question(); // Ask the user for an operation to perform.

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}
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