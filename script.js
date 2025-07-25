// --- Form validation part ---

// Form container
const formDiv = document.createElement("div");
formDiv.className = "formValidation";

// Email label and input
const emailLabel = document.createElement("label");
emailLabel.textContent = "E-mail";

const emailInput = document.createElement("input");
emailInput.type = "email"; // corrected "e-mail" to "email"
emailInput.name = "email";
emailInput.id = "inputEmail";
emailInput.placeholder = "Ex: asdfg123@gmail.com";
emailInput.required = true;

// Password label and input
const passLabel = document.createElement("label");
passLabel.textContent = "Password";

const passInput = document.createElement("input");
passInput.type = "password";
passInput.name = "password";
passInput.id = "password";
passInput.required = true;

// Submit button 
const submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";
submitBtn.id = "submit";

// Append elements 
formDiv.appendChild(emailLabel);
formDiv.appendChild(emailInput);
formDiv.appendChild(passLabel);
formDiv.appendChild(passInput);
formDiv.appendChild(submitBtn);

// Append form to body first
document.body.insertBefore(formDiv, document.body.firstChild);

// --- Game code ---

class RockPaperScissorsGame {
  constructor() {
    this.humanScore = 0;
    this.computerScore = 0;
    this.choices = ['rock', 'paper', 'scissors'];

    this.pointsDisplay = document.getElementById("points");
    this.scoreParagraph = document.getElementById("score");

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

//Validation part
// Game instance (but not initialized yet)
let game;

// Disable game buttons initially
["rockButton", "paperButton", "scissorsButton"].forEach(id => {
  const btn = document.getElementById(id);
  if (btn) btn.disabled = true;
});

// Form submit handler
submitBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent page reload

  // Basic validation
  const email = emailInput.value.trim();
  const password = passInput.value.trim();

  if (!email || !password) {
    alert("Please fill out both fields.");
    return;
  }

  if (!emailInput.checkValidity()) {
    alert("Please enter a valid email address.");
    return;
  }

  // Hide the form
  formDiv.style.display = "none";

  // Enable game buttons
  ["rockButton", "paperButton", "scissorsButton"].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.disabled = false;
  });

  // Start the game
  game = new RockPaperScissorsGame();
  game.init();
});
