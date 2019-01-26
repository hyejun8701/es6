// ES5
/* var arr = [1, 2, 3];

var one = arr[0];
var two = arr[1];
var three = arr[2];

console.log(one, two, three); */

// 배열 디스트럭처링
const arr = [1, 2, 3];
const [one, two, tree] = arr;
console.log(one, two, tree);

let x, y, z;
[x, y, z] = [1, 2];
console.log(x, y);// 1, 2

[x, y] = [1];
console.log(x, y);// 1 undefined

[x, y] = [1, 2, 3];
console.log(x, y);// 1, 2

[x, , z] = [1, 2, 3];
console.log(x, z);// 1, 3

[x, y, z = 3] = [1, 2];
console.log(x, y, z);// 1, 2, 3

[x, y = 10, z = 3] = [1, 2];
console.log(x, y, z);// 1, 2, 3

[x, ...y] = [1, 2, 3];
console.log(x, y);// 1, [2, 3]

const today = new Date();
const formattedDate = today.toISOString().substring(0, 10);
const [year, month, day] = formattedDate.split('-');
console.log(year, month, day);

