class Ventilador:
    def __init__(self, cor, voltagem, preco):
        self.cor = cor
        self.voltagem = voltagem
        self.preco = preco


class Pessoa:
    def __init__(self, nome, saldo_conta):
        self.nome = nome
        self.saldo_conta = saldo_conta
        self.ventilador = None

    def comprar_ventilador(self, ventilador):
        if self.saldo_conta >= ventilador.preco:
            self.saldo_conta -= ventilador.preco
            self.ventilador = ventilador
        else:
            print('Saldo insuficiente')

    def __str__(self):
        if (self.ventilador is not None):
            return f"{self.nome} - tem ventilador."
        return f"{self.nome} - não tem ventilador."


ventilador = Ventilador('azul', 110, 150)
p1 = Pessoa('Luiz', 500)
# print(p1)
p1.comprar_ventilador(ventilador)
print(p1)
