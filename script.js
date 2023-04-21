// Common Js
document.querySelectorAll('.watch-control, .controls a, .iphone-btn').forEach( control => {
    control.addEventListener('click', e => {
        e.preventDefault();
    });
} );
// End of Common Js

// Cube
let x = 0; 
let y = 20;
let z = 0;
let bool = true;
let interval;

const cube = document.querySelector('.cube');

function setCubeControl(controlElement, xIncrement = 0, yIncrement = 0, zIncrement = 0) {
    document.querySelector(controlElement).addEventListener('click', () => {
        cube.style.transform = `rotateX(${x += xIncrement}deg)
                                rotateY(${y += yIncrement}deg)
                                rotateZ(${z += zIncrement}deg)`;
    });
}

setCubeControl('.top-x-control', 20, 0, 0);
setCubeControl('.bottom-x-control', -20, 0, 0);
setCubeControl('.left-y-control', 0, -20, 0);
setCubeControl('.right-y-control', 0, 20, 0);
setCubeControl('.top-z-control', 0, 0, -20);
setCubeControl('.bottom-z-control', 0, 0, 20);

const playPause = () => {
    if(bool) {
        interval = setInterval(() => {
            cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg`;
        }, 100);
    } else {
        clearInterval(interval);
    }
}

playPause();

document.querySelector('.controls').addEventListener('mouseover', () => {
    bool = false;
    playPause();
});

document.querySelector('.controls').addEventListener('mouseout', () => {
    bool = true;
    playPause();
});
// End of Cube

// Slideshow
const slideshowDivs = () => {
    for(let i = 1; i <= 5; i++) {
        const div = document.createElement('div');
        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

        i === 1 && div.classList.add('change');

        document.querySelector('.slideshow').appendChild(div);
    }
}

slideshowDivs();

const divs = document.querySelectorAll('.slideshow div');

let i = 1;

const slideshow = () => {
    setInterval(() => {
        i++;
        const div = document.querySelector('.slideshow .change');

        div.classList.remove('change');

        if (i < divs.length) {
            div.nextElementSibling.classList.add('change');
        } else {
            divs[0].classList.add('change');
            i = 1;
        }
    }, 20000);
}

slideshow();
// End of Slideshow

// Section 3
const section3Content = document.querySelector('.section-3-content');

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= section3Content.offsetTop
        + section3Content.offsetHeight / 2) {
            section3Content.classList.add('change');
        }
});
// End of Section 3

// Section 4
const watchBands = document.querySelector('.watch-bands');
const watchCases = document.querySelector('.watch-cases');

const watchTopControl = document.querySelector('.watch-top-control');
const watchBottomControl = document.querySelector('.watch-bottom-control');
const watchLeftControl = document.querySelector('.watch-left-control');
const watchRightControl = document.querySelector('.watch-right-control');

let axisY = 0;
let axisX = 0;

const hideControl = () => {
    function hide(control, axis, endAxisValue) {
        if (axis === endAxisValue) {
            control.classList.add('hideControl');
        } else {
            control.classList.remove('hideControl');
        }
    }
    hide(watchTopControl, axisY, -280);
    hide(watchBottomControl, axisY, 280);
    hide(watchRightControl, axisX, -280);
    hide(watchLeftControl, axisX, 280);
}

watchTopControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY -= 70}rem`;
    hideControl();
});

watchBottomControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY += 70}rem`;
    hideControl();
});

watchRightControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX -= 70}rem`;
    hideControl();
});

watchLeftControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX += 70}rem`;
    hideControl();
});
// End of Section 4