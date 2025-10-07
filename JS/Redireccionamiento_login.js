// Archivo: Js/loginRedirect.js
// Este módulo maneja todas las redirecciones relacionadas con el flujo de inicio de sesión.

document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================================================
    // RUTAS FIJAS DEL FLUJO (¡Calculadas desde la ubicación del formulario de login!)
    // Asumimos que el formulario está en /html/Inicio_de_sesion/inicio_sesion.html
    // =========================================================================
    
    // 1. RUTA AL FORMULARIO DE LOGIN (Usada por el botón del header)
    // Desde el index.html (raíz) el destino es: html/Inicio_de_sesion/inicio_sesion.html
    const TO_LOGIN_FORM_URL = 'html/Inicio_de_sesion/inicio_sesion.html'; 

    // 2. RUTA DE CANCELACIÓN: Regresa a index.html (raíz)
    const TO_CANCEL_URL = '../../index.html'; 

    // 3. RUTA DE ÉXITO: Redirige a la página principal logeada.
    // Destino: /html/logeado/Pagina_principal.html
    const TO_SUCCESS_PAGE_URL = '../../html/logeado/Pagina_principal.html';


    // -------------------------------------------------------------------------
    // 1. Redirección desde el Header (Botón 'Iniciar Sesión') -> ENVÍA AL FORMULARIO
    // -------------------------------------------------------------------------
    const headerLoginButtons = document.querySelectorAll('.btn-primary');
    
    headerLoginButtons.forEach(button => {
        // CORRECCIÓN: Usamos toLowerCase() para ignorar si es 'Sesión' o 'sesión'.
        if (button.textContent.trim().toLowerCase() === 'iniciar sesión') {
            button.addEventListener('click', () => {
                // Si el script se ejecuta en la raíz (index.html), esta URL es correcta.
                window.location.href = TO_LOGIN_FORM_URL;
            });
        }
    });

    // -------------------------------------------------------------------------
    // 2. Funcionalidad del Botón 'Cancelar' -> REGRESA AL INDEX SIN SESIÓN
    // -------------------------------------------------------------------------
    const cancelButton = document.querySelector('.btn-cancel');

    if (cancelButton) {
        cancelButton.addEventListener('click', () => {
            // Esta ruta funciona para regresar del formulario a la raíz.
            window.location.href = TO_CANCEL_URL;
        });
    }

    // -------------------------------------------------------------------------
    // 3. SIMULACIÓN de ÉXITO de Login (Botón 'Iniciar sesión' DENTRO del formulario)
    // -------------------------------------------------------------------------
    const loginSubmitButton = document.querySelector('.login-action-buttons .btn-primary');

    // Nos aseguramos de que el botón exista y tenga el texto correcto (caso sensible)
    if (loginSubmitButton && loginSubmitButton.textContent.trim().toLowerCase() === 'iniciar sesión') {
        loginSubmitButton.addEventListener('click', (event) => {
            event.preventDefault(); // IMPORTANTE: Previene el submit real del formulario
            
            // Redirige a la página principal logeada
            console.log("Simulando login exitoso. Redirigiendo a:", TO_SUCCESS_PAGE_URL);
            window.location.href = TO_SUCCESS_PAGE_URL;
        });
    }

});
