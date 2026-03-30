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









