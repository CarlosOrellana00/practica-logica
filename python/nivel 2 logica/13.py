"""
Ejercicio 13
Sumar todos los números de una lista
Sin usar sum()
"""

numeros = [4,15,89,23,7]

total = 0

for numero in numeros:
  total += numero

print(f"la suma total es {total}")