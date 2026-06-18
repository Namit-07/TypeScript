// Type narrowing is a way to narrow down the type of a variable based on certain conditions. In TypeScript, we can use type guards to achieve this. Type guards are expressions that perform runtime checks and allow us to narrow down the type of a variable within a specific scope.

function detectType(val: number | string){
    if(typeof val === "string"){ // typeof is a type guard that checks the type of a variable at runtime
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}

function printAll(strs: string | string[] | null){
    if(strs){
        if(typeof strs === "object"){
            for(const s of strs){
                console.log(s);
            }
        } else {
            console.log(strs);
        }
    }
}


function logValue(x: Date | string){ // instanceof is a type guard that checks if the object is an instance of a particular class or constructor function
    if(x instanceof Date){
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish{ // user-defined type guard that checks if the pet is a Fish
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet.swim();
        return "fish food";
    } else {
        pet.fly();
        return "bird food";
    }
}


interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square"
    side: number
}

interface Rectangle {
    kind: "rectangle"
    length: number
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if(shape.kind === "circle"){ // discriminated union that uses a common property to narrow down the type of a variable
        return Math.PI * shape.radius ** 2;
    }
    return shape.side * shape.side; 
}

function getArea(shape: Shape){
    switch(shape.kind){ // switch statement that uses a discriminated union to narrow down the type of a variable
        case "circle":
            return Math.PI * shape.radius ** 2;
        
        case "square":
            return shape.side * shape.side; 

        case "rectangle":
            return shape.length * shape.width;

        default:
            const _defaultForShape: never = shape; // never type that represents a value that never occurs
            return _defaultForShape;
    }
}