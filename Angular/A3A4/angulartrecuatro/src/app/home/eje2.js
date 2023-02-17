var caja = document.getElementById("caja");
var btn = document.getElementById("btn");

btn.addEventListener("click", function (){
	var lista  = document.createElement("Select");
	  lista.setAttribute("type", "option");
	  lista.setAttribute("value", "dasd");
	  caja.appendChild(lista);
})
