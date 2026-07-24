# if / else Statements

## 🎯 Objective

Learn decision-making in JavaScript using:
- if
- if...else
- else if
- Nested if

These statements are widely used in Automation Testing, Playwright, Selenium, and API Testing.

---

# Decision Making

## Definition

Decision Making is the process of checking a condition and executing a block of code based on whether the condition is true or false.

JavaScript uses:
- if
- if...else
- else if
- switch

to make decisions.

---

# if Statement

## Definition

The `if` statement executes a block of code only when the given condition is true.

If the condition is false, JavaScript skips the block.

---

## Syntax

```javascript
if (condition) {
    // Code executes when condition is true
}
```

---

## Example

```javascript
let age = 20;

if (age >= 18) {
    console.log("Eligible to Vote");
}
```

Output

```
Eligible to Vote
```

---

# if...else Statement

## Definition

The `if...else` statement executes one block when the condition is true and another block when the condition is false.

---

## Syntax

```javascript
if (condition) {
    // True block
} else {
    // False block
}
```

---

## Example

```javascript
let age = 16;

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}
```

Output

```
Not Eligible
```

---

# else if Statement

## Definition

The `else if` statement is used to check multiple conditions.

JavaScript checks conditions from top to bottom and executes the first true condition.

---

## Syntax

```javascript
if (condition1) {

}
else if (condition2) {

}
else if (condition3) {

}
else {

}
```

---

## Example

```javascript
let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}
```

Output

```
Grade B
```

---

# Nested if

## Definition

A Nested if is an if statement inside another if statement.

The inner if executes only when the outer if condition is true.

---

## Syntax

```javascript
if (condition1) {

    if (condition2) {

    }

}
```

---

## Example

```javascript
let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn) {

    if (isAdmin) {
        console.log("Welcome Admin");
    }

}
```

Output

```
Welcome Admin
```

---

# Real Automation QA Examples

## Login Validation

```javascript
let usernameCorrect = true;
let passwordCorrect = true;

if (usernameCorrect && passwordCorrect) {
    console.log("Login Successful");
} else {
    console.log("Login Failed");
}
```

---

## Age Verification

```javascript
let age = 17;

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}
```

---

## Grade Calculator

```javascript
let marks = 88;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}
```

---

## Admin Dashboard

```javascript
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {

    if (isAdmin) {
        console.log("Admin Dashboard");
    } else {
        console.log("Access Denied");
    }

}
```

---

## API Status Code Validation

```javascript
let statusCode = 200;

if (statusCode === 200) {
    console.log("API Passed");
} else {
    console.log("API Failed");
}
```

---

# Difference

| if | if...else | else if | Nested if |
|----|------------|----------|-----------|
| Checks one condition | Executes one of two blocks | Checks multiple conditions | One condition depends on another |

---

# Interview Questions

## What is an if statement?

An if statement executes code only when the condition is true.

---

## What is if...else?

It executes one block if the condition is true and another block if the condition is false.

---

## What is else if?

It checks multiple conditions and executes the first true condition.

---

## What is Nested if?

Nested if is an if statement inside another if statement where the second condition depends on the first.

---

## Where are if statements used in Automation?

- Login Validation
- API Testing
- Role Validation
- Age Validation
- Discount Eligibility
- Button Visibility
- Error Message Validation
- File Download Validation

---

# Key Points

✅ if executes only when condition is true.

✅ if...else executes either the if block or else block.

✅ else if checks multiple conditions.

✅ Nested if checks dependent conditions.

✅ Only one matching block executes.
