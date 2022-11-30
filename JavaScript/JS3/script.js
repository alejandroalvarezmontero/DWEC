const botoncuadro = document.querySelectorAll(".cuadro");
const dame = document.getElementById("juego-dame");
const juego = document.getElementById("juego-boton")
var i = 1;
const juego1 =  "pointer-events:initial;opacity:initial;",
      juego2 =  "pointer-events:none;opacity:40%;";
let state = false;

var jugadorganador = [ [0,1,2],[3,4,5],[6,7,8],
             [0,3,6],[1,4,7],[2,5,8],
             [0,4,8],[2,4,6]
           ];

var img = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 =document.getElementById("img3");

function check(){
  juego.style.cssText = juego2;
  for (var j = 0; j < jugadorganador.length;j++){
    if(botoncuadro[jugadorganador[j][0]].innerHTML === "X" && botoncuadro[jugadorganador[j][1]].innerHTML === "X" && botoncuadro[jugadorganador[j][2]].innerHTML === "X" ){
      dame.innerHTML = '"Kiko  Rivera" Wins';
      img.setAttribute('src', 'kiko.jpg')
      state = true;
     quitar();
    }else if(botoncuadro[jugadorganador[j][0]].innerHTML === "O" && botoncuadro[jugadorganador[j][1]].innerHTML === "O" && botoncuadro[jugadorganador[j][2]].innerHTML === "O"){
      dame.innerHTML = '"Rajoy" Wins';
      img.setAttribute('src', 'rajoy.jpeg')
      state = true;
     quitar();
    }
  }
  if(botoncuadro[0].innerHTML != "" && botoncuadro[1].innerHTML != "" && botoncuadro[2].innerHTML != "" && botoncuadro[3].innerHTML !== "" && botoncuadro[4].innerHTML != "" && botoncuadro[5].innerHTML != "" && botoncuadro[6].innerHTML != "" && botoncuadro[7].innerHTML != "" && botoncuadro[8].innerHTML != "" && state == false){
    dame.innerHTML = "Sois unos perdedores los dos";
    img.setAttribute('src', 'manco.jpeg')
   quitar(false);
  }
    
}

function quitar(y){
  (y == false)?i = Math.floor(Math.random() * (3 - 1)) + 1:0;
    for(var boton2 = 0; boton2 < botoncuadro.length; boton2++){    
      botoncuadro[boton2].style.setProperty("pointer-events","none"); 
    } 
  juego.style.cssText = juego1;
}

function nEmpieza(){
  juego.style.cssText = juego2;
  let c1;
  (i % 2 == 0 )?c1= "X":c1= "O"; 
  dame.innerHTML = `Presione cualquier cuadro para iniciar: <b>"${c1}"</b> empieza.`;   
}

botoncuadro.forEach(boton => {
  boton.onclick = function(){
    dame.innerHTML = "";
    (i % 2 == 0)?boton.innerHTML = "X": boton.innerHTML = "O";
    check();
    boton.style.setProperty("pointer-events","none"); 
    i++; 
    (i == 3)?i = 1: 0 ;
  }
});


juego.onclick = function(){
  for(var boton2 = 0; boton2 < botoncuadro.length; boton2++){    
    botoncuadro[boton2].style.cssText = "pointer-events:initial;";
    botoncuadro[boton2].innerHTML = "";
    state = false;
  }
  nEmpieza();
}

nEmpieza();