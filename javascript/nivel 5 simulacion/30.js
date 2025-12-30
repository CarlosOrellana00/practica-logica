/*
Ejercicio 30
Simular un carrito simple (sumar precios)
*/
let total = 0;

while(true){
  let entrada = prompt("Ingresa el precio del producto (o '0' para terminar) ");

  //si el usuario cancela el prompt
  if(entrada == null){
    console.log("Operacion cancelada, total final: ",total);
    break;
  }

  let precio = parseFloat(entrada);

  //validacion basica
  if(isNaN(precio)){
    console.log("Entrada invalida: debes de ingresar un numero.");
    continue;
  }

  if(precio === 0){
    break;
  }

  if(precio < 0){
    console.log("El Precio no puede ser negativo");
    continue;
  }

  total += precio;
  console.log("Producto agregado, Total actual: ", total.toFixed(2));
}

console.log("Total final a pagar: ", total.toFixed(2));