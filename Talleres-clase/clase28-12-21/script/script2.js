

// pedir una palabra por pantalla. 
// determinar el numero de letras de la palabra
// verificar si es par o impar
let palabra = prompt("Ingrese una palabra: ");
let numLetras = palabra.length;

console.log("La palabra "+palabra+ " Tiene "  + numLetras + " letras ");

if (numLetras %2 == 0) {
    alert("La palabra es par");

} else {
    alert("La palabra no es par");
}
