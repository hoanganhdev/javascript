// Functions as stament

// function có đối số
function Add(number1, number2) {
    let sum = number1 + number2;
    return sum;
}

let result = Add(4,5);
console.log(result);

// function không đối số
function A() {
    console.log('function ko doi so');
}

A();
// Note: A function statement is hoisted at the top of the execution context. So, it can be invoked before it is created.

// Cách Immediately Invoked Function Expression (Gọi ngay khi vừa định nghĩa)
(function Subtract(number1, number2) {
    let difference = number1- number2;
    console.log(difference);
})(10,3)