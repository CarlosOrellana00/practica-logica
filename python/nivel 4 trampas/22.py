"""
Ejercicio 22
Contar cuántas veces aparece cada letra en un texto
"""

texto = input("ingrese un texto: ").lower()

conteo = {}

for letra in texto:
  if letra == " ":
    continue

  if letra in conteo:
    conteo[letra] += 1
  else:
    conteo[letra] = 1

print("Conteo de Letras")
for letra, cantitad in conteo.items():
  print(f"{letra} -> {cantitad}")