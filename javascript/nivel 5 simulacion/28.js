/*
Ejercicio 28
Calcular promedio de notas y determinar aprobación
*/
let cantidad = parseInt(prompt("¿Cuantas notas vas a ingresar?: " ));

let suma = 0;

for(let i = 1; i <= cantidad; i++){
  let nota = parseFloat(prompt(`ingresa el valor la nota ${i}: `));
  suma += nota;
}

let promedio = suma / cantidad;

console.log("Promedio: ", promedio.toFixed(2));

if(promedio >= 4.0){
  console.log("Resultado: Aprobado");
}else{
  console.log("Resultado: Rechazado");
}