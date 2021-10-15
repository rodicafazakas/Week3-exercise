import Component from "./Component.js";

class Button extends Component {
  text;
  actionOnClick;
  events();

  constructor(parentElement, text) {
    super(parentElement, "button");
    this.text = text;
    this.generateHTML();
    this.actionOnClick = actionOnClick;
    this.events();
  }

  events(){
    this.element.addEventListener("click", this.actionOnClick);
  };

  actionOnClick() {
     const searchText = document.querySelector('.introduir-frase').value;
     const btn = document.querySelector('.btn');
  }

  generateHTML(){
    const text = "Select all";
    this.element.innerHTML = this.text;
  }
} 
export default Button;