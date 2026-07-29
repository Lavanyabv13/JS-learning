//  Arrow Functions

//1. No Parameter
const greet = () => {
    console.log("Welcome");
};

greet();

//2. One Parameter
const getMsg = (name) => {
    console.log("Hello", name);
};

getMsg("Naresh");

//3. Multiple Parameters

const add = (a, b) => {
    return a+b;
};

 console.log("Sum of a, b =", add(10, 20) );

//4. Implicit Return
//Addition
const addtn = (a , b) => a+b;

console.log("Sum of a, b =", addtn(50, 20) );

//Square
const Square = (num) => num * num;

console.log("Square of num 4", Square(4));

//Mutiplication

const multi = (x, y) => x*y;

console.log("Multiplication of x, y =", multi(5, 10));

//Browser
const openBrowser = (browser) => {
console.log("Opening the", browser);
};
openBrowser("Chrome");

//Search Product
const SearchProd = (product) => {
    console.log("Seraching the ", product);
}
SearchProd("Laptop");

//Login

const creds = (userName, passWord) => {
    console.log("Login successful");
}

creds("Admin123", "admin@123");

// Even Number
const isEven = (num) => num % 2 === 0;

console.log(isEven(10));

// Bigger Number
const bigger = (a, b) => (a > b ? a : b);

console.log(bigger(50, 80));