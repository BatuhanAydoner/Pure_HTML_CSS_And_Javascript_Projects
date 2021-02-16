const progress = document.querySelector('#progress');
const circles = document.querySelectorAll('.circle');
const btnPrev = document.querySelector('#prev');
const btnNext = document.querySelector('#next');

// For active classes
let countOfActive = 0;
// For progress width
let progressWidth = 0;

btnPrev.addEventListener('click', (e) => {
    countOfActive--;
    if (countOfActive >= 0) {
        btnNext.disabled = false;
        progressWidth -= 33;
        progress.style.width = `${progressWidth}%`
        circles[countOfActive + 1].classList.remove('active');
        if(countOfActive == 0) {
            btnPrev.disabled = true;
        }
    }
});

btnNext.addEventListener('click', (e) => {
    countOfActive++;
    if (countOfActive < circles.length) {
        btnPrev.disabled = false;
        circles[countOfActive].classList.add('active');
        progressWidth += 33;
        progress.style.width = `${progressWidth}%`
        if(countOfActive == 3) {
            btnNext.disabled = true;
        }
    }
});