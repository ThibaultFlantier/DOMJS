window.onload=function(){ //cette fonction permet de demander 
						  // d'attendre que la page soit chargée
						  //pour charger le js
						  //on mettra dedans tous le JS sauf les fonctions

// var id1 = document.getElementById('id1');
// id1.onclick = function () {
// 	alert("Mais t'es un tout petit breton");

// var parent=document.getElementById ('parent'); 
// parent.addEventListener('click', function(e){alert("Tu as cliqué sur " + e.target.id + " et tu es sur " + e.currentTarget.id)}, false);
// var enfant=document.getElementById ('enfant'); 
// enfant.addEventListener('click', function(e){alert("Tu as cliqué sur " + e.target.id + " et tu es sur " + e.currentTarget.id); e.stopPropagation();}, false);

var img1=document.getElementById ('img1'); 
img1.addEventListener('mouseover', function(e){img1.src="img/maite.jpg";})
var img1=document.getElementById ('img1'); 
img1.addEventListener('mouseout', function(e){img1.src="img/gigi.jpg";})
 // BONNE METHODE POUR CHANGER UNE IMAGE AU PASSAGE DE LA SOURIE

var bouton1=document.getElementById ('bouton1'); 
bouton1.addEventListener('click', function(e){lorem.style.color=getComputedStyle(document.getElementById ('bouton1')).backgroundColor;;
infocoul.innerHTML=getComputedStyle(document.getElementById ('bouton1')).backgroundColor;})
var bouton2=document.getElementById ('bouton2'); 
bouton2.addEventListener('click', function(e){lorem.style.color=getComputedStyle(document.getElementById ('bouton2')).backgroundColor;;
infocoul.innerHTML=getComputedStyle(document.getElementById ('bouton2')).backgroundColor;})                           //getComptuedStyle.. permet de récuperer
													   // l'info voulu dans le CSS
var bouton3=document.getElementById ('bouton3'); 
bouton3.addEventListener('click', function(e){lorem.style.color=getComputedStyle(document.getElementById ('bouton3')).backgroundColor;
infocoul.innerHTML=getComputedStyle(document.getElementById ('bouton3')).backgroundColor;})
// PERMET DE CHANGER LA COULEUR DU TEXTE EN FONCTION DE NOS ENVIE, LE CSS
//EST LA POUR INDIQUER LA COULEUR CHOISI VIA L'APPARENCE DU BOUTON
//LE INNERHTML PERMET D'AVOIR UN RETOUR
var feedbbutt=document.getElementById ('feedbbutt'); 
feedbbutt.addEventListener('click', function(e){
	// document.getElementById ('feedback').innerHTML=document.getElementById ('backg').style.backgroundColor;
	document.getElementById ('feedback').innerHTML=getComputedStyle(document.getElementById ('backg')).backgroundColor;
})

  var element = document.getElementById("backg");
  backg.addEventListener('click', function(e){
  element.classList.toggle("red");
})
//  PERMET D'APPLIQUER LE STYLE D'UNE AUTRE CLASSE CSS


var boutonone = document.getElementById("boutonone");
var boutontwo = document.getElementById("boutontwo");
var boutonthree = document.getElementById("boutonthree");
var class1 = document.getElementsByClassName("class1");

boutonone.addEventListener('click', function(e){
	for (var i=0; i<class1.length; i++) {class1[i].style.color=getComputedStyle(boutonone).backgroundColor;
}
})
boutontwo.addEventListener('click', function(e){
	for (var i=0; i<class1.length; i++) {class1[i].style.color=getComputedStyle(boutontwo).backgroundColor;
}
})
boutonthree.addEventListener('click', function(e){
	for (var i=0; i<class1.length; i++) {class1[i].style.color=getComputedStyle(boutonthree).backgroundColor;
}
})

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
var buttonCreateDiv=document.getElementById(`create-div`);
var i=1;

buttonCreateDiv.addEventListener('click',
    function() {
//CREATION D'UN ELEMENT DIV
        var divCreate=document.createElement(`div`);
        divCreate.id="id"+i;
        divCreate.innerHTML="élément" + i;
        divCreate.style.backgroundColor=`gray`;
        document.getElementById(`section`).appendChild(divCreate);

        // var divCreate=document.getElementById("id"+i);
//SUPPRESSION DE L'ELEMENT DIV CREER
        divCreate.addEventListener('click',
            function() {
                document.getElementById(`section`).removeChild(divCreate);
            },
            false);
        i++;
        // console.log(divCreate);
    },
    false);


// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// afficher la touche préssée


window.addEventListener('keydown',function(e){
   console.log(e.keyCode);

if (e.keyCode ==37){
   document.getElementById("img1").style.left = document.getElementById("img1").offsetLeft - 10 +'px';}

if (e.keyCode ==38){
   document.getElementById("img1").style.top = document.getElementById("img1").offsetTop - 10 +'px';}

if (e.keyCode ==39){
   document.getElementById("img1").style.left = document.getElementById("img1").offsetLeft + 10 +'px';}

if (e.keyCode ==40){
   document.getElementById("img1").style.top = document.getElementById("img1").offsetTop + 10 +'px';}

})









}



function maFunction () {
	alert ("Hey, salut toi");
}

