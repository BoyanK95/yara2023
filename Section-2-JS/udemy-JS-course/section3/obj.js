const coder = {
    firstName: 'Boyan',
    lastName: 'Koychev',
    age: 2023 - 1995,
    bornInCity: 'Bourgas',
    livesInCity: 'Varna',
    curCity: 'Dimitrovgrad',
    firends: ['Paulin', 'Kraso', 'Denis']
};

console.log(coder);

//Dot notatiom
console.log(coder.firstName);

//Bracet notion
console.log(coder['firstName']);

const nameKey = 'Name';

console.log(coder['first' + nameKey]);
console.log(coder['last' + nameKey]);

const interestedIn = prompt(
    'What do you want to know about me? Chose between firstName, lastName, age, bornIncity, liveInCity, curCity, and friends'
);

console.log(interestedIn);

console.log(coder[interestedIn]);