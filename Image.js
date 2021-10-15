import Componente from './Componente.js';

class Image extends Componente{ 
  url;
  element;

  constructor (parentElement, url) {
    super(parentElement, "image", "img");
    this.element = document.createElement("img");
    this.element.src = url;
    this.url = url;
  }
}

export default Image;