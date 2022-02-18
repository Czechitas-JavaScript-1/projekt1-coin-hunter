
let mince = document.querySelector('#mince');
let panacek = document.querySelector('#panacek');
let panacekX;
let panacekY; 
let panacekSirka = panacek.width;
let panacekVyska = panacek.height;
let minceX; 
let minceY; 
let minceSirka = mince.width;
let minceVyska = mince.height; 
let score = document.querySelector('#score');
let hodnotaMince;
let time = document.querySelector('#casovac');
let timeScore = 0;
let viteznaHlaska = document.querySelector('#vitezhlaska');
let herniPole = document.querySelector('#poleHry')
let sirkaPole = herniPole.style.width;
let vyskaPole = herniPole.height;
console.log(sirkaPole);


function minceRandom(){
	//náhodná hodnota mince
    let nahodaMince = Math.floor(Math.random() * 10 + 1)
 
    if(nahodaMince >= 7){
        mince.src = "obrazky/mince-10.png";
        hodnotaMince = 10;
    }else if(nahodaMince >= 5){
        mince.src = "obrazky/mince-5.png";
        hodnotaMince = 5;
    }else{
        mince.src = "obrazky/mince-2.png";
        hodnotaMince = 2;
    }

	//náhodná pozice mince
	minceX =  Math.floor(Math.random() * (780 - minceSirka));
	minceY = Math.floor(Math.random() * (780 - minceVyska));
	mince.style.left = minceX + 'px';
	mince.style.top = minceY + 'px';
 
}
//přidej časovač
function pocitejCas(){
	setInterval(function(){
		timeScore += 1;
		time.innerText = timeScore + "s";
	}, 1000);
} 

//časovač dle Filipa, aby se vypínal - není integrováno
/* let casovac = setInterval(zacniPocitat, 1000);
let cas = 0;

function zacniPocitat() {
  cas +=1;
  console.log(cas);
}

function vypniCasovac() {
  clearInterval(casovac);
} */


//init
function init() {
	//zvol náhodnou minci a umísti na random pozici
	//minceRandom();
	//panáčka zaparkuj na střed
	panacekX = 400-(panacekSirka * 0.5);
	panacekY = 400-(panacekSirka * 0.5);
	panacek.style.left = panacekX + 'px';
	panacek.style.top = panacekY + 'px';
	//body na nulu
	score.innerHTML = "0";
	score = 0;
	//časovač
	time.innerHTML = timeScore + 's';
	timeScore = 0;
	time.style.display = "none";
	
}

//přehraj hudbu
function prehraj(elementSelector) {
	let audioElement = document.querySelector(elementSelector);
	audioElement.play();
}

//tlacitko start
function start() {
	pocitejCas();
	time.style.display = "";
	document.querySelector('#startbutton').style.display = "none";
	document.querySelector('#vitezhlaska').style.display = "none"
	prehraj('#hudba');
	minceRandom();

		//tady proveď funkce
	document.addEventListener("keydown", function(event) {
		if (event.key === "ArrowRight") {
			bod();
			panacekRight('#panacek', 10);
		} 
		
		if (event.key === "ArrowLeft") {
			bod();
			panacekLeft('#panacek', 10);
		}

		if (event.key === "ArrowUp") {
			bod();
			panacekUp('#panacek', 10);
		}

		if (event.key === "ArrowDown") {
			bod();
			panacekDown('#panacek', 10);
		} 
			
	});
}

//pohyb panáčka

function panacekRight(elementSelector, positionChange) {
	let element = document.querySelector(elementSelector);
	let currentPosition = parseInt(element.style.left);
	//běž doprava, dokud není konec okna
	if (panacekX < (760 - panacekSirka)) {
		element.style.left = (currentPosition + positionChange) + 'px';
		panacekX = (currentPosition + positionChange);
	}
	element.src = "obrazky/panacek-vpravo.png";
	
} 

function panacekLeft(elementSelector, positionChange) {
	let element = document.querySelector(elementSelector);
	let currentPosition = parseInt(element.style.left);
	//běž doleva, dokud není konec okna
	if (panacekX > 0) {
		element.style.left = (currentPosition - positionChange) + 'px';
		panacekX = (currentPosition - positionChange);
	}
	element.src = "obrazky/panacek-vlevo.png";
} 

function panacekUp(elementSelector, positionChange) {
	let element = document.querySelector(elementSelector);
	let currentPosition = parseInt(element.style.top);
	//běž nahoru, dokud není konec okna
	if (panacekY > 0) {
		element.style.top = (currentPosition - positionChange) + 'px';
		panacekY = (currentPosition - positionChange);
	}
	element.src = "obrazky/panacek-nahoru.png";
} 

function panacekDown(elementSelector, positionChange) {
	let element = document.querySelector(elementSelector);
	let currentPosition = parseInt(element.style.top);
	//běž dolů, dokud není konec okna
	if (panacekY < (760 - panacekVyska)) {
		element.style.top = (currentPosition + positionChange) + 'px';
		panacekY = (currentPosition + positionChange);
	}
	element.src = "obrazky/panacek.png";
} 


//zkontroluj pozici panáček - mince
function bod () {
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
		//1. zahraj zvuk sebrání mince
		prehraj('#zvukmince');
		//2. přičti bod
		score = score + hodnotaMince;
		document.querySelector('#score').innerHTML = score;
		//3. zkontoroluj vítezství
		if (score >= 25) {
			//zahraj fanfáru
			prehraj('#zvukfanfara');
			//schovej panáčka a minci
			panacek.style.display = "none";
			mince.style.display = "none";
			//vypiš vítěznou hlášku
			viteznaHlaska.style.display = "";
			time.style.display = "none";
			if (timeScore < 8) {
				viteznaHlaska.innerHTML = "<p>SUPER máš " + score + " korun.</p><p>Navíc jsi porazil Báru, hra ti trvala jen " + timeScore + " sekund.</p><p>Zvu tě na zmrzku. <a href='mailto:marie@dastec.cz'>Napiš mi</a>, domluvíme čas.</p>";
			} else if(timeScore == 8) {
				viteznaHlaska.innerHTML = "<p>SUPER máš " + score + " korun. Můžeš si koupit zmrzku.</p><p>Hra ti trvala " + timeScore + " sekund. Vyrovnal jsi skóre!</p>";
			} else {
				viteznaHlaska.innerHTML = "<p>SUPER máš " + score + " korun. Můžeš si koupit zmrzku.</p><p>Hra ti trvala " + timeScore + " sekund.</p><p> Bára je lepší. Koupíš jí zmrzku? :)</p>";
				document.querySelector('#qr').style.display = "block";
			}
			
		}
		//4. nová náhodná mince
		minceRandom();
	}
}







