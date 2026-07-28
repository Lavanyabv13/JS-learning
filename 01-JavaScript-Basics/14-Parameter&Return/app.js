// Parameters & Return

// 1. Single Parameter

function greet(name) {
    console.log("Welcome", name);
}
greet("Lavanya");
//Output: Welcome Lavanya

//2. Multiple Parameters

function logIn(username, password) {
    console.log("Username:", username);
    console.log("Password:", password);
}
//logIn("Admin", "Admin@123");

//3. Browser Parameter

function openBrowser(Browsername) {
    console.log("Opening in", Browsername, "Browser");
}
//openBrowser("Chrome");

//4. URL Parameter

function naviagte(Url) {
    console.log("Navigating to:", Url);
}
//naviagte("www.abc.com");

//5. Search Product

function searchProduct(productName) {
    console.log("Searching for:", productName);
}
//searchProduct("iron box");

//6. Return Number

function getNum() {
    return 100;
}
console.log(getNum());

//7. Return String

function getMsg() {
    return "Hello Friends"
}
console.log(getMsg());

//8. Return Addition

function add(a,b){
    return a+b;
}
    let sum = add (30, 30);    // Calling the function
    console.log(sum);

//9.  Return Boolean

function logInStatus(){
    return true;
}
console.log(logInStatus());

//10. Return Login Status

function browserOpen(browseName) {
    return "Firefox";
}
console.log("Opening the browser:", browserOpen());

//11. Return Page Title

function getPageTile(pageTitle) {
    return "Home Page";
}
//console.log("Page Title is:", getPageTile());

//12. Return Login Status

function loginStatus(username, password) {
    return "Login Successful";
}
//console.log(loginStatus("Admin", "Admin@123"));

//Complete Automation Flow:

console.log("Project Flow");
openBrowser("Google");
naviagte("www.xyz.com");
logIn("Lavanya", "12345");
console.log(loginStatus("Lavanya", "12345"));
searchProduct("iphone");
console.log("Page Title is:", getPageTile());