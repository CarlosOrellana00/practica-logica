"""
Ejercicio 6
Contar vocales en una palabra

Condiciones:
- Pedir una palabra al usuario
- Contar cuántas vocales tiene
- Mostrar el resultado
"""
texto = input("ingrese una palabra: ").lower()
vocales = "aeiou"
contador = 0

for letra in texto:
  if letra in vocales:
    contador  += 1

print(f"la palabra {texto} tiene un total de {contador}")