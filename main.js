
let panacekX 
let panacekY 
const panacekSirka = 64;
const panacekVyska = 70;
let minceX 
let minceY 
const minceSirka = 36;
const minceVyska = 36; 
let score = parseInt(document.querySelector('#score').innerHTML)

panacekX =  Math.floor(Math.random() * (window.innerWidth - panacekSirka))
panacekY =  Math.floor(Math.random() * (window.innerWidth - panacekVyska))

minceX =  Math.floor(Math.random() * (window.innerWidth - minceSirka))
minceY = Math.floor(Math.random() * (window.innerHeight - minceVyska))


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
}
init();

//přehraj hudbu
function prehraj(elementSelector) {
	let audioElement = document.querySelector(elementSelector);
	audioElement.play();
}

//pohyb panáčka

function panacekRight(elementSelector, positionChange) {
	let element = document.querySelector(elementSelector);
	let currentPosition = parseInt(element.style.left);
	element.style.left = (currentPosition + positionChange) + 'px';
	panacekX = (currentPosition + positionChange);
	element.src = "obrazky/panacek-vpravo.png";
	prehraj('#hudba');
} 

function panacekLeft(elementSelector, positionChange) {
	let element = document.querySelector(elementSelector);
	let currentPosition = parseInt(element.style.left);
	element.style.left = (currentPosition - positionChange) + 'px';
	panacekX = (currentPosition - positionChange);
	element.src = "obrazky/panacek-vlevo.png";
	prehraj('#hudba');
} 

function panacekUp(elementSelector, positionChange) {
	let element = document.querySelector(elementSelector);
	let currentPosition = parseInt(element.style.top);
	element.style.top = (currentPosition - positionChange) + 'px';
	panacekY = (currentPosition - positionChange);
	element.src = "obrazky/panacek-nahoru.png";
	prehraj('#hudba');
} 

function panacekDown(elementSelector, positionChange) {
	let element = document.querySelector(elementSelector);
	let currentPosition = parseInt(element.style.top);
	element.style.top = (currentPosition + positionChange) + 'px';
	panacekY = (currentPosition + positionChange);
	element.src = "obrazky/panacek.png";
	prehraj('#hudba');
} 


//zkontroluj pozici panáček - mince
function bod () {
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	//1. zahraj zvuk sebrání mince
	prehraj('#zvukmince');
	//2. posuň minci na jiný random
	minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka));
	minceY = Math.floor(Math.random() * (window.innerHeight - minceVyska));
	document.querySelector('#mince').style.left = minceX + 'px';
	document.querySelector('#mince').style.top = minceY + 'px';
	//3. přičti bod
	score = score + 1;
	document.querySelector('#score').innerHTML = score;
	}
	
}

//zkontroluj vítezství
function winner () {
	if (score == 5) {
		//zahraj fanfáru
		prehraj('#zvukfanfara');
		//vypiš vítěznou hlášku
		document.querySelector('#vitezhlaska').innerHTML = "Vítěz!!!";
	}
}


//onkeydown (pravá šipka)
document.addEventListener("keydown", function(event) {
	if (event.key === "ArrowRight") {
		bod();
		winner();
		panacekRight('#panacek', 10);
		} 		
});

//onkeydown (levá šipka)
document.addEventListener("keydown", function(event) {
	if (event.key === "ArrowLeft") {
		bod();
		winner();
		panacekLeft('#panacek', 10);
		}
});

//onkeydown (šipka nahoru)
document.addEventListener("keydown", function(event) {
	if (event.key === "ArrowUp") {
		bod();
		winner();
		panacekUp('#panacek', 10);
		}
});

//onkeydown (šipka dolů)
document.addEventListener("keydown", function(event) {
	if (event.key === "ArrowDown") {
		bod();
		winner();
		panacekDown('#panacek', 10);
		} 
});

