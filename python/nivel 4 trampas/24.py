"""
Ejercicio 24
Determinar si dos palabras son anagramas
"""
palabra1 = input("Ingresa la primera palabra: ").lower()
palabra2 = input("Ingresa la segunda palabra: ").lower()

if len(palabra1) != len(palabra2):
  print("No son anagramas")
else:
  conteo1 = {}
  conteo2 = {}

  for letra in palabra1:
    conteo1[letra] = conteo1.get(letra, 0) +1

  for letra in palabra2:
    conteo2[letra] = conteo2.get(letra, 0) +1

  if conteo1 == conteo2:
    print("las palabras son anagramas")
  else:
    print("las palabras NO son anagramas")
