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
        cbox.style.borderColor = 'var(--clr-retro)';
        cbox.style.boxShadow = 'inset 0 0 0.5em 0 var(--clr-retro), 0 0 5em 0 var(--clr-retro)';
    } else if (typeList[random].toLowerCase() === 'paper') {
        img.className = 'icons';
        img.src = 'Paper_Enhanced.jpg';
        img.alt = 'A piece of paper';
        cbox.appendChild(img);
        cbox.style.borderColor = 'var(--clr-frost)';
        cbox.style.boxShadow = 'inset 0 0 0.5em 0 var(--clr-frost), 0 0 5em 0 var(--clr-frost)';
    } else if (typeList[random].toLowerCase() === 'scissors') {
        img.className = 'icons';
        img.src = 'Scissors_Enhance.jpg';
        img.alt = 'A pair of scissors';
        cbox.appendChild(img);
        cbox.style.borderColor = 'var(--clr-highlight)';
        cbox.style.boxShadow = 'inset 0 0 0.5em 0 var(--clr-highlight), 0 0 5em 0 var(--clr-highlight)';
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
        pbox.style.borderColor = 'var(--clr-retro)';
        pbox.style.boxShadow = 'inset 0 0 0.5em 0 var(--clr-retro), 0 0 5em 0 var(--clr-retro)';
    } else if (selection.toLowerCase() === 'paper') {
        img.className = 'icons';
        img.src = 'Paper_Enhanced.jpg';
        img.alt = 'A piece of paper';
        pbox.appendChild(img);
        pbox.style.borderColor = 'var(--clr-frost)';
        pbox.style.boxShadow = 'inset 0 0 0.5em 0 var(--clr-frost), 0 0 5em 0 var(--clr-frost)';
    } else if (selection.toLowerCase() === 'scissors') {
        img.className = 'icons';
        img.src = 'Scissors_Enhance.jpg';
        img.alt = 'A pair of scissors';
        pbox.appendChild(img);
        pbox.style.borderColor = 'var(--clr-highlight)';
        pbox.style.boxShadow = 'inset 0 0 0.5em 0 var(--clr-highlight), 0 0 5em 0 var(--clr-highlight)';
    }
};

function announceSelect(pSelect, cSelect) {
    let gameMessage = document.querySelector('.info');
    while (gameMessage.firstChild) {
        gameMessage.removeChild(gameMessage.firstChild);
    };
    let chooseText = `<h3>Player chooses ${pSelect.toUpperCase()}!</h3>
                      <h3>Computer chooses ${cSelect.toUpperCase()}!</h3>`;
    gameMessage.innerHTML = chooseText;
};

function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return `COMPUTER`;
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        return `PLAYER`;
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        return `PLAYER`;
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return `COMPUTER`;
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        return `PLAYER`;
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return `COMPUTER`;
    } else {
        return "TIE";
    }
};

function tallyScore(result, start) {
    // Unpacks the array from the game function's starting score [0,0] and assignss it to pscore/cscore
    let [pscore, cscore] = start;
    let scoreBoard = document.querySelector('.ticker');
    // Searches the string for the return results from the playRound function for either PLAYER WINS or COMPUTER WINS
    // Then increments each bby either 1 unless it results in a TIE
    if (result === "PLAYER") {
        pscore++;
        scoreBoard.innerHTML = `<h2>PLAYER WINS!!!</h2>
                                <h2>Score - Player: ${pscore}  |  Computer: ${cscore}</h2>`;
        return [pscore,cscore];
    } else if (result === "COMPUTER") {
        cscore++;
        scoreBoard.innerHTML = `<h2>COMPUTER WINS!!!</h2>
                                <h2>Score - Player: ${pscore} |  Computer: ${cscore}</h2>`;
        return [pscore,cscore];
    } else {
        scoreBoard.innerHTML = `<h2>TIE!!!</h2>
                                <h2>Score - Player: ${pscore}  |  Computer: ${cscore}</h2>`;
        return [pscore,cscore];
    }
};

function checkWinner(score) {
    let [pscore, cscore] = score;
    let scoreBoard = document.querySelector('.ticker');
    let buttons = document.querySelectorAll(".button");

    if (pscore === 5) {
        scoreBoard.removeChild(scoreBoard.firstChild);
        scoreBoard.innerHTML = `<h2>GAME-SET-MATCH! Player Wins!!! ${pscore} - ${cscore}</h2>`;
        rock.removeEventListener('click', buttonClicker);
        paper.removeEventListener('click', buttonClicker);
        scissors.removeEventListener('click', buttonClicker);
        scoreBoard.style.backgroundColor = '#00ff02';
    } else if (cscore === 5) {
        scoreBoard.removeChild(scoreBoard.firstChild);
        scoreBoard.innerHTML = `<h2>GAME-SET-MATCH! YOU LOSE!!! ${cscore} - ${pscore}</h2>`;
        rock.removeEventListener('click', buttonClicker);
        paper.removeEventListener('click', buttonClicker);
        scissors.removeEventListener('click', buttonClicker);
        scoreBoard.style.backgroundColor = '#ff0017';
    }
};

let GAMESCORE = [0,0];
const fortuneList = ['Some people dream of fortunes, others dream of cookies...',
    'You will receive a fortune cookie',
    'We dont know the future, but here’s a cookie',
    'Actions speak louder than fortune cookies',
    'Help! I am being held prisoner in a fortune cookie factory',
    'Its about time I got out of that cookie',
    'Some fortune cookies contain no fortune',
    'This cookie contains 117 calories']


function buttonClicker(e) {
    let playerSelection = e.target.id;
    let computerSelection = computerPlay();
    playerPlay(playerSelection);
    gameResult = playRound(playerSelection, computerSelection);
    announceSelect(playerSelection, computerSelection);
    // GAMESCORE keeps track of the score within an array
    GAMESCORE = tallyScore(gameResult, GAMESCORE);
    checkWinner(GAMESCORE);
};

function setGlobal(){
    GAMESCORE = [0,0];
};

function game() {
    setGlobal();
    pbox = document.querySelector('.pbox')
    cbox = document.querySelector('.cbox')
    let scoreBoard = document.querySelector('.ticker');
    let gameMessage = document.querySelector('.info');
    let index = Math.floor(Math.random() * fortuneList.length)
    let chooseText = `<h3>First to 5 Wins...</h3>
        <h3>Rock, Paper, or Scissors</h3>
        <h3>No Firearms!</h3>`;

    scoreBoard.style.backgroundColor = '#ffffff';
    pbox.style.boxShadow = 'inset 0 0 0.5em 0 var(--clr-neon), 0 0 1em 0 var(--clr-neon)';
    cbox.style.boxShadow = 'inset 0 0 0.5em 0 var(--clr-neon), 0 0 1em 0 var(--clr-neon)';
    pbox.style.borderColor = 'var(--clr-neon)';
    cbox.style.borderColor = 'var(--clr-neon)';

    if (pbox.firstChild) {
        pbox.removeChild(pbox.firstChild);
        cbox.removeChild(cbox.firstChild);
        scoreBoard.removeChild(scoreBoard.firstChild);
        scoreBoard.innerHTML = `<h2>${fortuneList[index]}</h2>`;
    };

    while (gameMessage.firstChild) {
        gameMessage.removeChild(gameMessage.firstChild);
    };

    gameMessage.innerHTML = chooseText;

    rock = document.querySelector('#rock')
    paper = document.querySelector('#paper')
    scissors = document.querySelector('#scissors')

    rock.addEventListener('click', buttonClicker);
    paper.addEventListener('click', buttonClicker);
    scissors.addEventListener('click', buttonClicker);

};

startButton = document.querySelector('.start');
startButton.addEventListener('click', game);

