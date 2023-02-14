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
        this.speed -= 5;
        console.log(`${this.make} is breaking speed and going ${this.speed} km/h`);
        return this;
    }

    get speedUS() {
        return this.speed / 1.6;
    }
}

class EV extends Car {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%!`);
        return this;
    }
}

const rivian = new EV('Rivian', 120, 23);
console.log(rivian);

rivian.accelerate().accelerate().accelerate().break().chargeBattery(50).accelerate();
