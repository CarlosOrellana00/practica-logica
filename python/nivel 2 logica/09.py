"""
Ejercicio 9
Multiplicar dos números sin usar el operador *
"""
num1 = int(input("Ingrese el primer numero: "))
num2 = int(input("Ingrese el segundo numero: "))

resultado = 0

for _ in range(num2):
  resultado += num1

print(f"el resultado de la multiplicacion es: {resultado}")