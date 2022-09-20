import { bringInNext, bringInPrev, startOver, opacity } from "./flippages.js";

const no = document.querySelector('[data-="no"]');
const backBtn = document.querySelector('.back-btn');
const NextBtns = document.querySelectorAll('.next');
const numberToAdd = document.querySelector('.number-to-add');
const answer = document.querySelector('.answer');
const restart = document.querySelector('.restart');
const end = document.querySelector('.end');
const noYouDont = document.querySelector('.no-you-dont');
const sections = document.querySelectorAll('.sec');
const vw = window.innerWidth;
let count = 0;

const initaiteOpacity = () => {
    sections[0].style.opacity = '1';
    sections.forEach((sec) => {
        sec.addEventListener('transitionend', () => {
            const right = sec.getBoundingClientRect().right;
            if (right >= vw -5 && right <= vw + 5) opacity(sec);
            else sec.style.opacity = '0';
        });
    });
};
initaiteOpacity();

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

noYouDont.addEventListener('click', () => {
    toggleAlert();
    setTimeout(() => {
        toggleAlert();
    }, 2000);
});
end.addEventListener('click', () => {
    document.location.reload();
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
    initaiteOpacity();
});
NextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        count++;
        bringInNext(count, backBtn);
        initaiteOpacity();
    });
});