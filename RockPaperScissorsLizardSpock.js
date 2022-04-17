/* eslint-disable complexity */
const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];

function prompt(message) {
  console.log(`=> ${message}`);
}

// eslint-disable-next-line max-lines-per-function
function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  switch (true) {
    case choice === 'rock' && (computerChoice === 'scissors' || computerChoice ===
    'lizard'):
      prompt('You win!');
      break;
    case choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'Spock'):
      prompt('You win!');
      break;
    case choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard'):
      prompt('You win!');
      break;
    case choice === 'Spock' && (computerChoice === 'rock' || computerChoice ===
    'scissors'):
      prompt('You win!');
      break;
    case choice === 'lizard' && (computerChoice === 'paper' || computerChoice ===
      'Spock'):
      prompt('You win!');
      break;
    case (choice === computerChoice):
      prompt("It's a tie!");
      break;
    default:
      prompt('Computer wins!');
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}