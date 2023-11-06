window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in-box');

    elements.forEach(function(element) {
        const position = element.getBoundingClientRect();

        // Muestra el div cuando está en el viewport
        if (position.top <= window.innerHeight && position.bottom >= 0) {
            element.classList.add('show');
        }
    });
});

/*******************************************************************/

