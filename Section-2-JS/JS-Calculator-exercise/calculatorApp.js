// const display = document.getElementById('display');
const value = document.getElementById('value');
const buttons = document.querySelectorAll('button');
// const layoutBtn = document.getElementById('toggleBtn');
const body = document.querySelector('body');


//Eval solution !
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.innerText === 'L') {
            body.classList.toggle('dark');
        } else if (btn.innerText === '=') {
            //Easiest solution is with eval, not correct though, cause it renders us easy for Malicious code (hack attack)!
            value.innerHTML = eval(value.innerHTML);
        } else if (btn.innerText === 'C') {
            const newValue = Array.from(value.innerHTML).slice(0, value.innerHTML.length - 1);
            value.innerHTML = newValue.join('')
        } else {
            if (btn.innerHTML === 'CA') {
                value.innerHTML = '';
            } else {
                value.innerHTML += btn.innerHTML;
            }
        }
    });
});
