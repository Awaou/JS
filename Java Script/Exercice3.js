function estPremier(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function afficherNombresPremiers() {
    let nombresPremiers = [];
    for (let i = 1; i <= 100; i++) {
        if (estPremier(i)) {
            nombresPremiers.push(i);
        }
    }
    alert("Nombres premiers entre 1 et 100 : " + nombresPremiers.join(", "));
}


function afficherFacteurs() {
    let nombre = parseInt(prompt("Entrez un nombre :"));
    let facteurs = [];

    for (let i = 1; i <= nombre; i++) {
        if (nombre % i === 0) {
            facteurs.push(i);
        }
    }

    alert("Facteurs de " + nombre + " : " + facteurs.join(", "));
}


function calculerMoyenne() {
    let somme = 0, count = 0, nombre;

    while (true) {
        let input = prompt("Entrez un nombre positif (ou un nombre négatif pour arrêter) :");

        if (input === null) { // Si l'utilisateur clique sur "Annuler"
            break;
        }

        nombre = parseFloat(input);

        if (!isNaN(nombre)) {
            if (nombre < 0) {
                break; // On arrête si l'utilisateur entre un nombre négatif
            }
            somme += nombre;
            count++;
        } else {
            alert("Veuillez entrer un nombre valide !");
        }
    }

    if (count > 0) {
        let moyenne = (somme / count).toFixed(2);
        alert("La moyenne des nombres positifs saisis est : " + moyenne);
    } else {
        alert("Aucun nombre valide n'a été saisi.");
    }
}
