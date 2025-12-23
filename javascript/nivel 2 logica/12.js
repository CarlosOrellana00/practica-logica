/*
Ejercicio 12
Encontrar el número más grande en una lista
Sin usar Math.max()
*/

let numeros = [4,15,2,90,23,7];

let mayor = numeros[0];

for (let i = 0; i < numeros.length ; i++) {
  if(numeros[i] > mayor){
    mayor = numeros[i];
  }
}

console.log("El numero mas grande la lista es :", mayor);
