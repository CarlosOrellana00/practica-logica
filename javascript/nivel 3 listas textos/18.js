/*
Ejercicio 18
Comprobar si una palabra es palíndromo
*/
let palabra = prompt("ingrese una palabra: ");

if(palabra === null || palabra.trim() ===""){
  console.log("no se ingreso una palabra");
}else{
  palabra = palabra.toLowerCase();

  let palabraInvertida = palabra.split("").reverse().join("");

  if(palabra === palabraInvertida){
    console.log("la palabra es un palindromo");
  }else{
    console.log("la palabra no es un palindromo");
  }
}
