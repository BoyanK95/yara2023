'use strict';

const body = document.querySelector('body');
const number = document.getElementsByClassName('number')[0];
const guess = document.getElementsByClassName('guess')[0];
const checkBtn = document.getElementsByClassName('check')[0];
const againBtn = document.getElementsByClassName('again')[0];
const message = document.querySelector('.message');
const buttons = document.querySelectorAll('button');
const highScoreP = document.getElementsByClassName('highscore')[0];

let scoreText = document.querySelector('.score');

let randomNumber = Number(Math.ceil(Math.random() * 20));

function addEffect() {
    let score = Number(scoreText.textContent);
    if (guess.value == '') {
        message.textContent = '⛔️ No Number!';
        score -= 1;
        scoreText.textContent = score;
        return;
    }
    compareNumbers(Number(guess.value), randomNumber, score);
}

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.className === 'btn check') {
            addEffect();
        } else if (btn.className == 'btn again') {
            reset()
        }
    });
});

function compareNumbers(guessNum, originalNum, score) {
    if (guessNum == originalNum) {
        body.style.backgroundColor = '#60b347';
        message.textContent = `🎉 Congratulation you WIN !`;
        number.textContent = randomNumber
        let highScore = Number(highScoreP.textContent)
        if (score > highScore) {
            highScoreP.textContent = score
        }      
        return;
    } else if (guessNum > originalNum) {
        score -= 1;
        scoreText.textContent = score;
        message.textContent = 'Chose a smaller number';
        return;
    } else if (guessNum < originalNum) {
        score -= 1;
        scoreText.textContent = score;
        message.textContent = 'Chose a bigger number!';
        return;
    }
}


function reset() {
    body.style.backgroundColor = '#222'
    scoreText.textContent = '20'
    number.textContent = '?'
    randomNumber = Number(Math.ceil(Math.random() * 20));
}