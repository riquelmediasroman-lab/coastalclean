// --- 1. Animación del Marquee (Texto Corredizo) ---
const marquee = document.getElementById('marquee');
marquee.innerHTML += marquee.innerHTML; // Duplicar para efecto infinito

let xPos = 0;
const speed = 1.2;

function animateMarquee() {
    xPos -= speed;
    if (Math.abs(xPos) >= marquee.scrollWidth / 2) {
        xPos = 0;
    }
    marquee.style.transform = `translateX(${xPos}px)`;
    requestAnimationFrame(animateMarquee);
}
animateMarquee();

// --- 2. Lógica del Modal de Registro ---
const modal = document.getElementById("modalRegistro");
const btnUnete = document.querySelector(".btn-cta");
const btnCerrar = document.querySelector(".close-btn");
const form = document.getElementById("formRegistro");

btnUnete.onclick = function(e) {
    e.preventDefault();
    modal.style.display = "block";
}

btnCerrar.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Manejo del envío
form.onsubmit = function(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const tel = document.getElementById("telefono").value;
    const estado = document.getElementById("estado").value;
    
    alert(`¡Gracias ${nombre}! Registro exitoso desde ${estado}. Te contactaremos al +52 ${tel}.`);
    
    modal.style.display = "none";
    form.reset();
}
