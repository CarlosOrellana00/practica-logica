/*
Ejercicio 29
Contar palabras en una frase
*/
let frase = prompt("ingresa una frase: ");

frase = frase.trim();

if(frase === ""){
  console.log("La frase no contiene palabras");
}else{
  let palabras = frase.split(/\s+/);
  console.log("cantidad de palabras: ", palabras.length);
}