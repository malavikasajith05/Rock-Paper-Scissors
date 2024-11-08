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
