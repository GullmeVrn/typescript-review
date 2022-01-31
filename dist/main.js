// Narrowing :
// Éliminé des cas et réduit les types possibles
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _A_d;
function printID(id) {
    if (typeof id === "number") {
        console.log((id * 3).toString()); //-> id: number
    }
    else {
        console.log(id.toUpperCase()); //-> id: string
    }
}
function exemple(a) {
    if (a instanceof Date) {
        return a; //-> a: Date
    }
    else if (Array.isArray(a)) {
        return a[0]; //-> a: string[]
    }
    return;
}
function isDate(a) {
    return a instanceof Date;
}
function eventHandler(a) {
    if ("value" in a) {
        a; //-> a: HTMLInputElement
    }
    else if (isDate(a)) {
        a; //-> a: Date
    }
}
const user = { firstname: "John", lastname: "Doe" };
const date = "string";
const users = {
    firsname: "John",
    lastname: "Doe",
    age: 32
};
function identity(arg) {
    return arg;
}
const aa = identity(3);
function first(arg) {
    return arg[0];
}
const arr = ["aze", "cze", 3]; //-> arr: (string | number)[]
const firstArr = first(arr); //-> firstArr: string | number
const compteur = document.querySelector("#compteur");
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
const abb = consoleSize(2); //-> consoleSize(['3', 2])
// Class & readonly
function reverse(arr) {
    return arr.reverse(); //-> [...arr].reverse()
}
class A {
    constructor() {
        this.a = 1;
        this.b = 2;
        this.c = 3;
        _A_d.set(this, 4); // realy private
    }
    log() {
        console.log(__classPrivateFieldGet(this, _A_d, "f"));
    }
}
_A_d = new WeakMap();
class B extends A {
    constructor(e) {
        super();
        this.e = e;
    }
    log() {
        console.log(this.b);
    }
}
const aInstance = new A();
console.log(aInstance.a); //-> aInstance.log()
console.log(aInstance.c);
class Collection {
    constructor(items) {
        this.items = items;
    }
    add(item) {
        this.items.push(item);
        return this;
    }
    first() {
        return this.items[0] || null;
    }
}
const collect = new Collection([1, 2]);
const b = collect.first(); //-> number
class Subscriber {
    on(name, cb) {
        // this = HTMLInputElement.property
    }
}
