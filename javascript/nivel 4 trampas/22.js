/*
Ejercicio 22
Contar cuántas veces aparece cada letra en un texto
*/
let texto = prompt("Ingresa un texto");
texto = texto.toLowerCase();

let conteo = {}

for (let letra of texto) {
  if(letra !== " "){
    if(conteo[letra]){
      conteo[letra]++;
    }else{
      conteo[letra] = 1;
    }
  }
}

console.log("Conteo de Letras");
for(let letra in conteo){
  console.log(letra + " -> " + conteo[letra]);
}