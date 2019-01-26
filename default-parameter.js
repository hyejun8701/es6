// ES5
/* function plus(x, y) {
    x = x || 0;
    y = y || 0;

    return x + y;
}

console.log(plus());
console.log(plus(1, 2)); */

// ES6
function plus(x = 0, y = 0) {
    return x + y;
}

console.log(plus());
console.log(plus(1, 2));