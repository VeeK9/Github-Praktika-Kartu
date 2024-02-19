import DogInfo from "./DogInfo.js";

export default class Dog{
  constructor({veisle, nuotrauka, ...rest}){
    this.veisle = veisle;
    this.nuotrauka = nuotrauka;
    this.props = rest;
    return this.render()
  }
  render(){
    const dogCard = document.createElement('div');
    dogCard.classList.add("dogCard");
    console.log(this.props)

    const image = document.createElement('img');
    image.setAttribute('src', this.nuotrauka);
    image.setAttribute('alt', this.veisle);

    const name = document.createElement('h3');
    const nameText = document.createTextNode(this.veisle);
    name.appendChild(nameText);
    
    dogCard.append(image, name);

    dogCard.addEventListener('click', e => {
      console.dir(e.target)
      const dogModal = new DogInfo(this);
      document.body.appendChild(dogModal);
      dogModal.showModal()
    })

    return dogCard;
  }
}