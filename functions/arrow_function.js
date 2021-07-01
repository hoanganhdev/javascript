// Arrow Functions

// Có tham số
const add = (number1, number2) => {
    return number1 + number2;
}

console.log(add(3,4));

// Không có tham số
(noParrams = () => {
    console.log('Không có tham số 1');
})()

const noParrams1 = name => {
    return ('Không có một tham số và rút gọn ' + name);
}

console.log(noParrams1('7749'));

// Rút gọn dạng return
const squared = number => number*number;
console.log(squared(3));