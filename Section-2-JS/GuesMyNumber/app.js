'use strict'

const body = document.querySelector('body')
const number = document.getElementsByClassName('number')[0]
const guess = document.getElementsByClassName('guess')[0]
const checkBtn = document.getElementsByClassName('check')[0]
const againBtn = document.getElementsByClassName('again')[0]
const message = document.querySelector('.message')
const buttons = document.querySelectorAll('button')
let scoreText = document.querySelector('.score')

let randomNumber = Number(Math.ceil(Math.random() * 20))
console.log(randomNumber);

function addEffect() {
    let score = Number(scoreText.textContent)
    console.log(Number(guess.value));
    console.log(score);
    
    if (guess.value == '') {
        message.textContent = '⛔️ No Number!'
        score -= 1
        scoreText.textContent = score
        return
    }
    let result = compareNumbers(Number(guess.value), randomNumber)

    if (result === true) {
        body.style.backgroundColor = '#60b347'
        message.textContent = `🎉 Congratulation you WIN !` 
        return
    } else if (result === 'bigger') {
        score -= 1
        scoreText.textContent = score
        message.textContent = 'Your number is bigger'
        return
    } else if (result === 'smaller') {
        score -= 1
        scoreText.textContent = score
        message.textContent = 'Your number is smaller'
        return
    }
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.className === 'btn check') {
            addEffect()  
       } else if (btn.className == '') {
           
       }
    })
});
    
    


function compareNumbers(guessNum, originalNum) {
    if (guessNum == originalNum) {
        return true
    } else if (guessNum > originalNum) {
        return 'bigger'
    } else if (guessNum < originalNum) {
        return 'smaller'
    }
}
