window.onload=function(){

var klaxon = document.getElementById("klaxon");


window.addEventListener('keydown',function(e){
   console.log(e.keyCode);

if (e.keyCode ==37){
   document.getElementById("camion").style.left = document.getElementById("camion").offsetLeft - 10 +'px';}

if (e.keyCode ==38){
   document.getElementById("camion").style.top = document.getElementById("camion").offsetTop - 10 +'px';}

if (e.keyCode ==39){
   document.getElementById("camion").style.left = document.getElementById("camion").offsetLeft + 10 +'px';}

if (e.keyCode ==40){
   document.getElementById("camion").style.top = document.getElementById("camion").offsetTop + 10 +'px';}

if (e.keyCode ==32) {
	klaxon.play();
}
})
 
 function draw() {
  var ctx = document.getElementById('camion').getContext('2d');

  // créer un nouvel objet image à utiliser comme modèle
  var img = new Image();
  img.src = 'img/camion.png';
  img.onload = function() {

    // créer le modèle
    var ptrn = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, 300, 200);

  }
}draw();

function draw() {
  var ctxe = document.getElementById('enfant').getContext('2d');

  // créer un nouvel objet image à utiliser comme modèle
  var imge = new Image();
  imge.src = 'img/enfant.png';
  imge.onload = function() {

    // créer le modèle
    var ptrne = ctx.createPattern(imge, 'repeat');
    ctxe.fillStyle = ptrne;
    ctxe.fillRect(0, 0, 300, 200);

  }
}draw();

var blood = document.getElementById('blood');
var ctx = blood.getContext('2d');
var img = document.getElementById('imgb');
ctx.drawImage(img, 800, 700);




}


