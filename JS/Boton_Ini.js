// Archivo: script.js
// Este código maneja la funcionalidad básica del sitio.

/**
 * Función para inicializar los event listeners (escuchadores de eventos)
 * una vez que el DOM (estructura HTML) está completamente cargado.
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Funcionalidad del Botón de Inicio (Casita)
    const homeButton = document.querySelector('.icon-button i.fa-house');
    
    if (homeButton) {
        homeButton.closest('button').addEventListener('click', () => {
            
            // Determina la ubicación actual del archivo JS.
            // Para la casita, el destino depende de si el usuario está logeado.

            // CASO 1: Página sin sesión iniciada (Ej: Acerca de, Ayuda, Contacto cuando no hay sesión)
            // Estas páginas regresan al index.html en la raíz (subiendo un nivel).
            let targetURL = '../index.html'; // Destino por defecto: sube al index raíz.
            
            // CASO 2: La página pertenece al flujo de sesión iniciada (debe regresar al index-sesion-iniciada.html)
            // Podemos determinar esto si la URL actual incluye 'sesion-iniciada' o si el botón tiene una clase especial.
            
            const currentPath = window.location.pathname;
            
            // Opción A: Si la página que se está visitando está en el flujo de sesión iniciada (ej: Perfil, Carrito, etc.)
            if (currentPath.includes('carrito.html') || currentPath.includes('perfil.html') || currentPath.includes('index-sesion-iniciada.html')) {
                 // Si estás en una página de usuario, el destino es index-sesion-iniciada.html, 
                 // que está en la misma carpeta que las páginas de contenido (html/).
                 targetURL = 'index-sesion-iniciada.html';
            }
            
            // Para las páginas Acerca de, Ayuda y Contacto, la URL de destino es relativa:
            // Si el usuario está en /html/acerca-de.html y no ha iniciado sesión, debe ir a ../index.html
            // Si el usuario está en /html/acerca-de.html y ha iniciado sesión, debe ir a index-sesion-iniciada.html

            // Usaremos la clase js-home-iniciado en el botón para distinguirlo:
            const isUserLoggedInFlow = homeButton.closest('button').classList.contains('js-home-iniciado');
            
            if (isUserLoggedInFlow) {
                targetURL = 'index-sesion-iniciada.html';
            } else {
                 // Si NO tiene la clase (usuario no logeado), regresa a la raíz.
                 targetURL = '../index.html';
            }
            

            window.location.href = targetURL; 
        });
    }

    // Puedes agregar aquí más funcionalidades en el futuro.
    console.log("Funciones de JS cargadas correctamente.");
});
