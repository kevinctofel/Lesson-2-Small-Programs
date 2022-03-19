// *** Build a mortgage or car payment calculator ***
// inputs:
//    loan amount, Annual Percentage Rate (APR), loan duration
// outputs:
//    monthly interest rate, loan duration in months

let loanAmount, monthlyRate, loanDuration;

// eslint-disable-next-line max-len
let payment = loanAmount * (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanDuration))));