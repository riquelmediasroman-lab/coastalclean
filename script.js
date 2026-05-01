const marquee = document.getElementById('marquee');
// Duplicamos el texto para un efecto infinito sin saltos
marquee.innerHTML += marquee.innerHTML;

let xPos = 0;
const speed = 1.5;

function animateMarquee() {
    xPos -= speed;
    if (Math.abs(xPos) >= marquee.scrollWidth / 2) {
        xPos = 0;
    }
    marquee.style.transform = `translateX(${xPos}px)`;
    requestAnimationFrame(animateMarquee);
}

animateMarquee();
