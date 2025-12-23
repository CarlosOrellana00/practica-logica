"""
Ejercicio 20
Buscar un número en una lista (búsqueda manual)
"""

numeros = [4,15,2,89,23,7]

buscar = int(input("Ingrese el numero a buscar: "))

encontrado = False

for numero in numeros:
  if numero == buscar:
    encontrado = True
    break

if encontrado:
  print("El numero se encuentra en la lista")
else:
  print("El numero no se encuentra en la lista")
