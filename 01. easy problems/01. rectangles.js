function Rectangle(width, length) {
  this.width = width;
  this.length = length;
};


Rectangle.prototype.getWidth = function() {
  return this.width;
};

Rectangle.prototype.getLength = function() {
  return this.length;    
};

Rectangle.prototype.getArea = function() {
  return this.length * this.width;    
};


let rect = new Rectangle(4, 5);
console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20

