const checkCount = (count, backBtn) => {
    if (count > 0) {
        backBtn.style.pointerEvents = 'auto';
        backBtn.style.opacity = '1';
    } else {
        backBtn.style.pointerEvents = 'none';
        backBtn.style.opacity = '0';
    }
};

export const opacity = (sec) => {
    sec.style.opacity = '1';
};

export const startOver = (count, backBtn) => {
    count = 0;
    checkCount(count, backBtn);
    const sections = document.querySelectorAll('.sec');
    for (let k = sections.length - 1; k > -1; k--) {
        sections[k].style.transform = `translateX(${k}00vw)`;
    }
}; 

export const bringInNext = (count, backBtn) => {
    checkCount(count, backBtn);
    const sections = document.querySelectorAll('.sec');
    sections.forEach((sec) => {
        sec.style.transform = `translateX(-${count * 100}vw)`;
    });
};

export const bringInPrev = (count, backBtn) => {
    checkCount(count, backBtn)
    const sections = document.querySelectorAll('.sec');
    sections.forEach((sec) => {
        sec.style.transform = `translateX(-${count}00vw)`;
    });
};
