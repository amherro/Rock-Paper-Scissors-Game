//Rock, Paper, Scissor Choices 
const choices = ['Rock', 'Paper', 'Scissors']

//Computer picks Rock/Paper/Scissors
function computerPlay() {
    const compChoice = Math.floor(Math.random() *  [choices.length]);
    return choices[compChoice];
}
computerPlay();

//Player picks Rock/Paper/Scissors
function userPlay() {
    let userChoice = prompt('Make your selection: Rock, Paper, or Scissors.')
    return userChoice
}

//Compare player selection to computer selection
const computerSelection = computerPlay();
const userSelection = userPlay();

function singleMatch(computerSelection, userSelection) {
    if (computerSelection === userSelection) {
        console.log('It\'s a tie!')
        
    } else if (computerSelection === 'Rock' && userSelection === 'Scissors') {
        console.log('You lose. Rock beats Scissors.')
        
    } else if (computerSelection === 'Scissors' && userSelection === 'Paper') {
        console.log('You lose. Scissors beats paper.')
        
    } else if (computerSelection === 'Paper' && userSelection === 'Rock') {
        console.log('You lose. Paper beats Rock.')
        
    } else if (computerSelection === 'Scissors' && userSelection === 'Rock') {
        console.log('You win! Rock beats Scissors.')
        
    } else if (computerSelection === 'Paper' && userSelection === 'Scissors') {
        console.log('You win! Scissors beats Paper.')
        
    } else if (computerSelection === 'Rock' && userSelection === 'Paper') {
        console.log('You win! Paper beats Rock.')
        
    } 
    
}

//Log results of the game
console.log(singleMatch(computerSelection, userSelection));

