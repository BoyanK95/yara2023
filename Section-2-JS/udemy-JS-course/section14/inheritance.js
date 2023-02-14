
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

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 1997, 'Computer Science')
console.log(mike);
mike.introduce()