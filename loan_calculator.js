// *** Build a mortgage or car payment calculator ***
// inputs:
//    loan amount, Annual Percentage Rate (APR), loan duration
// outputs:
//    monthly payment

const prompts = require('./modules/loan_prompts.json'); // input prompts in JSON
const prompt = (message) => ( // nicer, consistent prompts
  console.log(`=> ${message}`));

let loanAmount, monthlyRate, loanDuration, payment;
let anotherCalc = '';

const readline = require('readline-sync'); // needed for input

const startup = () => {
  console.clear();
  prompt(prompts.welcome);
};

// eslint-disable-next-line consistent-return
function validNumber(input) {
  if (input < 0 || isNaN(input)) {
    prompt(`${prompts.invalid}\n`);
    return false;
  }
}

// Get loan amount
function getAmount() {
  prompt(prompts.amount);
  loanAmount = Number(readline.question());
  while (validNumber(loanAmount) === false) {
    prompt(prompts.amount);
    loanAmount = Number(readline.question());
  }
}

// Get loan APR and convert to montly rate
function getAPR() {
  prompt(prompts.apr);
  monthlyRate = Number(readline.question() / 100 / 12);
  while (validNumber(monthlyRate) === false) {
    prompt(prompts.apr);
    monthlyRate = Number(readline.question());
  }
}

// Get loan duration and convert to months
function getDuration() {
  prompt(prompts.duration);
  loanDuration = Number(readline.question() * 12);
  while (validNumber(loanDuration) === false) {
    prompt(prompts.duration);
    loanDuration = Number(readline.question());
  }
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
  console.log(`Monthly payment is: ${payment.toLocaleString('en', { style: 'currency', currency: 'USD' })}.\n`);
}

// main app flow, can be used within a loop for to support multiple iterations

do {
  startup();
  getAmount();
  getAPR();
  getDuration();
  calcPayment();
  prompt(prompts.anotherLoan);
  anotherCalc = readline.question().toUpperCase();

} while (anotherCalc[0] === 'Y');