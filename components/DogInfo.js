export default class DogInfo{
  constructor({veisle, nuotrauka, props}){
    this.veisle = veisle;
    this.nuotrauka = nuotrauka;
    this.props = props;
    return this.render()
  }
  render(){
    const dogModal = document.createElement('dialog');
    dogModal.classList.add('infoDialog');

    const name = document.createElement('h3');
    const nameText = document.createTextNode(this.veisle);
    name.appendChild(nameText);

    const image = document.createElement('img');
    image.setAttribute('src', this.nuotrauka);
    image.setAttribute('alt', this.veisle);

    const kilme = document.createElement('p');
    const kilmeText = document.createTextNode(`Kilmės šalis: ${this.props.kilme}`);
    kilme.appendChild(kilmeText);

    const dydis = document.createElement('p');
    const dydisText = document.createTextNode(`Dydžio klasė: ${this.props.dydis}`);
    dydis.appendChild(dydisText);

    const charakteris = document.createElement('p');
    const charakterisText = document.createTextNode(`Šuniuko charakteris: ${this.props.charakteris}`);
    charakteris.appendChild(charakterisText);

    const ilgaamziskumas = document.createElement('p');
    const ilgaamziskumasText = document.createTextNode(`Ilgaamžiškumas: ${this.props.ilgaamziskumas}`);
    ilgaamziskumas.appendChild(ilgaamziskumasText);

    const suniukoKaina = document.createElement('p');
    const suniukoKainaText = document.createTextNode(`Šuniuko kaina: ${this.props.suniukoKaina}`);
    suniukoKaina.appendChild(suniukoKainaText);

    const aprasymas = document.createElement('p');
    const aprasymasText = document.createTextNode(this.props.aprasymas);
    aprasymas.appendChild(aprasymasText);

    const elgesys = document.createElement('p');
    const elgesysText = document.createTextNode(this.props.elgesys);
    elgesys.appendChild(elgesysText);

    const closeIcon = document.createElement('span');
    closeIcon.classList.add('bi','bi-x-circle');

    closeIcon.addEventListener('click', () => {
      dogModal.remove();
    })

    dogModal.append(name, image, kilme, dydis, charakteris, ilgaamziskumas, suniukoKaina, aprasymas, elgesys, closeIcon);

    dogModal.addEventListener('click', e => {
      const out = dogModal.getBoundingClientRect();
      if(
        e.clientX < out.left ||
        e.clientX > out.right ||
        e.clientY < out.top ||
        e.clientY > out.bottom
      ){ 
        dogModal.remove()
      };
    });
    document.addEventListener('keydown', e => {
      if(e.code === 'Escape'){
        dogModal.remove();
      }
    });

    console.log(dogModal)
    return dogModal;
  }
}