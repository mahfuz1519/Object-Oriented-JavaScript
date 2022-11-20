/* when we call a function with `new` keyword

1. It creates an entirely new object.

2. It sets Foo.prototype as the prototype for the new object. 
That is, the new object inherits from the object referenced by Foo.prototype.

3. It sets the execution context (this) for the function to point to the new object.

4. It invokes the function.

5. It returns the new object unless the function returns another object.


if you call a function(eg. Cat) with new keyword you call that function as a constructor.
which returns an object. Inherits from Cat.prototype; 
sets the execution context for the function to point to the new object. 

you can then add properties to that instances/ sth like that; because 
1. using the new keyword you get an object. 
2. and adding properties with DOT notation establish the relation more concretely
3. basically we are adding the prototype object to a property of the `FUNCTION name`

how will you prove that the methods aren't copied to each instances??
-- Cat.myPrototype.meow === Object.getPrototypeOf(kitty).meow // TRUE
*/
function Cat(name, breed, weight) {

  Object.setPrototypeOf(this, Cat.myPrototype);

  this.name = name;
  this.breed = breed;
  this.weight = weight;  
}

Cat.myPrototype = {
  meow() {
    console.log(this.weight > 20 ? "MEOW" : "meOWWW");
  }
}

let kitty = new Cat('kitty', 'targarian', 30);
let fluffy = new Cat('fluffy', 'alsasian', 20);

console.log(kitty.hasOwnProperty(Cat.myPrototype));

console.log(
  Cat.myPrototype.meow === Object.getPrototypeOf(kitty).meow
);