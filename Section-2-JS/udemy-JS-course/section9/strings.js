'use strict'

const airline = 'Qatar AIR'
const plane = 'Boeing 777'
// console.log(plane[0]);
// console.log(plane[1]);

// console.log(airline.indexOf('a'))
// console.log(airline.lastIndexOf('a'))
// console.log(airline.indexOf('AIR'))

//First word
console.log(airline.slice(0, airline.indexOf(' ')));
//Last word
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
//Split words in Arr
console.log(airline.split(' '));

//Fixing capitalization
const passanger = 'jOnAS'
const passangerLower = passanger.toLowerCase()
const passangerCorrect = passangerLower[0].toUpperCase() + passangerLower.slice(1)
console.log(passangerCorrect);

function fixCapitalization(string) {
    const strLower = string.toLowerCase()
    return strLower[0].toUpperCase() + strLower.slice(1)
}

console.log(fixCapitalization('kRaSIo'))
console.log(fixCapitalization('PauLIN'))



const checkMiddleSeat = function (seat) {
    /** B and E are middle seats! */
    const s = seat.slice(-1);

    if (s === 'B' || s === 'E') {
        console.log('You got the middle seat😫');
    } else {
        console.log('You got lucky 😎');
    }
};

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');
