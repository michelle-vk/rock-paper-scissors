function startGame() {
  // Add click handler on all game buttons
  buttons.forEach(button => 
    button.addEventListener("click", buttonClickHandler)
  );
  // Hide the reset/play again button and score title while playing the game
  resetGameButton.style.visibility = "hidden";
  scoreTitle.style.visibility = "hidden";
}

function buttonClickHandler(event) {
  const button = event.currentTarget;
  
  // We pass in the player/cpu choices and update the score
  updateScore(button.id, cpuPlayerMove());

  // Call function displayScore which decides so show results or not depending on active play status
  displayScore(button);
  
  console.log(scoreboard);

  // If we have 5 wins, we declare winner and disable game buttons
  if(scoreboard.player === 5 || scoreboard.cpuPlayer === 5){
    declareWinner();
    gameButtons.forEach(button => button.disabled = true);
  } else {
    // Update DOM with new scoreboard
    results.textContent = `Player: ${scoreboard.player} - Computer: ${scoreboard.cpuPlayer}`;
  }
}

function cpuPlayerMove() {
  // Randomly choose an option for the CPU player
  const options = ["rock", "paper", "scissors"];
  const optionIndex = Math.floor(Math.random() * options.length);
  const choice = options[optionIndex];
  return choice;
}

function updateScore(player, cpuPlayer) {
  if (player === "rock" && cpuPlayer === "scissors"){
    scoreboard.player += 1;
  } else if (player === "rock" && cpuPlayer === "paper") {
    scoreboard.cpuPlayer += 1;
  } else if (player === "scissors" && cpuPlayer === "paper") {
    scoreboard.player += 1;
  } else if (player === "scissors" && cpuPlayer === "rock") {
    scoreboard.cpuPlayer += 1;
  } else if (player === "paper" && cpuPlayer === "scissors") {
    scoreboard.cpuPlayer += 1;
  } else if (player === "paper" && cpuPlayer === "rock") {
    scoreboard.player += 1;
  }
}

function displayScore(button) {
  // Show the score while playing the game or else hide it
  if (button.id === "rock" || button.id === "paper" || button.id === "scissors") {
    gameButtons.forEach(button => {
      results.style.visibility = "visible";
      scoreTitle.style.visibility = "visible";
    })
    } else {
      results.style.visibility = "hidden";
    }
}

function declareWinner() {
  // Updates the score
  results.textContent = `Player: ${scoreboard.player} - Computer: ${scoreboard.cpuPlayer}`;

  // Show the reset/ play again button and score title
  resetGameButton.style.visibility = "visible";
  scoreTitle.style.visibility = "visible";
  
  // Creates seperate div to declare winner
  const winner = document.createElement("div");
  results.appendChild(winner);

  // Compares the results of the game to declare a winner
  if (scoreboard.player > scoreboard.cpuPlayer) {
    winner.textContent = "CONGRATS! You won the GAME";
  } else if (scoreboard.player < scoreboard.cpuPlayer) {
    winner.textContent = "I'm sorry, but you lost. The computer won the game.";
  } else {
    winner.textContent = "It's a tie! Nobody won or lost";
  }

}

// Reset score and activate the game buttons
function resetGame(event) {
  scoreboard.player = 0;
  scoreboard.cpuPlayer = 0;
  buttonClickHandler(event);
  gameButtons.forEach(button => 
    button.disabled = false
  );
  
  // Hide the reset/play again button after clicking on it to play again and hide score title
  resetGameButton.style.visibility = "hidden";
  scoreTitle.style.visibility = "hidden";
}

// Create scoreboard, select buttons and tag, and create a div to show results
const scoreboard = { player: 0, cpuPlayer: 0 }; 
const buttons = document.querySelectorAll("button");
const gameButtons = document.querySelectorAll(".game-btn");
const resetGameButton = document.querySelector(".reset-game");
const scoreTitle = document.querySelector("h2");
const results = document.querySelector(".results");

// Set an event listener on the reset/play again button
resetGameButton.addEventListener("click", resetGame);

// Start game
startGame();
