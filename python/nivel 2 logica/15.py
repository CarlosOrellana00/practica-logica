"""
Ejercicio 15
Contar cuántas veces aparece cada número en una lista
"""

numeros = [4,15,2,4,89,15,23,2,7,4]

conteo = {}

for numero in numeros:
  if numero in conteo:
    conteo[numero] += 1
  else:
    conteo[numero] = 1

print("Conteo de Numeros: ")
for numero, cantidad in conteo.items():
  print(f"{numero} aparece {cantidad} vez/veces")