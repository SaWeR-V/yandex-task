let back = document.getElementById('previous');
let next = document.getElementById('next');
let slideOne = document.getElementById('first');
let slideTwo = document.getElementById('second');
let slideThree = document.getElementById('third');
let slideFour = document.getElementById('fourth');

let currentImage = 0;

function checkForEnd() {
    if (currentImage === 0) {
        back.style.opacity = ('0.5');
        back.disabled = (true);
    }
    else {
        back.style.opacity = null;
        back.disabled = (false);
    }

    if (currentImage === 3){
        next.style.opacity = ('0.5');
        next.disabled = (true);
    }
    else {
        next.style.opacity = (null);
        next.disabled = (false);
    }
}

checkForEnd();

next.onclick = function changeSlideRight() {
    
    if (currentImage === 0) {
        slideOne.style.transform = (`translateX(-100%)`)
        slideTwo.style.transform = (`translateX(-100%)`)
        currentImage++;
        checkForEnd();
        return;
    }
    else if (currentImage === 1){
        slideTwo.style.transform = (`translateX(-200%)`)
        slideThree.style.transform = (`translateX(-200%)`)
        currentImage++; 
        checkForEnd();
        return;
    }
    else if (currentImage === 2){
        slideThree.style.transform = (`translateX(-300%)`)
        slideFour.style.transform = (`translateX(-300%)`)
        currentImage++; 
        checkForEnd();
        return;
    }
}

back.onclick = function changeSlideLeft() {


    if (currentImage === 1){
        slideOne.style.transform = (`translateX(0%)`)
        slideTwo.style.transform = (`translateX(0%)`)
        currentImage--; 
        checkForEnd();
        return;
    }
    else if (currentImage === 2){
        slideTwo.style.transform = (`translateX(-100%)`)
        slideThree.style.transform = (`translateX(-100%)`)
        currentImage--; 
        checkForEnd();
        return;
    }
    else if (currentImage === 3){
        slideThree.style.transform = (`translateX(-200%)`)
        slideFour.style.transform = (`translateX(-200%)`)
        currentImage--; 
        checkForEnd();
        return;
    }
}


