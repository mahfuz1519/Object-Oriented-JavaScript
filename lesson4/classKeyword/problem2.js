class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  toString() {
    return `[Rectangle of ${this.length} by ${this.width}]`;
  }

}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  toString() {
    return `[Square of ${this.length} by ${this.width}]`;
  }

}

let newSquare = new Square(5)
console.log(newSquare.toString());