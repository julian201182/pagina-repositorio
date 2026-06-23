const boton = document.getElementById("botonmensaje");
const presentacion = document.getElementById("presentacion");

boton.addEventListener("click", function() {
   if (presentacion.style.display === "none" || presentacion.style.display === "") {
        presentacion.style.display = "block";
        boton.innerText = "Ocultar mi presentación";
    }
    else {
        presentacion.style.display = "none";
        boton.innerText = "Mostrar mi presentación";
    }
    
   
});