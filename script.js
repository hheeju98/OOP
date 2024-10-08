'use strict';

/*
// 생성자는 대문자로 시작
const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this 메서드를 생성자 안에 만들지 마라
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // }
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda);
console.log(jack);


const jay = 'Jay';
console.log(jonas instanceof Person); // true
console.log(jay instanceof Person); // false

Person.hey = function () {
    console.log('Hey there');
    console.log(this);
};

Person.hey();


// Prototypes
console.log(Person.prototype);

// 프로토타입 상속
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person)); // false
// .prottypeOfLinkedObjects -> 이렇게 이해하면 됨

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName')); // object에 직접적으로 선언된 경우만 true
console.log(jonas.hasOwnProperty('species')); // false

console.log(jonas.__proto__);
//object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
}
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);



const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}


const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();


// class expression
// const PersonCl = class {

// }

//class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    // Set a property that already exists (_추가)
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`)
    }

    get fullName() {
        return this._fullName;
    }

    //Static method
    static hey() {
        console.log('hey there');
        console.log(this);
    }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// }

jessica.greet();

// 1. Classes are Not hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);
PersonCl.hey();

const account = {
    owner: 'jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov);
    }
}

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
*/

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();


class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    };

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    };

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);


///Inheritance Between "Classes" : Constructor Functions

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);


Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
    Car.call(this, make, speed)
    this.charge = charge;
}
// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
} // overwrite (스코프에서도 동일)

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();