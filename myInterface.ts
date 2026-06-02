// Interface in TypeScript is a way to define the structure of an object. It can be used to specify the properties and methods that an object should have. 

interface Person {
    readonly dbId: number, // read-only property, cannot be modified after initialization
    email: string,
    userId: number
    googleId?: string // optional property, may or may not be present in the object
    startTrail: () => string // method that returns a string, can be implemented by any object that adheres to the Person interface
    getCoupon(couponname: string, value: number): number 

}

interface Person {
    githubToken: string // interface can be extended by declaring it multiple times, properties from all declarations will be merged into a single interface
}

interface Adminn extends Person { // Adminn interface extends Person interface, it inherits all properties and methods of Person and can also have additional properties and methods
    role: "admin" | "ta" | "learner" // role property can only have one of the specified string values

}

const Namit: Adminn = {
    dbId: 1, 
    email: "namit@gmail.com",
    userId: 2222,
    githubToken: "github",
    role: "admin",
    startTrail: () => {
        return "Trail started"
    },
    getCoupon: (name: "tickoo", off: 10) => { // can use different parameter names, but types should match the interface definition
        return 10    
    } 
}

Namit.email = "namit7@gmail.com" // allowed, email is not read-only
// Namit.dbId = 2 // error, dbId is read-only and cannot be modified