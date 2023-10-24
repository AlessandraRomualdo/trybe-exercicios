import random


def randon_number():
    list_numbers = []
    for i in range(0, 100):
        list_numbers.append(random.randint(1, 100))
    return list_numbers


# print(randon_number())


def recursive_sum(n):
    sun = 0
    if n == 0:
        return sun
    else:
        sun = n + recursive_sum(n - 1)
    return sun


# print(recursive_sum(4))


def not_recursive(n):
    even = []
    for i in range(0, n):
        if i % 2 == 0:
            even.append(i)
    return len(even)


# print(not_recursive(10))


def recursive_even(n):
    if n == 0:
        return 0
    elif n % 2 == 0:
        return 1 + recursive_even(n - 1)
    else:
        return recursive_even(n - 1)


# print(recursive_even(10))


def recursive_max_num(n):
    if len(n) == 1:
        return n[0]
    else:
        if n[0] > n[1]:
            n.pop(1)
        else:
            n.pop(0)
        return recursive_max_num(n)


print(recursive_max_num([1, 2, 3, 4, 20, 6, 7, 8, 9, 10]))


def calcular_mdc(a, b):
    # Continuamos enquanto b for diferente de zero
    while b != 0:
        # Trocamos o valor de a pelo valor de b
        # E atualizamos b para ser o resto da divisão de a por b
        a, b = b, a % b

    # Quando b se torna zero, a contém o MDC
    return a
