import { nanoid } from 'nanoid';
import copy  from 'clipboard-copy';
import './style.css';

const passwordBtn = document.querySelector('button');
const displayPassword = document.querySelector('h2');
passwordBtn.addEventListener('click', () => {
    const randomPassword = nanoid();
    displayPassword.innerHTML = randomPassword;
});

displayPassword.addEventListener('click', () => {
    copy(event.target.innerHTML);
    alert('Senha copiada!');
});