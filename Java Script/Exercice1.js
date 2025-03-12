let age = prompt("Entrez votre âge :");
age = parseInt(age);

if (age < 18) {
    alert("Vous êtes mineur.");
} else {
    alert("Vous êtes majeur.");
}


let nombre = prompt("Entrez un nombre :");
nombre = parseInt(nombre);

if (nombre % 2 === 0) {
    alert("Le nombre est pair.");
} else {
    alert("Le nombre est impair.");
}


let mois = prompt("Entrez un numéro de mois (1 à 12) :");
mois = parseInt(mois);

let nomsDesMois = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];

if (mois >= 1 && mois <= 12) {
    alert("Le mois correspondant est " + nomsDesMois[mois - 1]);
} else {
    alert("Numéro de mois invalide.");
}
