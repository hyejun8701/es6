var arr = [1, 2, 3];

// ES5
/* var copy = arr.slice();
console.log(copy);
copy.push(4);
console.log(copy);
console.log(arr); */

// ES6
//var copy = [...arr];
var copy = Array.from(arr);
console.log(copy);
copy.push(4);
console.log(copy);
console.log(arr);
