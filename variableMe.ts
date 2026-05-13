let greetings: string = "Hello, Namit!!"; 

greetings.toLowerCase()
console.log(greetings);

// number 
// let userId: number = 334455.5 - one way

let userId = 334455.5 // another way - type inference
userId.toFixed()

// boolean
let isLoggedIn: boolean = true

// any - can hold any type of value, but it's not recommended to use it as it defeats the purpose of TypeScript's type safety
// let hero;

// function getHero(){
//     return "Superman"
// }

// hero = getHero() - this will work, but it's better to specify the type of hero to avoid potential issues in the future

// correct way to declare hero variable with a specific type
let hero: string;

function getHero(){
    return "Superman"
}

hero = getHero()




export {} // to make this file a module and avoid global scope issues