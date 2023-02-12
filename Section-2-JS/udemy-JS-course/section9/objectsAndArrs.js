'use strict';

const resturant = {
    name: 'Clasico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italina', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24
        }
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery({starterIndex, mainIndex, address, time}) {
        console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    }
};

resturant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2
})

///////////////////////////////
console.log('Object destructuring!');
/** Object Destructuring */
const {name, openingHours, categories} = resturant
console.log(name, openingHours, categories);

const {
    name: resturantName,
    openingHours: hours,
    categories: tags,
} = resturant

console.log(resturantName, hours, tags);

//Default Values
const { menu = [], starterMenu: starters = []} = resturant
console.log(menu, starters);

//Mutating Values
let a = 111;
let b = 777
const obj = { a: 23, b: 7, c: 14 }
// ({a, b} = obj)
// console.log(a, b, obj);

const {fri: {open, close}} = openingHours 
console.log(open, close);

/////////////////////////////
// console.log('Arr Destructuring:');
// /** Destructuring Arrays */
// const arr = [2, 3, 4]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// const [x, y, z] = arr

// console.log(x, y, z);

// let [main, ,secondary] = resturant.categories
// console.log(main, secondary);

// [main, secondary] = [secondary, main]
// console.log(main, secondary);

// //Recieve 2 return values from functions
// const [starter, mainCourse] = resturant.order(2, 0)
// console.log(starter, mainCourse);

// //Nested destructuring
// const nested = [2, 4, [5, 6]]
// // const [i, , j] = nested
// // console.log(i, j);
// const [i, , [j,k]] = nested
// console.log(i, j, k);

// //Default values!
// const [p = 1, q = 1, r = 1] =  [8, 9]
// console.log(p, q, r);