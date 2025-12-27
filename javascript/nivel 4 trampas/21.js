/*
Ejercicio 21
Intercambiar dos variables sin usar una tercera
*/
let a = parseInt(prompt("Ingresa el primer numero: "));
let b = parseInt(prompt("Ingresa el segundo numero: "));

console.log("Antes del Intercambio");
console.log("a = ", a);
console.log("b = ", b);

[a,b] = [b,a];

console.log("Despues del Intercambio");
console.log("a = ", a);
console.log("b = ", b);
