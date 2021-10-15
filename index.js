import Componente from './Componente.js';
import Image from './Image.js';

const btn = document.querySelector('.btn');
const listado = document.querySelector('.list');

const padre = document.querySelector('.ex1');
const btnImage = document.querySelector('.btnImage');

btn.addEventListener(('click'), () => {
  const searchText = document.querySelector('.introduir-frase').value;
  const newComponent = new Componente(padre, 'newdiv', searchText);
});

btnImage.addEventListener('click', () => {
  new Image(listado, 'image-item', img);
});
