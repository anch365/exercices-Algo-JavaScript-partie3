// Exercice 1: Boucle for
for (let index = 0; index <= 5; index++) {
    console.log("*".repeat(index));
};

// Exercie 2: Boucle foreach
let heros  = ["Spider-Man", "Batman", "Superman", "Wonder Woman", "Iron Man"];

heros.forEach(hero => {
    console.log("Je suis fan de " + hero);
});

// Exercie 3: Boucle while
let nombre = 10;

while (nombre >= 0) {
    console.log(nombre);
    nombre--;
}
console.log("Décollage !");

// Exercie 4: Boucles combinées
let amis = ["Alice", "Bob", "Charlie", "Diana"];
let message = "";

amis.forEach((ami, index) => {
    message += (ami + " ").repeat(index + 1);
    message += "\n";
});

alert(message);

// Exercie 5.1: Ecrire un algo
let number = -1;

while (number <= 0 || number >= 3) {
    number = prompt("Saisissez un nombre entre 1 et 3");
};

// Exercice 5.2: Un nombris compris entre 10 et 20
let message1 = prompt("Saisissez un nombre compris entre 10 et 20");

while (message1 < 10 || message1 > 20) {
  if (message1 <= 10) {
    alert("Plus grand !");
  }

  if (message1 >= 20) {
    alert("Plus petit !");
  }

  message1 = prompt("Saisissez un nombre compris entre 10 et 20");
}

// // Exercie 5.3: Un nombre départ
let depart = parseInt(prompt("Mettez un nombre de départ"));
let compteur = 1;
let resultat = "";

while (compteur <= 10) {
    resultat += compteur + depart + "\n";
    compteur++;
}
alert(resultat);

// Exercie 5.4: Réécrire l'algorithme précédent
let depart1 = parseInt(prompt("Mettez un nombre de départ"));
let resultat1 = "";

for (let index = depart1 + 1; index <= depart1 + 10; index++) {
  resultat1 += index + "\n";
}

alert(resultat1);

// Exercice 5.5: Nombre de départ et table de multiplication
let chiffre = parseInt(prompt("Saisissez un nombre de départ"));
let tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let message2 = "";

tableau.forEach(nombre => {
     message2 += chiffre + " x " + nombre + " = " + (chiffre * nombre) + "\n";
});
alert("Table de 7 : " + "\n" + message2);










