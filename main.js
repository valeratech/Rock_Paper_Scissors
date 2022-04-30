
function computerPlay() {
    let typeList = ['Rock', 'Paper', 'Scissors'];
    // Uses the Math.Random to generate a random int and then use floor to return a whole num
    let random = Math.floor(Math.random() * typeList.length);
    return typeList[random];
};

console.log(computerPlay());