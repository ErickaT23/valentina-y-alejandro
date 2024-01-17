document.addEventListener("DOMContentLoaded", function() {
    var imagen = document.querySelector('.foto-inicial');
    
    imagen.addEventListener('click', function() {
      this.classList.toggle('ampliada');
    });
  });
