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

document.addEventListener('DOMContentLoaded', function() {
	var user = 'isain.hernandezb';
	var domain = 'gmail.com';
	var email = user + '@' + domain;
	var a = document.getElementById('contact-email');
	if (a) {
		a.setAttribute('href', 'mailto:' + email);
		a.setAttribute('target', '_blank');
		// rel nofollow reduce valor para scrapers/indexers
		a.setAttribute('rel', 'nofollow noopener noreferrer');
	}
});
