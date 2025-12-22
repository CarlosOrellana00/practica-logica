/*
Ejercicio 11
Determinar si un número es primo
*/

let numero = parseInt(prompt("Ingrese un numero: "));

if(numero <= 1){
  console.log("el numero no es primo");
}else{
  let esPrimo = true;

  for (let i = 2; i < numero; i++) {
    if(numero % i === 0){
      esPrimo = false;
      break
    }
  }
  if(esPrimo){
    console.log("El numeros ",numero," Es primo");
  }else{
    console.log("El numeros ",numero," No es primo");
  }
}