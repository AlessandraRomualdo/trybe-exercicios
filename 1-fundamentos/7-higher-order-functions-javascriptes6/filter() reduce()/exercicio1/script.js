const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

dados.filter((item) => {
  // retorne apenas os elementos que são do tipo string
  return typeof item === 'string';
});


// Reduce
const valorItens = [1, 32, 44, 2, 3];

valorItens.reduce((acc, curr) => {
  console.log(`acumulador - acc:`, acc);
  console.log(`valorAtual - curr:`, curr);
}, 0);

valorItens.reduce((acc, curr) => {
  console.log(`acc:`, acc);
  console.log(`curr:`, curr);
  console.log('a soma atual é', acc + curr);

  return acc + curr;
}, 0);

// Reduce
const numbers = [1, 32, 44, 2, 3];

const totalSum = numbers.reduce((acc, curr) => {
  console.log(`valor do acc é ${acc} e o de curr é ${curr}`);
   // Iteração 1: valor do acc é 30 e o de curr é 1
   // Iteração 2:valor do acc é 31 e o de curr é 32
   // Iteração 3: valor do acc é 63 e o de curr é 44
   // Iteração 4: valor do acc é 107 e o de curr é 2
   // Iteração 5: valor do acc é 109 e o de curr é 3
   // Valor final de `acc`é 112 e `curr` para no 3


  return acc + curr;
}, 30); // O `valorInicial` é 30, ou seja, `acc` antes de executar a primeira iteração já está armazenando esse valor.

console.log(`valor final do acc é ${totalSum}`);
// por fim, esse `console.log` imprime o retorno da nossa função, que é o valor final de `acc` após cada uma das 5 iterações, tendo iniciado com valor 30.

// simplificar a função Reduce()
const nnumbers = [1, 32, 44, 2, 3];

const sumNumbers =  (acc, curr) => acc + curr;

const ttotalSum = nnumbers.reduce(sumNumbers, 30);

console.log(ttotalSum); //112

const numBers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const somaPares = numBers.filter((valor) => valor % 2 === 0).reduce((acc, curr) => acc + curr );
const total = numBers.reduce((acc, curr) => acc + curr, 0);
console.log(somaPares);
console.log(total);

// Agora, crie uma função usando dados de estudantes, para mostrar na tela um relatório que diz em qual matéria a pessoa foi melhor. Você usará tanto o map quanto o reduce dentro dele!
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const melhorNota = (acc, materia) => (acc.nota > materia.nota) ? acc : materia;
const report = (estudantes) => estudantes.map((estudante) => ({
  name: estudante.nome,
  materia: estudante.materias.reduce(melhorNota).name,
}))
console.log(report(estudantes));