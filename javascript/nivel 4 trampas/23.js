/*
Ejercicio 23
Convertir un número decimal a binario (sin usar funciones)
*/
let numero = parseInt(prompt("Ingrese un numero decimal: "));

let binario = "";

if(numero === 0){
  binario= 0;
}else{
  while(numero > 0){
    let resto = numero % 2;
    binario = resto + binario;
    numero = Math.floor(numero/2);
  }
}

console.log("El numero en binario es: ", binario);