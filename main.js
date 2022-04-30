
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

function game(compFunc, playFunc) {
    // console.log(compFunc, playFunc);
    alert(`Computer chooses ${compFunc}`);
    alert(`Player chooses${playFunc}`);
//     if (compFunc === playFunc) {
//         alert
//     }
};

game(computerPlay(), playerPlay());

