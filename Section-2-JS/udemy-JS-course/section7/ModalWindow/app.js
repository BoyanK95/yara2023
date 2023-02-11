'use strict';

const showModalBtn = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modal = document.getElementsByClassName('modal')[0];
const overlay = document.querySelector('.overlay');

showModalBtn.forEach((btn) => {
    btn.addEventListener('click', showModal);
});

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

function showModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
