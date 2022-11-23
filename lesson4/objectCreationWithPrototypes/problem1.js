/*
Use a factory function to create pet objects.
The factory should let us create and use pets like this:

let pudding = createPet("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = createPet("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake

*/
function createPet(animalType, name) {
  return {
    animal: animalType,
    name: name,

    sleep: function() {
      return `I am sleeping`;      
    },

    wake: function() {
      return `I am awake`;
    }
  }  
}

let pudding = createPet("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
console.log(pudding.sleep()); // I am sleeping
console.log(pudding.wake());  // I am awake

let neptune = createPet("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
console.log(neptune.sleep()); // I am sleeping
console.log(neptune.wake());  // I am awake