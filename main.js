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



