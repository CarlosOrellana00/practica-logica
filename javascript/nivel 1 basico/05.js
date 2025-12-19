/*
Ejercicio 5
Invertir una cadena de texto

Condiciones:
- Pedir un texto al usuario
- Invertir el texto
- Mostrar el resultado
*/
let  texto = prompt("Ingrese un texto: ");

let text_inverso = texto.split("").reverse().join("");
/**
 * split : convierte el texto en un array
 * texto.split("") = separa caracter por caracter
 * reverse: revierte el orden de un array(los strings no se pueden invertir directamente)
 * join: une los elementos de un array en un string.
 */

// alter("el texto invertido es: " + text_inverso);
console.log("el texto invertido es: ", text_inverso);