from collections import Counter
from abc import ABC, abstractmethod
from math import pi as PI


class TV:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume <= 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume >= 1:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if canal < 1 or canal > 100:
            raise ValueError('Canal inválido')

        self.__canal = canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada


class Estatistica:
    def __init(self, numbers):
        self.__numbers = numbers

    def media(self):
        return sum(self.__numbers) / len(self.__numbers)

    def mediana(self):
        '''A mediana é o valor que separa a metade superior de uma
        lista ordenada da metade inferior'''
        list_ordened = sorted(self.__numbers)
        n = len(list_ordened)
        if (n % 2 == 1):
            return list_ordened[n // 2]
        else:
            half1 = list_ordened[n // 2 - 1]
            half2 = list_ordened[n // 2]
            return (half1 + half2) / 2

    def moda(self):
        '''A moda é o valor que aparece com maior frequência'''
        counter = Counter(self.__numbers)
        return counter.most_common(1)[0][0]

#  implemente uma classe abtrata FiguraGeometrica


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimetro(self):
        raise NotImplementedError


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.__lado = lado

    def area(self):
        return self.__lado ** 2

    def perimetro(self):
        return self.__lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.__base = base
        self.__altura = altura

    def area(self):
        return self.__base * self.__altura

    def perimetro(self):
        return (self.__base + self.__altura) * 2


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.__raio = raio

    def area(self):
        return PI * self.__raio ** 2

    def perimetro(self):
        return 2 * PI * self.__raio
