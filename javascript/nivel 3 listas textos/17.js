/*
Ejercicio 17
Dado un texto, devolver la palabra más larga
*/
let texto = prompt("Ingrese un texto: ");

if(texto === null || texto.trim() === ""){
  console.log("Nose ingresaron palabras");
}else{
  let palabras = texto.split(" ");
  let palabraMasLarga = palabras[0];

  for (let i = 0; i < palabras.length; i++) {
    if(palabras[i].length > palabraMasLarga.length){
      palabraMasLarga = palabras[i];
    }
  }
  console.log("la palabra mas laraga es: ", palabraMasLarga);
}
