//Functions

//Type-1: Function Declartion

//1. Calling Function Multiple Times

function greet() {                   //Declaring function (Create)
    console.log("Welcome Lavanya");
}

greet();                             //Calling a function to execute
greet(); 
greet(); 

/* Output:
Welcome Lavanya
Welcome Lavanya
Welcome Lavanya   */

//2. Multiple Reusable Functions

function addToCart() {
    console.log("Item added to card");
}

function checkOut() {
    console.log("Item Chevked out");
}

addToCart();
checkOut();

/* 
Output:
Item added to card
Item Chevked out
*/

//Type-2:  Function Expression

//1. Verify the URL

const verifyUrl = function() {           //Function stores inside the variable name VerifyURL
    console.log("URL Verified");
}

verifyUrl();                            //Calling the variable Name to execute the function

//Output:
//URL Verified

//2. Click Button

let clickButton = function() {
    console.log("Button Clicked");
}

clickButton();

//Output:
//Button Clicked


//Example:
//Automation Flow:  OpenBrowser > Login > SearchProduct > TakeScreenShot > logout > CloseBrowser

//1. Open Broswer
function openBrowser() {
    console.log("Browser open successful");
}
//2. LogIn
function logIn() {
    console.log("Log-In successful");
}
//3. Search for a product
function searchProduct() {
    console.log("Product searched successful");
}
//4. Take a screenshot
function screenShot() {
    console.log("Screenshot taken");
}
//5.Log-out
function logOut() {
    console.log("Log-out successful");
}
//6.Close the Browser
function closeBrowser() {
    console.log("Browser closed successful");
}

//calling the functions
openBrowser();
logIn();
searchProduct();
screenShot();
logOut();
closeBrowser();

/* Output:
Browser open successful
Log-In successful
Product searched successful
Screenshot taken
Log-out successful
Browser closed successful
*/