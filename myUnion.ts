let score: number | string = 33
score = 44
score = "55"


type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let namit: User | Admin = { name: "Namit", id: 334 }

namit = { username: "Namit", id: 334 }

// function getDbId(id: number | string){
//     // making some API calls
//     console.log(`DB id is: ${id}`)
// }
getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
}

// array

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number)[] = ["1", 2, "3"] 

let pi: 3.14 = 3.14
//  pi = 3.145 // error: Type '3.145' is not assignable to type '3.14'

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
seatAllotment = "middle"
seatAllotment = "window"
// seatAllotment = "front" // error: Type '"front"' is not assignable to type '"aisle" | "middle" | "window"'