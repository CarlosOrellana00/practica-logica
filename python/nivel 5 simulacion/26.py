"""
Ejercicio 26
Simular un login (usuario y contraseña correctos)
"""
# Credenciales
usuario_correcto = "admin"
password_correcta ="1234"

# Datos ingresados
usuario = input("Ingresa el Usuario: ")
password = input("Ingresar la contraseña: ")

# Validación
if usuario == usuario_correcto and password == password_correcta:
  print("Acceso Consedido")
else:
  print("Acceso Denegado")
