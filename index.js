document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-menu_visible');
        navToggle.classList.toggle('nav-toggle_open');
    });

    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('nav-menu_visible');
            navToggle.classList.remove('nav-toggle_open');
        }
    });

    // Slideshow functionality
    let currentIndex = 0;

    function moveSlide(direction) {
        const slides = document.querySelector('.slides');
        const totalSlides = slides.children.length;
        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
        const slideWidth = slides.children[0].clientWidth;
        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Optional: Auto slide every 3 seconds
    setInterval(() => moveSlide(1), 3000);
});


