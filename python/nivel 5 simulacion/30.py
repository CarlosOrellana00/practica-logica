"""
Ejercicio 30
Simular un carrito simple (sumar precios)
"""
total = 0

while True:
  precio = input("Ingresa el precio del producto (o '0' para terminar): ")

  if precio == "0":
    break

  precio = float(precio)

  if precio < 0:
    print("El precio no puede ser negativo: ")
  else:
    total += precio
    print("Prodicto Agregado. Total Actual: ", total)

print("Total Final a Pagar: ",total)
