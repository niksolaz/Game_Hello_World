
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
	document.write('<input type= "Number" name="altezza" value=0>','<br>'),
	document.write('<input type= "Number" name="lunghezza" value=0>','<br>'),
	document.write('<input type= "Number" name="larghezza" value=0>','<br>')
	);

console.log('altezza',volumeObj.altezza);
console.log('lunghezza',volumeObj.lunghezza);
console.log('larghezza',volumeObj.larghezza);
console.log('volume',volumeObj.calcolavolume());

function volume(){
	volumeObj.calcolavolume()
	document.getElementById('demo').innerHTML = 'result';
};

