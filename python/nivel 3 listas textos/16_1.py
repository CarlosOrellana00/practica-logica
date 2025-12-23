'''
Ejercicio 16
Dado un arreglo, devolver solo los números pares
El usuario ingresa los numeros
'''
entrada = input("Ingrese numeros separados por coma: ")
numeros = list(map(int, entrada.split(",")))

pares = []

for numero in numeros:
  if numero % 2 == 0:
    pares.append(numero)

print("Numeros pares: ", pares)