const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
// 🚀 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.
// 👀 faça com que o array de nomes seja um array de letras.
//const expectedResult = 20;
const countA = () => {
  const arrayWords = names.join().split('').filter((word) => word === 'A' || word === 'a');
  return arrayWords.length
}
console.log(countA())

// 🚀 5 - Crie um array de objetos e calcule a média de notas. Utilize as constantes students e grades para criar um array de objetos e calcule a média da nota das pessoas estudantes

// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
/*const expectedResult = [
 { name: 'Pedro Henrique', average: 7.8 },
 { name: 'Miguel', average: 9.2 },
 { name: 'Maria Clara', average: 8.8 },
];*/
const studentAverage = () => {
  return students.map((estudante, i) => ({
    name: estudante,
    average: (grades[i].reduce((acc, curr) => acc + curr, 0)) / grades[i].length
  }) )
}
console.log(studentAverage())