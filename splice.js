var arr1 = [1, 2, 3, 6];
var arr2 = [4, 5];

// ES5
/* Array.prototype.splice.apply(arr1, [3, 0].concat(arr2));
console.log(arr1); */

// ES6
arr1.splice(3, 0, ...arr2);
console.log(arr1);