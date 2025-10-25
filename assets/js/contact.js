document.addEventListener('DOMContentLoaded', function() {
	var user = 'isain.hernandez';
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
