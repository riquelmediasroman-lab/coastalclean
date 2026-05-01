// --- 1. Reparación del Movimiento (Marquee) ---
const marquee = document.getElementById('marquee-text');

if (marquee) {
    // Duplicamos el texto para que el ciclo no tenga cortes
    marquee.innerHTML += " " + marquee.innerHTML;

    let position = 0;
    const scrollSpeed = 1.2;

    function moveMarquee() {
        position -= scrollSpeed;
        
        // Si ha recorrido la mitad (el texto original), reiniciamos
        if (Math.abs(position) >= marquee.scrollWidth / 2) {
            position = 0;
        }
        
        marquee.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(moveMarquee);
    }
    
    moveMarquee();
}

// --- 2. Reparación del Botón de Registro ---
const modal = document.getElementById("modalRegistro");
const btnUnete = document.getElementById("btnUnete");
const btnCerrar = document.getElementById("closeModal");
const form = document.getElementById("formRegistro");

// Mostrar modal al hacer clic
if (btnUnete) {
    btnUnete.onclick = function() {
        modal.style.display = "block";
    }
}

// Cerrar modal al hacer clic en la X
if (btnCerrar) {
    btnCerrar.onclick = function() {
        modal.style.display = "none";
    }
}

// Cerrar si hacen clic fuera del cuadro blanco
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Lógica del Formulario
if (form) {
    form.onsubmit = function(e) {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const tel = document.getElementById("telefono").value;
        const estado = document.getElementById("estado").value;
        
        alert(`¡Registro Exitoso!\nNombre: ${nombre}\nUbicación: ${estado}\nContacto: +52 ${tel}`);
        
        modal.style.display = "none";
        form.reset();
    }
}
