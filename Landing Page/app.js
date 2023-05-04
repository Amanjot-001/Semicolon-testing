document.addEventListener('click', function (event) {
    var x = event.clientX;
    var y = event.clientY;
    console.log('Mouse click position: ' + x + ', ' + y);
});

const blinkSquare = document.querySelector('#blink-square');
const blinkSpacebar = document.querySelector('#blink-spacebar');

blinkSquare.addEventListener('animationend', handleAnimationEnd);

function handleAnimationEnd() {
    restartAnimation(541, 434); //e
    setTimeout(() => restartAnimation(472, 474), 107); //a
    setTimeout(() => restartAnimation(581, 434), 214); //r
    setTimeout(() => restartAnimation(690, 513.5), 321); //n

    setTimeout(() => restartAnimation(620.25, 434), 535); //t
    setTimeout(() => restartAnimation(780, 434), 642); //o
    setTimeout(() => restartAnimation(700.25, 434), 749); //u
    setTimeout(() => restartAnimation(570.5, 513.5), 856); //c
    setTimeout(() => restartAnimation(670.5, 474), 963); //h
    setTimeout(() => spacebarBlink(), 1070); //spacebar

    setTimeout(() => restartAnimation(620.25, 434), 1177); //t
    setTimeout(() => restartAnimation(660.4, 434), 1284); //y
    setTimeout(() => restartAnimation(819.7, 434), 1391); //p
    setTimeout(() => restartAnimation(740, 434), 1498); //i
    setTimeout(() => restartAnimation(690, 513.5), 1605); //n
    setTimeout(() => restartAnimation(630, 474), 1712); //g
    setTimeout(() => spacebarBlink(), 1819); //spacebar

    setTimeout(() => restartAnimation(591, 474), 1926); //f
    setTimeout(() => restartAnimation(780, 434), 2033); //o
    setTimeout(() => restartAnimation(581, 434), 2140); //r
    setTimeout(() => spacebarBlink(), 2247); //spacebar

    setTimeout(() => restartAnimation(591, 474), 2354); //f
    setTimeout(() => restartAnimation(580, 434), 2461); //r
    setTimeout(() => restartAnimation(541, 434), 2578); //e
    setTimeout(() => restartAnimation(541, 434), 2685); //e
    setTimeout(() => restartAnimation(809.5, 513.5), 2792); //.

    // remove event listener after it runs for the first time
    blinkSquare.removeEventListener('animationend', handleAnimationEnd);
}


function restartAnimation(x, y) {
    blinkSquare.style.left = `${x}px`;
    blinkSquare.style.top = `${y}px`;
    // blinkSquare.classList.remove('blinked');
    blinkSquare.style.animation = 'none';
    void blinkSquare.offsetWidth;
    blinkSquare.style.animation = 'blinked 107ms ease forwards';
    // blinkSquare.classList.add('blinked');
}

function spacebarBlink(){
    blinkSpacebar.style.animation = 'none';
    void blinkSpacebar.offsetWidth;
    blinkSpacebar.style.animation = 'blinked 107ms forwards';
}
