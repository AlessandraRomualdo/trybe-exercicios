// Parte I
// Nova pessoa contratada
// Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:

// crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

// utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.
const newEmail = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().replace(' ', '_');
  return { nome: nomeCompleto, email: `${email}@trybe.com`};
}
const newEmployees = (newEmail) => {
  const employees = {
    id1: newEmail('Pedro Guerra'), // Nome: Pedro Guerra
    id2: newEmail('Luiza Drumond'), // Nome: Luiza Drumond 
    id3: newEmail('Carla Paiva'), // Nome: Carla Paiva 
  }
  return employees;
};
console.log(newEmployees(newEmail));

// Sorteador de loteria
// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

const sort = (numPlayed, chekSort) => {
  const numSort = Math.floor(Math.random() * 5) + 1;
  return chekSort(numSort, numPlayed) ? `Parabéns, você ganhou` : `Tente novamente`;
}
const chekSort = (numSort, numPlayed) => numSort === numPlayed
console.log(sort(4, chekSort))

// Corretor automático de exame
// Crie uma HOF que receberá três parâmetros:

// O primeiro será um array de respostas corretas (soluções);

// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

// Uma resposta correta adiciona 1 ponto à pontuação final;

// A ausência de uma resposta não altera a pontuação (quando for “N.A”);

// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corretor = (arraSolucoes, arrRespondida, result) => {
  let ponts = 0;
  for (const i of arraSolucoes) {
    const parcial = result(arrRespondida[i], arraSolucoes[i] )
    ponts += parcial
  }
  return ponts
}
const result = (arraSolucoes, arrRespondida) => {
  if (arraSolucoes === arrRespondida) {
    return 1;
  } else if (arrRespondida === 'N.A') {
    return 0;
  } else {
    return -0.5
  }
}
console.log(corretor(RIGHT_ANSWERS, STUDENT_ANSWERS, result))