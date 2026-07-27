# JavaScript Functions

## 🎯 Learning Objectives

* Understand what a function is.
* Learn why functions are used.
* Understand function declaration and function calling.
* Learn the types of functions.
* Understand real-time Automation QA use cases.

---

# What is a Function?

A function is a **reusable block of code** that performs a specific task.

Instead of writing the same code repeatedly, we write it once and call it whenever needed.

---

# Why do we use Functions?

* Reuse code.
* Reduce duplicate code.
* Improve readability.
* Improve maintainability.
* Organize programs into reusable blocks.
* Save development time.

---

# Real-Life Example

Without functions:

Write login steps in every test case.

With functions:

Write the login steps once and call them whenever required.

---

# Function Declaration

A function declaration creates a function using the `function` keyword.

## Syntax

```javascript
function functionName() {
    // code
}
```

---

# Parts of a Function

## 1. Function Keyword

Used to declare a function.

```javascript
function
```

---

## 2. Function Name

Used to identify and call the function.

Examples:

```javascript
login
logout
openBrowser
verifyTitle
```

---

## 3. Parentheses `()`

Hold parameters (covered in Day 18).

---

## 4. Curly Braces `{}`

Contain the code that executes when the function is called.

---

# Function Call

Calling (invoking) a function means executing the code inside the function.

## Syntax

```javascript
functionName();
```

---

# Execution Flow

```text
Declare Function
       ↓
Stored in Memory
       ↓
Function Call
       ↓
Execute Code
```

---

# Example

```javascript
function greet() {
    console.log("Welcome");
}

greet();
```

Output

```text
Welcome
```

---

# Calling Multiple Times

```javascript
function greet() {
    console.log("Welcome");
}

greet();
greet();
greet();
```

Output

```text
Welcome
Welcome
Welcome
```

A function can be called multiple times.

---

# Types of Functions

## 1. Function Declaration

```javascript
function login() {
    console.log("Login Successful");
}
```

### Characteristics

* Uses `function` keyword.
* Has a function name.
* Supports hoisting.
* Can be called multiple times.

---

## 2. Function Expression

```javascript
const login = function () {
    console.log("Login Successful");
};
```

### Characteristics

* Stored inside a variable.
* Does not support hoisting like function declarations.
* Common in modern JavaScript.

---

# Function Declaration vs Function Expression

| Function Declaration             | Function Expression             |
| -------------------------------- | ------------------------------- |
| Uses `function` keyword          | Stored inside a variable        |
| Hoisted                          | Not hoisted                     |
| Has its own name                 | Uses variable name              |
| Can be called before declaration | Must be declared before calling |

---

# Real-Time Automation QA Examples

Reusable functions:

* `openBrowser()`
* `login()`
* `searchProduct()`
* `addToCart()`
* `checkout()`
* `verifyTitle()`
* `takeScreenshot()`
* `logout()`
* `closeBrowser()`

---

# Typical Automation Flow

```text
openBrowser()

↓

login()

↓

searchProduct()

↓

addToCart()

↓

verifyCart()

↓

takeScreenshot()

↓

logout()

↓

closeBrowser()
```

Each step is usually implemented as a separate reusable function.

---

# Advantages of Functions

* Reusable code.
* Less duplication.
* Better readability.
* Easier maintenance.
* Cleaner automation scripts.
* Faster development.

---

# Interview Questions

## What is a Function?

A function is a reusable block of code that performs a specific task.

---

## Why do we use Functions?

To reuse code, reduce duplication, improve readability, and simplify maintenance.

---

## What is Function Declaration?

Creating a function using the `function` keyword.

---

## What is Function Call?

Executing the code inside a function.

---

## Does a function execute automatically?

No. It executes only when it is called.

---

## Can one function be called multiple times?

Yes.

---

## What is the difference between Function Declaration and Function Expression?

* Function Declaration is created using the `function` keyword.
* Function Expression is stored inside a variable.

---

## Which function supports hoisting?

Function Declaration.

---

## Why are functions important in Automation Testing?

Functions allow reusable automation steps such as login, logout, browser setup, validation, screenshots, and navigation to be written once and reused across multiple test cases.

---

# Quick Revision

* A function is a reusable block of code.
* Functions perform specific tasks.
* Functions reduce duplicate code.
* Functions execute only when called.
* A function can be called multiple times.
* Two common types:

  * Function Declaration
  * Function Expression
* Functions are widely used in Playwright and Selenium automation.

---

# Automation QA Scenarios

* `openBrowser()`
* `login()`
* `searchProduct()`
* `addToCart()`
* `checkout()`
* `verifyTitle()`
* `takeScreenshot()`
* `logout()`
* `closeBrowser()`
* `readTestData()`
