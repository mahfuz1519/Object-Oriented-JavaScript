function createStudent(name, year) {
  return {
    name: name, 
    year: year,
    courses: [],

    info: function() {
      return `${this.name} is a ${this.year} year student`;      
    },

    listCourses: function() {
      return this.courses;
    }, 

    addCourse: function(object) {
      return this.courses.push(object);      
    },

    addNote: function(courseId, note) {
      this.courses.forEach(obj => {
        if (obj["code"] === courseId ) {
          obj["notes"] += note;
        }
      })  
    },

    viewNotes: function() {
      this.courses.forEach(obj => {
        console.log(`${obj['name']}: ${obj['notes']}`);
      })
    }

  }  
}

let foo = createStudent('Foo', '1st');
console.log(foo.info());
console.log(foo.listCourses());
// [];
console.log(foo.addCourse({ name: 'Math', code: 101 }));
console.log(foo.addCourse({ name: 'Advanced Math', code: 102 }));
console.log(foo.addNote(101, 'Fun course'));
console.log(foo.addNote(101, 'Remember to study for algebra'));

console.log(foo.viewNotes());