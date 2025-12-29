"""
Ejercicio 29
Contar palabras en una frase
"""
frase = input("Ingresa una frase: ").strip()

if frase =="":
  print("la frase no contiene palabras, esta vacia")
else:
  palabras = frase.split()
  print("Cantidad de palabras: ",len(palabras))