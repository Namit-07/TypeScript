function addTwo(num: number): number {
     return num + 2
    // return "Hello"
}

function getUpper(val: string){
    return val.toUpperCase()    
}

function signUpUser(name: string, email: string, isPaid: boolean) {
    // logic goes here
}

let loginUser = (name: string, email: string, isPaid: boolean) => {
    // logic goes here
}

addTwo(5)
getUpper("hello")
signUpUser("Namit", "namit@example.com", true)
// loginUser("Namit", "namit@example.com") // error: missing argument for isPaid 

// function getVal(myVal: number): boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string): string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}

export {}