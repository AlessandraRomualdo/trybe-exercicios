// Spread

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
// Retorna o maior valor do array
console.log(Math.max(...randomNumbers)); // 800

// Faça uma função chamada fruitSalad, passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'morango', 'melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['uva', 'kiwi', 'mamão'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const saladaIdeal = [...fruit, ...additional]
  return saladaIdeal;
};

console.log(fruitSalad(specialFruit, additionalItens));