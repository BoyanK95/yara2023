'use strict';

const bookings = [];

const createBookings = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
    //Old way ES5
    // numPassengers = numPassengers || 1
    // price = price || 199
    const booking = {
        flightNum,
        numPassengers,
        price
    };

    console.log(booking);
    bookings.push(booking);
};

createBookings('LH123');
createBookings('LG123', 2, 800)
createBookings('LG122', 2)
createBookings('LG125', 3)
createBookings('LG1000',undefined, 1000)

////Passing Arguments Value vs Refrance ////
const flight = 'LH234'
const boyan = {
    name: 'Boyan Koychev',
    passport: '23412321777'
}

const checkIn = function (flightNum, passanger) {
    passanger.name = 'Mr ' + passanger.name
    if (passanger.passport === '23412321777') {
        alert('Checked in!')
    } else {
        alert('Wrong passport!')
    }
}

checkIn(flight, boyan)


const high5 = function () {
    console.log('👋');
}

document.body.addEventListener('click', high5)