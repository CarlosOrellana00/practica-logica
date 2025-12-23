/*
Ejercicio 14
Eliminar duplicados de una lista
Sin usar Set
*/

let numeros = [4,15,2,4,89,15,23,2,7];

let sinDuplicados = [];

for (let i = 0; i < numeros.length; i++) {
  if(!sinDuplicados.includes(numeros[i])){
    sinDuplicados.push(numeros[i]);
  }
}

console.log("lista sin duplicados", sinDuplicados);