// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

console.log(`Welcome to Calculator!\n`);

console.log(`What's the first number?`);
let number1 = readline.question(); // Ask the user for the first number.

console.log(`What's the second number?`);
let number2 = readline.question(); // Ask the user for the second number.

console.log(`${number1} ${number2}`);