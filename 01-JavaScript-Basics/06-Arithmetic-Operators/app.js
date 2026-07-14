//Arithmetic Operators
let x = 5;
let y = 10;
console.log(x + y); //Addition, outputs 15
console.log(x - y); //Subtraction, outputs -5
console.log(x * y); //Multiplication, outputs 50
console.log(y / x); //Division, outputs 2
console.log(y % x); //Modulus, outputs 0

//Increment and Decrement Operators
let e = 5;
e++; // increments e by 1
console.log(e); // e is now 6

let f = 5;
f--; // decrements f by 1
console.log(f); // f is now 4

//Oprator Precedence
let g = 5 + 10 * 2; //Follows BODMAS
console.log(g); //g is 25

let h = (5 + 10) * 2; //Parentheses change the order of operations
console.log(h); //h is 30

let i = 10 / 2 + 5 - 4; //Follows BODMAS
console.log(i); //i is 6

let j = (10 / 2) + (3 * 4); //Parentheses change the order of operations
console.log(j); //j is 17

//QA Example

//e-commerce website, calculating total price of items in a shopping cart
let itemPrice = 20;
let quantity = 2;
let total = itemPrice * quantity;
console.log(total); //total is 40

//Calculating the average of three numbers
let num1 = 10;
let num2 = 20;
let num3 = 30;
let average = (num1 + num2 + num3) / 3;
console.log(average); //average is 20

//Checking if a number is even or odd
let orderID = 1024;
console.log(orderID % 2);
//This will output 0, indicating that the orderID is even

let orderID2 = 1025;
console.log(orderID2 % 2);
//This will output 1, indicating that the orderID is odd

//Incrementing a retry counter
let retry = 0;
retry++;
console.log(retry); //retry is now 1

