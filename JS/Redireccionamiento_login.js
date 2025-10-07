// Archivo: Js/loginRedirect.js
// Este módulo maneja la redirección del botón "Iniciar Sesión" (desde el header)
// y añade la funcionalidad de cancelación en el formulario de login.

document.addEventListener('DOMContentLoaded', () => {
    
    // RUTA DE LOGIN DE USUARIO: Desde el index.html (raíz), la ruta es Inicio de sesion/...
    const userLoginURL = 'html\Logeado\Pagina_principal.html';
    
    // RUTA DE CANCELACIÓN: Debe regresar a la página de inicio (index.html)
    // El archivo de login está en /html/Inicio de sesion/. Para llegar a index.html (raíz),
    // la ruta relativa es: "../../index.html"
    const cancelURL = '../../index.html'; 

    // --- 1. Redirección desde el Header (Botón 'Iniciar Sesión') ---
    const headerLoginButtons = document.querySelectorAll('.btn-primary');
    
    headerLoginButtons.forEach(button => {
        if (button.textContent.trim() === 'Iniciar Sesión') {
            button.addEventListener('click', () => {
                window.location.href = userLoginURL;
            });
        }
    });

    // --- 2. Funcionalidad del Botón 'Cancelar' ---
    // Este botón se encuentra en la página de inicio de sesión de usuario.
    const cancelButton = document.querySelector('.btn-cancel');

    if (cancelButton) {
        cancelButton.addEventListener('click', () => {
            // Redirige a la página de inicio sin sesión (index.html)
            window.location.href = cancelURL;
        });
    }

    // Nota: Lógica para Administrador (Eliminada temporalmente)
    // Si necesitas agregar la funcionalidad de administrador, deberás actualizar la sección 2.

});
