// *** Build a mortgage or car payment calculator ***
// inputs:
//    loan amount, Annual Percentage Rate (APR), loan duration
// outputs:
//    monthly payment

const prompts = require('./modules/loan_prompts.json'); // input prompts in JSON
const prompt = (message) => ( // nicer, consistent prompts
  console.log(`=> ${message}`));

let loanAmount, monthlyRate, loanDuration, payment;

const readline = require('readline-sync'); // needed for input

const startup = () => {
  console.clear();
  prompt(prompts.welcome);
};

// Get loan amount
function getAmount() {
  prompt(prompts.amount);
  loanAmount = Number(readline.question());
}

// Get loan APR and convert to montly rate
function getAPR() {
  prompt(prompts.apr);
  monthlyRate = Number(readline.question() / 100 / 12);
}

// Get loan duration and convert to months
function getDuration() {
  prompt(prompts.duration);
  loanDuration = Number(readline.question() * 12);
}

// Calculate monthly payment and display result
function calcPayment() {
  if (monthlyRate > 0) {
    // eslint-disable-next-line max-len
    payment = (loanAmount) * (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-Number(loanDuration)))));
  } else {
    // eslint-disable-next-line max-len
    payment = Number(loanAmount) / Number(loanDuration);
  }
  console.log(`Monthly payment is: ${payment.toLocaleString('en', { style: 'currency', currency: 'USD' })}.`);
}

// main app flow, can be used within a loop for to support multiple iterations
startup();
getAmount();
getAPR();
getDuration();
calcPayment();
