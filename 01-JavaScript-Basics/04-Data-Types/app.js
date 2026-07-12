//Data Types

//Primitives Data Types

//1. String
let name = "Lavanya";
console.log(name);
//output: Lavanya


//2. Number
let age = 28;
console.log(age);
//output: 28


//3. Boolean
let isemployeed = true;
console.log(isemployeed);
//output: true


//4. undefined
let city;
console.log(city);
//output: undefined


//5. null
let mobileNumber = null;
console.log(mobileNumber);
//output: null


//6. Symbol
let employeeName1 = Symbol("Naresh");
let employeeName2 = Symbol("Naresh");
console.log(employeeName1 === employeeName2);
console.log(employeeName1);
console.log(employeeName2); 
//Symbol is unique and immutable data type. Even if the value is same, it will create a new symbol every time. So, the comparison will return false.
//output: false
//output: Symbol(Naresh)
//output: Symbol(Naresh)


//7. BigInt
let bigIntValue = 1234567890123456789012345678901234567890n;
console.log(bigIntValue);
//n at the end of the number indicates that it is a BigInt. 
//output: 1234567890123456789012345678901234567890n


//Non-Primitives Data Types

//1. Object
let employee = {
    name: "Lavanya",
    age: 28,
    isemployeed: true,
    city: "Bangalore"
};
console.log(employee);
//output: { name: "Lavanya", age: 28, isemployeed: true, city: "Bangalore" }


//2. Array
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);
//output: ["Apple", "Banana", "Mango", "Orange"]


//3. Function
function greet() {
    console.log("Hello, Welcome to JavaScript!");
}
greet();
//output: Hello, Welcome to JavaScript!


//if needed to print a welcome message for 5 times using function
function welcomeMessage() {
    console.log("Hello, Welcome to home!");
}
welcomeMessage();
welcomeMessage();
welcomeMessage();
welcomeMessage();
welcomeMessage();
//output: Hello, Welcome to home! (5 times will be printed same)

//if needed to print a welcome message for 5 different users same message with different names using function
function welcomeUser(name) {
    console.log("Hello " + name + ", Welcome to home!");
}
welcomeUser("Lavanya");
welcomeUser("Naresh");
welcomeUser("Pooja");
welcomeUser("Mother");
welcomeUser("Father");
//output: Hello Lavanya, Welcome to home!
//output: Hello Naresh, Welcome to home!
//output: Hello Pooja, Welcome to home!
//output: Hello Mother, Welcome to home!
//output: Hello Father, Welcome to home!


