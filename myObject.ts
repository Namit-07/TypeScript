//                      Bad behavior of objects

// const User = {
//     name: "Namit",
//     email: "namit@example.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){} // 

// let newUser = {name: "Namit", isPaid: true, email: "namit@example.com"} // extra property email is not an error because of excess property checks in TypeScript
// createUser(newUser)

// function createCourse():{name: string, price: number}{ // 
//     return {name: "reactjs", price: 399}
// }


//                           Type Aliases 

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// } 

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})


//                      Readonly and Optional Properties

type User = {
    readonly id: number, // id cannot be changed after initialization
    name : string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number // optional property, may or may not be present
    
}

let myUser: User = {
    id: 1,
    name: "Namit",
    email: "namit@example.com",
    isActive: true
}

type cardNumber = {
    cardnumber: number
}

type cardDate = {
    cardDate: number
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "namit@newexample.com" // allowed
// myUser.id = 2 // error: cannot assign to 'id' because it is a read-only property

export{}