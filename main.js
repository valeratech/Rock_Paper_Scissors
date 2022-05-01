//
// function computerPlay() {
//     let typeList = ['Rock', 'Paper', 'Scissors'];
//     // Uses the Math.Random to generate a random int and then use floor to return a whole num
//     let random = Math.floor(Math.random() * typeList.length);
//     return typeList[random].toLowerCase();
// };
//
// function playerPlay() {
//     playerChoice = prompt("Rock, Paper, or Scissors? :").toLowerCase();
//     return playerChoice;
// };
//
// function announceSelect(compFunc, playFunc, round) {
//     myRound = round.toString();
//     console.log(`ROUND ${myRound}.... FIGHT!!!`);
//     console.log(`Computer chooses ${compFunc.toUpperCase()}`);
//     console.log(`Player chooses ${playFunc.toUpperCase()}`);
// };
//
// function getScore(result, start) {
//     console.log(`From getscore function: ${start}`)
//     // Unpacks the array from the game function's starting score [0,0] and assings it to pscore/cscore
//     let [pscore, cscore] = start;
//     // Searches the string for the return results from the playRound function for either PLAYER WINS or COMPUTER WINS
//     // Then increments each bby either 1 unless it results in a TIE
//     if (result.includes("PLAYER WINS")) {
//         pscore++;
//         return [pscore,cscore];
//     } else if (result.includes("COMPUTER WINS")) {
//         cscore++;
//         return [pscore,cscore];
//     } else {
//         return [pscore,cscore];
//     }
// };
//
// function playRound(computerSelection, playerSelection) {
//     console.log(computerSelection, playerSelection);
//
//     if (computerSelection === 'rock' && playerSelection === 'scissors') {
//         return `PLAYER WINS: ${playerSelection} beats ${computerSelection}`;
//     } else if (computerSelection === 'rock' && playerSelection === 'paper') {
//         return `COMPUTER WINS: ${computerSelection} beats ${playerSelection}`;
//     } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
//         return `PLAYER WINS: ${playerSelection} beats ${computerSelection}`;
//     } else if (computerSelection === 'paper' && playerSelection === 'rock') {
//         return `COMPUTER WINS: ${computerSelection} beats ${playerSelection}`;
//     } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
//         return `PLAYER WINS: ${playerSelection} beats ${computerSelection}`;
//     } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
//         return `COMPUTER WINS: ${computerSelection} beats ${playerSelection}`;
//     } else {
//         return "TIE";
//     }
// };
//
// function getFinal(score) {
//     let playerFinal = score[0]
//     let computerFinal = score[1]
//     if (playerFinal < computerFinal) {
//         return `COMPUTER WINS! Final Score: Player: ${playerFinal} | Computer: ${computerFinal}`;
//     } else if (playerFinal > computerFinal) {
//         return `COMPUTER WINS! Final Score: Player: ${playerFinal} | Computer: ${computerFinal}`;
//     } else {
//         return `TIE! Final Score: Player: ${playerFinal} | Computer: ${computerFinal}`
//     }
// };
//
// function game() {
//     // gameScore sets the beginning value of each score for player and computer to 0
//     gameScore = [0,0];
//     let round = 1;
//     while (round < 6) {
//         // Sets the return value of computerPlay and playerPlay which returns each's selection
//         computer = computerPlay();
//         player = playerPlay();
//         // Uses the announceSelect function to announce the computer and players selection and keeps track of the round
//         announceSelect(computer, player, round);
//         gameResult = playRound(computer, player);
//         console.log(gameResult);
//         round++;
//         // gameScore keeps track of the score within an array
//         gameScore = getScore(gameResult, gameScore);
//         console.log(`Player Score: Player: ${gameScore[0]} | Computer: ${gameScore[1]}`);
//     }
//     return gameScore;
// };
//
// final = game();
// console.log(getFinal(final));