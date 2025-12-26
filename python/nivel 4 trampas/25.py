"""
Ejercicio 25
Calcular el factorial de un número (iterativo)
"""
numero = int(input("Ingrese un numero: "))

if numero < 0:
  print("El factorial no esta definicio para nuneros negativos")
else:
  factorial = 1

  for i in range(1, numero + 1):
    factorial *= i

  print(f"El factorial de {numero} es: {factorial}")