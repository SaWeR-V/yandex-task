let back = document.getElementById('previous');
let next = document.getElementById('slide-right');
let slider = document.getElementsByClassName('gallery-slider');


const imgElements = document.getElementsByClassName('slider-resources');
const imgArr = Array.from(imgElements);

next.onclick = function changeSlideRight() {
    slider.classList.toggle('transform: translateX(-100%)')
}


console.log(imgArr)

