// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let panacekX = document.querySelector('#panacek').style.left;
let panacekY = document.querySelector('#panacek').style.top;
const panacekSirka = 64;
const panacekVyska = 70;
let minceX = document.querySelector('#mince').style.left;
let minceY = document.querySelector('#mince').style.top;
const minceSirka = 36;
const minceVyska = 36; 
let score = document.querySelector('#score').innerHTML

panacekX =  Math.floor(Math.random() * (window.innerWidth - panacekSirka))
panacekY =  Math.floor(Math.random() * (window.innerWidth - panacekVyska))

minceX =  Math.floor(Math.random() * (window.innerWidth - minceSirka))
minceY = Math.floor(Math.random() * (window.innerHeight - minceVyska))

console.log(panacekX)
console.log(panacekX + panacekSirka);
console.log(minceX);
console.log(minceX + minceSirka);


//init
function init() {
	//minceX a minceY umísti někde random
	document.querySelector('#mince').style.left = minceX + 'px';
	document.querySelector('#mince').style.top = minceY + 'px';
	//panáčka zaparkuj na střed
	document.querySelector('#panacek').style.left = window.innerWidth * 0.5 - (panacekSirka * 0.5) + 'px';
	document.querySelector('#panacek').style.top = window.innerHeight * 0.5 - (panacekSirka * 0.5) + 'px';
	//body na nulu
	document.querySelector('#score').innerHTML = "0";
	//začni hrát písničku (onAnyKeyPress asi)
	//document.querySelector('#hudba').play();
}
init();
		
/* _______________________________________________________ */

//pohyb panáčka

function panacekRight(elementSelector, positionChange) {
	let element = document.querySelector(elementSelector);
	let currentPosition = parseInt(element.style.left);
	element.style.left = (currentPosition + positionChange) + 'px';
	panacekX = (currentPosition + positionChange);
	element.src = "obrazky/panacek-vpravo.png";
	console.log(panacekX)
		
} 

function panacekLeft(elementSelector, positionChange) {
	let element = document.querySelector(elementSelector);
	let currentPosition = parseInt(element.style.left);
	element.style.left = (currentPosition - positionChange) + 'px';
	panacekX = (currentPosition - positionChange);
	element.src = "obrazky/panacek-vlevo.png";
	console.log(panacekX);
} 

function panacekUp(elementSelector, positionChange) {
	let element = document.querySelector(elementSelector);
	let currentPosition = parseInt(element.style.top);
	element.style.top = (currentPosition - positionChange) + 'px';
	panacekY = (currentPosition - positionChange);
	element.src = "obrazky/panacek-nahoru.png";
} 

function panacekDown(elementSelector, positionChange) {
	let element = document.querySelector(elementSelector);
	let currentPosition = parseInt(element.style.top);
	element.style.top = (currentPosition + positionChange) + 'px';
	panacekY = (currentPosition + positionChange);
	element.src = "obrazky/panacek.png";
} 



//přijde k minci
function bod () {
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
		alert("funguju")
	//1. zahraj zvuk sebrání mince
	//document.querySelector('#zvukmince').play();
	//2. posuň minci na jiný random
	document.querySelector('#mince').style.left = minceX;
	document.querySelector('#mince').style.top = minceY;
	//3. přičti bod
	score.innerHTML = score + 1;
	}
	
}
 

//zkontroluj vítezství
function winner () {
	if (score == 5) {
		//zahraj fanfáru
		//document.querySelector('#zvukfanfara').play();
		//vypiš vítěznou hlášku
		document.querySelector('#hlaskaVitez').innerHTML = "Vítěz!!!";
		//chtělo by to panáčka s rukama nahoře :)
		document.querySelector('#panacek').src = "obrazky/panacek-vitez.png";
		//vrátit do init??
	}
}
/* _______________________________________________________ */


//onkeydown (pravá šipka)
document.addEventListener("keydown", function(event) {
	if (event.key === "ArrowRight") {
		bod();
		panacekRight('#panacek', 10);
		} 		
});

//onkeydown (levá šipka)
document.addEventListener("keydown", function(event) {
	if (event.key === "ArrowLeft") {
		bod();
		panacekLeft('#panacek', 10);
		}
	});


//onkeydown (šipka nahoru)
document.addEventListener("keydown", function(event) {
	if (event.key === "ArrowUp") {
		bod();
		panacekUp('#panacek', 10);
		}
});

//onkeydown (šipka dolů)
document.addEventListener("keydown", function(event) {
	if (event.key === "ArrowDown") {
		bod();
		panacekDown('#panacek', 10);
		} 
});


//if panáček je na minci, tj. pozice panáček == pozice mince (nápověda nahoře)
	//1. zahraj zvuk sebrání mince
	//2. posuň minci na jiný random
	//3. přičti bod	
	//zkontroluj vítezství
		//if body == 5: 
		//zahraj fanfáru
		//vypiš vítěznou hlášku
		//chtělo by to panáčka s rukama nahoře
		//vrátit do init??	

//else:
	//panáček doprava
		//1. vyměň obrázek za koukající do prava
		//2. přičti k panacekX nějakou inteligentní hodnotu (bacha, ať nezdrhne z okna  0 - window.innerWidth)
		
/* _____________________________________________________ */
