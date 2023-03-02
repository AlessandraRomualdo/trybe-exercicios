const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// Adicione seu código aqui
emailListInData.forEach((email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
})
const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

idades.find((idade) => idade < 20); // 18

const numbers = [19, 21, 30, 3, 45, 22, 15];

const resultado = numbers.find((divisivel) => {
  divisivel % 3 === 0 && divisivel % 5 === 0
})

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Adicione seu código aqui
const nomeTamanho5 = names.find((name) => name.length === 5)


// Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

// Adicione seu código aqui
const encontrada = musicas.find((musica) => {
  musica.id === '31031685'
})
