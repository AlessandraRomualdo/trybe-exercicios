import JustValidate from 'just-validate';
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

const validate = new JustValidate('#main-form', {
  errorFieldCssClass: 'é inválido',
});

validate
  .addField ('#fullName', [
  {
    rule: 'required',
  },
  {
    rule: 'minLength',
    value: 3,
  },
  {
    rule: 'maxLength',
    value: 15,
  },
]);