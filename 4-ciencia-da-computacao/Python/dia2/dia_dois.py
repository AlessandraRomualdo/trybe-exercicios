import random


def pyramid_name():
    name = input('Digite seu nome:')
    for i in range(len(name)):
        print(name)
        name = name[:-1]


# pyramid_name()

fruits = ['banana', 'laranja', 'morango', 'melancia']


def guess_word(words):
    sorted_word = random.choice(words)
    shuffled_word = "".join(random.sample(sorted_word, len(sorted_word)))
    MAX_ATTEMPTS = 3
    attemp = 0
    for attemp in range(MAX_ATTEMPTS):
        attemp += 1
        print(f' Adivinhe a palavra - {shuffled_word}')
        print(f'Você tem {(MAX_ATTEMPTS + 1) - attemp} tentativas')
        guess = input('Digite a palavra:')
        if guess == sorted_word:
            print('Você acertou!')
            break
        else:
            print('Você errou!')


# guess_word(fruits)

# exercicio 5

def fizzbuzz(number):
    result = []
    for i in range(1, number + 1):
        if i % 3 == 0 and i % 5 == 0:
            result.append('FizzBuzz')
        elif i % 3 == 0:
            result.append('Fizz')
        elif i % 5 == 0:
            result.append('Buzz')
        else:
            result.append(i)
    return result


# print(fizzbuzz(15))
