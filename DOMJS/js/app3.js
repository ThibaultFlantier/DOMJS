
var images = ['kermit1.jpg','kermit2.jpg'];
var indiceTabImages = 0;
var temps = setInterval(function(){changeImage()
}, 3000); //cette variable est utile uniquement si on veut faire un moyen d'arrêter le défilement


function changeImage () {
	document.getElementById('kermit').style.backgroundImage = "url('img/" + images[indiceTabImages] + "')";


indiceTabImages++;
if (indiceTabImages==images.length){indiceTabImages=0}

}