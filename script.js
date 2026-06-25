const boton = document.getElementById("botonmensaje");
const presentacion = document.getElementById("presentacion");
const modo = document.getElementById("modo");

modo.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        modo.innerText = "modo claro";
    }
    else {
        modo.innerText = "modo oscuro";
    }
});

boton.addEventListener("click", function() {
   if (presentacion.style.display === "" || presentacion.style.display === "none") {
        presentacion.style.display = "block";
        boton.innerText = "Ocultar mi presentación";
    }
    else {
        presentacion.style.display = "none";
        boton.innerText = "Mostrar mi presentación";
    }
    
   
});