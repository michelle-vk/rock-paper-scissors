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
  // TODO: Update DOM with winner

  // Compares the results of the game to declare a winner
  if (scoreboard.player > scoreboard.cpuPlayer) {
    console.log("CONGRATS! You won the GAME with!");
  } else if (scoreboard.player < scoreboard.cpuPlayer) {
    console.log("I'm sorry, but you lost. The computer won the game.");
  } else {
    console.log("It's a tie! Nobody won or lost");
  }
}

// Create scoreboard
const scoreboard = { player: 0, cpuPlayer: 0 };

// Start game
startGame();
