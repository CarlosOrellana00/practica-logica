/*
Extra 1

toma una lista de numeros y ordenalos del menor al mayor
requisitos:
- la lista debe de contener numeros positivos y negativos, esto de manera obligada
- debe de poder verse la lista de manera inicial y la lista ordenada para comparar.
*/

let lista = [4,-56,0,15,-22,8,17,9];

alert("Lista Original: " + lista);
console.log("Lista Original: ", lista);

for (let i= 0; i < lista.length; i++) {
  for (let j = 0; j< lista.length; j++) {

    if(lista[j] > lista[j +1]){
      let temp = lista[j];
      lista[j] = lista[j+ 1];
      lista[j +1] = temp;
    }

  }
}

alert("Lista Ordenada: " + lista);
console.log("Lista Ordenada: ", lista);