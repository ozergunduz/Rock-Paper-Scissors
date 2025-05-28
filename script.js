class RockPaperScissorsGame {
  constructor() {
    this.humanScore = 0;
    this.computerScore = 0;
    this.choices = ['rock', 'paper', 'scissors'];

    this.pointsDisplay = document.getElementById("points");
    this.scoreParagraph = document.getElementById("score");

    this.init();
    this.updatePoints();
  }

  init() {
    document.getElementById("rockButton").addEventListener("click", () => this.playRound("rock"));
    document.getElementById("paperButton").addEventListener("click", () => this.playRound("paper"));
    document.getElementById("scissorsButton").addEventListener("click", () => this.playRound("scissors"));
  }

  getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * this.choices.length);
    return this.choices[randomIndex];
  }

  playRound(humanChoice) {
    const computerChoice = this.getComputerChoice();

    if (humanChoice === computerChoice) {
      this.scoreParagraph.textContent = "It's a tie!";
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      this.humanScore++;
      this.scoreParagraph.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
      this.computerScore++;
      this.scoreParagraph.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    this.updatePoints();
  }

  updatePoints() {
    this.pointsDisplay.textContent = `${this.humanScore} - ${this.computerScore}`;
  }
}

// Start the game when the page loads
window.onload = () => new RockPaperScissorsGame();
