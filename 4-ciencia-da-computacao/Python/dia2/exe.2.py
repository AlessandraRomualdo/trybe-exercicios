import random

# def printName():
#     name = input("Digite seu nome: ")
#     for i in range(len(name)):
#         for index in range(len(name) - i):
#             print(name[index], end="")
#         print()

# printName()


frutas = ['banana', 'laranja', 'morango', 'melancia']
MAX_ATTEMPTS = 3


def words_shrufle():
    word = random.choice(frutas)
    scrambled_word = "".join(random.sample(word, len(word)))
    return word, scrambled_word


def collect_guesses():
    guesses = []
    for attempt in range(MAX_ATTEMPTS):
        guess = input("Guess the word: ")
        guesses.append(guess)
    return guesses


def check_game_result(secret_word, guesses):
    if secret_word in guesses:
        print(f"You win: {secret_word}")
    else:
        print(f"You lose: {secret_word}")


if __name__ == "__main__":
    secret_word, scrambled_word = words_shrufle()
    print(f"Scrambled word is {scrambled_word}")
    guesses = collect_guesses()
    check_game_result(secret_word, guesses)
