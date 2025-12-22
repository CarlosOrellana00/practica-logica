"""
Ejercicio 12
Encontrar el número más grande en una lista
Sin usar max()
"""
numeros = [4,15,2,89,23,7]

mayor= numeros[0]

for numero in numeros:
  if numero > mayor:
    mayor = numero

print(f"el numero mas grande es: {mayor}")