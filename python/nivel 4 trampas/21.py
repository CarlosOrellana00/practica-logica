"""
Ejercicio 21
Intercambiar dos variables sin usar una tercera
"""
a = int(input("ingrese la variable A: "))
b = int(input("ingrese la variable A: "))

print(f"Antes del intercambio -a -> {a}, b -> {b}")

a, b = b, a

print(f"despues del intercambio  a = {b}, b = {a}")