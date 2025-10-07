// Archivo: Js/contactRedirect.js
// Este módulo maneja la redirección del botón "Contáctanos" en la página de Ayuda.

document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.querySelector('.btn-contact-us');

    if (contactButton) {
        contactButton.addEventListener('click', () => {
            // Navega a la página de contacto.html.
            // La ruta es directa porque 'contacto.html' y 'ayuda.html' están en la misma carpeta ('html/').
            window.location.href = 'Contacto.html';
        });
    }
});
