'use strict'

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
}

lufthansa.book(239, 'Boyan Koychev')
lufthansa.book(634, 'Adam Smith')
console.table(lufthansa.bookings);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book

//Does not work!!!
//book(23, 'Poko Koko')

/** Call method applying this.(object-instance) to function */
book.call(eurowings, 23, 'Poko Koko')
console.log(eurowings);

book.call(lufthansa, 239, 'Jhon Wick')
console.table(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 583, 'Mary Cooper')
console.table(swiss)

const qatar = {
    airline: 'Qatar Air',
    iataCode: 'QA',
    bookings: []
}

book.call(qatar, 777, 'Krasimir Georgiev')
book.call(qatar, 777, 'Paulin Atanasov')
book.call(qatar, 777, 'Deivid Millev')
console.table(qatar);