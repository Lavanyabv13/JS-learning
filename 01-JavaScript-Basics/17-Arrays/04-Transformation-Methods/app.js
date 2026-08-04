//======================================================
// JavaScript Array Transformation Methods
//======================================================

//======================================================
// 1. filter()
//======================================================

console.log("===== filter() =====");

// Example 1 - Filter Numbers
const numbers = [10, 20, 30, 40, 50];

const greaterThan25 = numbers.filter(num => num > 25);

console.log(greaterThan25);

//------------------------------------------------------
// Example 2 - No Match
//------------------------------------------------------

const noMatch = numbers.filter(num => num > 100);

console.log(noMatch);

//------------------------------------------------------
// Example 3 - Even Numbers
//------------------------------------------------------

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);

//------------------------------------------------------
// Example 4 - Objects
//------------------------------------------------------

const users = [
    { id: 1, role: "Admin" },
    { id: 2, role: "Tester" },
    { id: 3, role: "Tester" },
    { id: 4, role: "Manager" }
];

const testers = users.filter(user => user.role === "Tester");

console.log(testers);

//======================================================
// 2. map()
//======================================================

console.log("\n===== map() =====");

// Example 1 - Multiply Numbers
const prices = [100, 200, 300];

const doubledPrices = prices.map(price => price * 2);

console.log(doubledPrices);

//------------------------------------------------------
// Example 2 - Uppercase Strings
//------------------------------------------------------

const fruits = ["apple", "banana", "orange"];

const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());

console.log(upperCaseFruits);

//------------------------------------------------------
// Example 3 - Extract Object Property
//------------------------------------------------------

const employees = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Priya" }
];

const employeeNames = employees.map(emp => emp.name);

console.log(employeeNames);

//------------------------------------------------------
// Example 4 - Add GST
//------------------------------------------------------

const amounts = [100, 200, 300];

const finalAmounts = amounts.map(amount => amount + amount * 0.18);

console.log(finalAmounts);

//======================================================
// 3. forEach()
//======================================================

console.log("\n===== forEach() =====");

// Example 1 - Print Elements
const browsers = ["Chrome", "Firefox", "Edge"];

browsers.forEach(browser => {
    console.log(browser);
});

//------------------------------------------------------
// Example 2 - Print Index
//------------------------------------------------------

browsers.forEach((browser, index) => {
    console.log(index, browser);
});

//------------------------------------------------------
// Example 3 - Calculate Total
//------------------------------------------------------

const marks = [80, 90, 70, 60];

let totalMarks = 0;

marks.forEach(mark => {
    totalMarks += mark;
});

console.log(totalMarks);

//------------------------------------------------------
// Example 4 - Update Objects
//------------------------------------------------------

const students = [
    { name: "Rahul" },
    { name: "Amit" }
];

students.forEach(student => {
    student.active = true;
});

console.log(students);

//======================================================
// 4. reduce()
//======================================================

console.log("\n===== reduce() =====");

// Example 1 - Sum
const nums = [10, 20, 30, 40];

const sum = nums.reduce((acc, num) => acc + num, 0);

console.log(sum);

//------------------------------------------------------
// Example 2 - Product
//------------------------------------------------------

const product = nums.reduce((acc, num) => acc * num, 1);

console.log(product);

//------------------------------------------------------
// Example 3 - Maximum Number
//------------------------------------------------------

const values = [10, 80, 25, 90, 30];

const max = values.reduce((acc, value) => {
    return acc > value ? acc : value;
});

console.log(max);

//------------------------------------------------------
// Example 4 - Total Salary
//------------------------------------------------------

const staff = [
    { name: "Rahul", salary: 50000 },
    { name: "Amit", salary: 60000 },
    { name: "Priya", salary: 70000 }
];

const totalSalary = staff.reduce((acc, employee) => {
    return acc + employee.salary;
}, 0);

console.log(totalSalary);

//------------------------------------------------------
// Example 5 - Count Passed Tests
//------------------------------------------------------

const tests = [
    { status: "Pass" },
    { status: "Fail" },
    { status: "Pass" },
    { status: "Pass" }
];

const passedCount = tests.reduce((count, test) => {
    return test.status === "Pass" ? count + 1 : count;
}, 0);

console.log(passedCount);

//======================================================
// QA / Playwright Examples
//======================================================

console.log("\n===== QA / Playwright Examples =====");

// Filter Failed Tests
const testResults = [
    { name: "Login", status: "Pass" },
    { name: "Checkout", status: "Fail" },
    { name: "Search", status: "Fail" }
];

const failedTests = testResults.filter(test => test.status === "Fail");

console.log(failedTests);

// Extract Test Names
const testNames = testResults.map(test => test.name);

console.log(testNames);

// Print Test Names
testNames.forEach(name => {
    console.log(name);
});

// Calculate Total Execution Time
const executionTimes = [120, 240, 180, 300];

const totalExecutionTime = executionTimes.reduce((acc, time) => {
    return acc + time;
}, 0);

console.log(totalExecutionTime);

// Count Failed Tests
const failedCount = testResults.reduce((count, test) => {
    return test.status === "Fail" ? count + 1 : count;
}, 0);

console.log(failedCount);