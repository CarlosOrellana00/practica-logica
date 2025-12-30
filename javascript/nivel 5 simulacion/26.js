/*
Ejercicio 26
Simular un login (usuario y contraseña correctos)
*/

//credenciales
let usuarioCorrecto = "admin";
let passwordCorrecto ="1234";

//datos ingresados
let usuario = prompt("Ingresa el usuario: ");
let password = prompt("ingresa la contraseña: ");

//validacion
if(usuario == usuarioCorrecto && password == passwordCorrecto){
  console.log("Aceeso Permitido");
}else{
  console.log("Aceeso Denegado");
}