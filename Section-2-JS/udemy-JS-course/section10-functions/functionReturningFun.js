const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey')

greeterHey('Jonas')
greeterHey('Steven')

const thaiGreeting = greet('Sawadikap')
thaiGreeting('Cara')

const sweedishGreeting = greet('Shena')
sweedishGreeting('Amanda')
sweedishGreeting('Anjelica')

greet('Hello')('Jonas')

const greetArrow = (greeting) => (name) => console.log(`${greeting}, ${name}`);

const bgGreet = greetArrow('Zdr')
bgGreet('Boyan-k')

