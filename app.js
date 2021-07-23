let userSelection = '';
let computerSelection = '';

const btns = document.querySelectorAll('.choice')
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let userChoice = document.querySelector('button')
        userSelection = userChoice.textContent;
        fullGame(computerSelection, userSelection);
        playFullGame();
    })
})

//Rock, Paper, Scissor Choices 
const choices = ['Rock', 'Paper', 'Scissors']

//Rounds of the game
let rounds = 1;
//Compare player selection to computer selection
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
        console.log('It\'s a tie!');
        ++tiedMatches;        
    } else if ((computerSelection === 'Rock' && userSelection === 'Scissors') || (computerSelection === 'Scissors' && userSelection === 'Paper') || (computerSelection === 'Paper' && userSelection === 'Rock' && (computerScore <= 5 || userScore <=5))) {
        console.log(`You lose. ${computerSelection} beats ${userSelection}.`);
        ++computerScore;                ++rounds;            
    } else if ((computerSelection === 'Scissors' && userSelection === 'Rock') || (computerSelection === 'Paper' && userSelection === 'Scissors') || (computerSelection === 'Rock' && userSelection === 'Paper' && (computerScore <= 5 || userScore <=5))) {
        console.log(`You win! ${userSelection} beats ${computerSelection}.`);
        ++userScore;
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
        console.log('Congratulations! You have won the match!')
    } else if (computerScore > userScore && computerScore > tiedMatches  && computerScore === 4) {
        console.log('The computer has won the match. Better luck next time.')
    } else if ((computerScore === userScore && computerScore != 0 && userScore != 0)|| tiedMatches > userScore || tiedMatches > computerScore) {
        console.log('You have tied with the computer.')
    }
}   

