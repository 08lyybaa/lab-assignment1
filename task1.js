function add(a, b) {
    if (a === undefined || b === undefined) {
        return "Error: Missing arguments";
    }
    return a + b;
}

function subtract(a = 0, b = 0) {
    return a - b;
}

function multiply(...nums) {
    if (nums.length === 0) return "Error: No numbers provided";
    return nums.reduce((product, num) => product * num, 1);
}

function divide() {
    if (arguments.length < 2) return "Error: Need at least two numbers";
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] === 0) return "Error: Division by zero";
        result /= arguments[i];
    }
    return result;
}

console.log(add(5, 3));
console.log(add(5));
console.log(subtract(10, 4));
console.log(subtract(10));
console.log(multiply(2, 3, 4));
console.log(multiply());
console.log(divide(100, 2, 5));
console.log(divide(10, 0));
console.log(divide(10));
