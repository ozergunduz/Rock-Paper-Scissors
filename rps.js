// Rock-Paper-Scissors Game

// Global score variables
let humanScore = 0; 
let computerScore = 0;

// Function to get computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function playRound(getHumanChoice, computerSelection) {
    if (getHumanChoice === computerSelection) {
        console.log("It's a tie!");
    } 
    else if (
        (getHumanChoice === 'rock' && computerSelection === 'scissors') ||
        (getHumanChoice === 'paper' && computerSelection === 'rock') ||
        (getHumanChoice === 'scissors' && computerSelection === 'paper')
    ) {
        console.log(`You win! ${getHumanChoice} beats ${computerSelection}`);
        humanScore++;
    } 
    else {
        console.log(`You lose! ${computerSelection} beats ${getHumanChoice}`);
        computerScore++;
    }
}

// Main game function
function playGame() {
    const validChoices = ['rock', 'paper', 'scissors'];

    for (let i = 0; i < 5; i++) { // Play 5 rounds
        let getHumanChoice = '';

        // Validate user input
        while (!validChoices.includes(getHumanChoice)) {
            getHumanChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
            if (!validChoices.includes(getHumanChoice)) {
                console.log("Invalid choice. Please select rock, paper, or scissors.");
            }
        }

        let computerSelection = getComputerChoice();
        console.log(`Player: ${getHumanChoice}`);
        console.log(`Computer: ${computerSelection}`);

        playRound(getHumanChoice, computerSelection);
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    // Determine overall winner
    if (humanScore > computerScore) {
        console.log("🏆 You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("🤖 The computer wins overall!");
    } else {
        console.log("🤝 It's an overall tie!");
    }
}

// Start the game
playGame();
