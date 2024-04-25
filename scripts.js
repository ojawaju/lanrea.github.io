document.addEventListener("DOMContentLoaded", function() {
    // Function to handle the deep link attempt
    function tryDeepLink(deepLink) {
        var iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = deepLink;
        document.body.appendChild(iframe);

        // Wait for a moment to check if the app can handle the deep link
        setTimeout(function() {
            // Redirect to a fallback page if the app is not installed
            window.location.href = '/download.html'; // Update '/download.html' to the URL of your download page
        }, 2500); // Adjust time as needed
    }

    // Detect user's device and set appropriate deep link
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        tryDeepLink('intent://view#Intent;scheme=ojawaju;package=com.ojawaju.app;end');
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        tryDeepLink('ojawaju://');
    }
});
