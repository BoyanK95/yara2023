'use strict';

const Person = function (firstName, birthYear, job, weight, attackDmg, HP) {
    this.firstName = firstName
    this.birthYear = birthYear
    this.job = job
    this.weight = weight
    this.attackDmg = attackDmg
    this.HP = HP

    //Never create a method in constructor function
    this.attack = function () {
        console.log(`${this.firstName} (with ${this.HP} HP) attacked target for ${this.attackDmg} DMG!`);
    }
};

const jonas = new Person('Jonas', 1991);
const bobi = new Person('Bobi', 1997,'Wreastler', 86, 99, 100);
const stunio = new Person('Stunio', 1997, 'Custumer Sup', 75, 65, 100);

console.log(bobi, stunio, jonas);

bobi.attack()
 