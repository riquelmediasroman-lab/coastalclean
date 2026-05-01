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

// --- Lógica del Formulario de Registro ---
const modal = document.getElementById("modalRegistro");
const btnUnete = document.querySelector(".btn-cta");
const btnCerrar = document.querySelector(".close-btn");
const form = document.getElementById("formRegistro");

// Función para abrir el modal
if (btnUnete) {
    btnUnete.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
    }
}

// Función para cerrar el modal
if (btnCerrar) {
    btnCerrar.onclick = function() {
        modal.style.display = "none";
    }
}

// Cerrar si el usuario hace clic fuera del cuadro
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Manejo del envío (Simulación)
if (form) {
    form.onsubmit = function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById("nombre").value;
        const tel = document.getElementById("telefono").value;
        const estado = document.getElementById("estado").value;
        
        // Mensaje de confirmación profesional
        alert(`¡Gracias ${nombre}! Hemos registrado tu interés desde ${estado}. Nos contactaremos al +52 ${tel} pronto.`);
        
        modal.style.display = "none";
        form.reset();
    }
}
