class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h!`);
    }

    break() {
        this.speed -= 5
        console.log(`${this.make} is breaking speed and going ${this.speed} km/h`);
    }
    
    get speedUs() {
        return this.speed / 1.6
    }

    set speedUs(speed) {
        this.speed = speed * 1.6
    }
}

const ford = new Car('Ford', 120)
console.log('Before SETTER!');
console.log(ford);
console.log(ford.speedUs);
ford.accelerate()
ford.break()

console.log('After speed SETER!');
ford.speedUs = 50
console.log(ford);