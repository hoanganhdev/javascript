// Functions as expression

// Có thể define tên của function
let add = function Add(number1, number2) {
    let sum = number1 + number2;
    return sum;
}

let result = add(4,5);
console.log(result);

// hoặc không cần ghi tên
let multiply = function(number1, number2) {
    let product = number1 * number2;
    return product;
}

result = multiply(6,5);
console.log(result);

// function không đối số
let a = function() {
    console.log('Function không đối số');
}();

// Note: function as expression thì không có hoisted. Cho nên nếu gọi trước khi define sẽ lỗi.

// Cách Immediately Invoked Function Expression (Gọi ngay khi vừa định nghĩa)
let subtract = function Subtract(number1, number2) {
    let difference = number1 - number2;
    return difference;
}(10,5)

console.log(subtract);

// function in object
const person = {
    name: 'Iron man',
    getName: function() {
        return this.name
    },
    sing: (song) => {
        return 'sing a song [' + song + ']';
    },
    fly: function Fly() {
        return this.name + ' can fly';
    }
}

console.log(person.getName());
console.log(person.sing('Bitch'));
console.log(person.fly());
