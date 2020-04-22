const textOutput = document.querySelector('#textOutput');

const whoWon = document.createElement('p');

const finalWinner = document.createElement('h3');

textOutput.appendChild(whoWon);
textOutput.appendChild(finalWinner);

let computerWins = 0;
let playerWins = 0;

//generate a random number between 1 and 3, 1 is rock, 2 is paper, and 3 is scissors
function generateComputerChoice() { 
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else { 
        return "scissors";
    }
}
//all the game logic
function playOneGame(computer, player) { 
    let win = "Congrats you won because"
    let loss = "Dipshit you fucking retard lost because"
    if (player === "rock" && computer === "scissors") {
        playerWins++;
        scoreCheck(computerWins, playerWins);
        return win + " rock beats scissors";
    } else if (player === "paper" && computer === "rock") {
        playerWins++;
        scoreCheck(computerWins, playerWins);
        return win + " paper beats rock";
    } else if (player === "scissors" && computer === "paper") {
        playerWins++;
        scoreCheck(computerWins, playerWins);
        return win + " scissors beats paper";
    } else if (computer === "rock" && player === "scissors") {
        computerWins++;
        scoreCheck(computerWins, playerWins);
        return loss + " rock beats scissors";
    } else if (computer === "paper" && player === "rock") {
        computerWins++;
        scoreCheck(computerWins, playerWins);
        return loss + " paper beats rock";
    } else if (computer === "scissors" && player === "paper") {
        computerWins++;
        scoreCheck(computerWins, playerWins);
        return loss + " scissors beats paper";
    } else {
        scoreCheck(computerWins, playerWins);
        return "nigga u lame yall tied ";
    }
}

function scoreCheck(computer, player) {
    if (computer === 5 || player === 5) {
        if (computer > player) {
            finalWinner.textContent = "dipshit lost to a computer";
        } else {
            finalWinner.textContent = "fuckhead just won";
        }
    } else {
        finalWinner.textContent = 'PLAYER SCORE:' + playerWins + ' | COMPUTER SCORE:' + computerWins;
    }
}
// houses all the button inputs
function possibleInputs() {
    const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
        let oneGame = playOneGame(generateComputerChoice(), 'rock');
        whoWon.textContent = oneGame;
    });

    const paper = document.querySelector('#paper');
    paper.addEventListener('click', () =>  {
        let oneGame = playOneGame(generateComputerChoice(), "paper");
        whoWon.textContent = oneGame;
    });

    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        let oneGame = playOneGame(generateComputerChoice(), 'scissors');
        whoWon.textContent = oneGame
    });
}

possibleInputs();
