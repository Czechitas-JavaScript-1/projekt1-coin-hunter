// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/

let panacek, panacekX, panacekY, panacekSirka, panacekVyska;
let mince, minceX, minceY, minceSirka, minceVyska;
let score, pocetMinci;
let zvukMince, zvukFanfara;
let hrajeHudba = false;



panacek = document.querySelector("#panacek");
mince = document.querySelector("#mince")
score = document.querySelector("#score")
zvukMince=document.querySelector("#zvukmince")
zvukFanfara=document.querySelector("#zvukfanfara")
pocetMinci= 0;

panacekSirka=panacek.width;
panacekVyska=panacek.height;

panacekX= Math.round(window.innerWidth / 2-panacekSirka / 2);
panacekY= Math.round(window.innerHeight / 2-panacekVyska / 2);


function priNacteniStranky() {


umistiPanacka()

minceSirka=mince.width;
minceVyska=mince.height;

novaMince()

}

function umistiPanacka() {
	panacek.style.left= panacekX+ "px"
	panacek.style.top= panacekY+ "px"
}


// funkce pro nahodné vygenerování nové pozice mince
// a umístění mince na tyto souřadnice
function novaMince() {
minceX=Math.round(Math.random()*(window.innerWidth-minceSirka))
minceY=Math.round(Math.random()*(window.innerHeight-minceVyska))
mince.style.left= minceX+ "px"
mince.style.top= minceY+ "px"
}


let hudba= document.querySelector("#hudba")
function poStiskuKlavesy(udalost) {

	if (!hrajeHudba) {
		hudba.play()
		hrajeHudba=true;
	}

if(udalost.key=== "ArrowLeft"){
	panacekX = panacekX - 10
	if (panacekX < 0){
    panacekX=0;
	}
panacek.src= "obrazky/panacek-vlevo.png";

}

else if(udalost.key=== "ArrowRight"){
	panacekX = panacekX + 10;
	if (panacekX+panacekSirka > window.innerWidth){
    panacekX = window.innerWidth - panacekSirka;
	}
panacek.src= "obrazky/panacek-vpravo.png";

}

else if(udalost.key=== "ArrowUp"){
	panacekY = panacekY - 10;
	if (panacekY < 0){
		panacekY = 0;
		}
panacek.src= "obrazky/panacek-nahoru.png";
}

else if(udalost.key=== "ArrowDown"){
	panacekY = panacekY + 10;
	if (panacekY+panacekVyska > window.innerHeight){
		panacekY = window.innerHeight- panacekVyska;
		}
panacek.src= "obrazky/panacek.png";
}

umistiPanacka();

otestujKolizi()

}


function otestujKolizi() {
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
		novaMince();
		zvukMince.play();
		pocitejScore();
	}
} 

function pocitejScore(){
pocetMinci++
score.innerHTML=pocetMinci


if (pocetMinci===5) {
zvukFanfara.play();
alert("Gratuluji! Vyhrál/a jsi!");
pocetMinci=0;
score.innerHTML=pocetMinci;
umistiPanacka();
}
}


