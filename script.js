let playerScore = 0;
let computerScore = 0;

// computerPlay that will randomly return either rock, paper or scissors
function computerPlay() {
  let computerSelection = Math.floor(Math.random() * 3); 
  return (computerSelection == 0) ? 'rock' : (computerSelection == 1) ? 'paper' : 'scissors';
}



const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  playRound('scissors');
});
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  playRound('rock');
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  playRound('paper');
});



// a single round that takes two parameters playerSelection and computerSelection and returns a string declaring a winner
function playRound(playerSelection) {
  const computerSelection = computerPlay();
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
  } else {
    computerScore++;
    return 'You lose!'
  }
}
