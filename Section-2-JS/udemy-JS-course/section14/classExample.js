class Account {
    //2) Truly private fields
    #movements = []
    #pin
    constructor(owner, currency, pin) {
        this.owner = owner
        this.currency = currency
        /** Protected property */
        this.#pin = pin
        // this._movements = []
    }

    //Publick interface
    getMovements() {
        return this.#movements
    }

    deposit(val){
        this.#movements.push(val)
    }

    withdraw(val){
        this.deposit(-val)
    }

    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val)
            console.log(`Loan approved!💰`);
        }
    }

    /** Private methods */
    #approveLoan(val) {
        return true
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111)

//Better way is to create methods in the clas for changing the properties
// acc1.movements.push(250)
// acc1.movements.push(-150)
acc1.deposit(250)
acc1.withdraw(140)
acc1.requestLoan(1000)

console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);