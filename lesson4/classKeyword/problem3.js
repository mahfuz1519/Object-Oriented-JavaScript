let Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(`My name is ${this.name}`);    
  }
};

let Student = class extends Person {
  constructor(name, age, semester) {
    super(name, age);
    this.semester = semester;
  }

  enrollInCourse(courseName) {
    console.log(`${this.name} has enrolled in course ${courseName}`);
  }
};

let student = new Student('Mahfuz', 30, 5);
console.log(student.sayName());
console.log(student.enrollInCourse('Advanced JavaScript Concepts'));