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
        const startGame = prompt("Hey! Do you want to play Rock, Paper, Scissors? Press Y to start, or N to quit."

        if (startGame.toLowerCase() !== "y") {
            alert("Alright, maybe next time! Goodbye!");
            return; // Exit if the user doesn't want to play initially
        }

        let playerScore = 0;
        let computerScore = 0;

        for (let i = 0; i < 5; i++) {
            const playerSelection = prompt("Enter Rock, Paper, or Scissors:");

            if (!["rock", "paper", "scissors"].includes(playerSelection.toLowerCase())) {
                alert("Invalid choice! Please enter Rock, Paper, or Scissors.");
                i--; // Repeat the round for an invalid choice
                continue;
            }

            const computerSelection = computerPlay();
            const result = playRound(playerSelection, computerSelection);

            // Update scores based on the result
if (result.includes("Win")) {
    playerScore++;
} else if (result.includes("Lose")) {
    computerScore++;
}
// Show the result and updated score for the current round
alert(`Round ${i + 1}: ${result} | Current Score - You: ${playerScore}, AI: ${computerScore}`);
}
