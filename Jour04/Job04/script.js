document.addEventListener("DOMContentLoaded", function () {
    const updateButton = document.getElementById("updateButton");
    const userTableBody = document.querySelector("#userTable tbody");
  
    // Fonction pour mettre à jour le tableau avec les données des utilisateurs
    function updateTable(userData) {
      // Effacer le contenu actuel du tableau
      userTableBody.innerHTML = "";
  
      // Boucler à travers les données des utilisateurs et les ajouter au tableau
      userData.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.first_name}</td>
          <td>${user.last_name}</td>
          <td>${user.email}</td>
        `;
        userTableBody.appendChild(row);
      });
    }
  
    // Gérer le clic sur le bouton "Update"
    updateButton.addEventListener("click", function () {
      fetch("utilisateur.json")
        .then(response => response.json())
        .then(data => updateTable(data))
        .catch(error => console.error("Error fetching data:", error));
    });
  
    // Charger le tableau avec les données des utilisateurs au chargement initial
    fetch("utilisateur.json")
      .then(response => response.json())
      .then(data => updateTable(data))
      .catch(error => console.error("Error fetching initial data:", error));
  });
  