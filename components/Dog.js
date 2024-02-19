import DogInfo from "./DogInfo.js";

export default class Dog{
  constructor({veisle, nuotrauka}){
    this.veisle = veisle;
    this.nuotrauka = nuotrauka;
    return this.render()
  }
  render(){
    const dogCard = document.createElement('div');
    dogCard.classList.add("dogCard");

    const image = document.createElement('img');
    image.setAttribute('src', this.nuotrauka);
    image.setAttribute('alt', this.veisle);

    const name = document.createElement('h3');
    const nameText = document.createTextNode(this.veisle);
    name.appendChild(nameText);

    dogCard.append(image, name);
    return dogCard;
  }
}