function escribirLista(){
var nombre = ['Alejandro','Pepe','Javi','Marcos','Samara','Carmen' ];
var edad = ['20', '18','13', '21','17','25'];
var notafinal = ['10', '7', '3', '5', '4', '9'];
  for (var i = 0; i <nombre.length; i++) {
      document.write("<table>"+
                    "<thead>"+
                    "<tr>"+
                    "<td>" + "Nombre"+"</td>"+
                    "<td>"+ "Edad" +     "</td>"+
                    "<td>"+ "Nota Final"+     "</td>"+
                    "</tr>"+
                     "</thead>"+
                     "<tbody>"+
                     "<tr>"+
                     "<td>" + nombre[i] +"</td>"+
                     "<td>"+ edad[i] +     "</td>"+
                     "<td>"+ notafinal[i] +     "</td>"+
                     "</tr>"+
                     "</tbody>"+
                     "</table>"); 
  }
}