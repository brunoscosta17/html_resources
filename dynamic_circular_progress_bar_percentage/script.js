let progressBar = document.querySelector('.circular-progress');
let valueContainer = document.querySelector('.value-container');
let progressStartValue = 0, progressEndValue = 100, speed = 100;

let progress = setInterval(() => {
    progressStartValue++;
    valueContainer.textContent = `${progressStartValue}%`;
    progressBar.style.background = `conic-gradient(#4d5bf9 ${progressStartValue * 3.6}deg, #cadcff 0deg)`;
    if(progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed);