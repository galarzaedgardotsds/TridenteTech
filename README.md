# TridenteTech - Website de la Consultora IT

Sitio web oficial y portafolio del equipo **TridenteTech**, desarrollado como proyecto de consultora IT para la materia de informática.

---

## 👥 Integrantes del Equipo

- **Edgar Galarza** — Product Owner & Desarrollo Web
- **Agustin Sattler** — Developer & Lógica Algorítmica
- **Luciano Ifran** — Scrum Master & Control de Calidad

---

## 🎯 Sprint Goal

> Crear y publicar la primera versión de la página web de nuestra consultora IT TridenteTech aplicando los conocimientos de lógica y programación en Lenguaje C adquiridos en el curso junto con asistencia autorizada de Inteligencia Artificial, donde se presente al equipo, se detallen nuestros servicios y se alojen nuestros proyectos actuales y futuros como portafolio grupal con un medio de contacto funcional.

---

## 📝 Proceso de Desarrollo (Paso a Paso)

### 1. Definición de la Consultora e Identidad
- Definimos el nombre del equipo: **TridenteTech** (en referencia a los tres integrantes).
- Establecimos la identidad visual de la consultora: una estética moderna en modo oscuro (tonos pizarra y azul) con isotipo en formato SVG.
- Planificamos las páginas necesarias del sitio: inicio con propuesta de valor, equipo, servicios, proyectos y contacto.

### 2. Estructura HTML Semántica y Accesibilidad
- Maquetamos `index.html` organizando el contenido en secciones claras (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Corregimos el anidamiento inválido (eliminando botones dentro de etiquetas de enlace) y creamos clases `.btn` reutilizables.
- Implementamos accesibilidad: añadimos etiquetas `<label>` con sus respectivos `id` en el formulario para lectores de pantalla, clases `.sr-only` y enfoque visible mediante teclado (`:focus-visible`).
- Integramos un **favicon en formato SVG** y metaetiquetas de descripción para la web.

### 3. Diseño y Estilos con CSS Moderno
- Centralizamos el diseño con **variables CSS (`:root`)** para facilitar cambios de color, bordes y efectos de sombra.
- Diseñamos una barra de navegación fija (*sticky*) con efecto de desenfoque (*backdrop-filter*).
- Implementamos una cuadrícula adaptable (*responsive*) con CSS Grid y Flexbox para que la página se vea correctamente tanto en computadoras como en teléfonos celulares.
- Reemplazamos los emojis convencionales por **iconos vectoriales SVG** nítidos que se renderizan igual en cualquier dispositivo.

### 4. Presentación del Equipo con Fotografías
- Agregamos la sección del equipo con tarjetas individuales, detallando sus roles y tecnologías.
- Incorporamos las **fotos de perfil reales** de cada integrante en formato circular con borde celeste y encuadre centrado.

### 5. Servicios de la Consultora IT
- Añadimos la sección de servicios describiendo qué ofrece TridenteTech y a quiénes va dirigido:
  - **Desarrollo Web & Portales:** Sitios modernos para pymes y comercios.
  - **Software & Gestión a Medida:** Soluciones para institutos y equipos de trabajo.
  - **Consultoría con Asistencia de IA:** Optimización de flujos y prototipado rápido para emprendimientos.

### 6. Portafolio de Proyectos
- Diseñamos la grilla de proyectos clasificando el estado de cada uno:
  - **01. Website TridenteTech** (*Completado*): La propia plataforma web que estamos presentando.
  - **02. Edgar Finanzas PRO 💎** (*Proyecto Piloto / PWA*): Aplicación web progresiva orientada a dispositivos móviles para finanzas personales y grupales (gastos en cuotas, presupuestos, modo offline y división de gastos).
  - **03. Organizador de Tareas para el Instituto** (*Próximo Proyecto / En Planificación*): Idea de sistema simulado para ayudar a estudiantes a ordenar exámenes y entregas con fechas y prioridades. Creamos `proyecto.html` para explicar cómo lo pensamos desarrollar a futuro.

### 7. Formulario de Contacto Activo
- Creamos `contacto.html` con un formulario real conectado a la plataforma **Formspree** para que cualquier usuario o potencial cliente pueda enviar un mensaje y llegue directamente al correo del equipo.

### 8. Interactividad con JavaScript
- Creamos el archivo `js/main.js` para añadir dos mejoras visuales:
  - **Scrollspy:** Detecta el desplazamiento de la página y resalta en el menú la sección en la que se encuentra el usuario.
  - **Feedback al enviar:** Cambia el botón a *"Enviando..."* y lo desactiva temporalmente para evitar mensajes duplicados.

---

## 📁 Estructura de Archivos del Proyecto

```text
proyecto1/
│
├── index.html          # Página principal (Inicio, Equipo, Servicios, Proyectos)
├── contacto.html       # Página con el formulario de contacto activo
├── proyecto.html       # Página con la planificación del futuro Organizador de Tareas
│
├── css/
│   └── styles.css      # Hoja de estilos con variables CSS y diseño responsive
│
├── js/
│   └── main.js         # Script de navegación (Scrollspy) y feedback del formulario
│
├── img/                # Fotos del equipo
│   ├── edgar.jpg       # Foto de Edgar Galarza
│   ├── agustin.jpg     # Foto de Agustin Sattler
│   └── luciano.jpg     # Foto de Luciano Ifran
│
└── README.md           # Registro del proyecto y proceso de desarrollo
```

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructura semántica y accesible.
- **CSS3:** Variables CSS, diseño responsive con Grid y Flexbox.
- **JavaScript:** Interactividad y mejora de experiencia de usuario.
- **Formspree:** Servicio para recepción real de mensajes del formulario.
- **Google Fonts (Poppins):** Tipografía moderna para todo el sitio.
- **Inteligencia Artificial:** Asistencia pedagógica autorizada en maquetación, buenas prácticas y accesibilidad.
