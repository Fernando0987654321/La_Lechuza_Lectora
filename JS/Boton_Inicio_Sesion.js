// Archivo: Js/loginRedirect.js
// Este módulo maneja la redirección del botón "Iniciar Sesión" (desde el header)
// para el flujo de usuario normal.

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Redirección desde el Header (Botón 'Iniciar Sesión') ---
    // Este botón se encuentra en el navbar de las páginas públicas (acerca-de, ayuda, etc.).
    const headerLoginButtons = document.querySelectorAll('.btn-primary');
    
    // RUTA CORREGIDA para la carpeta 'Inicio de sesion' y el archivo 'inicio_sesion.html'
    // Esta ruta es relativa a las páginas HTML que lo llaman (ej. acerca-de.html)
    const userLoginURL = 'html/Inicio_de_sesion/inicio_sesion.html';

    headerLoginButtons.forEach(button => {
        if (button.textContent.trim() === 'Iniciar Sesión') {
            button.addEventListener('click', () => {
                // Redirige a la página de selección de login de usuario.
                window.location.href = userLoginURL;
            });
        }
    });

    // --- 2. Lógica para Administrador (Eliminada temporalmente) ---
    // Si necesitas agregar la funcionalidad de administrador más tarde, 
    // puedes volver a añadir aquí el código de redirección.

    // Nota: El botón "Iniciar sesion" en la página de login de usuario 
    // no necesita JS en este momento, ya que solo procesará el formulario (backend).
});
