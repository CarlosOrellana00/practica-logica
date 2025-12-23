"""
Ejercicio 17
Dado un texto, devolver la palabra más larga
"""
texto = input("Ingrese un texto: ")

palabras = texto.split()

if not palabras:
  print("no se ingresaron palabras")
else:
  palabra_mas_larga = palabras[0]

  for palabra in palabras:
    if len(palabra) > len(palabra_mas_larga):
      palabra_mas_larga = palabra

  print(f"la apalbra mas larga es: {palabra_mas_larga}")