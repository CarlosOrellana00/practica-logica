/*
Ejercicio 15
Contar cuántas veces aparece cada número en una lista
*/

let numeros = [4,15,2,4,89,15,2,7,4];

let conteo = {};

for (let i = 0; i < numeros.length; i++) {
  let  numero = numeros[i];

  if(conteo[numero]){
    conteo[numero]++;
  }else{
    conteo[numero] = 1;
  }
}

console.log("Conteo de numeros");
for(let numero in conteo){
  console.log(numero + " aparece " + conteo[numero] + "vez/veces");
}