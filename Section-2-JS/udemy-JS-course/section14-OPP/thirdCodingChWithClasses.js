/** With class ES6 syntax */
class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    //Instance methods
    calcAge() {
        console.log(2023 - this.birthYear);
    }

    greet() {
        console.log(`Hey my name is ${this.fullName}`);
    }

    get age() {
        return 2023 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
      }

    get fullName() {
        return this._fullName
    }

    //Static method
    static hey() {
        console.log('Hey there 👋');
    }
}

class Student extends Person {
    constructor(fullName, birthYear, course){
        /** Always needs to happen first! To have access to the this */
        super(fullName. birthYear)
        this.course = course
    }
}


const poko = new Student('Paulin Atanasov', 1997, 'Trader')

console.log(poko);
