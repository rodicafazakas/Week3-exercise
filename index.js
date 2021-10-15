import Componente from 'Componente.js';

const btn = document.querySelector('.btn');
const padre = document.querySelector('.container');
btn.addEventListener(("click") => {
  const searchText = document.querySelector('.introduir-frase').innerHTML;
  const newComponent = new Component(padre, "newdiv", searchText);
})
