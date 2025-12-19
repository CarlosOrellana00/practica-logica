"""
Extra 1

toma una lista de numeros y ordenalos del menor al mayor
requisitos:
- la lista debe de contener numeros positivos y negativos, esto de manera obligada
- debe de poder verse la lista de manera inicial y la lista ordenada para comparar.
- No usar sort()
"""
lista = [4, -56, 0, 15, -22, 8, 17, 9]

print("lista Original",lista)

for i in range(len(lista)):
  for j in range(len(lista) - 1):
    if lista[j] > lista[j +1]:
      temp = lista[j]
      lista[j] = lista[j +1]
      lista[j + 1]= temp

print("Lista Ordenada: ", lista)