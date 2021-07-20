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
    const compChoice = Math.floor(Math.random() *  [choices.length]);
    return choices[compChoice];
}

//Player picks Rock/Paper/Scissors
function userPlay() {
    let userChoice = prompt('Make your selection: Rock, Paper, or Scissors.')
    return userChoice;
}

//Function for full 7 round game
function fullGame() {
    const computerSelection = computerPlay();
    const userSelection = userPlay();

        let result = function matchResult(computerSelection, userSelection) {
            if (computerSelection === userSelection) {
                console.log('It\'s a tie!');
                ++tiedMatches;        
            } else if ((computerSelection === 'Rock' && userSelection === 'Scissors') || (computerSelection === 'Scissors' && userSelection === 'Paper') || (computerSelection === 'Paper' && userSelection === 'Rock' && (computerScore <= 5 || userScore <=5))) {
                console.log(`You lose. ${computerSelection} beats ${userSelection}.`);
                ++computerScore;
                ++rounds;            
            } else if ((computerSelection === 'Scissors' && userSelection === 'Rock') || (computerSelection === 'Paper' && userSelection === 'Scissors') || (computerSelection === 'Rock' && userSelection === 'Paper' && (computerScore <= 5 || userScore <=5))) {
                console.log(`You win! ${userSelection} beats ${computerSelection}.`);
                ++userScore;
                ++rounds;
            }
        }
        result(computerSelection, userSelection);
    }
fullGame();

function playFullGame() {
    for (i = 0; i < 6; i++) {
        fullGame();
    }
}
playFullGame();

//Victory or Defeat Message
let endGameMessage = function () {
    if (userScore > computerScore && userScore > tiedMatches) {
        console.log('Congratulations! You have won the match!')
    } else if (computerScore > userScore && computerScore > tiedMatches) {
        console.log('The computer has won the match. Better luck next time.')
    } else if (computerScore === userScore || tiedMatches > userScore || tiedMatches > computerScore) {
        console.log('You have tied with the computer.')
    }
}
endGameMessage();

/* 7-19-21 @ 5:20pm...It goes through the first round and gets the results, and then takes the input and uses that for the other rounds. */