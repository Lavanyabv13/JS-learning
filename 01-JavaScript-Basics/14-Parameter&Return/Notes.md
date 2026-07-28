# JavaScript Parameters & Return

## 🎯 Learning Objectives

* Understand Parameters.
* Understand Arguments.
* Learn the Return statement.
* Differentiate Parameters, Arguments, and Return.
* Learn real-time Automation QA use cases.

---

# Parameters

## What is a Parameter?

A parameter is a variable declared inside a function's parentheses that receives values when the function is called.

Parameters are the **inputs** of a function.

## Syntax

```javascript
function functionName(parameter1, parameter2) {

}
```

## Example

```javascript
function greet(name) {

}
```

Here, `name` is a parameter.

---

# Why do we use Parameters?

* Pass different values into a function.
* Make functions reusable.
* Reduce duplicate code.
* Improve flexibility.

---

# Arguments

## What is an Argument?

An argument is the actual value passed to a function during the function call.

Arguments are the **real values** supplied to the function.

## Example

```javascript
function greet(name) {

}

greet("John");
```

Parameter:

```
name
```

Argument:

```
"John"
```

---

# Parameters vs Arguments

| Parameters           | Arguments                   |
| -------------------- | --------------------------- |
| Variables            | Actual values               |
| Declared in function | Passed during function call |
| Placeholders         | Real input values           |

---

# Return Statement

## What is Return?

The `return` statement sends a value back from a function.

It provides the output of the function.

## Syntax

```javascript
function functionName() {
    return value;
}
```

---

## Example

```javascript
function add(a, b) {
    return a + b;
}
```

---

# Return Execution

```
Function Called

↓

Execute Code

↓

Return Value

↓

Function Ends
```

After `return`, the function stops executing.

---

# Parameters vs Arguments vs Return

| Parameter                | Argument             | Return                |
| ------------------------ | -------------------- | --------------------- |
| Input Variable           | Actual Input         | Output                |
| Declared inside function | Passed while calling | Sent back by function |
| Placeholder              | Real Value           | Result                |

---

# Complete Flow

```
Function Declaration

↓

Parameters

↓

Function Call

↓

Arguments

↓

Execute Code

↓

Return Result
```

---

# Automation QA Examples

## Login

```
login(username, password)
```

Arguments

```
login("admin","admin123")
```

Return

```
true
```

---

## Open Browser

```
openBrowser(browserName)
```

Example

```
openBrowser("Chrome")
```

---

## Navigate

```
navigate(url)
```

Example

```
navigate("https://amazon.com")
```

---

## Search Product

```
searchProduct(productName)
```

Example

```
searchProduct("Laptop")
```

---

## Verify Title

```
verifyTitle(expectedTitle)
```

Returns

```
true
false
```

---

## Take Screenshot

```
takeScreenshot(fileName)
```

---

## Get Status Code

Returns

```
200
404
500
```

---

# Advantages

* Reusable functions.
* Flexible code.
* Less duplicate code.
* Easier maintenance.
* Better readability.
* Supports validations.

---

# Interview Questions

## What is a Parameter?

A parameter is a variable declared inside a function that receives values during the function call.

---

## What is an Argument?

An argument is the actual value passed to a function.

---

## What is Return?

Return sends a value back from the function.

---

## Difference between Parameters and Arguments?

Parameters are variables.

Arguments are actual values.

---

## What happens after Return?

The function immediately stops executing.

---

## Why are Parameters useful in Automation?

They allow one function to work with different usernames, passwords, URLs, browsers, products, etc.

---

## Why is Return useful?

It returns values such as:

* Login status
* Page title
* Element text
* Status code
* API response

for validation and further processing.

---

# Quick Revision

* Parameter = Input Variable
* Argument = Actual Value
* Return = Output
* Parameters receive arguments.
* Return sends the result back.
* Functions become reusable with parameters and return values.
* Playwright heavily uses parameters, arguments, and return values.
