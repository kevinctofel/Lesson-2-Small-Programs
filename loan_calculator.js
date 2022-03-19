// *** Build a mortgage or car payment calculator ***
// inputs:
//    loan amount, Annual Percentage Rate (APR), loan duration
// outputs:
//    monthly interest rate, loan duration in months

const prompts = require('./modules/loan_prompts.json'); // input prompts in JSON
const prompt = (message) => ( // refactored function for nicer prompt
  console.log(`=> ${message}`));

let loanAmount, monthlyRate, loanDuration;

const readline = require('readline-sync'); // needed for input

const startup = () => {
  console.clear();
  prompt(prompts.welcome);
};
// Get loan amount
function getAmount() {
  prompt(prompts.amount);
  loanAmount = Number(readline.question()).toFixed(2); // Note: STRING
  console.log(`Loan amount: ${Number(loanAmount).toLocaleString('en', { style: 'currency', currency: 'USD' })}`);
}

// Get loan APR
function getAPR() {
  prompt(prompts.apr);
  monthlyRate = Number(readline.question() / 12).toFixed(5); // Note: STRING
  console.log(`Monthly rate: ${monthlyRate}%`);
}

// Get loan duration
function getDuration() {
  prompt(prompts.duration);
  loanDuration = Number(readline.question() * 12); // Note: NUMBER
  console.log(`Loan duration: ${loanDuration} months.`);
}

// Calculate monthlyRate and loan duration in months
function calcPayment() {
  // eslint-disable-next-line max-len
  let payment = (loanAmount) * (monthlyRate / (1 - Math.pow(1 + monthlyRate), (-loanDuration)));
  console.log(`Monthly payment is: ${payment.toLocaleString('en', { style: 'currency', currency: 'USD' })}.`);
}

// Display outputs

// main app flow
startup();
getAmount();
getAPR();
getDuration();
calcPayment();
