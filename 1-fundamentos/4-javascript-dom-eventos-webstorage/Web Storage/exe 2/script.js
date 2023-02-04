window.onload = function(){
  let select = document.querySelector('select');
  select.addEventListener('change', ()=>{
    let selected = select.selectedOptions[0]
    document.body.style.backgroundColor = selected.value;
    //salvar o item no localstorage
    localStorage.setItem('4.4-background', selected.value);
  });

  let inputfontSize = document.querySelector('input[name="font-size"]');
  let paragrafos = document.querySelector('p');
  inputfontSize.addEventListener('change', ()=>{
    paragrafos.style.fontSize = `${inputfontSize.value}px`;
    //salva o item no localStorage
    localStorage.setItem('4.4-font-size', `${inputfontSize.value}px`);

  });



//carrega a pagina e seta os valores salvos no localStorage
let savedBackgroud = localStorage.getItem('4.4-background');
document.body.style.backgroundColor = savedBackgroud;

//carrega a pagina e seta os valores salvos no localStorage
let saveFontSize = localStorage.getItem('4.4-font-size');
paragrafos.style.fontSize = saveFontSize;

}