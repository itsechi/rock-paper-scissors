// computerPlay that will randomly return either rock, paper or scissors
function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3); 
    return (computerSelection == 0) ? 'rock' : (computerSelection == 1) ? 'paper' : 'scissors';
}

/* or
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']; // define choices
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
} */

// playerPlay that will ask the user for input and store that input
function playerPlay() {
    let playerSelection = prompt('Rock, paper or scissors?');
    return playerSelection;
}

// a single round that takes two parameters playerSelection and computerSelection and returns a string declaring a winner
function playRound(playerSelection, computerSelection) {
    playerSelection = playerPlay(); 
    computerSelection = computerPlay(); 
    console.log('You chose: ' + playerSelection + '!');
    console.log('Computer chose: ' + computerSelection + '!');
    
    return (playerSelection == computerSelection) ? 'It\'s a tie!' : (playerSelection == 'rock' && computerSelection == 'scissors') ? 'You win!' : (playerSelection == 'rock' && computerSelection == 'paper') ? 'You lose!' : (playerSelection == 'paper' && computerSelection == 'rock') ? 'You win!' : (playerSelection == 'paper' && computerSelection == 'scissors') ? 'You lose!' : (playerSelection == 'scissors' && computerSelection == 'rock') ? 'You lose!' : 'You win!';
}




