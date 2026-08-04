//======================================================
//  Array Search Methods
//======================================================

//======================================================
// 1. includes()
//======================================================

console.log("===== includes() =====");

const browsers = ["Chrome", "Firefox", "Edge", "Safari"];

console.log(browsers.includes("Chrome")); // true
console.log(browsers.includes("Opera"));  // false

//------------------------------------------------------
// Example 2
//------------------------------------------------------

const numbers = [10, 20, 30, 40];

console.log(numbers.includes(20)); // true
console.log(numbers.includes(100)); // false

//======================================================
// 2. indexOf()
//======================================================

console.log("\n===== indexOf() =====");

const fruits = ["Apple", "Banana", "Orange", "Banana"];

console.log(fruits.indexOf("Banana")); // 1
console.log(fruits.indexOf("Orange")); // 2
console.log(fruits.indexOf("Mango")); // -1

//------------------------------------------------------
// Example 2
//------------------------------------------------------

const colors = ["Red", "Blue", "Green"];

console.log(colors.indexOf("Blue")); // 1
console.log(colors.indexOf("Black")); // -1

//======================================================
// 3. lastIndexOf()
//======================================================

console.log("\n===== lastIndexOf() =====");

const browsers1 = ["Chrome", "Firefox", "Chrome", "Edge", "Chrome"];

console.log(browsers1.lastIndexOf("Chrome")); // 4
console.log(browsers1.lastIndexOf("Firefox")); // 1
console.log(browsers1.lastIndexOf("Safari")); // -1

//======================================================
// 4. at()
//======================================================

console.log("\n===== at() =====");

const animals = ["Dog", "Cat", "Lion", "Tiger", "Elephant"];

console.log(animals.at(0)); // Dog
console.log(animals.at(2)); // Lion
console.log(animals.at(4)); // Elephant

//------------------------------------------------------
// Negative Indexing
//------------------------------------------------------

console.log(animals.at(-1)); // Elephant
console.log(animals.at(-2)); // Tiger
console.log(animals.at(-3)); // Lion
console.log(animals.at(-5)); // Dog
console.log(animals.at(-10)); // undefined

//------------------------------------------------------
// Traditional Way vs at()
//------------------------------------------------------

console.log(animals[animals.length - 1]); // Elephant
console.log(animals.at(-1)); // Elephant

//======================================================
// 5. find()
//======================================================

console.log("\n===== find() =====");

const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Priya" }
];

const user = users.find(user => user.id === 2);

console.log(user);

//------------------------------------------------------
// Example 2
//------------------------------------------------------

const numbers1 = [10, 25, 30, 45, 50];

const firstGreaterThan30 = numbers1.find(num => num > 30);

console.log(firstGreaterThan30); // 45

//------------------------------------------------------
// No Match
//------------------------------------------------------

const result = numbers1.find(num => num > 100);

console.log(result); // undefined

//======================================================
// 6. findIndex()
//======================================================

console.log("\n===== findIndex() =====");

const employees = [
    { id: 101, name: "John" },
    { id: 102, name: "Alice" },
    { id: 103, name: "David" }
];

const employeeIndex = employees.findIndex(emp => emp.id === 102);

console.log(employeeIndex); // 1

//------------------------------------------------------
// Example 2
//------------------------------------------------------

const marks = [45, 52, 38, 90, 60];

const firstPassIndex = marks.findIndex(mark => mark >= 50);

console.log(firstPassIndex); // 1

//------------------------------------------------------
// No Match
//------------------------------------------------------

const noMatch = marks.findIndex(mark => mark > 100);

console.log(noMatch); // -1

//======================================================
// QA / Playwright Examples
//======================================================

console.log("\n===== QA Examples =====");

// Check browser support
const supportedBrowsers = ["Chrome", "Firefox", "Edge"];

console.log(supportedBrowsers.includes("Chrome")); // true

// Find failed test
const tests = [
    { name: "Login", status: "Pass" },
    { name: "Search", status: "Fail" },
    { name: "Checkout", status: "Pass" }
];

const failedTest = tests.find(test => test.status === "Fail");

console.log(failedTest);

// Find failed test index
const failedIndex = tests.findIndex(test => test.status === "Fail");

console.log(failedIndex);

// Get last browser
console.log(supportedBrowsers.at(-1)); // Edge

// First browser position
console.log(supportedBrowsers.indexOf("Firefox")); // 1