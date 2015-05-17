////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move === null) {
        return "'getInput()'";
    }
}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return 'getInput()';

function getComputerMove(move) {
    if (move === null) {
        return "'randomePlay()'";
    }
}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return 'randomePlay';

function getWinner(playerMove,computerMove) {
    var winner = 'player' || 'computer' || 'tie';
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove) {
        winner = 'tie';
    }
    else if (playerMove === 'rock' && computerMove === 'paper') {
        winner = 'computer';
    } else if (playerMove === 'rock' && computerMove ==='scissors') {
        winner = 'player';
    } else if (playerMove === 'paper' && computerMove === 'scissors') {
        winner = 'computer';
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        winner = 'player';
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player';
    } else if (playerMove === 'scissors' && computerMove === 'rock') {
        winner = 'computer';
    }
    return winner;


function playToFive(playerWins, computerWins) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    function game() {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        //Are these defining the answer entered by player or computer? Yes
        }if (playerMove === 'rock' && computerMove === 'paper') {
        return computerWins ++;
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');    
        } else if (playerMove === 'rock' && computerMove ==='scissors') {
        return playerWins ++;
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');  
    } else if (playerMove === 'paper' && computerMove === 'scissors') {
        return computerWins ++;
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');  
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        return playerWins ++;
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');  
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        return playerWins ++;
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');  
    } else if (playerMove === 'scissors' && computerMove === 'rock') {
        return computerWins ++;
    } 
    while ((playerWins < 5) || (computerWins < 5)); {
        
        if (playerWins === 5) {
            return console.log("Player Wins!");
        } else if (computerWins === 5) {
            return console.log("Computer Wins!");
        }
    }

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];

}

playToFive();

//calling the function

