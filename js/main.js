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
});

