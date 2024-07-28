const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resetbtn = document.querySelector('#reset-btn');
const button = document.querySelectorAll('button');


rock.addEventListener('click', () => {
    document.querySelector('#player-move').innerHTML = 'you ✊';
    pickcomputerMove();
    playGame('rock');
});
paper.addEventListener('click', () => {
    document.querySelector('#player-move').innerHTML = '✋';
    pickcomputerMove();
    playGame('paper');
});
scissors.addEventListener('click', () => {
    document.querySelector('#player-move').innerHTML = '✌️';
    pickcomputerMove();
    playGame('scissors');
});
resetbtn.addEventListener('click', () => {
    resetScore();
});
let score = JSON.parse(localStorage.getItem('score')) ||{
    win: 0,
    lose: 0,
    tie: 0
};


function pickcomputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
        document.querySelector('#computer-move').innerHTML = '✊';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
        document.querySelector('#computer-move').innerHTML = '✋';
    }
    else {
        computerMove = 'scissor';
        document.querySelector('#computer-move').innerHTML = '✌️';
    }
    return computerMove;
}

function playGame(playerMove) {
    const computerMove = pickcomputerMove();

    if (playerMove === computerMove) {
        result = 'Tie!';
        score.tie += 1;
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        result = 'You win!';
        score.win += 1;
    } else {
        result = 'You lose!';
        score.lose += 1;
    }
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('#text-result').innerHTML = `${result}`;
    document.querySelector('#show-score').innerHTML = `
    WIN:${score.win} LOSE:${score.lose} TIE:${score.tie}
    `;
}

function resetScore() {
    score = {
        win: 0,
        lose: 0,
        tie: 0
    };
    localStorage.removeItem('score')
    document.querySelector('#show-score').innerHTML = `
    WIN:${score.win} LOSE:${score.lose} TIE:${score.tie}
    `;
};