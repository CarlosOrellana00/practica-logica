"""
Ejercicio 14
Eliminar duplicados de una lista
Sin usar set()
"""
numeros = [4,15,2,4,89,15,23,2,7]

sin_duplicados = []

for numero in numeros:
  if numero not in sin_duplicados:
    sin_duplicados.append(numero)

print(f"Lista sin duplicados {sin_duplicados}")