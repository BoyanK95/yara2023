'use strict'

//class expression
const Dog = class {
    constructor(firstName, birthYear, breed){
        this.firstName = firstName
        this.birthYear = birthYear
        this.breed = breed
    }

    calcAge() {
        console.log(2023 - this.birthYear);
    }

    bark() {
        if (this.breed === 'pug') {
            console.log(`Hurr, Hurr I'm a fat pug named ${this.firstName}`);
        } else {
            console.log(`WoooF, Wooof, I'm ${this.firstName}`);
        }
    }
}

//class declaration
class Cat {
    constructor(firstName, birthYear) {
        this.firstName = firstName
        this.birthYear = birthYear
    }

    calcAge() {
        console.log(2023 - this.birthYear);
    }

    get age() {
        return 2023 - this.birthYear
    }
}

const ares = new Cat('Ares', 2002,)
const kitrie = new Cat('Kitrie', 2007)
console.log(ares);
ares.calcAge()

Cat.prototype.greet = function () {
    console.log(`Meooow, my name is ${this.firstName}!`);
}

ares.greet()
console.log(ares.age)
kitrie.greet()

const pug = new Dog('Aria', 1999, 'pug')
pug.bark()

const account = {
    owner: 'Jamie',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop()
    },

    set latest(mov) {
        this.movements.push(mov)
    }
}

console.log(account.latest);

account.latest = 50
console.log(account.movements); 