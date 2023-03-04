const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
// Crie uma função que retorne o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonDamage = () => {
  const damageMin = 15;
  const damageMAx = Math.floor(Math.random() * dragon.strength) + 1;
  const damage = damageMAx < damageMin ? damageMin : damageMAx;
  return damage;
}
console.log(dragonDamage());
// Crie uma função que retorne o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const damageWarrior = () => {
  const damageMin = 30;
  const damageMax = Math.floor(Math.random() * (damageMin * warrior.weaponDmg)) + 1;
  const damage = damageMax < damageMin ? damageMin : damageMax;
  return damage;
}
console.log(damageWarrior());
// Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”), e a mana gasta é 0.
const spentMage = () => {
  const damageMin = mage.intelligence;
  const damageMax = Math.floor(Math.random() * (damageMin * 2)) + 1;
  let damage = damageMax < damageMin ? damageMin : damageMax;
  let mana = mage.mana - 15;
  if (mage.mana < 15) {
    damage = 'Não possui mana suficiente';
    mana = mage.mana - 0;
  }
  return {
    damage: damage,
    mana: mana,
  }
}
console.log(spentMage());