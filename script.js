'use strict';

// 생성자는 대문자로 시작
const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this 메서드를 생성자 안에 만들지 마라
    this.calcAge = function () {
        console.log(2037 - this.birthYear);
    }
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