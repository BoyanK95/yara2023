const orderSet = new Set(['Pasta', 'Pizza', 'Pasta', 'Risotto', 'Pasta', 'Pizza', 'Risotto']);

console.log(orderSet);
console.log(new Set('Paulin'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
console.log(orderSet);

for (const order of orderSet) {
    console.log(order);
}

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUniqie = [...new Set(staff)]
console.log(staff);
console.log(staffUniqie);

//For counting how manny different values an arr has
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

console.log(new Set('BoyanKoychev').size);

console.log();