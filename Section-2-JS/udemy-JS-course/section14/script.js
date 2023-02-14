'use strict';

const Person = function (firstName, birthYear, job, weight, attackDmg, HP) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.job = job;
    this.weight = weight;
    this.attackDmg = attackDmg;
    this.HP = HP;

    //Never create a method in constructor function
    // this.attack = function () {
    //     console.log(`${this.firstName} (with ${this.HP} HP) attacked target for ${this.attackDmg} DMG!`);
    // }
};

const jonas = new Person('Jonas', 1991);
const bobi = new Person('Bobi', 1997, 'Wreastler', 86, 99, 100);
const stunio = new Person('Stunio', 1997, 'Custumer Sup', 75, 65, 100);

console.log(bobi, stunio, jonas);

console.log(Person.prototype);

Person.prototype.attack = function () {
    console.log(`${this.firstName} (with ${this.HP} HP) attacked target for ${this.attackDmg} DMG!`);
};

bobi.attack();

/** Lection 2 */
console.log('Lection 2');

console.log(stunio.hasOwnProperty('firstName'));
console.log(stunio.hasOwnProperty('species'));

console.log(bobi.__proto__);
console.log(bobi.__proto__.__proto__);
console.log(bobi.__proto__.__proto__.__proto__);

console.log('Arr');
const arr = [3, 4, 5, 7, 8, 7, 7, 1, 3]
console.log(arr.__proto__ );
console.log(arr.__proto__.__proto__ );
console.log(arr.__proto__.__proto__ );

//Avoid doing this, might be problematic in future
Array.prototype.unique = function () {
    return [...new Set(this)]
}

console.log(arr.unique());