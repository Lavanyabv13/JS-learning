// ============================================================
// DAY 25 - JavaScript: Array Copying & References
// ============================================================

// ============================================================
// 1. PRIMITIVE VS REFERENCE DATA TYPES
// ============================================================

// Primitive values
let name = "Rahul";
let age = 25;
let isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);


// Reference values
const numbers = [10, 20, 30];

const user = {
    name: "Rahul",
    age: 25
};

console.log(numbers);
console.log(user);


// ============================================================
// 2. ARRAY REFERENCES
// ============================================================

const arr1 = [10, 20, 30];

const arr2 = arr1;

console.log(arr1);
console.log(arr2);

arr2.push(40);

console.log("After changing arr2:");
console.log("arr1:", arr1);
console.log("arr2:", arr2);


// IMPORTANT:
// arr1 and arr2 point to the same array.

console.log(arr1 === arr2); // true


// ============================================================
// 3. DIFFERENT ARRAYS WITH SAME VALUES
// ============================================================

const arrayA = [1, 2, 3];

const arrayB = [1, 2, 3];

console.log(arrayA === arrayB); // false


// ============================================================
// 4. COPYING ARRAY USING slice()
// ============================================================

const original1 = [10, 20, 30];

const copy1 = original1.slice();

copy1.push(40);

console.log("Original:", original1);
console.log("Copy:", copy1);

console.log(original1 === copy1); // false


// ============================================================
// 5. COPYING ARRAY USING SPREAD
// ============================================================

const original2 = [10, 20, 30];

const copy2 = [...original2];

copy2.push(40);

console.log("Original:", original2);
console.log("Copy:", copy2);

console.log(original2 === copy2); // false


// ============================================================
// 6. COPYING ARRAY USING Array.from()
// ============================================================

const original3 = [10, 20, 30];

const copy3 = Array.from(original3);

copy3.push(40);

console.log("Original:", original3);
console.log("Copy:", copy3);

console.log(original3 === copy3); // false


// ============================================================
// 7. COPYING ARRAY USING concat()
// ============================================================

const original4 = [10, 20, 30];

const copy4 = [].concat(original4);

copy4.push(40);

console.log("Original:", original4);
console.log("Copy:", copy4);

console.log(original4 === copy4); // false


// ============================================================
// 8. SHALLOW COPY
// ============================================================

// A shallow copy creates a new outer array/object,
// but nested objects can still share references.

const user1 = {
    name: "Rahul",

    address: {
        city: "Jaipur"
    }
};

const user2 = { ...user1 };

user2.name = "Amit";

console.log(user1.name); // Rahul
console.log(user2.name); // Amit


// But nested object is shared.

user2.address.city = "Delhi";

console.log(user1.address.city); // Delhi
console.log(user2.address.city); // Delhi

console.log(user1.address === user2.address); // true


// ============================================================
// 9. DEEP COPY - structuredClone()
// ============================================================

const user3 = {
    name: "Rahul",

    address: {
        city: "Jaipur"
    }
};

const user4 = structuredClone(user3);

user4.address.city = "Delhi";

console.log("Original:", user3);
console.log("Deep copy:", user4);

console.log(user3.address.city); // Jaipur
console.log(user4.address.city); // Delhi

console.log(user3.address === user4.address); // false


// ============================================================
// 10. DEEP COPY - JSON METHOD
// ============================================================

const user5 = {
    name: "Rahul",

    address: {
        city: "Jaipur"
    }
};

const user6 = JSON.parse(JSON.stringify(user5));

user6.address.city = "Delhi";

console.log("Original:", user5);
console.log("Copy:", user6);


// NOTE:
// JSON cloning has limitations.
// It is not suitable for every JavaScript data type.


// ============================================================
// 11. SPREAD - COPY ARRAY
// ============================================================

const fruits = ["Apple", "Banana", "Mango"];

const fruitsCopy = [...fruits];

console.log(fruitsCopy);


// ============================================================
// 12. SPREAD - ADD ELEMENTS
// ============================================================

const numbers1 = [20, 30, 40];

const addAtBeginning = [10, ...numbers1];

const addAtEnd = [...numbers1, 50];

console.log(addAtBeginning);
console.log(addAtEnd);


// ============================================================
// 13. SPREAD - MERGE ARRAYS
// ============================================================

const frontend = ["HTML", "CSS", "JavaScript"];

const automation = ["Playwright", "API"];

const skills = [...frontend, ...automation];

console.log(skills);


// ============================================================
// 14. SPREAD - COPY OBJECT
// ============================================================

const employee = {
    name: "Rahul",
    role: "Tester"
};

const employeeCopy = { ...employee };

console.log(employeeCopy);


// ============================================================
// 15. SPREAD - MERGE OBJECTS
// ============================================================

const personalDetails = {
    name: "Rahul",
    age: 25
};

const jobDetails = {
    role: "Automation Tester",
    experience: 2
};

const employeeDetails = {
    ...personalDetails,
    ...jobDetails
};

console.log(employeeDetails);


// ============================================================
// 16. SPREAD - PROPERTY OVERRIDE
// ============================================================

const oldData = {
    name: "Rahul",
    role: "Tester"
};

const newData = {
    role: "Automation Tester"
};

const updatedData = {
    ...oldData,
    ...newData
};

console.log(updatedData);

// Later property wins.


// ============================================================
// 17. REST - FUNCTION PARAMETERS
// ============================================================

function addNumbers(...numbers) {

    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

console.log(addNumbers(10, 20));
console.log(addNumbers(10, 20, 30));
console.log(addNumbers(10, 20, 30, 40));


// ============================================================
// 18. REST WITH NORMAL PARAMETER
// ============================================================

function student(name, ...subjects) {

    console.log("Student:", name);
    console.log("Subjects:", subjects);
}

student(
    "Rahul",
    "JavaScript",
    "Playwright",
    "TypeScript"
);


// ============================================================
// 19. REST - ARRAY DESTRUCTURING
// ============================================================

const marks = [90, 85, 80, 75];

const [firstMark, ...remainingMarks] = marks;

console.log("First:", firstMark);
console.log("Remaining:", remainingMarks);


// ============================================================
// 20. REST - OBJECT DESTRUCTURING
// ============================================================

const testUser = {
    username: "admin",
    role: "admin",
    city: "Jaipur"
};

const {
    username,
    ...otherDetails
} = testUser;

console.log(username);
console.log(otherDetails);


// ============================================================
// 21. SPREAD VS REST
// ============================================================

// SPREAD → expands

const arr = [10, 20, 30];

const spreadResult = [...arr];

console.log(spreadResult);


// REST → collects

const [firstValue, ...restValues] = arr;

console.log(firstValue);
console.log(restValues);


// ============================================================
// 22. IMPORTANT COMPARISON
// ============================================================

const sourceArray = [1, 2, 3];

const referenceCopy = sourceArray;

const shallowCopy = [...sourceArray];

console.log("Reference:", sourceArray === referenceCopy);
console.log("Shallow copy:", sourceArray === shallowCopy);


// Reference → true
// Shallow copy → false


// ============================================================
// 23. PRACTICE QUESTIONS
// ============================================================

// Practice 1:
// Create an array of 5 numbers.
// Create a copy using spread.
// Add a number to the copy.
// Check whether the original changed.


// Practice 2:
// Create two arrays:
// const a = [1, 2, 3]
// const b = [4, 5, 6]
// Merge them using spread.


// Practice 3:
// Create an object:
// const user = {
//     name: "Rahul",
//     age: 25
// }
// Create a copy and change age only in the copy.


// Practice 4:
// Create a nested object and demonstrate
// why a shallow copy can affect the original.


// Practice 5:
// Use structuredClone() to solve Practice 4.


// Practice 6:
// Write a function using Rest parameters
// that accepts any number of numbers
// and returns their sum.


// Practice 7:
// Given:
// const numbers = [10, 20, 30, 40, 50]
// Use array destructuring + Rest to get:
// first = 10
// remaining = [20, 30, 40, 50]


// Practice 8:
// Given:
// const user = {
//     name: "Rahul",
//     age: 25,
//     city: "Jaipur"
// }
// Extract name and collect the remaining
// properties into another object.
