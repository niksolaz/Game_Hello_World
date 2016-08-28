document.write('Game Hello World <br>');  //scrive  Game Hello World

// dichiarazione di un costruttore
function parallelepipedo(altezza,lunghezza,larghezza){
	this.altezza = altezza;
	this.lunghezza = lunghezza;
	this.larghezza = larghezza;
	// dichiarazione di un metodo calcolavolume
	this.calcolavolume = calcolavolume;

	//il metodo calcolavolume calcola i valori associati alle proprietà sopra elencate
	function calcolavolume(){
		return this.altezza * this.lunghezza * this.larghezza;
		// i this si riferiscono all'oggetto parallelepipedo
	};
};

// dichiaro un oggetto parallelepipedo
var parallelepipedo_1 = new parallelepipedo(
	prompt('altezza: '),    //inserzione dei parametri altezza , lunghezza, larghezza 
	prompt('lunghezza: '),
	prompt('larghezza: ')
	);

//visualizza il risultato del metodo calcolavolume sull'oggetto parallelepipedo_1
console.log(parallelepipedo_1.calcolavolume());
alert(parallelepipedo_1.calcolavolume());
document.write('altezza: ',parallelepipedo_1.altezza,'<br>'); // mostra this.altezza
document.write('lunghezza: ',parallelepipedo_1.lunghezza,'<br>'); // mostra this.lunghezza
document.write('larghezza: ',parallelepipedo_1.larghezza,'<br>'); // mostra this.larghezza
document.write('volume del parallelepipedo: ',parallelepipedo_1.calcolavolume()); // mostra this.calcolavolume


