const personagens  = [
	{
		classe: 'Guerreiro',
		status: {
			hp: 150,
			atk: 10,
			def: 30,
		},
		habilidades:['Pular', 'Bloquear', 'Ataque Rapido'],
	},
	{
		classe: 'Arqueiro',
		status: {
			hp: 100,
			atk: 20,
			def: 15,
		},
		habilidades:['Desviar', 'Precisão', 'Tiro Flamejante'],
	},
	{
		classe: 'Mago',
		status: {
			hp: 85,
			atk: 40,
			def: 10,
		},
		habilidades:['Teleportar', 'Bola de Fogo', 'Nevasca'],
	}
]
// 1 Encontre o personagem que utiliza a habilidade Teleportar
const skill = (skill) => personagens.find((personagem) => personagem.habilidades.includes(skill)).classe
console.log(skill('Teleportar'));

// 2 Verifique se todas as classes têm 3 habilidades.
const everyThree = personagens.every((personagem) => personagem.habilidades.length === 3);
console.log(everyThree);

// 3 Verifique se pelo menos uma classe tem o hp maior que 150 e retorne um valor booleano.

const hp150 = personagens.some((personagem) => personagem.status.hp > 150);
console.log(hp150);

// 4 Crie uma função que liste todas as habilidades do Arqueiro.

const listSkill = (skill) => personagens.find((personagem) => personagem.classe === skill).habilidades

console.log(listSkill('Arqueiro'));

// 5 Crie uma função que ordene as classes pelo maior ataque e imprima o nome da classe e o ataque.

const biggerAtk = () => {
  return personagens.sort((a, b) => b.status.atk - a.status.atk).map((personagem) => 
    `O ataque do ${personagem.classe} é ${personagem.status.atk}`
  )
}
console.log(biggerAtk());

// 6 Faça uma função que retorne a somatória de todos os ataques

const totalAtk = () => {
  return `O ataque total é ${personagens.reduce((acc, personagem) => acc + personagem.status.atk, 0)}`
}
console.log(totalAtk())


// 7 Faça uma função que retorne um novo array com todas as habilidades ordenadas.
const listHabilidades = () => {
  const habi =personagens.map((personagem) => personagem.habilidades).flat().sort();
  return habi
}
console.log(listHabilidades());