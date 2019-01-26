// ES5
/* var obj = {
    name: 'Lee',
    sayHi: function() {
        console.log('Hi! ' + this.name);
    }
};

obj.sayHi();// Hi! Lee */

const obj = {
    name: 'Lee',
    sayHi() {
        console.log(`Hi! ${this.name}`);
    }
}

obj.sayHi();