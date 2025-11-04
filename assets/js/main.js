(function($) {

	var currentMainUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;

	var	$window = $(window),
		$body = $('body');

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

		// Initialize i18n
		if (window.i18n && typeof window.i18n.init === 'function') {
			window.i18n.init();
		}

		// Process all modals
		// Use sanitizeHTML from utils.js to sanitize the HTML content
		$('#pf-hipoteca-bancoppel').click(function(e) {
			e.preventDefault();
			Swal.fire({
				title: i18n.t('pf_hipoteca_title'),
				html: sanitizeHTML(i18n.t('pf_hipoteca_html')),
				imageUrl: new URL("images/projects/hipoteca_bancoppel.webp", currentMainUrl).href,
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: i18n.t('pf_hipoteca_imageAlt'),
			});
		});

		$('#pf-yave').click(function(e) {
			e.preventDefault();
			Swal.fire({
				title: i18n.t('pf_yave_title'),
				html: sanitizeHTML(i18n.t('pf_yave_html')),
				imageUrl: new URL("images/projects/yave.webp", currentMainUrl).href,
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: i18n.t('pf_yave_imageAlt'),
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
				title: i18n.t('pf_futuro_title'),
				html: sanitizeHTML(i18n.t('pf_futuro_html')),
				imageUrl: new URL("images/projects/futuro-sin-humo.webp", currentMainUrl).href,
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: i18n.t('pf_futuro_imageAlt'),
			});
		});


		$('#pf-neuland').click(function(e) {
			e.preventDefault();
			Swal.fire({
				title: i18n.t('pf_neuland_title'),
				html: sanitizeHTML(i18n.t('pf_neuland_html')),
				imageUrl: new URL("images/projects/neuland_small.webp", currentMainUrl).href,
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: i18n.t('pf_neuland_imageAlt'),
			});
		});

		$('#pf-expansion').click(function(e) {
			e.preventDefault();
			Swal.fire({
				title: i18n.t('pf_expansion_title'),
				html: sanitizeHTML(i18n.t('pf_expansion_html')),
				imageUrl: new URL("images/projects/expansion_mx.webp", currentMainUrl).href,
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: i18n.t('pf_expansion_imageAlt'),
			});
		});

		$('#pf-espectaculos-televisa').click(function(e) {
			e.preventDefault();
			Swal.fire({
				title: i18n.t('pf_espectaculos_title'),
				html: sanitizeHTML(i18n.t('pf_espectaculos_html')),
				imageUrl: new URL("images/projects/espectaculos_televisa.webp", currentMainUrl).href,
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: i18n.t('pf_espectaculos_imageAlt'),
			});
		});

		$('#pf-caminos-libertad').click(function(e) {
			e.preventDefault();
			Swal.fire({
				title: i18n.t('pf_caminos_title'),
				html: sanitizeHTML(i18n.t('pf_caminos_html')),
				imageUrl: new URL("images/projects/caminos_libertad.webp", currentMainUrl).href,
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: i18n.t('pf_caminos_imageAlt'),
			});
		});

		// Personal projects
		$('#pf-chopped-tomato').click(function(e) {
			e.preventDefault();
			Swal.fire({
				title: i18n.t('pf_chopped_tomato_title'),
				html: sanitizeHTML(i18n.t('pf_chopped_tomato_html')),
				imageUrl: new URL("images/projects/chopped_tomato.webp", currentMainUrl).href,
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: i18n.t('pf_chopped_tomato_imageAlt'),
				confirmButtonText: i18n.t('pf_chopped_confirm'),
				showCancelButton: true,
				cancelButtonText: i18n.t('pf_chopped_cancel'),
				cancelButtonColor: 'rgba(164, 164, 164, 1)',
			}).then((result) => {
				if (result.isConfirmed) {
					// Open link in new tab
					window.open("https://hagenhb.itch.io/chopped-tomato", "_blank");
				}
			});
		});
})(jQuery);