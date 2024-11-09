const choices = ["rock", "paper", "scissors"];
function computerPlay() {
    
    return choices[Math.floor(Math.random() * choices.length)];
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie!";
    }
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
    } else {
        return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
    }
}
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
function getPlayerSelection() {
    let playerSelection;
    do {
        playerSelection = prompt("Enter Rock, Paper, or Scissors to play or press Cancel to quit:");
        if (playerSelection === null) {
            alert("Thanks for playing! Goodbye!");
            return null; 
        }
        if (!choices.includes(playerSelection.toLowerCase().trim())) {
            alert("Invalid choice! Please enter Rock, Paper, or Scissors.");
        }
    } while (!choices.includes(playerSelection.toLowerCase().trim()));
    return playerSelection;
}
function showFinalMessage(playerScore, computerScore) {
    let finalMessage;
    if (playerScore > computerScore) {
        finalMessage = `Congratulations! You won the game with a score of ${playerScore} to ${computerScore}`;
    } else if (playerScore < computerScore) {
        finalMessage = `Sorry! You lost the game with a score of ${playerScore} to ${computerScore}`
;
    } else {
        finalMessage = "It's a tie!";
    }
    alert("Game Over! " + finalMessage);
}
function game() {
    let playAgain;
    do {
        let playerScore = 0;
        let computerScore = 0;
        for (let i = 0; i < 5; i++) {
            const playerSelection = getPlayerSelection();
            if (playerSelection === null) {
                return; 
            }
            const computerSelection = computerPlay();
            const result = playRound(playerSelection, computerSelection);
            if (result.includes("Win")) {
                playerScore++;
            } else if (result.includes("Lose")) {
                computerScore++;
            }
            alert(`Round ${i + 1}: ${result} | Current Score - You: ${playerScore}, AI: ${computerScore}`);
        }
        showFinalMessage(playerScore, computerScore); 
        
        playAgain = confirm("Do you want to play one more game?");
    } while (playAgain);
    alert("Thanks for playing! Goodbye!");
}
game();