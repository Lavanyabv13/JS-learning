//Scope

//1. Global Scope: Variables declared outside of any function or block have global scope and can be accessed from anywhere in the code.

//Example 1:
//Declaring a variable with global scope no function or block
let company = "QualityAI";  
console.log(company);
//Output: QualityAI

//Example 2:
//Declaring another variable outside of any function or block***
let company2 = "Intel"; 
function displayCompany() { //Calling the function to access the global variable
console.log(company2); 
displayCompany(); 
}
//Output: Intel because company is declared outside of the function and has global scope



//2. Function Scope: Variables declared within a function are only accessible within that function and have function scope.

//Example 1:
//Variable declared within the function
function employeeDetails() {
let employeeName = "Lavanya"; //Calling the function to access the variable
console.log(employeeName); 
}
employeeDetails(); 
//Output: Lavanya

//Example 2:
//Variable declared within the function but access same variable outside the function
function employeeDetails2() {
let employeeName2 = "John"; //Variable declared within the function
}
//console.log(employeeName2); //Trying to access the variable outside the function
//Output: ReferenceError: employeeName2 is not defined

//3. Block Scope: Variables declared with let or const within a block {}.

//Example 1:
//Variable declared within the block {}
{
let city = "bangalore"; //Variable declared with 'let' within the block
console.log(city);
}
//Output: bangalore

//Example 2:
//Variable declared within the block but access same variable outside the block
{
const city2 = "chennai"; //Variable declared with 'const' within the block
}
//console.log(city2); //Trying to access the variable outside the block
//Output: ReferenceError: city2 is not defined

//Example 3:
//Variable declared with var within the block {}
{
var city3 = "delhi"; //Variable declared with var within the block
console.log(city3); //Accessing the variable within the block
}
//Output: delhi

//Example 4:
//Variable declared with var within the block but access same variable outside the block
{
var city4 = "mumbai"; //Variable declared with var within the block
}
console.log(city4); //Accessing the variable outside the block
//Output: mumbai because var has function scope and not block scope



