// Bônus
// Todos os exercícios devem ser realizados utilizando reduce e, se necessário, use outra HOF. A informação será citada no enunciado.

// 1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => arrays.reduce((arr, curr) => arr + curr).split(' ');
console.log(flatten());
const novoArr = arrays.flat();
console.log(novoArr);

