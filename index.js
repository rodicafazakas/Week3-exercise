import Componente from './Componente.js';
import Image from './Image.js';
import Botton from './Botton.js';

// ejercicio 1
/// ///////////////////////////////////////////////
const btn = document.querySelector('.btn');
const padre = document.querySelector('.ex1');

btn.addEventListener(('click'), () => {
  const tag = document.querySelector('.introduir-frase').value;
  const newComponent = new Componente(padre, 'newdiv', 'p');
  // newComponent.innerHTML = tag;
  document.querySelector('.newdiv').innerHTML = tag;
});

// ejercicio2
/// ///////////////////////////////////////////////
const listItemImage = document.querySelector('.list-item-image');
const btnImage = document.querySelector('.btnImage');

btnImage.addEventListener('click', () => {
  const url = document.querySelector('.introduir-url').value;
  const newImage = new Image(listItemImage, url);
});
