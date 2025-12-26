"""
Ejercicio 23
Convertir un número decimal a binario
Sin usar funciones
"""
numero = int(input("Ingresa un numero decimal: "))

if numero == 0:
  print("Binario: 0")
else:
  binario = ""

  while numero > 0:
    resto = numero % 2
    binario= str(resto) + binario
    numero //=2

print("Binario: ", binario)