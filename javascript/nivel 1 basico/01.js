/*
Ejercicio 1
  Pedir 2 numeros por consola y mostrar suma
1.- Pedir el primer numero al usuario
2.- Pedir el segundo numero al usuario
3.- Convertir ambos a numeros (porque input() devuelve texto)
4.- sumarlos
5.- mostrar resultado
*/

// let numero1 = Number(input("ingresa el primer numero: "));
// let numero2 = Number(input("ingresa el segundo numero: "));

let numero1 = Number(prompt("ingresa el primer numero: "));
let numero2 = Number(prompt("ingresa el segundo numero: "));


let suma = numero1 + numero2;

alert("la suma es: " + suma );
// alert("la suma es: {suma}" ); // opcional
console.log("la suma es: ", suma)
