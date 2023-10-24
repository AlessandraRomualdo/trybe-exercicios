from dia_dois import fizzbuzz


def test_return_fizz():
    assert fizzbuzz(3) == [1, 2, 'Fizz']


def test_return_buzz():
    assert fizzbuzz(5) == [1, 2, 'Fizz', 4, 'Buzz']


def test_return_fizzbuzz():
    assert fizzbuzz(15) == [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz',
                            'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
