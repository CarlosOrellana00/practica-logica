/*
Ejercicio 24
Determinar si dos palabras son anagramas
*/
let palabra1 = prompt("Ingresa la primera palabra: ").toLowerCase();
let palabra2 = prompt("Ingresa la segunda palabra: ").toLowerCase();

if(palabra1.length !== palabra2.length){
  console.log("no son anagramas")
}else{
  let conteo = {};

  //contar letras de la primera palabra
  for(let letra of palabra1){
    if(conteo[letra]){
      conteo[letra]++;
    }else{
      conteo[letra] = 1;
    }
  }

  //restar letras usando la segunda palabra
  let esAnagrama = true;

  for(let letra of palabra2){
    if(!conteo[letra]){
      conteo[letra]++
    }else{
      conteo[letra] --;
    }
  }

  if(esAnagrama){
    console.log("Las palabras SON Anagramas");
  }else{
    console.log("Las palabras NO SON Anagramas");
  }




}