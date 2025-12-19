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

// alter("el texto invertido es: " + text_inverso);
console.log("el texto invertido es: ", text_inverso);