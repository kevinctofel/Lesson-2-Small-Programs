// *** Build a mortgage or car payment calculator ***
// inputs:
//    loan amount, Annual Percentage Rate (APR), loan duration
// outputs:
//    monthly interest rate, loan duration in months

const prompts = require('./modules/loan_prompts.json'); // input prompts in JSON
const prompt = (message) => ( // refactored function for nicer prompt
  console.log(`=> ${message}`));

let loanAmount, monthlyRate, loanDuration;

// eslint-disable-next-line max-len
let payment = loanAmount * (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanDuration))));
const readline = require('readline-sync'); // needed for input

// Get loan amount
function getAmount() {
  console.clear();
  prompt(prompts.welcome);
  prompt(prompts.amount);
  loanAmount = Number(readline.question()).toFixed(2); // Note: STRING
  console.log(`$${loanAmount}`);
}

// Calculate monthlyRate and loan duration in months

// Display outputs

getAmount();