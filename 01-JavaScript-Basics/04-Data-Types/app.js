//Data Types

//Primitives Data Types

//1. String
let name = "Lavanya";
console.log(name);

//2. Number
let age = 28;
console.log(age);

//3. Boolean
let isemployeed = true;
console.log(isemployeed);

//4. undefined
let city;
console.log(city);

//5. null
let mobileNumber = null;
console.log(mobileNumber);

//6. Symbol
let employeeName1 = Symbol("Naresh");
let employeeName2 = Symbol("Naresh");
console.log(employeeName1 === employeeName2);
console.log(employeeName1);
console.log(employeeName2); 
//Symbol is unique and immutable data type. Even if the value is same, it will create a new symbol every time. So, the comparison will return false.

//7. BigInt
let bigIntValue = 1234567890123456789012345678901234567890n;
console.log(bigIntValue);
//n at the end of the number indicates that it is a BigInt. 



//Non-Primitives Data Types

//1. Object
let employee = {
    name: "Lavanya",
    age: 28,
    isemployeed: true,
    city: "Bangalore"
};
console.log(employee);

//2. Array
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);

//3. Function
function greet() {
    console.log("Hello, Welcome to JavaScript!");
}
greet();

//if needed to print a welcome message for 5 times using function
function welcomeMessage() {
    console.log("Hello, Welcome to home!");
}
welcomeMessage();
welcomeMessage();
welcomeMessage();
welcomeMessage();
welcomeMessage();

//if needed to print a welcome message for 5 different users same message with different names using function
function welcomeUser(name) {
    console.log("Hello " + name + "Welcome to home!");
}
welcomeUser("Lavanya");
welcomeUser("Naresh");
welcomeUser("Pooja");
welcomeUser("Mother");
welcomeUser("Father");

