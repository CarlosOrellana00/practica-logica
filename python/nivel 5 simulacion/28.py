"""
Ejercicio 28
Calcular promedio de notas y determinar aprobación
"""
cantidad = int(input("¿Cuantas notas vas a ingresar? : "))

suma = 0

for i in range(cantidad):
  nota = float(input(f"Ingresa la nota {i + 1} : "))
  suma += nota

promedio = suma / cantidad

print("Promedio: ", round(promedio, 2))

if promedio >= 4.0:
  print("Resultado: APROBADO")
else:
  print("Resultado: REPROBADO")