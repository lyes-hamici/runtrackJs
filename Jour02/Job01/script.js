document.addEventListener("DOMContentLoaded", function() {
    function citation() {
        // Récupère le contenu de l'élément ayant l'ID "citation"
        var citationText = document.getElementById("citation").innerText;
        // Affiche le contenu dans la console de développement
        console.log(citationText);
      }
      
      // Ajoute un écouteur d'événements au bouton ayant l'ID "button"
      document.getElementById("button").addEventListener("click", citation);
      
});