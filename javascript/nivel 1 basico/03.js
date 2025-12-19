/*
Ejercicio 3
  Determinar el mayor de tres numeros

Condiciones:
- Pedir 3 numeros al usuario
- Compararlos usando if / elif / else
- Mostrar cual es el mayor

Pasos:
1.- Pedir los tres numeros
2.- Convertirlos a numero
3.- Compararlos
4.- Mostrar el mayor
*/
let num1 = Number(prompt("Ingresa el primer numero: "));
let num2 = Number(prompt("Ingresa el segundo numero: "));
let num3 = Number(prompt("Ingresa el tercero numero: "));

if(num1 >= num2 && num1 >= num3){
  // alter("El numero mayor es: "+ num1);
  console.log("El numero mayor es: ", num1);
}else if (num2 >= num1 && num2 >= num3){
  // alter("El numero mayor es: "+ num2);
  console.log("El numero mayor es: ", num2);
}else {
  // alter("El numero mayor es: "+ num3);
  console.log("El numero mayor es: ", num3);
}