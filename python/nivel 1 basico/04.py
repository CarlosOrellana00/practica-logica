'''
Ejercicio 4
  Contar cuantas letras tiene una palabra o texto
Condiciones:
- Pedir una palabra o texto al usuario
- Contar la cantidad de caracteres usando len()
Pasos:
1.- Pedir el texto por consola
2.- Guardarlo en una variable
3.- Contar caracteres con len()
4.- Mostrar el resultado
'''
texto = input("Ingresa una palabra o texto por favor: ")

cantidad = len(texto)

print(f"el texto tiene {cantidad} de caracteres en total")