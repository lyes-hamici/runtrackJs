// Sélectionne le bouton et le paragraphe
var button = document.getElementById("button");
var compteur = document.getElementById("compteur");

// Initialise le compteur
var count = 0;

// Ajoute un gestionnaire d'événements pour le clic sur le bouton
button.addEventListener("click", addOne);

// Définit la fonction pour ajouter un à chaque clic
function addOne() {
    // Incrémente le compteur
    count++;
    // Met à jour le texte du paragraphe avec la nouvelle valeur du compteur
    compteur.textContent = count;
}
