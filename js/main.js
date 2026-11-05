/**
 * TridenteTech - Interactividad y Navegación
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Scrollspy para resaltar la sección activa en el menú de index.html
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('header nav ul a');

    if (sections.length > 0 && navLinks.length > 0) {
        const updateActiveNav = () => {
            const scrollY = window.pageYOffset || document.documentElement.scrollTop;

            sections.forEach((current) => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 120;
                const sectionId = current.getAttribute('id');

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    navLinks.forEach((link) => {
                        const href = link.getAttribute('href');
                        if (href === `#${sectionId}` || href === `index.html#${sectionId}`) {
                            link.classList.add('active');
                        } else if (href.startsWith('#')) {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        };

        window.addEventListener('scroll', updateActiveNav, { passive: true });
    }

    // 2. Feedback visual al enviar el formulario de contacto
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Enviando...';
            }
        });
    }

    // 3. Animación suave de entrada al hacer scroll (Fade-in on scroll)
    const revealElements = document.querySelectorAll('.team-card, .skill-card, .project-card, .tech-stack-strip');
    
    if ('IntersectionObserver' in window && revealElements.length > 0) {
        revealElements.forEach((el) => el.classList.add('reveal-on-scroll'));

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target); // Solo anima la primera vez que aparece
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach((el) => observer.observe(el));
    }
});

