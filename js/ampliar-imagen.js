function ampliarImagen(elemento) {
    var modal = document.getElementById("modal-imagen");
    var modalImg = document.getElementById("imagen-ampliada");
    modal.style.display = "block";
    modalImg.src = elemento.querySelector("img").src;
}
