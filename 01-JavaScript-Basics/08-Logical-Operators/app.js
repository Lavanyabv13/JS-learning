//Logical Operators

//1.AND (&&) Operators

//true && true
let age = 22;
let hasLicense = true;
console.log("In && operator, if both the conditions are true :", age>=18 && hasLicense);
//Output: true

//true && false (Scenario: Login Validation)
let usernameCorrect = true; 
let passwordCorrect = false;
console.log("In && operator, if one conditions is true and another false :", usernameCorrect && passwordCorrect); //One condtion is true another condition is false
//Output: false

//false && true (Scenario: Login Using Email OR Mobile)
let emailValid = true;
let mobileValid = false;
console.log("In && operator, if one conditions is false and another true :", emailValid && mobileValid);
//false

//false && false
let scoreofRam = 20;
let scoreofSam = 40;
console.log("In && operator, if both conditions is false :", scoreofRam >=50 && scoreofSam >=50);
//Output: false

//OR (||) Operators

//true || true
let ageofA = 22;
let hasLicenseofA = true;
console.log("In || operator, if both the conditions are true :", ageofA>=18 || hasLicenseofA); //Both the conditions are true
//Output: true

//true || false
let usernameCorrectofA = true;
let passwordCorrectofA = false;
console.log("In || operator, if one conditions is true and another false :", usernameCorrectofA || passwordCorrectofA); //One condtion is true another condition is false
//Output: true

//false || true
let emailValidofA = true;
let mobileValidofA = false;
console.log("In || operator, if one conditions is false and another true :", emailValidofA || mobileValidofA);
//true

//false || false
let scoreofRamT1 = 20;
let scoreofSamT1 = 40;
console.log("In || operator, if both conditions is false :", scoreofRamT1 >=50 && scoreofSamT1 >=50);
//Output: false

//NOT (!) Operators

//!true (Scenario : Check User is NOT Logged In)
let isloggedIn = true;
console.log("In ! operator, if condition is true, it returns :", !isloggedIn); //Not true
//Output: False

//!false
let lightOn = false;
console.log("In ! operator, if condition is false, it returns :",!lightOn); // Not false
//Output: true

//QA example:

/*Check is customer Eligible for Discount use AND operator
Business Rule:
Customer must be a member AND
Purchase amount must be ₹1000 or more. */

let isCustomermember = true;
let purchaseAmount = 1000;

console.log("Customer is Eligible for discount :", isCustomermember && purchaseAmount >= 1000);









