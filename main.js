import Dog from "./components/Dog.js";

// SUNU KORTELES

fetch('data.json')
  .then(res => res.json())
  .then(dogs => {
    console.log(dogs)
    dogs.sunys.forEach(dog => {
      const dogCard = new Dog(dog)
      document.querySelector('#dogCardContainer').appendChild(dogCard);
    })
  })

console.log('kortele')
document.querySelectorAll('.dogCard').forEach(card => {
  card.addEventListener('click', e => {
    console.log(e.target);
  })
})