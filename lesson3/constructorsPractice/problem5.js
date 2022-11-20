function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype = {  
  swingSword: function() {
    return this.swung;     
  }
};

console.log(ninja.swingSword());

/*
Despite the similarities to the code in the previous question, 
this code doesn't work the same way. That's because 
we're reassigning Ninja.prototype to an entirely new object 
instead of mutating the original prototype object. 
The prototype for the ninja object doesn't change; 
it's still the original prototype defined during the constructor's invocation. 
Thus, JavaScript can't find the swingSword method in the prototype chain of ninja.
*/