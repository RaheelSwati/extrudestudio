/* 
   Extrude Gaming Studio - Interactive Scripts
*/

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll header effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(5, 5, 5, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            header.style.background = 'rgba(5, 5, 5, 0.8)';
            header.style.boxShadow = 'none';
        }
    });

    // Initialize Swiper
    const swiper = new Swiper('.hero-slider', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.game-card, .section-title, .hero-content');

    // Add reveal class initially
    revealElements.forEach(el => el.classList.add('reveal'));

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15
    });

    revealElements.forEach(el => {
        sectionObserver.observe(el);
    });

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Animate hamburger icon (optional swap to times)
            hamburger.classList.toggle('fa-bars');
            hamburger.classList.toggle('fa-times');
        });

        // Close menu when a link is clicked
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.add('fa-bars');
                hamburger.classList.remove('fa-times');
            });
        });
    }
});
