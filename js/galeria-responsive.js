document.addEventListener("DOMContentLoaded", function() {
    const elementosParaAnimar = document.querySelectorAll('.fade-in-scroll');

    const animarAlHacerScroll = () => {
        elementosParaAnimar.forEach(elemento => {
            const posicionTopElemento = elemento.getBoundingClientRect().top;
            const alturaVentana = window.innerHeight;

            if (posicionTopElemento < alturaVentana) {
                elemento.classList.add('visible');
            }
        });
    };

    // Ejecutar al cargar la página y al hacer scroll
    animarAlHacerScroll();
    window.addEventListener('scroll', animarAlHacerScroll);
});
