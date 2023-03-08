// Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

sum(primeNumbers[0], primeNumbers[2]) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [first, second, third] = primeNumbers;
sum(first, second);
sum(second, third);
sum(first,third);

// A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.
// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
[comida, animal, bebida] = [bebida, comida, animal]

console.log(comida, animal, bebida); // arroz gato água

// O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.
// Utilize array destructuring para produzir o resultado esperado pelo console.log 
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares;
console.log(numerosPares); // [6, 8, 10, 12];
