// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

_______________________________________________________

//init
	//minceX a minceY umísti někde random
	//panáčka zaparkuj asi na střed
	//body na nulu
	//začni hrát písničku (onAnyKeyPress asi)

_________________________________________________________

//onkeydown (pravá šipka):

//if panáček dojde k minci, tj. pozice panáček == pozice mince (nápověda nahoře)
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
		
__________________________________________________________


//onkeydown (levá šipka):
//if dojde k minci, else: panáček doleva

//onkeydown (šipka nahoru):
//if dojde k minci, else: panáček nahoru

//onkeydown(šipka dolů):
//if dojde k minci, else: panáček dolů

