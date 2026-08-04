//======================================================
// Array Validation Methods
//======================================================

//======================================================
// 1. every()
//======================================================

console.log("===== every() =====");

// Example 1
const numbers = [10, 20, 30, 40];

const allPositive = numbers.every(num => num > 0);

console.log(allPositive);

//------------------------------------------------------
// Example 2
//------------------------------------------------------

const values = [10, 20, -5, 40];

const positiveNumbers = values.every(num => num > 0);

console.log(positiveNumbers);

//------------------------------------------------------
// Example 3
//------------------------------------------------------

const names = ["Rahul", "Amit", "Priya"];

const longNames = names.every(name => name.length >= 4);

console.log(longNames);

//------------------------------------------------------
// Example 4
//------------------------------------------------------

const students = [
    { passed: true },
    { passed: true },
    { passed: false }
];

const allPassed = students.every(student => student.passed);

console.log(allPassed);

//======================================================
// 2. some()
//======================================================

console.log("\n===== some() =====");

// Example 1
const marks = [10, 20, 30, 40];

const greaterThan30 = marks.some(mark => mark > 30);

console.log(greaterThan30);

//------------------------------------------------------
// Example 2
//------------------------------------------------------

const nums = [10, 20, 30];

const greaterThan100 = nums.some(num => num > 100);

console.log(greaterThan100);

//------------------------------------------------------
// Example 3
//------------------------------------------------------

const values1 = [10, 20, -5, 40];

const hasNegative = values1.some(num => num < 0);

console.log(hasNegative);

//------------------------------------------------------
// Example 4
//------------------------------------------------------

const employees = [
    { active: true },
    { active: false },
    { active: true }
];

const inactiveEmployee = employees.some(emp => !emp.active);

console.log(inactiveEmployee);

//======================================================
// QA / Playwright Examples
//======================================================

console.log("\n===== QA Examples =====");

// All tests passed?
const results = ["Pass", "Pass", "Pass"];

const everyTestPassed = results.every(result => result === "Pass");

console.log(everyTestPassed);

// Any test failed?
const executionResults = [
    "Pass",
    "Pass",
    "Fail",
    "Pass"
];

const anyFailed = executionResults.some(result => result === "Fail");

console.log(anyFailed);

// Supported browsers
const browsers = ["Chrome", "Firefox", "Edge"];

const supported = browsers.every(browser =>
    ["Chrome", "Firefox", "Edge"].includes(browser)
);

console.log(supported);

// Unsupported browser
const browsers1 = ["Chrome", "Safari", "Edge"];

const unsupported = browsers1.some(browser =>
    !["Chrome", "Firefox", "Edge"].includes(browser)
);

console.log(unsupported);