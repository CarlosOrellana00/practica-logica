/*
Ejercicio 25
Calcular el factorial de un número (iterativo)
*/

let numero = parseInt(prompt("ingresa un numero: "));

if(numero < 0){
  console.log("El numero facotorial no esta definidio para 0 o numeros negativos");
}else{
  let facotorial =1;

  for(let i = 1; i <=numero; i++){
    facotorial = facotorial * i;
  }
  console.log("el factorial de ",numero,"es: ",facotorial);
}