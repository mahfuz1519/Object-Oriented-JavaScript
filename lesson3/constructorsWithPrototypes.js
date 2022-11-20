/*
bark() method is not defined on individual objects. But instead is 
defined on `THE OBJECT` referenced by their
`[[PROTOTYPE]]` property
*/
let DogPrototype = {
  bark: function () {
    return this.weight > 20 ? "WOOF!" : "Yip!";
  }
}

function Dog(name, breed, weight) {

  Object.setPrototypeOf(this, DogPrototype);

  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

console.log(maxi.hasOwnProperty(maxi.bark));// FALSE
console.log((maxi.bark === dexter.bark)); // TRUE
console.log(Object.getPrototypeOf(maxi).bark === DogPrototype.bark);//TRUE

console.log(Object.getPrototypeOf(maxi).bark);

