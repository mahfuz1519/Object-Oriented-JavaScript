let carPrototype = {
  start() {
    this.started = true;
  },

  stop() {
    this.started = false;
  },

  init(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.started = false;

    return this;
  }

}

let car1 = Object.create(carPrototype).init('Toyota', 'Axio', 2016);
car1.start();
console.log(car1.started);