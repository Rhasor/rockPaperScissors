// Get the elements from the HTML document
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const tieScoreDisplay = document.getElementById("tieScore");
const resultDisplay = document.getElementById("result");

// Initialize the scores
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

// Define the function to randomly select a choice for the computer
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Define the function to play one round of the game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    resultDisplay.textContent = "Tie!";
    tieScore++;
    tieScoreDisplay.textContent = `Ties: ${tieScore}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    resultDisplay.textContent = "You win!";
    playerScore++;
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
  } else {
    resultDisplay.textContent = "You lose!";
    computerScore++;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  }

  // Check if a player has won the game
  if (playerScore === 5) {
    alert("Congratulations, you won the game!");
    resetGame();
  } else if (computerScore === 5) {
    alert("Sorry, you lost the game.");
    resetGame();
  }
}

// Define the function to reset the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;
  playerScoreDisplay.textContent = "Player: 0";
  computerScoreDisplay.textContent = "Computer: 0";
  tieScoreDisplay.textContent = "Ties: 0";
  resultDisplay.textContent = "";
}

// Add event listeners to the buttons
rockButton.addEventListener("click", () => {
  playRound("rock", computerPlay());
});

paperButton.addEventListener("click", () => {
  playRound("paper", computerPlay());
});

scissorsButton.addEventListener("click", () => {
  playRound("scissors", computerPlay());
});
