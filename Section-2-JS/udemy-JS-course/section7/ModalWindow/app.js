'use strict'

const  showModalBtn = document.querySelectorAll('.show-modal')
const closeModalBtn = document.querySelector('.close-modal')
const modal = document.getElementsByClassName('modal')[0]
const overlay = document.querySelector('.overlay')

console.log(overlay);

showModalBtn.forEach(btn => {
    btn.addEventListener('click', showModal)
})

function showModal() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}