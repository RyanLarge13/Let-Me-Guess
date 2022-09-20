import { bringInNext, bringInPrev, startOver } from "./Javascript/flippages.js";

const no = document.querySelector('[data-="no"]');
const backBtn = document.querySelector('.back-btn');
const NextBtns = document.querySelectorAll('.next');
const numberToAdd = document.querySelector('.number-to-add');
const answer = document.querySelector('.answer');
const restart = document.querySelector('.restart');
const end = document.querySelector('.end');
let count = 0;

const calc = () => {
    numberToAdd.innerHTML = Math.round(Math.random() * 50);
    answer.innerHTML = numberToAdd.innerHTML / 2;
};
calc();

const toggleAlert = () => {
    const alert = document.querySelector('.alert');
    const backdrop = document.querySelector('.backdrop');
    alert.classList.toggle('show');
    backdrop.classList.toggle('show');
};

end.addEventListener('click', () => {
    window.close();
});
restart.addEventListener('click', () => {
    startOver(count, backBtn);
    count = 0;
    setTimeout(() => {
        calc();
    }, 1000);
});
no.addEventListener('click', () => {
    toggleAlert();
    setTimeout(() => {
        toggleAlert();
    }, 2000);
});
backBtn.addEventListener('click', () => {
    count--;
    bringInPrev(count, backBtn);
});
NextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        count++;
        bringInNext(count, backBtn);
    });
});