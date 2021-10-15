import Componente from "./Componente.js";

class Botton extends Componente{

constructor(parentelement, tag, textBotton) {
  super(parentelement);
  this.element.textContent = textBotton;
}

}

export default Botton;