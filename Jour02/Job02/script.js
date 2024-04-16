button.addEventListener("click", showhide);

function showhide() {
    var citation = document.getElementById("citation");
    // Vérifie si l'article est déjà affiché
    if (citation.style.display === "block") {
        // Cache l'article s'il est déjà affiché
        citation.style.display = "none";
    } else {
        // Affiche l'article s'il est caché
        citation.style.display = "block";
    }
}
