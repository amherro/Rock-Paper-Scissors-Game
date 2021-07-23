let userSelection = '';
let computerSelection = '';
let result = document.querySelector('.result');
let scoreboard = document.querySelector('.scoreboard')
let playerScore = document.querySelector('.playerScore')
let cpuScore = document.querySelector('.cpuScore')
let tiedScore = document.querySelector('.tiedScore')
let reset = document.querySelector('.resetBtn')

const btns = document.querySelectorAll('.choice')
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        //Player picks Rock/Paper/Scissors
        let userChoice = document.querySelector('button')
        userSelection = userChoice.textContent;
        //Plays the game with button click
        fullGame(computerSelection, userSelection);
        playFullGame();
    })
})

//Rock, Paper, Scissor Choices 
const choices = ['Rock', 'Paper', 'Scissors']

//Rounds of the game
let rounds = 1;

let userScore = 0;
let computerScore = 0;
let tiedMatches = 0;


//Computer picks Rock/Paper/Scissors 
function computerPlay() {
    const compChoice = Math.floor(Math.random() * [choices.length]);
    return choices[compChoice];
}

//Player picks Rock/Paper/Scissors


//Function for full 7 round game
function fullGame(computerSelection, userSelection) {
    computerSelection = computerPlay();
    userSelection = userSelection;
    if (computerSelection === userSelection) {
        let tieGame = document.createElement('div');
        tieGame.textContent = 'It\'s a tie!';
        result.appendChild(tieGame);
        result.textContent = tieGame.textContent;
        ++tiedMatches
        tiedScore.textContent = tiedMatches;
    } else if ((computerSelection === 'Rock' && userSelection === 'Scissors') || (computerSelection === 'Scissors' && userSelection === 'Paper') || (computerSelection === 'Paper' && userSelection === 'Rock' && (computerScore <= 5 || userScore <=5))) {
        let loseGame = document.createElement('div');
        loseGame.textContent = `You lose. ${computerSelection} beats ${userSelection}.`;
        result.appendChild(loseGame);
        result.textContent = loseGame.textContent;
        ++computerScore
        cpuScore.textContent = computerScore;
        ++rounds;            
    } else if ((computerSelection === 'Scissors' && userSelection === 'Rock') || (computerSelection === 'Paper' && userSelection === 'Scissors') || (computerSelection === 'Rock' && userSelection === 'Paper' && (computerScore <= 5 || userScore <=5))) {
        let winGame = document.createElement('div');
        winGame.textContent = `You win! ${userSelection} beats ${computerSelection}.`;
        result.appendChild(winGame);
        result.textContent = winGame.textContent;
        ++userScore
        playerScore.textContent = userScore;
        ++rounds;
    }
}


function playFullGame() {
    for (i = 0; i < 6; i++) {
        fullGame();
    }
    if (userScore === 4 || computerScore === 4 || tiedMatches === 4) {
        return endGameMessage();
    } 
}
playFullGame();
    //Victory or Defeat Message
let endGameMessage = function () {
    if (userScore > computerScore && userScore > tiedMatches && userScore === 4) {
        let winMessage = document.createElement('div');
        winMessage.textContent = 'Congratulations! You have won the match!';
        result.appendChild(winMessage);
    } else if (computerScore > userScore && computerScore > tiedMatches  && computerScore === 4) {
        let loseMessage = document.createElement('div');
        loseMessage.textContent = 'The computer has won the match. Better luck next time.';
        result.appendChild(loseMessage);
    } else if ((computerScore === userScore && computerScore != 0 && userScore != 0)|| tiedMatches > userScore || tiedMatches > computerScore) {
        let tieMessage = document.createElement('div');
        tieMessage.textContent = 'You have tied with the computer.';
        result.appendChild(tieMessage);
    }
}   
function resetGame() {
    playerScore.textContent = userScore = 0;
    cpuScore.textContent = computerScore = 0;
    tiedScore.textContent = tiedMatches = 0;
    result.textContent = '';
}
let resetButton = reset.addEventListener('click', () => {
    resetGame();
})
