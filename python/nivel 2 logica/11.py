"""
Ejercicio 11
Determinar si un número es primo
"""
numero = int(input("Ingrese el Numero: "))

if numero <= 1:
  print("El numero no es Primo")
else:
  es_primo = True

  for i in range(2, numero):
    if numero % i == 0:
      es_primo = False
      break

  if es_primo:
    print(numero," Es un numero primo")
  else:
    print(numero," No es un numero primo")
