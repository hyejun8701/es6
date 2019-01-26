/* const n = { x: 1, y: 2, ...{a: 3, b: 4} };
console.log(n);

const { x, y, ...z } = n;
console.log(x, y, z); */

/* const merge = { x: 1, y: 2, ...{y: 10, z: 3} };
console.log(merge);// { x: 1, y: 10, z: 3 }

const changed = { ...{x: 1, y: 2}, y: 100 };
console.log(changed);// { x: 1, y: 100 }

const added = { ...{x: 1, y: 2}, z: 0 };
console.log(added);// { x: 1, y: 2, z: 0 } */

const merge = Object.assign({}, {x: 1, y: 2}, {y: 10, z: 3});
console.log(merge);// { x: 1, y: 10, z: 3 }

const changed = Object.assign({}, {x: 1, y: 2}, {y: 100});
console.log(changed);// { x: 1, y: 100 }

const added = Object.assign({}, {x: 1, y: 2}, {z: 0});
console.log(added);// { x: 1, y: 2, z: 0 }

