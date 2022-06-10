let playerScore = 0;
let computerScore = 0;

// computerPlay that will randomly return either rock, paper or scissors
function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3); 
    return (computerSelection == 0) ? 'rock' : (computerSelection == 1) ? 'paper' : 'scissors';
}

// playerPlay that will ask the user for input and store that input
function playerPlay() {
    let playerSelection = prompt('Rock, paper or scissors?').toLowerCase();
    return playerSelection;
}

// a single round that takes two parameters playerSelection and computerSelection and returns a string declaring a winner
function playRound(playerSelection, computerSelection) {
    console.log('You chose: ' + playerSelection + ', ' + 'computer chose: ' + computerSelection + '!');
    
    if (playerSelection == computerSelection) {
        return 'It\'s a tie!';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return 'You win!';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        return 'You lose!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return 'You win!';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return 'You lose!';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return 'You win!';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return 'You lose!'
    } else {
        return 'Type only rock, paper or scissors';
    }
}



// function that lets you play 5 rounds, calculate the score and declare a winner
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log('Your score: ' + playerScore + ' | ' + 'Computer score: ' + computerScore);
        console.log('~-~-~-~-~-~-~-~');
    }
    if (playerScore > computerScore) {
        console.log('YOU WIN! CONGRATS!');
    } else {
        console.log('YOU LOSE! TRY AGAIN!');
    }
}

game();
