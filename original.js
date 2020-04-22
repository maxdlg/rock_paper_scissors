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
//just turns the text that the player inputed to lowercase
function makeTextReadable(text) { 
    return text.toLowerCase();
}
//all the game logic
function playOneGame(computer, player) { 
    let win = "Congrats you won because"
    let loss = "Dipshit you fucking retard lost because"
    if (player === "rock" && computer === "scissors") {
        console.log(win + " rock beats scissors");
        return 1;
    } else if (player === "paper" && computer === "rock") {
        console.log(win + " paper beats rock");
        return 1;
    } else if (player === "scissors" && computer === "paper") {
        console.log(win + " scissors beats paper");
        return 1;
    } else if (computer === "rock" && player === "scissors") {
        console.log(loss + " rock beats scissors");
        return 2;
    } else if (computer === "paper" && player === "rock") {
        console.log(loss + " paper beats rock");
        return 2;
    } else if (computer === "scissors" && player === "paper") {
        console.log(loss + " scissors beats paper");
        return 2;
    } else if (computer === player) {
        console.log("nigga u lame yall tied ");
        return 0;
    } else {
        console.log("lmaooo this nigga don't know how to play roshambo");
        return 2;
    }
}

function playBestOfFive() { 
    let playerWins = 0;
    let computerWins = 0;
    //checks to see if either player has over 3 rounds won, if so exits loop and determines winner
    while (playerWins < 3 && computerWins < 3) { 
        let playerChoice = prompt("nigga choose");
        let winner = playOneGame(generateComputerChoice(), makeTextReadable(playerChoice));
        if (winner === 1) {
            playerWins = playerWins + 1;
        } else if (winner === 2) {
            computerWins = computerWins + 1;
        } else {
            playerWins = playerWins;
            computerWins = computerWins;
        }
        console.log("You:" + playerWins + " | Computer:" + computerWins);
    } 
    if (computerWins > playerWins) {
        console.log("retard boy retard boy retard boy retard boy lost");
    } else {
        console.log("this fuckhead just won");
    }
}

playBestOfFive(); 