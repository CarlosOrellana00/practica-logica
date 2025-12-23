"""
Ejercicio 19
Ordenar una lista sin usar sort()
(Método burbuja)
"""
numeros = [5,2,9,1,5,6]

n = len(numeros)

for i in range(n):
  for j in range(0, n - i - 1):
    if numeros[j] > numeros[j + 1]:
      numeros[j], numeros[j + 1] = numeros[j + 1],numeros[j]

print("la lista ordenada es: ",numeros)
