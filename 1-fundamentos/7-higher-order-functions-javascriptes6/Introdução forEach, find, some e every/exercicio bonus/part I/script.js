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