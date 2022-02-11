
var price = 0;

function albumPrices(element) {

    if (element.checked)
        price += parseInt(element.value);
	else
		price -= parseInt(element.value);
	e = document.getElementById('sum');


    if (price != 0)
        e.innerHTML = "Pris: " + price + " SEK";
    else
        e.innerHTML = "Pris: 0 SEK";	
}

var artistAlbum = "";

function artistAndAlbum(element) {



}