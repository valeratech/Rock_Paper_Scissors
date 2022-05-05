
function computerPlay() {
    let typeList = ['Rock', 'Paper', 'Scissors'];
    // Uses the Math.Random to generate a random int and then use floor to return a whole num
    let random = Math.floor(Math.random() * typeList.length);
    img = document.createElement('img');
    cbox = document.querySelector('.cbox')
    console.log(typeList[random]);
    console.log(cbox);
    console.log(img);
    if (typeList[random].toLowerCase() === 'rock') {
        img.className = 'icons';
        img.src = 'Rock_Enhanced.jpg';
        img.alt = 'A hard rock';
        cbox.appendChild(img);
    } else if (typeList[random].toLowerCase() === 'paper') {
        img.className = 'icons';
        img.src = 'Paper_Enhanced.jpg';
        img.alt = 'A piece of paper';
        cbox.appendChild(img);
    } else if (typeList[random].toLowerCase() === 'scissors') {
        img.className = 'icons';
        img.src = 'Scissors_Enhance.jpg';
        img.alt = 'A pair of scissors';
        cbox.appendChild(img);
    }
    return typeList[random].toLowerCase();
};

function playerPlay(selection) {
    img = document.createElement('img');
    pbox = document.querySelector('.pbox')
    console.log(selection);
    console.log(pbox);
    console.log(img);
    if (selection.toLowerCase() === 'rock') {
        img.className = 'icons';
        img.src = 'Rock_Enhanced.jpg';
        img.alt = 'A hard rock';
        pbox.appendChild(img);
    } else if (selection.toLowerCase() === 'paper') {
        img.className = 'icons';
        img.src = 'Paper_Enhanced.jpg';
        img.alt = 'A piece of paper';
        pbox.appendChild(img);
    } else if (selection.toLowerCase() === 'scissors') {
        img.className = 'icons';
        img.src = 'Scissors_Enhance.jpg';
        img.alt = 'A pair of scissors';
        pbox.appendChild(img);
    }
    return selection;
};

function announceSelect(pSelect, cSelect) {
    let gameMessage = document.querySelector('.info');
    let header = document.querySelectorAll('.info h3');
    while (gameMessage.firstChild) {
        gameMessage.removeChild(gameMessage.firstChild);
    };
    let chooseText = `<h3>Computer chooses ${cSelect.toUpperCase()}!</h3>
        <h3>Player chooses ${pSelect.toUpperCase()}!</h3>`;
    gameMessage.innerHTML = chooseText;
};

function getScore(result, start) {
    console.log(`From getscore function: ${start}`)
    // Unpacks the array from the game function's starting score [0,0] and assings it to pscore/cscore
    let [pscore, cscore] = start;
    // Searches the string for the return results from the playRound function for either PLAYER WINS or COMPUTER WINS
    // Then increments each bby either 1 unless it results in a TIE
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
    // console.log(computerSelection, playerSelection);

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
    let gameMessage = document.querySelector('.info h3');
    let chooseText = `<h3>Round X</h3>
        <h3>FIGHT!</h3>`;
    gameMessage.innerHTML = chooseText;
    let buttons = document.querySelectorAll(".button");
    let gameScore = [0, 0];

    buttons.forEach((button) => {
        button.addEventListener("click", () => {

            let playerSelection = button.textContent;
            // console.log(playerSelection);
            let computerSelection = computerPlay();
            // console.log(computerSelection);
            playerPlay(playerSelection);
            gameResult = playRound(playerSelection, computerSelection);
            console.log(gameResult);
            announceSelect(playerSelection, computerSelection);
            // gameScore keeps track of the score within an array
            // gameScore = getScore(gameResult, gameScore);
            console.log(`Player Score: Player: ${gameScore[0]} | Computer: ${gameScore[1]}`);



        });
    });
};

startButton = document.querySelector('.start');
startButton.addEventListener('click', game);

