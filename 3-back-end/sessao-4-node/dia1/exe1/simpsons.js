const fs = require('fs').promises;

// 6A
// const readSimpsons = async () => {
//   const file = await fs.readFile('./simpsons.json', 'utf-8');
//   const data = JSON.parse(file);
//   const simpsons = data.map(({ id, name }) => `${id} - ${name}`);
//   simpsons.forEach((simpson) => console.log(simpson));
// }
// readSimpsons();

// 6B
// const returnSimpson = async (id) => {
//   const file = await fs.readFile('./simpsons.json', 'utf-8');
//   const data = JSON.parse(file);
//   const simpson = data.find((simpson) => Number(simpson.id) === id);
//   if (!simpson) throw new Error('id não encontrado');
//   console.log(`${simpson.id} - ${simpson.name}`);
// };
// returnSimpson(3);

// 6C
// const removeSimpson = async () => {
//   const file = await fs.readFile('./simpsons.json', 'utf-8');
//   const data = JSON.parse(file);
//   const newSimpson = data.filter((simpson) => Number(simpson.id) !== 10 && Number(simpson.id) !== 6);
//   await fs.writeFile('./simpsons.json', JSON.stringify(newSimpson));
//   console.log(newSimpson);
// };
// removeSimpson();

// 6D
const familySimpson = async () => {
  const file = await fs.readFile('./simpsons.json', 'utf-8');
  const data = JSON.parse(file);
  const family = data.slice(0, 4);
  console.log(family);
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(family));
};
familySimpson();