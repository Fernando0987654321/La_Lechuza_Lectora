// Archivo: Js/adminRedirect.js
// Este módulo maneja la redirección del botón "Administrativo"
// en la página de inicio de sesión de usuario.

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Selector del Botón 'Administrativo'
    // El botón se identifica por su clase: .btn-admin-switch
    const adminSwitchButton = document.querySelector('.btn-admin-switch');
    
    // RUTA DE DESTINO: Asumimos que el archivo 'inicio_sesion_admin.html' está en la misma carpeta 
    // que el archivo 'inicio_sesion.html'.
    const adminLoginURL = 'inicio_sesion_admin.html';

    if (adminSwitchButton) {
        adminSwitchButton.addEventListener('click', () => {
            // Redirige a la página de inicio de sesión para el Administrador.
            window.location.href = adminLoginURL;
        });
    }
});
