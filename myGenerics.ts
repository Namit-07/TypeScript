// Generics are used to create reusable components. They allow us to create a component that can work with any data type and not restrict to one data type.

const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val 
}

function identityThree<Type>(val: Type): Type{ // Type is a generic type variable means it locks the type of val and return type to be same
    return val  
}

// identityThree(true) // returns boolean

function identityFour<T>(val: T): T{ 
    return val  
}

interface Bottle {
    brand: string, 
    type: number 
}

// identityFour<Bottle>({})

function getSearchProducts<T>(products: T[]): T {
    // do some database ops
    const myIndex = 3 
    return products[3]
}

const getMoreSearchProducts = <T>(products: T[]): T => { // generic arrow function
    // do some database ops
    const myIndex = 4 
    return products[4]
} 