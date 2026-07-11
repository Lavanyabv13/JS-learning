//Variable code in JavaScript

//Using the "let" keyword to declare a variable

//Method 1: Declaring a variable and assigning a value in the same line
let name = "Lavanya"; //Declaring a variable named "name" and assigning it the value "Lavanya"
let age = 25; //Declaring a variable named "age" and assigning it the value 25
let company = "QualityAI"; //Declaring a variable named "company" and assigning it the value "QualityAI"

console.log(name); //Output: Lavanya
console.log(age); //Output: 25
console.log(company); //Output: QualityAI

//Method 2: Declaring a variable first and assigning a value later

let city; //Declaring a variable named "city" without assigning a value
city = "New York"; //Assigning the value "New York" to the variable "city"
console.log(city); //Output: New York

//Method 3: Declaring multiple variables in a single line

let country = "USA", state = "California", zipCode = 90001; //Declaring multiple variables in a single line
console.log(country); //Output: USA
console.log(state); //Output: California
console.log(zipCode); //Output: 90001

//Method 4: Use of "let" allows you to reassign values to variables

let browser = "Chrome"; //Declaring a variable named "browser" and assigning it the value "Chrome"
browser = "Firefox"; //Reassigning the value of the variable "browser" to "Firefox"
console.log(browser); //Output: Firefox

let environment = "QA";
console.log(environment); //Output: QA
//let environment = "Production"; // Using the let keyword again to declare a variable with the same name will throw an error
//console.log(environment); //Output: error: Identifier 'environment' has already been declared

//Using the "const" keyword to declare a constant variable

const pi = 3.14; //Declaring a constant variable named "pi" and assigning it the value 3.14
console.log(pi); //Output: 3.14

 //Trying to reassign a value to a constant variable will throw an error
//pi = 56778999;
// console.log(pi); //output: error: Assignment to constant variable.

//Using the "var" keyword to declare a variable 
//********(not recommended in modern JavaScript)**********

var language = "JavaScript"; //Declaring a variable named "language" and assigning it the value "JavaScript"
console.log(language); //Output: JavaScript
language = "Python"; //Reassigning the value of the variable "language" to "Python"
console.log(language); //Output: Python




