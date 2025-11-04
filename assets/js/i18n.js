(function(window){
  var LANG_KEY = 'site_lang';
  var defaultLang = 'es';
  var translations = {
    es: {
      "lang_label": "ES",
      "lang_label_alt": "EN",
      "header_title_html": "<strong>Isain Hernández</strong><br/>Desarrollador Backend Senior",
      "header_subtitle": "Ingeniería de producto y soluciones escalables en Python y PHP. Enfoque en arquitectura, rendimiento y liderazgo técnico.",
      "header_more": "Más información",

      "me_photo_alt": "Foto de Isain Hernández",
      "about_me_title": "Sobre mí",
      "about_me_html": "<p>Egresado del Instituto Politécnico Nacional, ESCOM.</p>" +
							"<p>Backend Developer Senior 5+ a&ntilde;os de experiencia, complementados con 10+ años de experiencia en desarrollo web, especializado en la creación de soluciones escalables y de alto rendimiento utilizando Python (Django, FastAPI) y PHP (Laravel).</p>" +
							"<p>Mi propuesta de valor se centra en una fuerte mentalidad de producto, que me permite transformar objetivos de negocio complejos en arquitecturas técnicas robustas y eficientes.</p>" +
							"<p>Destaco en el liderazgo técnico, el fomento de buenas prácticas (a través de revisiones de código y CI/CD) y la colaboración efectiva con equipos multidisciplinarios para asegurar la entrega de valor con alto grado de responsabilidad y calidad. Experiencia en entornos cloud (AWS) e integración de herramientas de IA para optimizar la productividad del equipo.</p>",
      
      "skills_title": "Experiencia",
      "skills_backend_title": "Back End",
      "skills_backend_html": "<li>Python (Django, FastAPI)</li>" +
								"<li>SQL y gestores de BD (PostgreSQL, MySQL)</li>" +
								"<li>API REST y JWT</li>" +
								"<li>PHP (Laravel)</li>",
      "skills_frontend_title": "Front End",
      "skills_frontend_html": "<li>JS (Jquery, Vue.js)</li><li>HTML y CSS para maquetado de sitios</li>",
      "skills_other_title": "Otros Skills",
      "skills_other_html": "<li>Certifiaciones: AWS Cloud Practitioner</li>" +
								"<li>Git (GitHub, GitLab)</li>" +
								"<li>Docker</li>" +
								"<li>Metodolog&iacute;as &aacute;giles: Scrum, Kanban, Scrumban</li>" +
								"<li>Uso de herramientas de IA</li>",

      "pf_title": "Portafolio",
      "pf_hipoteca_title": "Hipoteca Bancoppel",
      "pf_hipoteca_html": "<p>Landing hipotecaria.</p>" +
					"<p>Backend desarrollado en FastAPI, con arquitectura de microservicios para separar funcionalidades (envío de documentos, historial crediticio, etc).</p>" +
					"<p>BD con MySQL, pruebas unitarias con Pytest y CI/CD con GitHub.</p>",
      "pf_hipoteca_imageAlt": "Hipoteca BanCoppel - captura",

      "pf_yave_titleproject": "Plataforma Yave",
      "pf_yave_title": "Yave",
      "pf_yave_html": "<p>Sitio web hipotecario en línea.</p>" +
          "<p>Backend desarrollado en Python/Django, con una arquitectura híbrida (monolito + microservicios) para ciertas funcionalidades.</p>" +
          "<p>Implementación de API REST con autenticación JWT. Integraciones con terceros (CRM, historial crediticio, entidad reguladora PLD, pasarela de pago, etc.).<br/>Desarrollo de herramientas internas con HTML, CSS y JS (Vue.js). CI/CD con GitHub y monitoreo de errores con Sentry.</p>",
      "pf_yave_imageAlt": "Yave",

      "pf_futuro_title": "Futuro sin humo",
      "pf_futuro_html": "<p>Landing para una campaña de Philip Morris</p>" +
					"<p>Registro de alrededor de 500 usuarios diarios.</p>" +
					"<p>Desarrollado con Laravel y JS (jQuery).</p>",
      "pf_futuro_imageAlt": "Futuro sin humo - captura",

      "pf_neuland_title": "Neuland",
      "pf_neuland_html": "<p>Sitio web de una tienda virtual para Philip Morris</p>" +
					"<p>Contaba con juegos en los que los usuarios ganaban puntos canjeables por productos físicos, además de secciones de videos y notas.</p>" +
					"<p>Desarrollado con WordPress (partes del backend hechas a medida) y un Single Sign-On (SSO) para manejar la autenticación de usuarios entre dos sitios.</p>",
      "pf_neuland_imageAlt": "Neuland - captura",

      "pf_expansion_title": "Expansión",
      "pf_expansion_html": "<p>Portal para Grupo Expansión.</p>" +
					"<p>Sitio de noticias.</p>" +
					"<p>Uso de Java para modificar un CMS propietario.</p>",
      "pf_expansion_imageAlt": "Expansión - captura",

      "pf_espectaculos_title": "Espectáculos Televisa",
      "pf_espectaculos_html": "<p>Sitio para notas de espectáculos.</p>" +
					"<p>Actualización del sitio de esmas.com</p>" +
					"<p>Uso de PHP, JS y CSS.</p>",
      "pf_espectaculos_imageAlt": "Espectáculos Televisa - captura",

      "pf_caminos_title": "Caminos de la libertad",
      "pf_caminos_html": "<p>Portal para notas periodísticas.</p>" +
					"<p>Desarrollo del sitio de notas y del back office para gestionar las notas.</p>" +
					"<p>PHP (CodeIgniter), MySQL, HTML, CSS y JS(jQuery).</p>",
      "pf_caminos_imageAlt": "Caminos de la libertad - captura",

      "pf_personal_title": "Proyectos personales",
      "pf_chopped_tomato_title": "Chopped Tomato",
      "pf_chopped_tomato_desc": "Desarrollado en un fin de semana entre 3 personas para un Game Jam.",
      "pf_chopped_tomato_btntxt": "Ver",
      "pf_chopped_tomato_html": "<p>Videojuego 2D desarrollado en Godot Engine 3.5 durante un fin de semana como parte del Game Jam 34, con un equipo de 3 personas.</p>",
      "pf_chopped_confirm": "Ir al sitio",
      "pf_chopped_cancel": "Ok",
      "pf_chopped_tomato_imageAlt": "Chopped Tomato - captura",

      "footer_contact_creator": "Sitio web creado por Isain Hernández",
      "footer_contact_disclaimer": "Los logotipos, marcas y materiales visuales mostrados son propiedad de sus respectivos titulares y se utilizan únicamente con fines ilustrativos y de portafolio."
    },
    en: {
      "lang_label": "EN",
      "lang_label_alt": "ES",
      "header_title_html": "<strong>Isain Hernández</strong><br/>Senior Backend Developer",
      "header_subtitle": "Product engineering and scalable backend solutions in Python and PHP. Focus on architecture, performance and technical leadership.",
      "header_more": "More information",

      "me_photo_alt": "Isain Hernández photo",
      "about_me_title": "About me",
      "about_me_html": "<p>Graduated from the Instituto Politécnico Nacional, ESCOM (Mexico City).</p>" +
							"<p>Senior Backend Developer with 5+ years of experience, complemented by 10+ years of experience in web development, specializing in creating scalable and high-performance solutions using Python (Django, FastAPI) and PHP (Laravel).</p>" +
							"<p>My value proposition is centered around a strong product mindset, allowing me to transform complex business objectives into robust and efficient technical architectures.</p>" +
							"<p>I stand out in technical leadership, promoting best practices (through code reviews and CI/CD), and effectively collaborating with multidisciplinary teams to ensure the delivery of value with a high degree of responsibility and quality. Experience in cloud environments (AWS) and integrating AI tools to optimize team productivity.</p>",

      "skills_title": "Experience",
      "skills_backend_title": "Back End",
      "skills_backend_html": "<li>Python (Django, FastAPI)</li>" +
								"<li>SQL and database managers (PostgreSQL, MySQL)</li>" +
								"<li>API REST and JWT</li>" +
								"<li>PHP (Laravel)</li>",
      "skills_frontend_title": "Front End",
      "skills_frontend_html": "<li>JS (Jquery, Vue.js)</li><li>HTML and CSS for site layout</li>",
      "skills_other_title": "Other Skills",
      "skills_other_html": "<li>Certifications: AWS Cloud Practitioner</li>" +
								"<li>Git (GitHub, GitLab)</li>" +
								"<li>Docker</li>" +
								"<li>Agile methodologies: Scrum, Kanban, Scrumban</li>" +
								"<li>Use of AI tools</li>",

      "pf_title": "Portfolio",
      "pf_hipoteca_title": "Hipoteca Bancoppel",
      "pf_hipoteca_html": "<p>Mortgage landing page</p>" +
					"<p>Backend built with FastAPI, using a microservices architecture to separate functionalities (document submission, credit history, etc.).</p>" +
					"<p>Database with MySQL, unit tests with Pytest, and CI/CD with GitHub.</p>",
      "pf_hipoteca_imageAlt": "Hipoteca BanCoppel - screenshot",

      "pf_yave_titleproject": "Yave platform",
      "pf_yave_title": "Yave",
      "pf_yave_html": "<p>Online mortgage website</p>" +
          "<p>Backend developed in Python/Django, with a hybrid architecture (monolith + microservices) for certain functionalities.</p>" +
          "<p>Implementation of REST API with JWT authentication. Integrations with third parties (CRM, credit history, PLD regulatory entity, payment gateway, etc.).<br/>Development of internal tools with HTML, CSS, and JS (Vue.js). CI/CD with GitHub and error monitoring with Sentry.</p>",
      "pf_yave_imageAlt": "Yave",

      "pf_futuro_title": "Futuro sin humo",
      "pf_futuro_html": "<p>Landing page for a Philip Morris campaign</p>" +
					"<p>Registration of around 500 daily users.</p>" +
					"<p>Developed with Laravel and JS (jQuery).</p>",
      "pf_futuro_imageAlt": "Futuro sin humo - screenshot",

      "pf_neuland_title": "Neuland",
      "pf_neuland_html": "<p>Website for a virtual store for Philip Morris</p>" +
					"<p>Featured games where users could earn points redeemable for physical products, as well as sections for videos and articles.</p>" +
					"<p>Developed with WordPress (parts of the backend made to measure) and a Single Sign-On (SSO) to manage user authentication between two sites.</p>",
      "pf_neuland_imageAlt": "Neuland - screenshot",

      "pf_expansion_title": "Expansión",
      "pf_expansion_html": "<p>A news portal for Grupo Expansión</p>" +
					"<p>News site.</p>" +
					"<p>Use of Java to modify a proprietary CMS.</p>",
      "pf_expansion_imageAlt": "Expansión - screenshot",

      "pf_espectaculos_title": "Espectáculos Televisa",
      "pf_espectaculos_html": "<p>Site for entertainment news</p>" +
					"<p>Update of the esmas.com site.</p>" +
					"<p>Use of PHP, JS, and CSS.</p>",
      "pf_espectaculos_imageAlt": "Espectáculos Televisa - screenshot",

      "pf_caminos_title": "Caminos de la libertad",
      "pf_caminos_html": "<p>Portal for journalistic notes</p>" +
					"<p>Development of the notes site and the back office to manage the notes.</p>" +
					"<p>PHP (CodeIgniter), MySQL, HTML, CSS and JS (jQuery).</p>",
      "pf_caminos_imageAlt": "Caminos de la libertad - screenshot",

      "pf_personal_title": "Personal projects",
      "pf_chopped_tomato_title": "Chopped Tomato",
      "pf_chopped_tomato_desc": "Developed over a weekend by 3 people for a Game Jam.",
      "pf_chopped_tomato_btntxt": "View",
      "pf_chopped_tomato_html": "<p>2D video game developed in Godot Engine 3.5 over a weekend as part of Game Jam 34, with a team of 3 people.</p>",
      "pf_chopped_confirm": "Go to site",
      "pf_chopped_cancel": "Ok",
      "pf_chopped_tomato_imageAlt": "Chopped Tomato - screenshot",

      "footer_contact_creator": "Website created by Isain Hernández",
      "footer_contact_disclaimer": "The logos, brands, and visual materials shown are the property of their respective holders and are used only for illustrative and portfolio purposes.",
    }
  };

  function getStored() {
    return localStorage.getItem(LANG_KEY) || defaultLang;
  }
  function setStored(lang) {
    localStorage.setItem(LANG_KEY, lang);
  }

  function t(key) { // Main translation function
    var lang = getStored();
    return (translations[lang] && translations[lang][key]) || (translations[defaultLang] && translations[defaultLang][key]) || '';
  }

  function translatePage() { // Translates text inside the page
    var lang = getStored();
    // text nodes
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    // html blocks (use innerHTML)
    document.querySelectorAll('[data-i18n-html]').forEach(function(el){
      el.innerHTML = sanitizeHTML(t(el.getAttribute('data-i18n-html')));
    });
    // alt attributes
    document.querySelectorAll('[data-i18n-alt]').forEach(function(el){
      el.setAttribute('alt', t(el.getAttribute('data-i18n-alt')));
    });
    // placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });
    
    // Update active state of language buttons
    var btnEs = document.getElementById('lang-es');
    var btnEn = document.getElementById('lang-en');
    if (btnEs) btnEs.classList.toggle('active', lang === 'es');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  }


  function setLanguage(lang) {
    setStored(lang);
    translatePage();
    window.dispatchEvent(new CustomEvent('site-lang-changed', {detail: {lang: lang}}));
  }

  function init() {
    // If user already set a preference, keep it. Otherwise detect browser locale.
    // Requirement: if browser is Spanish -> 'es', otherwise -> 'en'.
    var preselectedByDetection = false;
    if (!localStorage.getItem(LANG_KEY)) {
      preselectedByDetection = true;
      var chosen = 'en';
      try {
        var langs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || navigator.userLanguage || 'en'];
        for (var i = 0; i < langs.length; i++) {
          var l = String(langs[i] || '').toLowerCase();
          if (l.indexOf('es') === 0) { // starts with 'es' (es, es-MX, etc.)
            chosen = 'es';
            break;
          }
        }
      } catch (e) {
        chosen = 'en';
      }
      setStored(chosen);
    }

    // attach click handlers and update button states after DOM is ready
    document.addEventListener('DOMContentLoaded', function(){
      var btnEs = document.getElementById('lang-es');
      var btnEn = document.getElementById('lang-en');

      // Helper to update visual state of buttons
      function updateButtonsState(currentLang) {
        if (btnEs) btnEs.classList.toggle('active', currentLang === 'es');
        if (btnEn) btnEn.classList.toggle('active', currentLang === 'en');
      }

      if (btnEs && btnEn) {
        btnEs.addEventListener('click', function(){
          setLanguage('es');
          updateButtonsState('es');
        });
        btnEn.addEventListener('click', function(){
          setLanguage('en');
          updateButtonsState('en');
        });

        // set initial active based on stored or detected preference
        updateButtonsState(getStored());

        // If we preselected language by detection, briefly animate the active button to draw attention
        if (preselectedByDetection) {
          var activeBtn = (getStored() === 'es') ? btnEs : btnEn;
          if (activeBtn) {
            // add detected class and remove after animation
            activeBtn.classList.add('detected');
            // Remove after animation duration (slightly longer than keyframes)
            setTimeout(function(){ activeBtn.classList.remove('detected'); }, 1200);
          }
        }
      }

      translatePage();
    });
  }

  window.i18n = {
    init: init,
    t: t,
    setLanguage: setLanguage,
    current: getStored
  };
})(window);