/*
What does the following code log to the console? 
Explain why the code produces the output it does?
*/

let RECTANGLE = {
  area: function () {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter);


/*
The value of this within the RECTANGLE.area and RECTANGLE.perimeter methods 
gets set to the RECTANGLE object when they are called. 

Since RECTANGLE doesn't define width and height properties, 
the property accesses both return undefined. Since mathematical 
operations on undefined produce a value of NaN, 
the return value of the methods is NaN.
*/