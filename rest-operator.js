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
foo(...arr);