
// const power = (x, n) => (n === 0 ? x : x * power(x ,x * n -1))

// console.log(power(2, 4));

//Generate function return iterable
function* genereateSequence(start, end) {
    for (let i = start; i <= end; i++) {
        yield i 
    }
}

let val = genereateSequence(1, 5)

console.log(val.next());
console.log(val.next());
console.log(val.next());
console.log(val.next());
console.log(val.next());
console.log(val.next());

//Working around eval
let sayHi = new Function('console.log("Hello wolrd")')


let sum = new Function('a', 'b', 'c', 'return a + b + c')

console.log(sum(1,2,3));


//Create a repo and init a new project with node_modules
//run command: npm install -g javascripting 
