import validator from 'validator';
import './style.css';

// Seletores
const campoDeTexto = document.querySelector('#value');
const button = document.querySelector('#button');
const seletor = document.querySelector('#option');
const textoDeSaida = document.querySelector('#answer');
const numberMagic = 4;
button.addEventListener('click', (event) => {
  event.preventDefault();

  const campos = {
    cpf: validator.isTaxID(campoDeTexto, 'pt-BR'),
    hexColor: validator.isHexColor(campoDeTexto.value),
    email: validator.isEmail(campoDeTexto.value),
    uuid: validator.isUUID(campoDeTexto.value, numberMagic),
    url: validator.isURL(campoDeTexto.value),
  };

  textoDeSaida.innerHTML = `A validação retornou ${campos[seletor.value]}`;
});
