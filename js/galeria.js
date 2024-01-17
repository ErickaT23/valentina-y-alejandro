var imagenes = ["/imagenes/H1.png", "/imagenes/v1.png", "/imagenes/H2.png", "/imagenes/v2.png", "/imagenes/H3.png", "/imagenes/v3.png",];
var indiceImagenActual = 0;

function ampliarImagen(elemento) {
    var modal = document.getElementById("modal-imagen");
    var modalImg = document.getElementById("imagen-ampliada");
    modal.classList.add("abierto");
    modalImg.src = elemento.querySelector("img").src;
    indiceImagenActual = imagenes.indexOf(modalImg.src);
}

function cerrarModal() {
    var modal = document.getElementById("modal-imagen");
    modal.classList.remove("abierto");
}

function cambiarImagen(direccion) {
    indiceImagenActual += direccion;
    if (indiceImagenActual < 0) {
        indiceImagenActual = imagenes.length - 1;
    } else if (indiceImagenActual >= imagenes.length) {
        indiceImagenActual = 0;
    }
    document.getElementById("imagen-ampliada").src = imagenes[indiceImagenActual];
}

