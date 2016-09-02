
// dichiarazione di un costruttore
function parallelepipedo(altezza,lunghezza,larghezza){
	this.altezza = altezza;
	this.lunghezza = lunghezza;
	this.larghezza = larghezza;
	// dichiarazione di un metodo calcolavolume
	this.calcolavolume = function calcolavolume(){
		return this.altezza * this.lunghezza * this.larghezza;
		// i this si riferiscono all'oggetto parallelepipedo
	};
};
//creo un oggetto volumeObj
var volumeObj = new parallelepipedo(
	document.getElementsByClassName("altezza"),
	document.getElementsByClassName("lunghezza"),
	document.getElementsByClassName("larghezza")
	);


var datoVolume = volumeObj.calcolavolume(); //salvo il valore del volume in una variabile datoVolume
console.log('valore del volume salvato in datoVolume: ',datoVolume);


function x(){
	document.getElementsById("demo").innerHTML = datoVolume.innerHTML;
}
console.log(x());
