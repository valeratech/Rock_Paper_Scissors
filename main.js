
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

function getScore(result, start) {
    console.log(`From getscore function: ${start}`)
    let [pscore, cscore] = start;
    if (result.includes("PLAYER WINS")) {
        pscore++;
        return [pscore,cscore];
    } else if (result.includes("COMPUTER WINS")) {
        cscore++;
        return [pscore,cscore];
    } else {
        return [pscore,cscore];
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

function getFinal(score) {
    let playerFinal = score[0]
    let computerFinal = score[1]
    if (playerFinal < computerFinal) {
        return `COMPUTER WINS! Final Score: Player: ${playerFinal} | Computer: ${computerFinal}`;
    } else if (playerFinal > computerFinal) {
        return `COMPUTER WINS! Final Score: Player: ${playerFinal} | Computer: ${computerFinal}`;
    } else {
        return `TIE! Final Score: Player: ${playerFinal} | Computer: ${computerFinal}`
    }
};

function game() {
    gameScore = [0,0];
    let round = 1;
    while (round < 6) {
        computer = computerPlay();
        player = playerPlay();
        announceSelect(computer, player, round);
        gameResult = playRound(computer, player);
        alert(gameResult);
        round++;
        gameScore = getScore(gameResult, gameScore);
        alert(`Player Score: Player: ${gameScore[0]} | Computer: ${gameScore[1]}`);
    }
    return gameScore;
};

final = game();
alert(getFinal(final));