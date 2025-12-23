/*
Ejercicio 19
Ordenar una lista sin usar sort()
(Método burbuja)
*/
let numeros = [5,2,9,1,5,6];
let n = numeros.length;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if(numeros[j] > numeros[j + 1]){
      //intercambio
      let temp =numeros[j];
      numeros[j] = numeros[j +1];
      numeros[j + 1]= temp;
    }
  }
}

console.log("Lista ordenada:", numeros);
