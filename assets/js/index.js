document.addEventListener("DOMContentLoaded", function(event) {
    var imgAquiTemCodeClub = document.getElementById('aqui-tem-code-club');

    function animateImage() {
        if (imgAquiTemCodeClub.classList.contains('pulse')) {
            imgAquiTemCodeClub.classList.remove('pulse');
        } else {
            imgAquiTemCodeClub.classList.add('pulse');
        }
    }

    window.setInterval(animateImage, 1000);
});