
function computerPlay() {
    let typeList = ['Rock', 'Paper', 'Scissors'];
    // Uses the Math.Random to generate a random int and then use floor to return a whole num
    let random = Math.floor(Math.random() * typeList.length);
    img = document.createElement('img');
    cbox = document.querySelector('.cbox')

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
    if (pbox.firstChild) {
        pbox.removeChild(pbox.firstChild);
        cbox.removeChild(cbox.firstChild);
    };
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
};

function announceSelect(pSelect, cSelect) {
    let gameMessage = document.querySelector('.info');
    while (gameMessage.firstChild) {
        gameMessage.removeChild(gameMessage.firstChild);
    };
    let chooseText = `<h3>Computer chooses ${cSelect.toUpperCase()}!</h3>
        <h3>Player chooses ${pSelect.toUpperCase()}!</h3>`;
    gameMessage.innerHTML = chooseText;
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

function getScore(result, start) {
    console.log(`From getscore function: ${result}, ${start}`)
    // Unpacks the array from the game function's starting score [0,0] and assignss it to pscore/cscore
    let [pscore, cscore] = start;
    // console.log(pscore);
    // console.log(cscore);
    // console.log(result);
    // Searches the string for the return results from the playRound function for either PLAYER WINS or COMPUTER WINS
    // Then increments each bby either 1 unless it results in a TIE
    if (result.includes("PLAYER WINS")) {
        pscore++;
        console.log(pscore);
        return [pscore,cscore];
    } else if (result.includes("COMPUTER WINS")) {
        cscore++;
        console.log(cscore);
        return [pscore,cscore];
    } else {
        return [pscore,cscore];
    }
};

function getFinal(score) {
    let playerFinal = score[0]
    let computerFinal = score[1]
    let scoreBoard = document.querySelector('.ticker');
    scoreBoard.removeChild(scoreBoard.firstChild);
    if (playerFinal < computerFinal) {
        scoreBoard.innerHTML = `<h2>PLAYER WINS!!! Score: Player: ${playerFinal} | Computer: ${computerFinal}</h2>`;
        return `COMPUTER WINS! Final Score: Player: ${playerFinal} | Computer: ${computerFinal}`;
    } else if (playerFinal > computerFinal) {
        scoreBoard.innerHTML = `<h2>COMPUTER WINS!!! Score: Player: ${playerFinal} | Computer: ${computerFinal}</h2>`;
        return `COMPUTER WINS! Final Score: Player: ${playerFinal} | Computer: ${computerFinal}`;
    } else {
        scoreBoard.innerHTML = `<h2>TIE!!! Score: Player: ${playerFinal} | Computer: ${computerFinal}</h2>`;
        return `TIE! Final Score: Player: ${playerFinal} | Computer: ${computerFinal}`
    }
};

function game() {
    pbox = document.querySelector('.pbox')
    cbox = document.querySelector('.cbox')
    if (pbox.firstChild) {
        pbox.removeChild(pbox.firstChild);
        cbox.removeChild(cbox.firstChild);
    };
    let gameMessage = document.querySelector('.info');
    while (gameMessage.firstChild) {
        gameMessage.removeChild(gameMessage.firstChild);
    };

    let chooseText = `<h3>Round X</h3>
        <h3>FIGHT!</h3>`;
    gameMessage.innerHTML = chooseText;
    let buttons = document.querySelectorAll(".button");
    let gameScore = [0, 0];
    // img = document.createElement('img');
    // pbox = document.querySelector('.pbox');
    // cbox = document.querySelector('.cbox');

    buttons.forEach((button) => {
        button.addEventListener("click", () => {

            let playerSelection = (button.textContent).toLowerCase();
            let computerSelection = computerPlay();
            playerPlay(playerSelection);
            gameResult = playRound(playerSelection, computerSelection);
            announceSelect(playerSelection, computerSelection);
            // gameScore keeps track of the score within an array
            gameScore = getScore(gameResult, gameScore);
            console.log(gameScore);
            final = getFinal(gameScore);
            console.log(final);
        });
    });
};

startButton = document.querySelector('.start');
startButton.addEventListener('click', game);

