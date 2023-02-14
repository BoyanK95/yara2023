/** With class ES6 syntax */
// class Car {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate() {
//         this.speed += 10;
//         console.log(`${this.make} is going at ${this.speed} km/h!`);
//     }

//     break() {
//         this.speed -= 5
//         console.log(`${this.make} is breaking speed and going ${this.speed} km/h`);
//     }

//     get speedUs() {
//         return this.speed / 1.6
//     }

//     set speedUs(speed) {
//         this.speed = speed * 1.6
//     }
// }

/** With construction functions */
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h!`);
};

Car.prototype.break = function () {
    this.speed -= 5;
    console.log(`${this.make} is breaking speed and going ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

/** Linking prototypes - EV to inherit Car */
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo
}

EV.prototype.accelerate =  function () {
    this.speed += 20
    this.charge--
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%!`);
}

const tesla = new EV('Tesla Roadster', 120, 23);
console.log(tesla);

console.log('Charging ...');
tesla.chargeBattery(90)
console.log(tesla);
console.log('BREAK!!!!');
tesla.break()
console.log(tesla);
tesla.accelerate()