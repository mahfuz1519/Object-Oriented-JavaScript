function Ninja() {
  this.swung = false;
}

Ninja.prototype.swing = function () {
  this.swung = true;
  return this;
}


let ninjaA = new Ninja();
let ninjaB = new Ninja();

console.log(ninjaA.swing().swung);      // logs `true`
console.log(ninjaB.swing().swung);      // logs `true`

/*
This pattern of "chainable" methods invocations 
and property accesses on an object requires that methods 
defined on the prototype always return the context object 
(in this case, ninjaA and ninjaB).
*/