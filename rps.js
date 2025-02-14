// Rock-Paper-Scissors Game

// Global score variables
let humanScore = 0; 
let computerScore = 0;


//Points
const pointsDisplay =  document.getElementById("points");
const scoreParagraph = document.getElementById("score");

function updatePoints(){
    pointsDisplay.textContent = `${humanScore} - ${computerScore}`;
}

// Function to get computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function playRound(getHumanChoice, computerSelection) {
    
    if (getHumanChoice === computerSelection) {
        scoreParagraph.textContent = "It's a tie!";
    } 
    else if (
        (getHumanChoice === 'rock' && computerSelection === 'scissors') ||
        (getHumanChoice === 'paper' && computerSelection === 'rock') ||
        (getHumanChoice === 'scissors' && computerSelection === 'paper')
    ) {
        scoreParagraph.textContent = `You win! ${getHumanChoice} beats ${computerSelection}`;
        humanScore++;
    } 
    else {
        scoreParagraph.textContent = `You lose! ${computerSelection} beats ${getHumanChoice}`;
        computerScore++;
    }
    updatePoints();
}

// Main game function
function playGame() {

    let getHumanChoice ="";

    const rockButton = document.getElementById("rockButton");
    rockButton.addEventListener("click", function(){
        getHumanChoice = "rock";
        playRound(getHumanChoice, getComputerChoice());

    });


    const paperButton = document.getElementById("paperButton");
    paperButton.addEventListener("click", function(){
        getHumanChoice = "paper";
        playRound(getHumanChoice, getComputerChoice());
    });



    const scissorsButton = document.getElementById("scissorsButton");
    scissorsButton.addEventListener("click", function(){
        getHumanChoice = "scissors";
        playRound(getHumanChoice, getComputerChoice());
    });


    const scoreParagraph = document.getElementById("score");
    

}
updatePoints();
// Start the game
window.onload = playGame;
