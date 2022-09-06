function getComputerChoice() {
  // function that will randomly return 'rock', 'paper' or 'scissors'
  // first create an array with all options
  // then create a random output generator with algorithm
  // use length of array to return an output

  const elementOptions = ["rock", "paper", "scissors"];
  const elementAlgorithm = Math.floor(Math.random() * elementOptions.length);
  const computerChoice = elementOptions[elementAlgorithm];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  // write logic with if else statement comparing the computer's selection with player selection to see who has won.
  if(playerSelection === computerSelection) {
    return "It's a Tie!"
  } else if ((playerSelection === "rock") && (computerSelection === "scissors")){
    return "You Won! Rock beats Scissors";
  } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
    return "You Lose! Paper beats Rock";
  } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
    return "You Won! Scissors beats Paper";
  } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
    return "You Lose! Rock beats Scissors";
  } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
    return "You Lose! Scissors beats Paper";
  } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
    return "You Won! Paper beats Rock";
  } else {
    return "Please enter a valid option";
  }

}

const playerSelection = prompt("Choose rock, paper or scissors", "rock").toLowerCase();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));