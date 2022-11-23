/*
Use the OLOO pattern to create an object prototype 
that we can use to create pet objects. 
The prototype should let us create and use pets like this:


*/

let PetPrototype = {
  sleep: function() {
    return `I am sleeping`;    
  }, 
  
  wake: function() {
    return `I am awake`;    
  },

  init(animalType, name){
    this.animal = animalType;
    this.name = name;

    return this;
  }
}

let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
console.log(pudding.sleep()); // I am sleeping
console.log(pudding.wake());  // I am awake

let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
console.log(neptune.sleep()); // I am sleeping
console.log(neptune.wake());  // I am awake