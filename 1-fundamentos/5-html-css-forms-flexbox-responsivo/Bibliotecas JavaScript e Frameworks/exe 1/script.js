// Seletores
const btnEnviar = document.querySelector('#submit-btn');
const btnLimpar = document.querySelector('#clear-btn');
const inputs = document.querySelectorAll('input');

btnEnviar.addEventListener('click', (event) => {
  event.preventDefault();
});

btnLimpar.addEventListener('click', () => {
  inputs.innerHTML = '';
});

// 5
const agreement = document.querySelector('#agreement');
const agreeMent = () => {
  btnEnviar.disabled = !agreement.checked;
};
agreement.addEventListener('change', agreeMent);
