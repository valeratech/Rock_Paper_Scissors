
function computerPlay() {
    let typeList = ['Rock', 'Paper', 'Scissors'];
    // Uses the Math.Random to generate a random int and then use floor to return a whole num
    let random = Math.floor(Math.random() * typeList.length);
    return typeList[random].toLowerCase();
};

function playerPlay() {
    playerChoice = prompt("Rock, Paper, or Scissors? :").toLowerCase();
    return playerChoice;
};

function announceSelect(compFunc, playFunc, round) {
    myRound = round.toString();
    alert(`ROUND ${myRound}.... FIGHT!!!`);
    alert(`Computer chooses ${compFunc.toUpperCase()}`);
    alert(`Player chooses ${playFunc.toUpperCase()}`);
};

function getScore(c,p) {
    pscore = p + 5;
    cscore = c + 5;
    if (pscore === 5) {
        alert(`GAME OVER: PLAYER HAS WON THE MATCH`);
        return false;
    } else if (pscore === 5) {
        alert("GAME OVER: PLAYER HAS WON THE MATCH");
        return false;
    } else {
        true;
    }
};

function playRound(computerSelection, playerSelection) {
    console.log(computerSelection, playerSelection);

    if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return `PLAYER WINS: ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        return `COMPUTER WINS: ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        return `PLAYER WINS: ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return `COMPUTER WINS: ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        return `PLAYER WINS: ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return `COMPUTER WINS: ${computerSelection} beats ${playerSelection}`;
    } else {
        return "TIE";
    }
};

function game() {
    let round = 1;
    while (round < 6) {
        computer = computerPlay();
        player = playerPlay();
        announceSelect(computer, player, round);
        alert(playRound(computer, player));
        round++;
    }
};

game()
