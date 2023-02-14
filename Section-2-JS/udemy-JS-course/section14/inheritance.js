
/** Inheritance with construction function */
const Person = function (firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
}

Person.prototype.calcAge = function() {
    console.log(2023 - this.birthYear);
}

const Student = function (firstName, birthYear , course) {
    this.firstName = firstName
    this.birthYear = birthYear
    this.course = course
}

/** Linking prototypes */
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 1997, 'Computer Science')
console.log(mike);
mike.introduce()
mike.calcAge()

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

console.dir(Student.prototype.constructor);

/** Fixing prototype of Student to be Student /not Perosn */
Student.prototype.constructor = Student

console.dir(Student.prototype.constructor);