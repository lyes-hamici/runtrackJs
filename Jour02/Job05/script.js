document.addEventListener('DOMContentLoaded', (event) => {
    const footer = document.querySelector('footer');

    window.onscroll = function() {
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        let currentScroll = window.scrollY;
        let scrollPercentage = (currentScroll / maxScroll) * 100;

        // Calculer la teinte en fonction du pourcentage de défilement
        let hue = (scrollPercentage / 100) * 360;

        // Définir la couleur du footer en utilisant hsl() avec la teinte calculée
        footer.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    };
});
