function tri(numbers, order) {
    if (order === 'asc') {
        numbers.sort((a, b) => a - b); // Tri ascendant
    } else if (order === 'desc') {
        numbers.sort((a, b) => b - a); // Tri descendant
    } else {
        console.error("Le paramètre 'order' doit être 'asc' ou 'desc'");
    }
    return numbers;
}

// Exemple d'utilisation :
let tableau = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log("Tableau non trié :", tableau);
console.log("Tri ascendant :", tri(tableau.slice(), 'asc'));
console.log("Tri descendant :", tri(tableau.slice(), 'desc'));