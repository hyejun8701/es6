// ES5
/* var parent = {
    name: 'parent',
    sayHi: function(){
        console.log('Hi! ' + this.name);
    }
};

// 프로토타입 패턴 상속
var child = Object.create(parent);
child.name = 'child';

parent.sayHi();
child.sayHi(); */

const parent = {
    name: 'parent',
    sayHi() {
        console.log(`Hi! ${this.name}`);
    }
};

const child = {
    __proto__: parent,// child 의 프로토타입 객체에 parent 객체를 바인딩하여 상속 구현
    name: 'child'
};

parent.sayHi();
child.sayHi();