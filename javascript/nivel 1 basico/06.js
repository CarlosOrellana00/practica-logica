/*
Ejercicio 6
Contar vocales en una palabra

Condiciones:
- Pedir una palabra al usuario
- Contar cuántas vocales tiene
- Mostrar el resultado
*/
let texto = prompt("Ingrese un texto o palabra");

//texto vacio
if (texto === null || texto.trim() === ""){
  console.log("No se ingreso ninguna palabra");
}
else{
  texto = texto.toLowerCase();
  const vocales = "aeiou";
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if(vocales.includes(texto[i])){
      contador++
    }

  }
  console.log("el texto ", texto," tiene un total de ", contador," vocal(es)");
}