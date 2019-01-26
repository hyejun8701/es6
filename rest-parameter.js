// ... << Spread Operator

/* function a(...rest) {
    console.log(Array.isArray(rest));// true
    console.log(rest);// [ 1, 2, 3, 4, 5 ]
}
a(1, 2, 3, 4, 5); */

/* function b(p1, ...rest) {
    console.log(p1);// 1
    console.log(rest);// [ 2, 3, 4, 5 ]
}
b(1, 2, 3, 4, 5); */

function c(p1, p2, ...rest) {
    console.log(p1);// 1
    console.log(p2);// 2
    console.log(rest);// [ 3, 4, 5 ]
}
c(1, 2, 3, 4, 5);