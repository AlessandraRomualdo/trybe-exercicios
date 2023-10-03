
def returnMax(a, b):
    if a > b:
        return a
    else:
        return b

def average(list):
    sum = 0
    for i in list:
        sum += i
    return sum / len(list)


def printSquere(n):
    if (n > 1):
        for i in range(n):
            print ('*' * n)

def printMaxName(list):
    max = ''
    for i in list:
        if len(i) > len(max):
            max = i
    print(max)
    return max

def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    print(required_cans, required_cans * can_price)
    return required_cans, required_cans * can_price

def isTriangle( a, b, c):
    isTri = a + b > c and a + c > b and b + c > a
    if not isTri:
        return 'não é um triângulo'
    elif a == b and a == c:
        return 'É um triângulo equilátero'
    elif a == b or a == c or b == c:
        return 'É um triângulo isósceles'
    else:
        return 'É um triângulo escaleno'
    
#  exercicios bonus

def minValue(list):
    print(min(list))
    return min(list)

def printTriangle(n):
    if (n > 1):
        for i in range(n):
            print ('*' * (i + 1))

def sum(n):
    sum = 0
    for i in range(1, n + 1):
        sum += i
    print(sum)

def totalFuel(liters, type):
    A = 1.9
    G = 2.5
    if (type == 'A' and liters > 20):
       value_with_desc = A -( A * ( 5 / 100))
       total = value_with_desc * liters
       return total
    elif (type == 'A' and liters <= 20):
      value_with_desc = A -( A * ( 3 / 100))
      total = value_with_desc * liters
      return total
    elif (type == 'G' and liters > 20):
      value_with_desc = G -( G * ( 6 / 100))
      total = value_with_desc * liters
      return total
    else:
      value_with_desc = G -( G * ( 4 / 100))
      total = value_with_desc * liters
      return total


# outra forma de fazer 
totalFuel(20, 'A') 
def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total
