const email = 'hello@jonas.com';
const loginEmail = '  Hello@jonas.com';

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

//Replacing

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

const announcement = 'All passangers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('A320'));
// console.log(plane.endsWith('A320'));
// console.log(plane.startsWith('A3'));
// console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Welcome to the new Airbus family');
}

const notAllowedArr = ['gun', 'knife', 'cannon', 'drugs'];

/** Practice exercise */
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    let allowed = [];
    for (const dangerousObjects of notAllowedArr) {
        allowed.push(baggage.includes(dangerousObjects));
    }
    allowed.includes(true) ? console.log('You are not allowed on board 🚫') : console.log('Welcome on board! ✈️');
};

checkBaggage('I have a Macbook Pro M1, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
