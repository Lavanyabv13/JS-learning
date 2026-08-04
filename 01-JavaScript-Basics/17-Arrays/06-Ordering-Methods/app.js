//======================================================
// Array Ordering Methods
//======================================================

//======================================================
// 1. sort()
//======================================================

console.log("===== sort() =====");

//------------------------------------------------------
// Strings
//------------------------------------------------------

const fruits = ["Orange", "Apple", "Banana"];

fruits.sort();

console.log(fruits);

//------------------------------------------------------
// Numbers (Default)
//------------------------------------------------------

const numbers = [100, 20, 5, 50];

numbers.sort();

console.log(numbers);

//------------------------------------------------------
// Ascending Order
//------------------------------------------------------

const numbers1 = [100, 20, 5, 50];

numbers1.sort((a, b) => a - b);

console.log(numbers1);

//------------------------------------------------------
// Descending Order
//------------------------------------------------------

const numbers2 = [100, 20, 5, 50];

numbers2.sort((a, b) => b - a);

console.log(numbers2);

//------------------------------------------------------
// Objects - Numeric Property
//------------------------------------------------------

const employees = [
    { name: "Rahul", age: 28 },
    { name: "Amit", age: 22 },
    { name: "Priya", age: 30 }
];

employees.sort((a, b) => a.age - b.age);

console.log(employees);

//------------------------------------------------------
// Objects - String Property
//------------------------------------------------------

const users = [
    { name: "Rahul" },
    { name: "Amit" },
    { name: "Priya" }
];

users.sort((a, b) => a.name.localeCompare(b.name));

console.log(users);

//======================================================
// 2. reverse()
//======================================================

console.log("\n===== reverse() =====");

//------------------------------------------------------
// Reverse Numbers
//------------------------------------------------------

const values = [10, 20, 30, 40];

values.reverse();

console.log(values);

//------------------------------------------------------
// Reverse Strings
//------------------------------------------------------

const browsers = ["Chrome", "Firefox", "Edge"];

browsers.reverse();

console.log(browsers);

//------------------------------------------------------
// sort() + reverse()
//------------------------------------------------------

const marks = [70, 90, 50, 80];

marks.sort((a, b) => a - b);

console.log(marks);

marks.reverse();

console.log(marks);

//------------------------------------------------------
// Reverse Copy using slice()
//------------------------------------------------------

const arr = [1, 2, 3, 4];

const reversed1 = arr.slice().reverse();

console.log(arr);

console.log(reversed1);

//------------------------------------------------------
// Reverse Copy using Spread
//------------------------------------------------------

const reversed2 = [...arr].reverse();

console.log(reversed2);

//======================================================
// QA / Playwright Examples
//======================================================

console.log("\n===== QA Examples =====");

// Sort Test Names
const tests = ["Checkout", "Login", "Search"];

tests.sort();

console.log(tests);

// Sort Execution Times
const executionTimes = [350, 120, 280, 90];

executionTimes.sort((a, b) => a - b);

console.log(executionTimes);

// Reverse Browser Order
const supportedBrowsers = ["Chrome", "Firefox", "Edge"];

supportedBrowsers.reverse();

console.log(supportedBrowsers);