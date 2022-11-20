/*
read the alternative sln's issue://line 26
In this problem, we'll ask you to create a new instance 
of an object, without having direct access to the constructor function:

when you don't have access to the constructor function;
but have access to an instance/object of that constructor.  
*/

let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else
let ninjaB = new ninjaA.constructor();

console.log(ninjaA.constructor === ninjaB.constructor) // => true

/*
let ninjaB = Object.create(ninjaA);

This code works as well, but there is a flaw: it puts the swung 
property in the prototype object instead of in the
ninjaB object where it belongs. Thus, ninjaA and ninjaB are somewhat 
different objects:

ninjaA:
  swung: false
  constructor: Ninja
  prototype: {}

ninjaB:
  constructor: Ninja
  prototype: {
    swung: false
  }

*/

