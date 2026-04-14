/**
 * Funcionalidad de interacción y storytelling para la Landing Page
 * Utilizamos IntersectionObserver API para detectar cuando las secciones
 * entran en la pantalla (100vh) y disparar las animaciones CSS.
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Configuración del Observer
    // Detectamos cuando una sección entra en el viewport del scroll-container
    const observerOptions = {
        root: document.querySelector('.scroll-container'),
        rootMargin: '0px',
        // threshold de 0.4 significa que el elemento debe estar al menos 40% visible 
        // para que se dispare la animación. Ideal para el efecto diapositivas.
        threshold: 0.4 
    };

    const intersectionCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadir la clase para detonar las animaciones (fade, zoom, slide)
                entry.target.classList.add('is-visible');
                
                // Opcional: si quisieras que las animaciones ocurran SOLO la primera vez, 
                // descomentar la lina de abajo:
                // observer.unobserve(entry.target);
            } else {
                // Remover la clase hace que las animaciones se reinicien al volver a la sección
                entry.target.classList.remove('is-visible');
            }
        });
    };

    const observer = new IntersectionObserver(intersectionCallback, observerOptions);

    // Seleccionamos todos los elementos con la clase base para animar
    const animatedSections = document.querySelectorAll('.animate-on-scroll');
    
    animatedSections.forEach(section => {
        observer.observe(section);
    });

    // 2. Efecto de latido en el botón de la última sección (Call to action final)
    const pulseContainer = document.querySelector('.pulse-container');
    if (pulseContainer) {
        // Hacemos que la animación inicie con un delay una vez que carga la sección
        setTimeout(() => {
            pulseContainer.classList.add('heartbeat-active');
        }, 1500);
    }
    
    // 3. Pequeño script para asegurar que la primera pantalla inicie su animación
    // al instante de cargar la página (ya que a veces el observer se retrasa por la carga)
    setTimeout(() => {
        const heroSection = document.querySelector('#hero .animate-on-scroll');
        if (heroSection) {
            heroSection.classList.add('is-visible');
        }
    }, 100);

});
