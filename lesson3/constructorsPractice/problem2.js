/*
explain why the code on line 19 works but 20 doesn't.
*/



let RECTANGLE = {
  area: function () {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * (this.width + this.height);
  }
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(Rectangle);
    // but if we give the instance name 'rect1' it will work
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area);      // => 6
console.log(rect1.perimeter); // => 10

/*
this will refer to the object being created with the new instances eg. rect1.
Rectangle is a constructor function not an object. 

*/