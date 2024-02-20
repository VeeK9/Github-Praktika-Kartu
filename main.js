import Dog from "./components/Dog.js";

// SUNU KORTELES

document.querySelector('#viewAll').addEventListener('click', e => {
  window.location = "./dogsPage.html"
})

fetch('data.json')
  .then(res => res.json())
  .then(dogs => {
    console.log(dogs)
    dogs.sunys.forEach(dog => {
      if(dog.id < 3){
        const dogCard = new Dog(dog)
        document.querySelector('#dogCardContainer').appendChild(dogCard);
      }
    })
  })