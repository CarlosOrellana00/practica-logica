"""
Ejercicio 27
Validar una contraseña (largo mínimo, números, letras)
"""
password = input("Ingresa una contraseña: ")

tiene_letra = False
tiene_numero = False

# primera confirmacion
if len(password) < 8:
  print("Contraseña invalida: debe de tener al menos 8 digitos.")
else:
  # segunda y tercera confirmacion
  for c in password:
    if c.isalpha():
      tiene_letra = True
    elif c.isdigit():
      tiene_numero = True

  if tiene_letra and tiene_numero:
    print("Contraseña Valida ")
  else:
    print("Contraseña Invalida: debe contener al menos una letra y un numero")

