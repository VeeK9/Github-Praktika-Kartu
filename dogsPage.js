import Dog from "./components/Dog.js";

fetch('data.json')
  .then(res => res.json())
  .then(dogs => {
    console.log(dogs)
    dogs.sunys.forEach(dog => {
      const dogCard = new Dog(dog)
      document.querySelector('#dogCardContainer').appendChild(dogCard);
    })
  })

document.querySelector('button').addEventListener('click', e => {
  window.location = "./index.html#dogs"
})