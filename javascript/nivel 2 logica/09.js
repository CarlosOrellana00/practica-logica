/*
Ejercicio 9
Multiplicar dos números sin usar el operador *
*/

let num1 = parseInt(prompt("Ingrese el numero 1: "));
let num2 = parseInt(prompt("Ingrese el numero 2: "));

let resultado = 0;

for (let i = 0; i < num2; i++) {
  resultado += num1;
}

console.log("El resultado de la multiplicacion es: ", resultado);

