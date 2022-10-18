function startGame() {
  const buttons = document.querySelectorAll("button");

  // Add click handler on all game buttons
  buttons.forEach(button => 
    button.addEventListener("click", buttonClickHandler)
  );
}

function buttonClickHandler(event) {
  const button = event.currentTarget;
  
  // We pass in the player/cpu choices and update the score.
  updateScore(button.id, cpuPlayerMove());

  console.log(scoreboard);

  // If we have 5 wins, we declare winner.
  if(scoreboard.player === 5 || scoreboard.cpuPlayer === 5){
    declareWinner();
  } else {
    // TODO: Update DOM with new scoreboard
    results.textContent = `Player: ${scoreboard.player} - Computer: ${scoreboard.cpuPlayer}`;
  }
}

function cpuPlayerMove() {
  // Randomly choose an option for the CPU player.
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

function declareWinner() {
  // updates the score
  results.textContent = `Player: ${scoreboard.player} - Computer: ${scoreboard.cpuPlayer}`;
  
  // create seperate div to declare winner
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

// Create scoreboard and a div to show results
const scoreboard = { player: 0, cpuPlayer: 0 }; 
const results = document.querySelector(".results");

// Start game
startGame();
