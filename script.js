// Cube
let x = 0;
let y = 20;
let z = 0;
let bool = true;
let interval;

const cube = document.querySelector('.cube');

function setCubeControls(controlElement, xIncrement = 0, yIncrement = 0, zIncrement = 0) {
    document.querySelector(controlElement).addEventListener('click', () => {
        cube.style.transform = `rotateX(${x += xIncrement}deg)
                                rotateY(${y += yIncrement}deg)
                                rotateZ(${z += zIncrement}deg)`;
    });
}

setCubeControls('.top-x-control', 20, 0, 0);
setCubeControls('.bottom-x-control', -20, 0, 0);
setCubeControls('.left-y-control', 0, -20, 0);
setCubeControls('.right-y-control', 0, 20, 0);
setCubeControls('.top-z-control', 0, 0, -20);
setCubeControls('.bottom-z-control', 0, 0, 20);

const playPause = () => {
    if(bool) {
        interval = setInterval(() => {
            cube.style.transform = `rotateY(${y++}deg) rotateX(${x}deg) rotateZ(${z}deg`;
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