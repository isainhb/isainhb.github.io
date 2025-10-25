// Frame-busting (best-effort client-side mitigation against clickjacking).
// Note: this complements server-side X-Frame-Options or CSP frame-ancestors when available.
(function(){
    try {
        if (window.top !== window.self) {
            // Try to break out of the frame
            window.top.location = window.self.location.href;
        }
    } catch (e) {
        // If direct navigation is blocked (cross-origin), hide the page to reduce interaction surface
        document.addEventListener('DOMContentLoaded', function(){
            try { document.documentElement.style.display = 'none'; } catch(err){}
        });
    }
})();

