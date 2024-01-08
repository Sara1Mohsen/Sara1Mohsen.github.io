document.addEventListener('DOMContentLoaded', function () {
    var scrollingContainer = document.getElementById('scrolling');

    scrollingContainer.addEventListener('animationiteration', function () {
        // Restart the animation when it completes
        scrollingContainer.style.animation = 'none';
        void scrollingContainer.offsetWidth; // Trigger reflow
        scrollingContainer.style.animation = 'scrolling 15s linear infinite';
    });
});