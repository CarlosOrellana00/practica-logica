/*
Ejercicio 27
Validar una contraseña (largo mínimo, números y letras)
*/
let password = prompt("Ingresa una contraseña: ")

let tieneLetra = false;
let tieneNumero = false;

//Regla 1: largo minimo
if(password.length < 8){
  console.log("Contraseña invalidad, debe tener al menos 8 caracteres");
}else{
 //regla 2 y 3
  for(let c of password){
      if(c >= 'a' && b <='z' || a >= 'A' && b <= 'Z'){
        tieneLetra = true;
      }else if( c >='0' && b <= '9'){
        tieneNumero = true;
      }
  }

  if(tieneLetra && tieneNumero){
    console.log("Contraseña Valida");
  }else{
    console.log("Contraseña invalida");
  }
}