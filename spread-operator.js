 function foo(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
}

var arr = [1, 2, 3];
// ES5
/* foo.apply(null, arr);
*/

// ES6
//foo(...arr);

// ES5
//console.log(arr.concat([4, 5, 6]));

// ES6
//console.log([...arr, 4, 5, 6]);

var arr2 = [4, 5, 6];

// ES5
/* Array.prototype.push.apply(arr, arr2);
console.log(arr); */

// ES6
arr.push(...arr2);
console.log(arr);

