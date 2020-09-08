let btnprobar = document.getElementById('btnprobar');
let numingresado = document.getElementById('ingresonumero');
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let lista_intentos = [];
let lista_mensajes = [];
let intentos = 0;
let j = 0;
var body = document.getElementsByTagName("body")[0];
var tabla = document.createElement("table");
tabla.classList.add("table")
var tbody = document.createElement("tbody");
console.log(numeroAleatorio)
function calcular(numero, numeroInresado){
    if (intentos==10){
        alert("Supero el numero de intentos")
    }else{
        if (numeroInresado == numero){
            //console.log("NO ENTRO ACA")
            lista_mensajes.push('Felicitaciones Adivino el numero!');
            lista_intentos.push(numero)
            intentos++;
        }else{
            if (numeroInresado<numero){
                lista_mensajes.push("El numero que elegiste es mas chico")
                intentos++;
                lista_intentos.push(numeroInresado)
            } else{
                lista_mensajes.push("El numero que elegiste es mas grande")
                lista_intentos.push(numeroInresado)
                intentos++;
            }
            console.log(lista_intentos);
            console.log(numero);
        }
    }
}

function mostrar(numero, cant_intentos){
    document.getElementById('resultado').innerHTML = numero;
    //document.getElementById('num_intentos').innerHTML= cant_intentos;
};

function generar_tabla(cant_intentos, lista_de_intentos, lista_de_mensajes){
    if (j == 0){
        var cabecera = document.createElement("tr")
        var celda_c1 = document.createElement("th");
        celda_c1.classList.add("col")
        var celda_c2 = document.createElement("th");
        celda_c2.classList.add("col")
        var celda_c3 = document.createElement("th")
        celda_c3.classList.add("col")
        var text_c1 = document.createTextNode("Cantidad de intentos");
        var text_c2 = document.createTextNode("Numeros ingresados")
        var text_c3 = document.createTextNode("Mensaje")
        celda_c1.appendChild(text_c1);
        celda_c2.appendChild(text_c2);
        celda_c3.appendChild(text_c3);
        cabecera.appendChild(celda_c1);
        cabecera.appendChild(celda_c2);
        cabecera.appendChild(celda_c3);
        tbody.appendChild(cabecera)
        j = 1;
    }
    
    for (var i = 0; i<intentos; i++){
        var hilera = document.createElement("tr");
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td"); 
        var celda3 = document.createElement("td");   
        var texto1 = document.createTextNode(intentos);
        var texto2 = document.createTextNode(lista_de_intentos[i]);
        var texto3 = document.createTextNode(lista_de_mensajes[i]);
        celda1.appendChild(texto1);
        celda2.appendChild(texto2);
        celda3.appendChild(texto3);
        hilera.appendChild(celda1);
        hilera.appendChild(celda2);
        hilera.appendChild(celda3);
    }
    tbody.appendChild(hilera);
    tabla.appendChild(tbody);
    body.appendChild(tabla);
}

btnprobar.addEventListener('click', function(){
   var x = numingresado.value;
   calcular(numeroAleatorio, x);
   generar_tabla(intentos, lista_intentos, lista_mensajes);
});

