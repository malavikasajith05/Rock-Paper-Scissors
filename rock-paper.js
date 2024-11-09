function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie!";
    }
    
    if (
        (playerSelection === "rock" && computerSelection === "Scissors") ||
        (playerSelection === "paper" && computerSelection === "Rock") ||
        (playerSelection === "scissors" && computerSelection === "Paper")
    ) {
        return `You Win! ${capitalize(playerSelection)} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${capitalize(playerSelection)}`;
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function game() {
    let playAgain;

    do {
        let playerScore = 0;
        let computerScore = 0;

        for (let i = 0; i < 5; i++) {
            const playerSelection = prompt("Enter Rock, Paper, or Scissors to play or press Cancel to quit:");

            if (playerSelection === null) {
                alert("Thanks for playing! Goodbye!");
                return; // Exit the game if the user presses "Cancel"
            }

            if (!["rock", "paper", "scissors"].includes(playerSelection.toLowerCase())) {
                alert("Invalid choice! Please enter Rock, Paper, or Scissors.");
                i--; // Repeat the round for an invalid choice
                continue;
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

        let finalMessage;
        if (playerScore > computerScore) {
            finalMessage = `Congratulations! You won the game with a score of ${playerScore} to ${computerScore}`;
        } else if (playerScore < computerScore) {
            finalMessage = `Sorry! You lost the game with a score of ${playerScore} to ${computerScore}`;
        } else {
            finalMessage = "It's a tie!";
        }
        alert("Game Over! " + finalMessage);

        // Ask if the user wants to play another round
        playAgain = prompt("Do you want to play one more game? Enter Y for yes, or press Cancel to quit.");

    } while (playAgain && playAgain.toLowerCase() === "y");

    alert("Thanks for playing! Goodbye!");
}

game();
