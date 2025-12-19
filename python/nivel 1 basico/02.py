'''
Ejercicio 2
  Determinar si un numero es par o impar
Condiciones:
1.- Pedir 1 numero al usuario
2.- si el numero es par, reflejarlo por pensaje
3.- so el numero es impar, reflejarlo por mensaje
Pasos:
1.- Pedir el numero por consola
2.- covertir a "int"
3.- calcular resto/residuo de la division por 2 del numero ingresado
4.- si el resultado es 0, es numero PAR
5.- si no lo es, es numero IMPAR
'''
numero = int(input("ingresa un numero entero: "))

if numero %2 ==0:
  print("El numero es par")
else:
  print("el numero es impar")

