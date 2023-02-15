'use strict'
//Callback functions
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase()
}
//Callback functions
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ')
}

/** Higher-order function */
const transformer = function (str, fn) {
    console.log('Original string: Javascript is the best!');
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('Javascript is the best!', upperFirstWord)
transformer('Javascript is the best!', oneWord)