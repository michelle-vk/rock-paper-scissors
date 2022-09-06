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

getComputerChoice();