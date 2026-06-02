// let user: (string | number)[] = [1, "2", 3, "4"]

let tuser: [number, string, boolean]
tuser = [1, "hello", true] // tuple with fixed types and order

let rgb: [number, number, number] = [255, 0, 0] // tuple representing RGB color values  

type Users = [number, string] // tuple type alias for user with id and name

const newUser: Users = [1, "Namit"] // creating a user tuple using the Users type alias

newUser[0] = 2 // updating the id of the user tuple 
newUser.push("world") // allowed but not recommended, can lead to unexpected behavior as it violates the fixed length of the tuple