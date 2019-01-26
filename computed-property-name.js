// 계산된 프로퍼티 이름
var prefix = 'prop';
var i = 0;

// ES5
/* var obj = {};
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
console.log(obj);
console.log(obj['prop-1']); */

// ES6
const obj = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i
}
console.log(obj);
console.log(obj['prop-1']);