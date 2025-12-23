"""
Ejercicio 16
Dado un arreglo, devolver solo los números pares
"""
numeros  = [4,7,10,15,22,33,8,9]

pares = []

for numero in numeros:
  if numero % 2 == 0:
    pares.append(numero)

print("Numeros Pares: ", pares)