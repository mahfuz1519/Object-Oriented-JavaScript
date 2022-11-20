/* 
What will the following code log to the console and why?
*/
function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype.swingSword = function () {
  return this.swung;
};

console.log(ninja.swingSword());

/*
Even though we define the swingSword method on the prototype 
after we create the ninja, all objects created by the Ninja constructor 
share the same prototype object. 
Thus, when we define swingSword, 
it immediately becomes available to the ninja object.
*/