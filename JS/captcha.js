// Archivo: Js/captcha.js
// Maneja la generación, visualización y validación de un CAPTCHA simple y el modal de éxito.

// Variable para almacenar el código CAPTCHA generado actualmente.
let currentCaptcha = '';

// --- RUTAS DE REDIRECCIÓN ---
// Desde /html/inicio_de_sesion/ hasta /html/inicio_de_sesion/inicio_sesion.html
const LOGIN_FORM_URL = 'inicio_sesion.html';
// Desde /html/inicio_de_sesion/ hasta /index.html (raíz)
const CANCEL_URL = '../../index.html'; 


/**
 * Genera y muestra un código CAPTCHA aleatorio.
 */
function displayNewCaptcha() {
    const captchaElement = document.getElementById('captcha-display');
    if (captchaElement) {
        // Genera 5 caracteres alfanuméricos
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        currentCaptcha = result;
        captchaElement.textContent = currentCaptcha;
    }
}

/**
 * Valida si la entrada del usuario coincide con el CAPTCHA actual.
 * @param {string} userInput El texto introducido por el usuario.
 * @returns {boolean} True si la validación es exitosa.
 */
function validateCaptcha(userInput) {
    // Usamos toUpperCase() para hacer la validación insensible a mayúsculas/minúsculas
    return userInput.trim().toUpperCase() === currentCaptcha;
}

/**
 * Muestra el modal de éxito.
 */
function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    if (modal) {
        // Muestra el fondo y el modal
        modal.style.display = 'flex';
    }
}

/**
 * Maneja el envío del formulario: valida CAPTCHA y muestra el modal.
 */
function handleSubmit(event) {
    event.preventDefault(); // Siempre detenemos el envío por defecto para manejar la validación

    const inputElement = document.getElementById('captcha-input');
    
    // Aquí puedes agregar la validación de otros campos si es necesario.

    if (inputElement) {
        const userInput = inputElement.value;
        
        if (validateCaptcha(userInput)) {
            // ÉXITO: Mostrar el modal
            showSuccessModal();
            console.log("Registro exitoso simulado. Mostrando modal.");
        } else {
            // ERROR: Mostrar alerta y refrescar CAPTCHA
            alert("Error: El código CAPTCHA es incorrecto. Inténtalo de nuevo."); 
            displayNewCaptcha(); 
            inputElement.value = ''; // Limpia el campo
        }
    }
}

// -------------------------------------------------------------------------
// Inicialización y Listeners
// -------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm'); 
    const refreshButton = document.getElementById('captcha-refresh');
    const modalAcceptButton = document.getElementById('btn-modal-accept');
    const cancelButton = document.querySelector('.btn-cancel'); // Selecciona el botón Cancelar

    // 1. Mostrar el CAPTCHA inicial
    displayNewCaptcha();

    // 2. Programar el refresco del CAPTCHA
    if (refreshButton) {
        refreshButton.addEventListener('click', displayNewCaptcha);
    }

    // 3. Programar la validación y el modal al enviar el formulario
    if (registrationForm) {
        // Al hacer submit (al presionar el botón 'Registrarse'), se llama a handleSubmit
        registrationForm.addEventListener('submit', handleSubmit);
    }
    
    // 4. Programar la redirección del botón 'Aceptar' del modal
    if (modalAcceptButton) {
        modalAcceptButton.addEventListener('click', () => {
            // Redirige al formulario de inicio de sesión que está en la misma carpeta
            window.location.href = LOGIN_FORM_URL; 
        });
    }

    // 5. Programar el botón 'Cancelar'
    if (cancelButton) {
        cancelButton.addEventListener('click', () => {
            // Redirige al index.html de la raíz (sube dos niveles)
            window.location.href = CANCEL_URL;
        });
    }

    console.log("Funcionalidad CAPTCHA, Modal y Cancelar cargada.");
});
