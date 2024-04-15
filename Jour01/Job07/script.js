function jourTravaille(date) {
    // Récupérer le jour de la semaine (0 pour dimanche, 1 pour lundi, ..., 6 pour samedi)
    const jourSemaine = date.getDay();
    
    // Récupérer le jour, le mois et l'année de la date
    const jour = date.getDate();
    const mois = date.getMonth() + 1; // Les mois commencent à partir de 0
    const annee = date.getFullYear();

    // Liste des jours fériés en 2024
    const joursFeries = [
        "01-01", // Nouvel An
        "04-04", // Lundi de Pâques
        "05-01", // Fête du Travail
        "05-08", // Victoire 1945
        "05-30", // Ascension
        "06-10", // Lundi de Pentecôte
        "07-14", // Fête Nationale
        "08-15", // Assomption
        "11-01", // Toussaint
        "11-11", // Armistice
        "12-25"  // Noël
    ];

    // Formater le jour et le mois pour correspondre au format dans la liste des jours fériés
    const dateFormatted = (jour < 10 ? '0' : '') + jour + '-' + (mois < 10 ? '0' : '') + mois;

    // Vérifier si la date est un jour férié
    if (joursFeries.includes(dateFormatted)) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié.`);
    } else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, ${jour}/${mois}/${annee} est un week-end.`);
    } else {
        console.log(`Oui, ${jour}/${mois}/${annee} est un jour travaillé.`);
    }
}

// Exemple d'utilisation de la fonction
const maDate1 = new Date(2024, 0, 1); // 1er janvier 2024
const maDate2 = new Date(2024, 0, 2); // 2er janvier 2024
const maDate3 = new Date(2024, 3, 14); // dimanche

jourTravaille(maDate1);
jourTravaille(maDate2);
jourTravaille(maDate3);