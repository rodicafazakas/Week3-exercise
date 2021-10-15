import Componente from './Componente.js';
import Image from './Image.js';
import Botton from './Botton.js';

const btn = document.querySelector('.btn');
const padre = document.querySelector('.ex1');

btn.addEventListener(('click'), () => {
  const searchText = document.querySelector('.introduir-frase').value;
  const newComponent = new Componente(padre, 'newdiv', searchText);
});

const listItemImage = document.querySelector('.list-item-image');
const btnImage = document.querySelector('.btnImage');

btnImage.addEventListener('click', () => {
  const url = document.querySelector('.list-item-image').value;
  new Image(listItemImage, 'image-item', url);
});
