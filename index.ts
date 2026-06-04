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

    private _courseCount = 1

    readonly city: string = "Delhi"
    constructor(
        public email: string,
        name: string,
        private userId: number
    ) {
    }
    private deleteToken(){
        console.log("Token deleted")
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount    
    }

    set courseCount(courseNum) {    
        if(courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }

}

class SubUser extends Userr{
    isFamily: boolean = true
    changeCourseCount(){
        this.courseCount = 4
    }
}

const namitt = new Userr("namit77@gmail.com", "Namit", 1)
namitt.deleteToken() // Error: Property 'deleteToken' is private and only accessible within class 'Userr'.

