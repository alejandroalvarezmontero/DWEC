function crearTabla() {
  let filas = parseInt(prompt('Pon el numero de filas que quiera:'));
  let columnas = parseInt(prompt('Pon el numero de columnas que quiera:'));
  const nombre = ["Alejandro","Pepe", "Fernando", "Maikel","Jhonn"," Loko","Lama", "Manolo", "Paco", "Maria"];
  const edad = ["20", "10", "12", "13", "25", "38", "22", "23", "9", "80"];
  const nota = ["10", "2 ","5"," 3"," 9"," 8", "6","4", "3", "10"];

  for (let i = 0; i < filas; i++) {
      let filaActual = document.getElementById('tblDatos').insertRow(i);
      
      for (let j = 0; j < columnas; j++) {
          let celda = filaActual.insertCell(j);
           let index = Math.floor(Math.random() * 10);

          celda.innerHTML = nombre[index]+ " | " + edad[index]+ " | " + nota[index]+ "|" ;
      }
  }
}
