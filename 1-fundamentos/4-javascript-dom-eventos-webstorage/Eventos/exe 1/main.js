const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
const addClasse = () => {
  const classTech = document.querySelector('.tech');
  classTech.classList.remove('tech');
  event.target.classList.add('tech');
  
};
firstLi.addEventListener('click', addClasse);
secondLi.addEventListener('click', addClasse);
thirdLi.addEventListener('click', addClasse);

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
const changerText = () => {
  const classTech = document.querySelector('.tech');
  classTech.innerHTML = input.value;
}
input.addEventListener('keyup', changerText);
// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
  myWebpage.addEventListener('dblclick', ()=> {
    window.location.replace('https://alessandraromualdo.github.io/pagina-apresentacao/');
  })

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', ()=>{
  myWebpage.style.color = 'blue';
});
myWebpage.addEventListener('mouseout', ()=>{
  myWebpage.style.color = 'white';
});
// Segue abaixo um exemplo do uso de event.target:


const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.