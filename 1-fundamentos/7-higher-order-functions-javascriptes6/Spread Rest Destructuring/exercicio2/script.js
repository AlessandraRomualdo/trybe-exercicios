// Exercício 2
// Crie uma função sum que, dado um número ilimitado de parâmetros, retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6), o número 15 deve ser retornado.

const soma = (...args) => args.reduce((arg, curr) => arg + curr, 0);
console.log(soma(4,5,6, 8));
