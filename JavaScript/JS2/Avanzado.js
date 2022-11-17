console.log(document.getElementById("test"))


const countries = {
    "paises":[
       {
          "País":"Afghanistan",
          "capital":"Kabul"
       },
       {
          "País":"Albania",
          "capital":"Tirana"
       },
       {
          "País":"Andorra",
          "capital":"Andorra la Vella"
       },
       {
          "País":"Armenia",
          "capital":"Yerevan"
       },
       {
          "País":"Austria",
          "capital":"Viena"
       },
       {
          "País":"Belgica",
          "capital":"Bruselas"
       },
       {
          "País":"Bosnia and Herzegovina",
          "capital":"Sarajevo"
       },
       {
          "País":"Bulgaria",
          "capital":"Sofia"
       },
       {
          "País":"Croacia",
          "capital":"Zagreb"
       },
       {
          "País":"Chipre",
          "capital":"Nicosia"
       },
       {
          "País":"Dinamarca",
          "capital":"Copenague"
       },
       {
          "País":"Estonia",
          "capital":"Tallin"
       },
       {
          "País":"Finlandia",
          "capital":"Helsinki"
       },
       {
          "País":"Francia",
          "capital":"Paris"
       },
       {
          "País":"Alemania",
          "capital":"Berlín"
       },
       {
          "País":"Gibraltar",
          "capital":"Gibraltar"
       },
       {
          "País":"Grecia",
          "capital":"Atenas"
       },
       {
          "País":"Groenlandia",
          "capital":"Nuuk"
       },
       {
          "País":"Irlanda",
          "capital":"Dublin"
       },
       {
          "País":"Italia",
          "capital":"Roma"
       },
       {
          "País":"Paises Bajos",
          "capital":"Amsterdam"
       },
       {
          "País":"Noruega",
          "capital":"Oslo"
       },
       {
          "País":"Polonia",
          "capital":"Varsovia"
       },
       {
          "País":"Portugal",
          "capital":"Lisboa"
       },
       {
          "País":"Romania",
          "capital":"Bucarest"
       },
       {
          "País":"Rusia",
          "capital":"Moscú"
       },
       {
          "País":"Serbia",
          "capital":"Belgrado"
       },
       {
          "País":"Eslovaquia",
          "capital":"Bratislava"
       },
       {
          "País":"Eslovenia",
          "capital":"Ljubljana"
       },
       {
          "País":"España",
          "capital":"Madrid"
       },
       {
          "País":"Suecia",
          "capital":"Estocolmo"
       },
       {
          "País":"Suiza",
          "capital":"Berna"
       },
       {
          "País":"Ucrania",
          "capital":"Kiev"
       },
       {
          "País":"Reino Unido",
          "capital":"Londres"
       },
       {
          "País":"Ciudad del Vaticano",
          "capital":"Ciudad del Vaticano"
       }
    ]
 }

    function rellenarTabla() {
        var table = document.createElement("table");
        table.setAttribute("border", "10px");
       
        var tblBody = document.createElement("tbody");

        table.setAttribute("id","datos");//PERMITE CREAR EL ID DE LA TABLA Y POSTERIORMENTE ASIGNARLE EL NOMBRE AL ID
    for (var i = 0; i < countries.paises.length; i++)   {
        var row = document.createElement("tr");

        for (var j = 0; j < 1; j++) {
          var cell = document.createElement("td");
    
          var cellCapital = document.createElement("td");

         var cellText = document.createTextNode(countries.paises[i].País);
         var capitalCellText = document.createTextNode(countries.paises[i].capital);
         cellCapital.appendChild(capitalCellText);
         cell.appendChild(cellText);
         row.appendChild(cellCapital);
         row.appendChild(cell);
        }

   tblBody.appendChild(row);

  }

table.appendChild(tblBody);
document.body.appendChild(table);
}

    function doSearch()
    {
        const tableReg = document.getElementById('datos');
        const searchText = document.getElementById('searchTerm').value.toLowerCase();
        let total = 0;

        for (let i = 0; i < tableReg.rows.length; i++) {
            if (tableReg.rows[i].classList.contains("noSearch")) {
                continue;
            }

            let found = false;
            const cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
            // Recorremos todas las celdas
            for (let j = 0; j < cellsOfRow.length && !found; j++) {
                const compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                // Buscamos el texto en el contenido de la celda
                if (searchText.length == 0 || compareWith.indexOf(searchText) > -1) {
                    found = true;
                    total++;
                }
            }
            if (found) {
                tableReg.rows[i].style.display = "";
            } else {
                // si no ha encontrado ninguna coincidencia, esconde la
                // fila de la tabla
                tableReg.rows[i].style.display = 'none';
            }
        }

        // mostramos las coincidencias
        const lastTR=tableReg.rows[tableReg.rows.length-1];
        const td=lastTR.querySelector("td");
        lastTR.classList.remove("hide", "red");
        if (searchText == "") {
            lastTR.classList.add("hide");
        }
    }
    
    addEventListener("load", (event) => {});//AGREGA UN EVENTO 

    onload = (event) => {rellenarTabla()};
