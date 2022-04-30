
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

function announceSelect(compFunc, playFunc) {
    alert(`Computer chooses ${compFunc.toUpperCase()}`);
    alert(`Player chooses ${playFunc.toUpperCase()}`);
}

// function game(compFunc, playFunc) {
//     // console.log(compFunc, playFunc);
//
// //     if (compFunc === playFunc) {
// //         alert
// //     }
// };

// Assign selection from the computer and player to variables
computer = computerPlay()
player = playerPlay()
announceSelect(computer, player);



