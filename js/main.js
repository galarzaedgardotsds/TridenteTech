/**
 * TridenteTech - Interactividad y Navegación
 */

document.addEventListener('DOMContentLoaded', () => {
    // Tema persistente y respetuoso de la preferencia del sistema.
    const themeToggle = document.querySelector('.theme-toggle');
    const savedTheme = localStorage.getItem('tridentetech-theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const setTheme = (theme) => {
        document.documentElement.dataset.theme = theme;
        if (themeToggle) {
            const isLight = theme === 'light';
            themeToggle.textContent = isLight ? '☾' : '☀';
            themeToggle.setAttribute('aria-label', isLight ? 'Activar tema oscuro' : 'Activar tema claro');
        }
    };
    setTheme(savedTheme || (prefersLight ? 'light' : 'dark'));
    themeToggle?.addEventListener('click', () => {
        const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
        localStorage.setItem('tridentetech-theme', nextTheme);
    });

    // Menú compacto para pantallas pequeñas.
    const menuToggle = document.querySelector('.menu-toggle');
    const mainMenu = document.querySelector('nav ul');
    menuToggle?.addEventListener('click', () => {
        const isOpen = mainMenu.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    });
    mainMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
        mainMenu.classList.remove('is-open');
        menuToggle?.setAttribute('aria-expanded', 'false');
    }));
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
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const status = contactForm.querySelector('.form-status');
            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Enviando...';
            }
            status.className = 'form-status';
            status.textContent = '';
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST', body: new FormData(contactForm), headers: { Accept: 'application/json' }
                });
                if (!response.ok) throw new Error('No se pudo enviar el formulario');
                contactForm.reset();
                status.classList.add('success');
                status.textContent = '¡Mensaje enviado! El equipo te responderá pronto.';
            } catch (error) {
                status.classList.add('error');
                status.textContent = 'No se pudo enviar el mensaje. Probá de nuevo en unos minutos.';
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Enviar Mensaje';
                }
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

