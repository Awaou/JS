for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let somme = 0;
let i = 1;

while (i <= 100) {
    somme += i;
    i++;
}

console.log("La somme des nombres de 1 à 100 est : " + somme);


let nombreSecret = Math.floor(Math.random() * 100) + 1;
let tentative;

do {
    tentative = parseInt(prompt("Devinez le nombre entre 1 et 100 :"));

    if (tentative < nombreSecret) {
        alert("Trop petit !");
    } else if (tentative > nombreSecret) {
        alert("Trop grand !");
    } else {
        alert("Bravo ! Vous avez trouvé le nombre secret.");
    }
} while (tentative !== nombreSecret);


let N = parseInt(prompt("Entrez le nombre de termes de la suite de Fibonacci :"));
let fibonacci = [0, 1];

for (let i = 2; i < N; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Suite de Fibonacci :", fibonacci.join(", "));
