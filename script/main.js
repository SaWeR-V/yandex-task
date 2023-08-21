let back = document.getElementById('previous');
let next = document.getElementById('slide-right');
let slider = document.getElementsByClassName('gallery-slider');

const imgElements = document.getElementsByClassName('slider-resources');
const imgArr = Array.from(imgElements);

function changeSlide() {
    for (let i = 0; i < imgArr.length; i++) {
        slider.remove(imgArr[i])
    }
};

next.onclick = changeSlide;

console.log(imgArr)