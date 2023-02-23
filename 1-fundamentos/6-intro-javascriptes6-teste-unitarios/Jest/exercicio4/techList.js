
const techList = (array, string) => {
  if (array.length === 0) return 'Vazio!';
  
  let arrayOrdenado = array.sort();
  let list = [];
 for (let i of arrayOrdenado) {
  let obj = {
    tech: i,
    name: string,
  }
  list.push(obj);
  }
 return list;
};
console.log(techList('','Lucas'))

module.exports = techList;