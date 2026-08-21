const translations = {
    en: {
        "hero-title": "Hi, i’m <span>Luis Castañeda</span>",
        "hero-tagline": "Full Stack Developer",
        "hero-desc": "Student of Software Engineering at UVEG, with experience in programming with Java and Spring-Boot.",
        "hero-btn-projects": "View my projects",
        "hero-btn-about": "About me",
        "hero-btn-contact": "Let's talk",
        "projects-title": "My Projects",
        "project-docflow-desc": "Application for managing and processing documents in corporate environments.",
        "project-microservice-desc": "Microservices architecture with Eureka, Gateway, and communication between services.",
        "project-crud-desc": "Complete CRUD with Spring Data JPA, validations, and security with Spring Security.",
        "project-code": "View code →",
        "about-title": "About Me",
        "about-p1": "I’m Luis Miguel Castañeda López, a Software Development Engineering student at UVEG and a Full-Stack Developer with a strong focus on backend development.",
        "about-p2": "While I’m still building my professional experience in the IT industry, I’ve developed several personal projects using technologies such as Java, Spring Boot, MySQL, MariaDB, Git, and GitHub. These projects have allowed me to put my knowledge into practice and strengthen my skills in software development, databases, APIs, and version control.",
        "about-p3": "I’m passionate about learning, solving problems, and building reliable software while continuously improving my technical skills.",
        "skills-title": "Skills",
        "skills-devops": "DevOps & Tools",
        "skills-learning": "Currently Learning & Exploring",
        "contact-title": "Let's talk",
        "contact-desc": "Do you have a project in mind? I'm open to new opportunities",
        "contact-email": "Email",
        "email-copied": "Copied!"
    },
    es: {
        "hero-title": "Hola, soy <span>Luis Castañeda</span>",
        "hero-tagline": "Desarrollador Full Stack",
        "hero-desc": "Estudiante de Ingeniería en Desarrollo de Software en la UVEG, con experiencia en programación con Java y Spring Boot.",
        "hero-btn-projects": "Ver mis proyectos",
        "hero-btn-about": "Sobre mí",
        "hero-btn-contact": "Hablemos",
        "projects-title": "Mis Proyectos",
        "project-docflow-desc": "Aplicación para la gestión y trámite de documentos en entornos corporativos.",
        "project-microservice-desc": "Arquitectura de microservicios con Eureka, Gateway y comunicación entre servicios.",
        "project-crud-desc": "CRUD completo con Spring Data JPA, validaciones y seguridad con Spring Security.",
        "project-code": "Ver código →",
        "about-title": "Sobre Mí",
        "about-p1": "Soy Luis Miguel Castañeda López, estudiante de Ingeniería en Desarrollo de Software en la UVEG y Desarrollador Full-Stack con un fuerte enfoque en el desarrollo backend.",
        "about-p2": "Aunque todavía estoy construyendo mi experiencia profesional en la industria de TI, he desarrollado varios proyectos personales utilizando tecnologías como Java, Spring Boot, MySQL, MariaDB, Git y GitHub. Estos proyectos me han permitido poner en práctica mis conocimientos y fortalecer mis habilidades en desarrollo de software, bases de datos, APIs y control de versiones.",
        "about-p3": "Me apasiona aprender, resolver problemas y crear software confiable mientras mejoro continuamente mis habilidades técnicas.",
        "skills-title": "Habilidades",
        "skills-devops": "DevOps y Herramientas",
        "skills-learning": "Actualmente Aprendiendo y Explorando",
        "contact-title": "Hablemos",
        "contact-desc": "¿Tienes un proyecto en mente? Estoy abierto a nuevas oportunidades",
        "contact-email": "Correo",
        "email-copied": "¡Copiado!"
    }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;

    // Update text for all translatable elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if element content contains html tag (e.g. <span>)
            if (translations[lang][key].includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update active button classes
    const btnEn = document.getElementById('btn-en');
    const btnEs = document.getElementById('btn-es');
    if (btnEn && btnEs) {
        if (lang === 'en') {
            btnEn.classList.add('active');
            btnEs.classList.remove('active');
        } else {
            btnEs.classList.add('active');
            btnEn.classList.remove('active');
        }
    }
}

function copyEmail(event, element) {
    event.preventDefault();

    navigator.clipboard.writeText("castaluismi@gmail.com")
        .then(() => {
            const text = element.querySelector("span");
            const copiedText = translations[currentLang]['email-copied'] || "Copied!";
            const originalText = translations[currentLang]['contact-email'] || "Email";

            text.textContent = copiedText;

            setTimeout(() => {
                text.textContent = originalText;
            }, 2000);
        });
}

// Theme management
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    
    // Highlight active theme button
    document.querySelectorAll('.theme-switcher button').forEach(button => {
        if (button.getAttribute('data-theme-btn') === theme) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Initial configuration
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Theme
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);

    // Initialize Language
    const savedLang = localStorage.getItem('portfolio-lang');
    if (!savedLang) {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('es')) {
            currentLang = 'es';
        } else {
            currentLang = 'en';
        }
    } else {
        currentLang = savedLang;
    }
    setLanguage(currentLang);
});