// Archivo: Js/loginRedirect.js
// Este módulo maneja la redirección del botón "Iniciar Sesión" (desde el header)
// y los botones de selección de rol (Usuario/Admin) en la página de login.

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Redirección desde el Header (Botón 'Iniciar Sesión') ---
    // Este botón se encuentra en el navbar de las páginas públicas (acerca-de, ayuda, etc.).
    const headerLoginButtons = document.querySelectorAll('.btn-primary');
    const userLoginURL = 'html/Inicio de sesion/inicio_sesion.html';

    headerLoginButtons.forEach(button => {
        if (button.textContent.trim() === 'Iniciar Sesión') {
            button.addEventListener('click', () => {
                // Redirige a la página de selección de login de usuario.
                window.location.href = userLoginURL;
            });
        }
    });