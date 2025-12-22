/*
Ejercicio 10
Dividir dos números sin usar el operador /
(división entera)
*/

let dividendo = parseInt(prompt("Ingrese el Dividendo: "));
let divisor = parseInt(prompt("Ingrese el Divisor: "));

if(divisor === 0){
  console.log("Error, no se puede dividir por 0");
}else{
  let resultado = 0;

  while(dividendo >= divisor){
    dividendo -= divisor;
    resultado++;
  }
  console.log("El resultado de la division es: ", resultado);
}


