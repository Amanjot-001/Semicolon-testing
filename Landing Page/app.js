// document.addEventListener('click', function (event) {
//     var x = event.clientX;
//     var y = event.clientY;
//     console.log('Mouse click position: ' + x + ', ' + y);
// });

const blinkSquare = document.querySelector('#blink-square');
const blinkSpacebar = document.querySelector('#blink-spacebar');

blinkSquare.addEventListener('animationend', handleAnimationEnd);

function handleAnimationEnd() {
    restartAnimation(541, 434); //e
    setTimeout(() => restartAnimation(472, 474), 178.57); //a
    setTimeout(() => restartAnimation(581, 434), 357.14); //r
    setTimeout(() => restartAnimation(690, 513.5), 535.71); //n

    setTimeout(() => restartAnimation(620.25, 434), 892.85); //t
    setTimeout(() => restartAnimation(780, 434), 1071.42); //o
    setTimeout(() => restartAnimation(700.25, 434), 1249.99); //u
    setTimeout(() => restartAnimation(570.5, 513.5), 1428.56); //c
    setTimeout(() => restartAnimation(670.5, 474), 1607.13); //h
    setTimeout(() => spacebarBlink(), 1785.7); //spacebar

    setTimeout(() => restartAnimation(620.25, 434), 1964.27); //t
    setTimeout(() => restartAnimation(660.4, 434), 2142.84); //y
    setTimeout(() => restartAnimation(819.7, 434), 2321.41); //p
    setTimeout(() => restartAnimation(740, 434), 2499.98); //i
    setTimeout(() => restartAnimation(690, 513.5), 2678.55); //n
    setTimeout(() => restartAnimation(630, 474), 2857.12); //g
    setTimeout(() => spacebarBlink(), 3035.69); //spacebar

    setTimeout(() => restartAnimation(591, 474), 3214.26); //f
    setTimeout(() => restartAnimation(780, 434), 3392.83); //o
    setTimeout(() => restartAnimation(581, 434), 3571.4); //r
    setTimeout(() => spacebarBlink(), 3749.97); //spacebar

    setTimeout(() => restartAnimation(591, 474), 3928.54); //f
    setTimeout(() => restartAnimation(580, 434), 4107.11); //r
    setTimeout(() => restartAnimation(541, 434), 4285.68); //e
    setTimeout(() => restartAnimation(541, 434), 4464.25); //e
    setTimeout(() => restartAnimation(809.5, 513.5), 4642.82); //.

    // remove event listener after it runs for the first time
    blinkSquare.removeEventListener('animationend', handleAnimationEnd);
}


function restartAnimation(x, y) {
    blinkSquare.style.left = `${x}px`;
    blinkSquare.style.top = `${y}px`;
    // blinkSquare.classList.remove('blinked');
    blinkSquare.style.animation = 'none';
    void blinkSquare.offsetWidth;
    blinkSquare.style.animation = 'blinked 178.57ms ease forwards';
    // blinkSquare.classList.add('blinked');
}

function spacebarBlink(){
    blinkSpacebar.style.animation = 'none';
    void blinkSpacebar.offsetWidth;
    blinkSpacebar.style.animation = 'blinked 178.57ms forwards';
}