/* Variables */
let Nombre = 3;

/* Modifier valeur */
Nombre = (Nombre + 5)*3;

/* Constante */
const Constante = 0;

/* Booléens */
let TrueOrNot = true;
TrueOrNot = false;

/* Chaines */
let Nom = "Vienney";
let Prenom = 'Jean-Baptiste';

/* Manipulation de chaines */
Chaine = Nom + Prenom;

/* Afficher */
console.log("Bonjour " + Prenom + " " + Nom + "!");

/* Tests */
if (TrueOrNot) {
	console.log("C'est vrai!")	
} else {
	console.log("C'est faux!")	
}

/* Boucles */
for (let i = 1; i <= 10; i++) {
	console.log("ok")
}

/* Fonctions */
function Somme(valeur1,valeur2) {
	return valeur1 + valeur2;
}

console.log(Somme(3,5).toString());