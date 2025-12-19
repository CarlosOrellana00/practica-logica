'''
Ejercicio 3
  Determinar el mayor de tres numeros

Condiciones:
- Pedir 3 numeros al usuario
- Compararlos usando if / elif / else
- Mostrar cual es el mayor

Pasos:
1.- Pedir los tres numeros
2.- Convertirlos a numero
3.- Compararlos
4.- Mostrar el mayor
'''
num1 = float(input("ingresa el primer numero: "))
num2 = float(input("ingresa el segundo numero: "))
num3 = float(input("ingresa el tercer numero: "))

if num1 >= num2 and num1 >= num3:
  print(f"El numero mayor es: {num1}")
elif num2 >= num1 and num2 >= num3:
  print(f"El numero mayor es: {num2}")
else:
  print(f"El numero mayor es: {num3}")

