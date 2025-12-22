"""
Ejercicio 10
Dividir dos números sin usar el operador /
(division entera)
"""

dividendo = int(input("Ingrese el dividendo: "))
divisor = int(input("Ingrese el divisor: "))

if divisor == 0:
  print("Error: no se puede dividir por cero")
else:
  resultado = 0

  while dividendo >= divisor:
    dividendo -= divisor
    resultado +=1

print(f"El resultaod de la division es: {resultado}")
