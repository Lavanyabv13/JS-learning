
//Assignment Operators
let age = 25; // Assigning value 25 to variable age
console.log(age); // Output: 25

//Updating variable using assignment operator
let favColor = "blue"; 
favColor = "green"; // Updating value of favColor to "green"
console.log(favColor); // Output: "green"

//Compound Assignment Operators

//+= operator
let x = 5;
x += 3; // Equivalent to x = x + 3
console.log(x); // Output: 8

//-= operator
let y = 10;
y -= 4; // Equivalent to y = y - 4
console.log(y); // Output: 6

//*= operator
let z = 6;
z *= 2; // Equivalent to z = z * 2
console.log(z); // Output: 12

///= operator
let a = 20;
a /= 4; // Equivalent to a = a / 4
console.log(a); // Output: 5

//%= operator
let b = 15;
b %= 4; // Equivalent to b = b % 4
console.log(b); // Output: 3

//Comparison Operators

//Loose Equality (==)
let c = 5;
let d = "5";
console.log(c == d); // Output: true (values are equal, type is not considered)

//Strict Equality (===)
console.log(c === d); // Output: false (values are equal but types are different)

//Loose Not Equal (!=)
console.log(c != d); // Output: false (values are equal, type is not considered)

//Strict Not Equal (!==)
console.log(c !== d); // Output: true (values are equal but types are different)

//Greater Than (>)
console.log(c > 3); // Output: true

//Less Than (<)
console.log(c < 2); //Output: true

//Greater Than or Equal (>=)
console.log(18 >= 18);      // true
console.log(25 >= 18);      // true
console.log(10 >= 20);      // false

//Less Than or Equal (<=)

console.log(10 <= 20);      // true
console.log(25 <= 20);      // false
console.log(18 <= 18);      // true

//Type Coercion 

console.log(25 == "25");    // true
console.log(25 === "25");   // false

//QA Examples

// Login Validation
let expectedMessage = "Login Successful";
let actualMessage = "Login Successful";
console.log(expectedMessage === actualMessage); // true

// Age Validation
let userAge = 20;
console.log(userAge >= 18); // true

// Retry Counter
let retryCount = 0;
retryCount += 1;
console.log(retryCount); // 1

// API Response Validation
let expectedAge = 25;
let actualAge = "25";
console.log(expectedAge === actualAge); // false

// Product Stock Validation
let stock = 0;
console.log(stock > 0); // false

//Practice Examples
let p = 10;
p += 5;
console.log(p); //15

let q = 20;
q -= 8;
console.log(q); //12

let r = 6;
r *= 4;
console.log(r); //24

let s = 40;
s /= 5;
console.log(s); //8

let t = 18;
t %= 4;
console.log(t); //2
