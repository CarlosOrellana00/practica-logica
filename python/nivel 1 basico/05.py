'''
Ejercicio 5
  Invertir una cadena de texto

Condiciones:
- Pedir un texto al usuario
- Invertir el texto
- Mostrar el resultado

Pasos:
1.- Pedir el texto
2.- Invertirlo usando slicing
3.- Mostrar el texto invertido
'''

texto = input("ingrese un texto por favor: ")

texto_invertido = texto[::-1]

print(f"el texto invertido es: {texto_invertido}")