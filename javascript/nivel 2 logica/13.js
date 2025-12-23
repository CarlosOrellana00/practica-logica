/*
Ejercicio 13
Sumar todos los números de una lista
Sin usar reduce()
*/
let numeros = [4,15,2,89,23,7];

let total= 0;

for (let i = 0; i < numeros.length; i++) {
  total += numeros[i];
}

console.log("el total de la suma es: ", total);