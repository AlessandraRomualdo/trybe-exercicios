// Adicione suas informações ao objeto pessoaEstudante = {}, como nome, email, telefone, github e linkedIn, usando os métodos aprendidos neste conteúdo.

const pessoaEstudante = {};
let newKey = 'nome';
const nome = 'Alessandra';
// função para adicionar valores no objetos
const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
  objeto[novaPropriedade] = valor;
};
adicionaPropriedade(pessoaEstudante, newKey, nome)
newKey = 'github';
const github = 'https://github.com/AlessandraRomualdo'
adicionaPropriedade(pessoaEstudante, newKey, github);
newKey = 'LinkedIn';
const linkedin = 'https://www.linkedin.com/in/alessandra-romualdo-07782b1b7/'
adicionaPropriedade(pessoaEstudante, newKey, linkedin)
console.log(pessoaEstudante);
// 
const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  author: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};

console.log(Object.keys(coolestTvShow));

for (const property in coolestTvShow) {
  console.log(property);
}
///

const student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

const student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (const index in arrayOfSkills) {
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);
