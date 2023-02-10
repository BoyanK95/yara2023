const value = document.getElementById('value');
const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.innerText === 'L') {
            body.classList.toggle('dark');
        } else if (btn.innerText === '=') {
            //Easiest solution is with eval, not correct though, cause it renders us easy for Malicious code!
            // value.innerHTML = eval(value.innerHTML);
            value.innerHTML = evalIsEvil(value.innerHTML);
        } else if (btn.innerText === 'C') {
            const newValue = Array.from(value.innerHTML).slice(0, value.innerHTML.length - 1);
            value.innerHTML = newValue.join('');
        } else if (btn.innerText === 'CA') {
            value.innerHTML = '';
        } else if (value.innerHTML.length < 8){
            value.innerHTML += btn.innerHTML;
        } else {
            value.innerHTML = 'ERR'
        }
    });
});

function evalIsEvil(input) {
    if (input.includes('+')) {
        const firstNum = input.split('+')[0];
        const secondNum = input.split('+')[1];
        result = Number(firstNum) + Number(secondNum);
        console.log(Array.from(result.toString()).length);
        if (Array.from(result.toString()).length < 8) {
            return isNaN(result) ? 'ERR' : result;
        } else if (Array.from(result.toString()).length >= 8){
            console.log(Array.from(result.toString()));
            return 'ERR'
        }
    }
    if (input.includes('-')) {
        const firstNum = input.split('-')[0];
        const secondNum = input.split('-')[1];
        result = Number(firstNum) - Number(secondNum);
        console.log(Array.from(result.toString()).length);
        if (Array.from(result.toString()).length < 8) {
            return isNaN(result) ? 'ERR' : result;
        } else if (Array.from(result.toString()).length >= 8){
            console.log(Array.from(result.toString()));
            return 'ERR'
        }
    }
    if (input.includes('*')) {
        const firstNum = input.split('*')[0];
        const secondNum = input.split('*')[1];
        result = Number(firstNum) * Number(secondNum);
        console.log(Array.from(result.toString()).length);
        if (Array.from(result.toString()).length < 8) {
            return isNaN(result) ? 'ERR' : result;
        } else if (Array.from(result.toString()).length >= 8){
            console.log(Array.from(result.toString()));
            return 'ERR'
        }
    }
    if (input.includes('/')) {
        const firstNum = input.split('/')[0];
        const secondNum = input.split('/')[1];
        result = Number(firstNum) / Number(secondNum);
        console.log(Array.from(result.toString()).length);
        if (Array.from(result.toString()).length < 8) {
            return isNaN(result) ? 'ERR' : result;
        } else if (Array.from(result.toString()).length >= 8){
            console.log(Array.from(result.toString()));
            return 'ERR'
        }
    }
}

//In a real project, would use JavaScript Expression Evaluator package
// Installation: npm install expr-eval

// Basic Usage:
// var Parser = require('expr-eval').Parser;

// var parser = new Parser();
// var expr = parser.parse('2 * x + 1');
// console.log(expr.evaluate({ x: 3 })); // 7

// // or
// Parser.evaluate('6 * x', { x: 7 }) // 42
