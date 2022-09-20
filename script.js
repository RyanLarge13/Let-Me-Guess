import { bringInNext } from "./Javascript/firstpage.js";

const yes = document.querySelector('[data-="yes"]');
const no = document.querySelector('[data-="no"]');

const toggleAlert = () => {
    const alert = document.querySelector('.alert');
    const backdrop = document.querySelector('.backdrop');
    alert.classList.toggle('show');
    backdrop.classList.toggle('show');
};

const beginGame = () => {
    const heading = document.querySelector('h1');
    const paragraph = document.querySelector('p');
    const buttons = document.querySelector('.yes-no');
    const elemArr = [heading, paragraph, buttons];
    for (let k = 0; k < elemArr.length; k++) {
        setTimeout(() => {
            elemArr[k].style.transform = 'translateX(-100vw)';
        }, 50 * k);
    }
    bringInNext();
};

no.addEventListener('click', () => {
    toggleAlert();
    setTimeout(() => {
        toggleAlert();
    }, 2000);
});
yes.addEventListener('click', beginGame);