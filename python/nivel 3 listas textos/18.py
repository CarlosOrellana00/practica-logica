"""
Ejercicio 18
Comprobar si una palabra es palíndromo
"""
palabra = input("Ingrese una palabra: ")

palabra_invertida = palabra[::-1]

if palabra == palabra_invertida:
  print("la palabra ",palabra," es un palindromo")
else:
  print("la palabra ",palabra," no es un palindromo")
