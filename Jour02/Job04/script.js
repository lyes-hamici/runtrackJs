// Sélectionne le textarea
var textarea = document.getElementById("keylogger");

// Ajoute un écouteur d'événements pour les touches pressées
document.addEventListener("keypress", function(event) {
    // Récupère la lettre pressée
    var letter = String.fromCharCode(event.which).toLowerCase();
    
    // Vérifie si le focus est dans le textarea
    if (document.activeElement === textarea) {
        // Ajoute la lettre deux fois dans le textarea
        textarea.value += letter ;
    } else {
        // Ajoute la lettre une seule fois dans le textarea
        textarea.value += letter;
    }
});
