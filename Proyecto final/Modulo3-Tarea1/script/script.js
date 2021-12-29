/*
Nombre: Jeison Romero
Github Romero66

Taller primera entrega Divisas 
*/


// Primer paso inicializar las Variables a usar. 

// let moneda;
// let myList;
// let myOtherList;
// let resultadoEl;
// // let fragmentIn = 0;
// // let fragmentOut = 0;
// let convertir;
// let loginForm;
// const valorMonedasEnDolar;

// Aplicacion de funcionalidades 

let fragmentIn  = document.createDocumentFragment();
let fragmentOut = document.createDocumentFragment();
let myList = document.getElementById('ingresoDivisa');
let myOtherList = document.getElementById('salidaDivisa');
let resultadoEl = document.getElementById('resultado');

// Se aplica funcion Array para almacena el tipo de moneda y su valor

let  moneda = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
const valorMonedasEnDolar = [0, 1, 20.535, 3784.89, 0.86098, 0.73613];


// para recorrer el Array se hara uso del forEach para recorrerlo los datos de Ingreso 
moneda.forEach(element => {
    let optionIn = document.createElement('Option');
    optionIn.textContent = element;
    fragmentIn.appendChild(optionIn);
    
    // para recorrer el Array se hara uso del forEach para recorrerlo los datos de Salida

    let optionOut = document.createElement('Option');
    optionOut.textContent = element;
    fragmentOut.appendChild(optionOut);
});

myList.appendChild(fragmentIn)
myOtherList.appendChild(fragmentOut);


// creacion variable ElementId del buttom

let convertir = document.getElementById('convierte');
let loginForm = document.getElementById('form');
loginForm.addEventListener("submit", cancelIdleCallback);


// Creacion de las funciones

function calcularConversion(e) {
    e.preventDefault();

    letformData = new FormData(e.target);
    let formValues = Object.fromEntries(formdata);
    let cantidad = parseFloat(formValues.dinero); // duda aca
    let ingresoDivisa = formValues.ingresoDivisa;
    let salidaDivisa = formValues.salidaDivisa;

if(isNaN(cantidad) == true) {
    resultadoEl.setAttribute('value', "La cantidad no es valida");
    resultadoEl.setAttribute('style', "background-clor: red;");

} else {
    if(chequearDivisa(ingresoDivisa) && chequearDivisa(salidaDivisa)) {
        const resultado = convertirDivisa(cantidad, ingresoDivisa, salidaDivisa);
        resultadoEl.setAttribute('value', resultado);
        resultadoEl.setAttribute('style', "background-color: white;");

    } else {
        return;
    }
}

}

// funcion para revisar tipo de divisa seleccionada

function chequearDivisa(divisa) {
    if(divisa == moneda[0]) {
        alert("Elige una divisa valida");
        return false;

    }
    return true;

}

// secioon de conversiones de monedas
function convertirDivisa(cantidad, ingresoDivisa, salidaDivisa) {
    switch (ingresoDivisa) {
        case monedas[1]:
            if(salidaDivisa === moneda[1])
               return cantidad;
            else if(salidaDivisa === moneda[2])
                return cantidad * valorMonedasEnDolar[2];
            else if (salidaDivisa === moneda[3])
                return cantidad * valorMonedasEnDolar[3];
            else if(salidaDivisa === moneda[4])
                return cantidad * valorMonedasEnDolar;
            else if(salidaDivisa === moneda[5])
                return cantidad * valorMonedasEnDolar;
    }
}
