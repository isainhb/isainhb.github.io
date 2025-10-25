(function($) {

	var currentMainUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;

	var	$window = $(window),
		$body = $('body');

	// Simple HTML sanitizer (allow-list) to reduce XSS risk when using SweetAlert html content.
	// Allows basic formatting tags and safe attributes on <a> elements. Removes script/style nodes and
	// dangerous attributes (on*, javascript: hrefs).
	function sanitizeHTML(dirty) {
		var parser = new DOMParser();
		var doc = parser.parseFromString(dirty, 'text/html');

		var ALLOWED = {
			'P': [], 'BR': [], 'STRONG': [], 'EM': [], 'UL': [], 'OL': [], 'LI': [], 'A': ['href','target','rel']
		};

		function clean(node) {
			if (node.nodeType === Node.TEXT_NODE) return document.createTextNode(node.textContent);
			if (node.nodeType !== Node.ELEMENT_NODE) return document.createDocumentFragment();

			var name = node.nodeName.toUpperCase();
			if (!ALLOWED[name]) {
				// Replace disallowed element by its children (cleaned)
				var frag = document.createDocumentFragment();
				node.childNodes.forEach(function(c){ frag.appendChild(clean(c)); });
				return frag;
			}

			var el = document.createElement(name.toLowerCase());
			// copy allowed attributes
			ALLOWED[name].forEach(function(attr){
				if (node.hasAttribute && node.hasAttribute(attr)) {
					var val = node.getAttribute(attr);
					// Block javascript: hrefs
					if (attr === 'href' && /^javascript:/i.test(val)) return;
					el.setAttribute(attr, val);
				}
			});
			// sanitize children
			node.childNodes.forEach(function(c){ el.appendChild(clean(c)); });
			return el;
		}

		var container = document.createElement('div');
		doc.body.childNodes.forEach(function(n){ container.appendChild(clean(n)); });
		return container.innerHTML;
	}

		// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

		// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

		// Scrolly.
		$('.scrolly').scrolly();

		// Process all modals
		$('#pf-hipoteca-bancoppel').click(function(e) {
			e.preventDefault();
			Swal.fire({
				title: "Hipoteca Bancoppel",
				html: sanitizeHTML(`
					<p>Landing hipotecaria.</p>
					<p>Backend desarrollado en FastAPI, con arquitectura de microservicios para separar funcionalidades (envío de documentos, historial crediticio, etc).</p>
					<p>BD con MySQL, pruebas unitarias con Pytest y CI/CD con GitHub.</p>
				`),
				imageUrl: new URL("images/projects/hipoteca_bancoppel.webp", currentMainUrl).href,
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: "Hipoteca BanCoppel",
			});
		});

		$('#pf-yave').click(function(e) {
			e.preventDefault();
			Swal.fire({
				title: "Yave",
				html: sanitizeHTML(`
					<p>Sitio web hipotecario en línea.</p>
					<p>Backend desarrollado en Python/Django, con una arquitectura híbrida (monolito + microservicios) para ciertas funcionalidades.</p>
					<p>Implementación de API REST con autenticación JWT. Integraciones con terceros (CRM, historial crediticio, entidad reguladora PLD, pasarela de pago, etc.).<br/>Desarrollo de herramientas internas con HTML, CSS y JS (Vue.js). CI/CD con GitHub y monitoreo de errores con Sentry.</p>
				`),
				imageUrl: new URL("images/projects/yave.webp", currentMainUrl).href,
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: "Yave",
			});
		});

		// $('#pf-magnum').click(function(e) {
		// 	e.preventDefault();
		// 	Swal.fire({
		// 		title: "Holanda Magnum",
		// 		html: `
		// 			<p>Endpoint para recibir usuarios de una campaña para un producto</p>
		// 			<p>Registro de 300 mil usuarios en 3 días.</p>
		// 			<p>Laravel para el API REST y uso de Mailchimp para el envío de correos masivos.</p>
		// 		`,
		// 		imageUrl: new URL("images/projects/magnum.webp", currentMainUrl).href,
		// 		imageWidth: 400,
		// 		imageHeight: 200,
		// 		imageAlt: "Holanda Magnum",
		// 	});
		// });

		$('#pf-futuro').click(function(e) {
			e.preventDefault();
			Swal.fire({
				title: "Futuro sin humo",
				html: sanitizeHTML(`
					<p>Landing para una campaña de Philip Morris</p>
					<p>Registro de alrededor de 500 usuarios diarios.</p>
					<p>Desarrollado con Laravel y JS (jQuery).</p>
				`),
				imageUrl: new URL("images/projects/futuro-sin-humo.webp", currentMainUrl).href,
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: "Futuro sin humo",
			});
		});


		$('#pf-neuland').click(function(e) {
			e.preventDefault();
			Swal.fire({
				title: "Neuland",
				html: sanitizeHTML(`
					<p>Sitio web de una tienda virtual para Philip Morris</p>
					<p>Contaba con juegos en los que los usuarios ganaban puntos canjeables por productos físicos, además de secciones de videos y notas.</p>
					<p>Desarrollado con WordPress (partes del backend hechas a medida) y con un Single Sign-On (SSO) para manejar la autenticación de usuarios entre dos sitios.</p>
				`),
				imageUrl: new URL("images/projects/neuland_small.webp", currentMainUrl).href,
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: "Neuland",
			});
		});

		$('#pf-expansion').click(function(e) {
			e.preventDefault();
			Swal.fire({
				title: "Expansión",
				html: sanitizeHTML(`
					<p>Portal para Grupo Expansión.</p>
					<p>Sitio de noticias.</p>
					<p>Uso de Java para modificar un CMS propietario.</p>
				`),
				imageUrl: new URL("images/projects/expansion_mx.webp", currentMainUrl).href,
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: "Expansión",
			});
		});

		$('#pf-espectaculos-televisa').click(function(e) {
			e.preventDefault();
			Swal.fire({
				title: "Espectáculos Televisa",
				html: sanitizeHTML(`
					<p>Sitio para notas de espectáculos.</p>
					<p>Actualización del sitio de esmas.com</p>
					<p>Uso de PHP, JS y CSS.</p>
				`),
				imageUrl: new URL("images/projects/espectaculos_televisa.webp", currentMainUrl).href,
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: "Espectáculos Televisa",
			});
		});

		$('#pf-caminos-libertad').click(function(e) {
			e.preventDefault();
			Swal.fire({
				title: "Caminos de la libertad",
				html: sanitizeHTML(`
					<p>Portal para notas periodísticas.</p>
					<p>Desarrollo del sitio de notas y del back office para gestionar las notas.</p>
					<p>PHP (CodeIgniter), MySQL, HTML, CSS y JS(jQuery).</p>
				`),
				imageUrl: new URL("images/projects/caminos_libertad.webp", currentMainUrl).href,
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: "Caminos de la libertad",
			});
		});

		// Personal projects
		$('#pf-chopped-tomato').click(function(e) {
			e.preventDefault();
			Swal.fire({
				title: "Chopped Tomato",
				html: sanitizeHTML(`
					<p>Videojuego 2D desarrollado en Godot Engine 3.5 durante un fin de semana como parte del Game Jam 34, con un equipo de 3 personas.</p>
				`),
				imageUrl: new URL("images/projects/chopped_tomato.webp", currentMainUrl).href,
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: "Chopped Tomato",
				confirmButtonText: "Ir al sitio",
				showCancelButton: true,
				cancelButtonText: "Ok",
				cancelButtonColor: 'rgba(164, 164, 164, 1)',
			}).then((result) => {
				if (result.isConfirmed) {
					// Open link in new tab
					window.open("https://hagenhb.itch.io/chopped-tomato", "_blank");
				}
			});
		});
})(jQuery);