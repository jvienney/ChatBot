/* 
DOM : 
html -> head
	 -> body
	 	-> header
		-> main
		-> footer
*/

// Retourner un élément par id

let titre = document.getElementById("titre");
let soustitre = document.getElementById("start");
let chat = document.getElementById("chat");
const pseudo = document.getElementById('pseudo');
const below = document.getElementById('below');
const entry = document.getElementById('entry');


// Retourner la liste des éléments d'une classe

let elements = document.getElementsByClassName("bloclink");

function ChangerTitre1() {
	titre.textContent = "L";
}
function ChangerTitre2() {
	titre.textContent = "LO";
}
function ChangerTitre3() {
	titre.textContent = "LOG";
}
function ChangerTitre4() {
	titre.textContent = "LOGI";
}
function ChangerTitre5() {
	titre.textContent = "LOGIC";
}
function ChangerTitre6() {
	titre.textContent = "LOGICA";
}
function ChangerTitre7() {
	titre.textContent = "LOGICAL";
}
function ChangerTitre8() {
	titre.textContent = "LOGICAL C";
}
function ChangerTitre9() {
	titre.textContent = "LOGICAL CH";
}
function ChangerTitre10() {
	titre.textContent = "LOGICAL CHA";
}
function ChangerTitre11() {
	titre.textContent = "LOGICAL CHAT";
}
function ChangerTitre12() {
	titre.textContent = "LOGICAL CHATB";
}
function ChangerTitre13() {
	titre.textContent = "LOGICAL CHATBO";
}
function ChangerTitre14() {
	titre.textContent = "LOGICAL CHATBOT";
}

function ChangerTitre14() {
	titre.textContent = "LOGICAL CHATBOT";
}

function ChangerSousTitre() {
	soustitre.textContent = "start the conversation now";
}

// Attendre

setTimeout(ChangerTitre1, 100);
setTimeout(ChangerTitre2, 200);
setTimeout(ChangerTitre3, 300);
setTimeout(ChangerTitre4, 400);
setTimeout(ChangerTitre5, 500);
setTimeout(ChangerTitre6, 600);
setTimeout(ChangerTitre7, 700);
setTimeout(ChangerTitre14, 1600);
setTimeout(ChangerSousTitre, 3100);

soustitre.addEventListener('click', function() {
	chat.textContent = "First, give me your name.";
});

const Bouton = document.getElementById('button');

Bouton.addEventListener('click', function(event){
	event.preventDefault();
});

pseudo.addEventListener('change', function(e){
	below.textContent = `Thank you ${e.target.value} !`;
});

