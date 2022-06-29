let playerScore = 0;
let computerScore = 0;


const displayPick = document.querySelector('#displayPick');
const result = document.querySelector('#result');
const playerPoints = document.querySelector('#playerPoints');
const computerPoints = document.querySelector('#computerPoints');
const endDisplay = document.querySelector('.endDisplay');
const overlay = document.querySelector('.overlay');
const endGameBtn = document.querySelector('.endGameBtn');
const endResult = document.querySelector('#endResult');
let playerScoreDisplay = document.querySelector('.playerScore');
let computerScoreDisplay = document.querySelector('.computerScore');


endGameBtn.addEventListener('click', restart);


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


// computerPlay that will randomly return either rock, paper or scissors
function computerPlay() {
  let computerSelection = Math.floor(Math.random() * 3); 
  return (computerSelection == 0) ? 'rock' : (computerSelection == 1) ? 'paper' : 'scissors';
}


// a single round that takes two parameters playerSelection and computerSelection and returns a string declaring a winner
function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay()
  displayPick.textContent = ('You chose: ' + playerSelection + ', ' + 'computer chose: ' + computerSelection + '!');
  playerPoints.classList.remove('hidden');
  computerPoints.classList.remove('hidden');


  if (playerSelection == computerSelection) {
    result.textContent = "It's a tie!";
    gameDisplay();
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    playerScore++;
    result.textContent = 'You win!';
    gameDisplay();
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    computerScore++;
    result.textContent = 'You lose!';
    gameDisplay();
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    playerScore++;
    result.textContent = 'You win!';
    gameDisplay();
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    computerScore++;
    result.textContent = 'You lose!';
    gameDisplay();
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    playerScore++;
    result.textContent = 'You win!';
    gameDisplay();
  } else {
    computerScore++;
    result.textContent = 'You lose!';
    gameDisplay();
  }
  checkScore();
}

function checkScore() {
    if (playerScore === 5) {
      endResult.textContent = 'Congrats, you win!';
      endDisplay.classList.remove('hidden');
      overlay.classList.remove('hidden');


    } else if (computerScore === 5) {
      endResult.textContent = 'Oh no, you lost!';
      endDisplay.classList.remove('hidden');
      overlay.classList.remove('hidden');
    }
  }

function restart() {
    computerSelection = '';
    playerSelection = '';
    playerScore = 0;
    computerScore = 0;
    endDisplay.classList.add('hidden');
    overlay.classList.add('hidden');
    playerPoints.classList.add('hidden');
    computerPoints.classList.add('hidden');
    displayPick.textContent = '';
    result.textContent = '';
  }
  
  function gameDisplay() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}