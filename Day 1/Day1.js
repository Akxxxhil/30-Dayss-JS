
//Activity 1  Variable Declaration

//Task 1
var age=20;
console.log(age);

//Task 2
let name='akhil'
console.log(name);

//Activity 2  Constant Declaration

//Task 3
const toggle=false
console.log(toggle);

//Activity 3  Data Types

//Task 4
let fullname="akhil"
let age1=22
let adult=true
let akhil={
    message:"i am a message"
}
let cars=[1,2,3,4]
console.log(typeof fullname);
console.log(typeof age1);
console.log(typeof adult);
console.log(typeof akhil);
console.log(typeof cars);
console.log(Array.isArray (cars));



//Activity 4  Reassigning Variables

// Task 5

let entryFees= 0;
console.log("Intial values",entryFees);
entryFees=30;
console.log("New values",entryFees);

//Activity 5  Understanding const

// Task 6

const entryname="loke"

//entryname="hello"
// TypeError: Assignment to constant variable.
console.log(entryname);


// Feature Request

// Declare variables of different data types
let stringVar = "Hello, world!";
let numberVar = 42;
let booleanVar = true;
let nullVar = null;
let undefinedVar;
let objectVar = { name: "Alice", age: 30 };
let arrayVar = [1, 2, 3, 4, 5];
let functionVar = function() { return "I'm a function"; };
let symbolVar = Symbol("unique");

// Log the value and type of each variable to the console
console.log("Value:", stringVar, "Type:", typeof stringVar); // "Hello, world!" string
console.log("Value:", numberVar, "Type:", typeof numberVar); // 42 number
console.log("Value:", booleanVar, "Type:", typeof booleanVar); // true boolean
console.log("Value:", nullVar, "Type:", typeof nullVar); // null object (this is a known quirk in JavaScript)
console.log("Value:", undefinedVar, "Type:", typeof undefinedVar); // undefined undefined
console.log("Value:", objectVar, "Type:", typeof objectVar); // { name: "Alice", age: 30 } object
console.log("Value:", arrayVar, "Type:", typeof arrayVar); // [1, 2, 3, 4, 5] object
console.log("Value:", functionVar, "Type:", typeof functionVar); // function() { return "I'm a function"; } function
console.log("Value:", symbolVar, "Type:", typeof symbolVar); // Symbol(unique) symbol









