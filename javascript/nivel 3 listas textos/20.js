/*
Ejercicio 20
Buscar un número en una lista (búsqueda manual)
*/

let numeros = [4,15,2,89,23,7];

let buscar = parseInt(prompt("Ingrese el numero a buscar: "));

let encontrado = false;

for (let i = 0; i < numeros.length; i++) {
  if(numeros[i] == buscar){
    encontrado = true;
    break;
  }
}

if(encontrado){
  console.log("Numero Encontrado");
}else{
  console.log("Numero No Encontrado");
}