"""
Ejercicio 22
Contar cuántas veces aparece cada letra en un texto
"""
import string

texto = input("Ingrese un texto: ").lower()
conteo ={}

for letra in texto:
  if letra in string.ascii_lowercase:
    conteo[letra] = conteo.get(letra, 0) +1
"""
linea 12
Reemplaza todo esto:

if letra in conteo:
    conteo[letra] += 1
  else:
    conteo[letra] = 1
"""

print("Conteo de Letras")
for letra, cantitad in conteo.items():
  print(f"{letra} -> {cantitad}")