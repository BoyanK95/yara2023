const display = document.getElementById('display')
const value = document.getElementById('value')
const buttons = document.querySelectorAll('button')
const layoutBtn = document.getElementById('toggleBtn')
const body = document.querySelector('body')



// Toggle Button
layoutBtn.addEventListener('click', () => {
    body.classList.toggle('dark')
})