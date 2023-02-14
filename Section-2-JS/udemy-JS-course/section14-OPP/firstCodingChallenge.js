'use strict'

//Coding challenge #1

const Car = function (make, speed) {
    this.make = make
    this.speed = speed
}

Car.prototype.accelerate = function () {
    this.speed = this.speed += 10
    console.log(`${this.make} is going at ${this.speed} km/h!`);
}

Car.prototype.break = function () {
    this.speed = this.speed -= 5
    console.log(`${this.make} is hiting the break at ${this.speed} km/h!`);
}

const bmw = new Car('BMW', 120)
const mercedes = new Car('Mercedes', 95)

console.log(bmw);
console.log(mercedes);

bmw.break()
bmw.accelerate()