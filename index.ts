// class Userr {
//     public email: string // public property, can be accessed from anywhere
//     name: string
//     private city: string = "Delhi" // private property, can only be accessed within the class
//     constructor(email: string, name: string) {
//         this.email = email
//         this.name = name
//     }
// }


//                  Another way to write the above code is:


class Userr {
    readonly city: string = "Delhi"
    constructor(
        public email: string,
        name: string,
        private userId: number
    ) {

    }
}

