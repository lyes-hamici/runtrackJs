document.addEventListener("DOMContentLoaded", function() {
    // Sélection du bouton et de l'élément à afficher
    const button = document.getElementById('showText');
    const quote = document.getElementById('quote');
  
    // Ajout d'un écouteur d'événements sur le bouton
    button.addEventListener('click', function() {
      // Affichage du texte en changeant la propriété de style 'display' à 'block'
      quote.style.display = 'block';
    });
  
    // Pour le bouton avec jQuery
    $("#hideText").click(function() {
      $("#quote").hide();
    });
  });
  