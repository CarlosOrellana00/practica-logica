/*
Ejercicio 16
Dado un arreglo, devolver solo los números pares
*/
let numeros = [4,7,10,15,22,33,8,9];

let pares = [];

for (let i = 0; i < numeros.length; i++) {
  if(numeros[i] % 2 === 0){
    pares.push(numeros[i]);
  }
}

console.log("Numeros Pares: ", pares);