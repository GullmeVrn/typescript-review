// Narrowing :
// Éliminé des cas et réduit les types possibles

function printID(id: string | number) {
    if (typeof id === "number") {
        console.log((id * 3).toString()); //-> id: number
    } else {
        console.log(id.toUpperCase()); //-> id: string
    }
}

function exemple(a: string[] | Date) {
    if (a instanceof Date) {
        return a //-> a: Date
    } else if (Array.isArray(a)) {
        return a[0] //-> a: string[]
    }
    return
}

function isDate(a: any): a is Date {
    return a instanceof Date
}

function eventHandler(a: Date | HTMLInputElement) {
    if ("value" in a) {
        a //-> a: HTMLInputElement
    } else if (isDate(a)) {
        a //-> a: Date
    }
}

// Alias & Generic

type User = {firstname: string, lastname: string}
type P = keyof User
type Username = User['firstname']
type Users = typeof users
type DateString = string
type Identity<ArgType> = (arg: ArgType) => ArgType

const user: User = {firstname: "John", lastname: "Doe"}
const date: DateString = "string"

const users = {
    firsname: "John",
    lastname: "Doe",
    age: 32
}

function identity<ArgType>(arg: ArgType): ArgType {
    return arg
}

const aa = identity<number>(3)

function first<Type>(arg: Type[]): Type {
    return arg[0]
}

const arr: Array<string | number> = ["aze", "cze", 3] //-> arr: (string | number)[]
const firstArr = first(arr) //-> firstArr: string | number

const compteur = document.querySelector<HTMLButtonElement>("#compteur")

function consoleSize<Type extends {length: number}>(arg: Type): Type {
    console.log(arg.length)
    return arg
}

const abb = consoleSize(2) //-> consoleSize(['3', 2])

// Class & readonly

function reverse<T>(arr: readonly T[]): T[] {
    return arr.reverse() //-> [...arr].reverse()
}

class A {
    private a = 1
    protected b = 2
    public c = 3

    #d = 4 // realy private

    log() {
        console.log(this.#d)
    }
}

class B extends A {
    constructor (public e: number) {
        super()
    }

    log () {
        console.log(this.b)
        
    }
}

const aInstance = new A()

console.log(aInstance.a) //-> aInstance.log()
console.log(aInstance.c)

class Collection<T> {
    constructor(private items: T[]) {

    }

    add(item: T): this {
        this.items.push(item)
        return this
    }

    first(): T | null {
        return this.items[0] || null
    }
}

const collect = new Collection([1, 2])
const b = collect.first() //-> number

class Subscriber {
    on (this: HTMLInputElement, name: string, cb: Function) {
        // this = HTMLInputElement.property
    }
}
