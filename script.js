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
  if (playerSelection === computerSelection) {
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

function game() {
  // const playerSelection = prompt("Choose rock, paper or scissors", "rock").toLowerCase();
  const computerSelection = getComputerChoice();
  // keep track of the results of each round to be able to declare a winner
  let playerResult = 0;
  let computerResult = 0;
  for(let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose rock, paper or scissors", "rock").toLowerCase();
    let play = playRound(playerSelection, computerSelection);
    if (play.includes("Won")) {
      playerResult += 1;
    } else if (play.includes("Lose")) {
      computerResult += 1;
    } else if (play.includes("Tie")){
      playerResult += 0;
      computerResult += 0;
    } else {
      console.log("Non valid");
    }
  }

  const results = `Score player: ${playerResult} - Score computer: ${computerResult}`;
  console.log(results);
  reportWinner(playerResult, computerResult);
}

function reportWinner(player, computer) {
  // this function the results of the game to declare a winner
  if (player > computer) {
    console.log("CONGRATS! You won the GAME!");
  } else if (player < computer) {
    console.log("I'm sorry, but you lost. The computer won the game.");
  } else {
    console.log("It's a tie! Nobody won or lost");
  }
}

game()




