// alert('Estoy aprendiendo JavaScript')

var nombre = "Alejandro Alvarez Montero";
var altura = 191;

var concatenacion =  nombre + "  " + altura;

var datos =  document.getElementById("datos");

datos.innerHTML = concatenacion;
if(altura >= 160){
    datos.innerHTML ='<h1>Eres muy alto</h1>';
}else{
    datos.innerHTML = '<h1>Eres un jodido Hobitt</h1>'
}

for(var i = 0 ; i <= 10; i++){
    datos.innerHTML += `<h2>Estamos en el ano: ${i}</h2>`
}