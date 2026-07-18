# Switch Statement

## 🎯 Objective:

- switch statement
- case
- break
- default
- switch vs if...else
- Automation Testing examples

---

# What is a switch Statement?

## Definition

A **switch statement** is a decision-making statement that compares one expression with multiple fixed values (cases) and executes the matching block of code.

---

# Why use switch?

Instead of writing multiple if...else if statements for fixed values, switch provides cleaner and more readable code.

Example:
- Browser Selection
- Days of Week
- Months
- User Roles
- API Status Codes

---

# Syntax

```javascript
switch (expression) {

    case value1:
        // Code
        break;

    case value2:
        // Code
        break;

    default:
        // Code
}
```

---

# Parts of switch

## switch

Starts the switch statement.

## Expression

The value that JavaScript compares with each case.

## case

Represents a possible matching value.

## break

Stops execution after a matching case.

Without break, JavaScript continues executing the remaining cases (Fall-through).

## default

Executes when none of the cases match.

Acts like the else block.

---

# Example 1

```javascript
let day = 2;

switch(day){

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");

}
```

Output

```
Tuesday
```

---

# break Statement

## Definition

The break statement stops the execution of the switch statement after the matching case.

---

## Without break

```javascript
let num = 1;

switch(num){

    case 1:
        console.log("One");

    case 2:
        console.log("Two");

    case 3:
        console.log("Three");

}
```

Output

```
One
Two
Three
```

This is called **Fall-through**.

---

## With break

```javascript
let num = 1;

switch(num){

    case 1:
        console.log("One");
        break;

    case 2:
        console.log("Two");
        break;

    case 3:
        console.log("Three");
        break;

}
```

Output

```
One
```

---

# default Statement

## Definition

The default block executes when no case matches.

Example

```javascript
let browser = "Safari";

switch(browser){

    case "Chrome":
        console.log("Launch Chrome");
        break;

    case "Firefox":
        console.log("Launch Firefox");
        break;

    default:
        console.log("Browser Not Supported");

}
```

Output

```
Browser Not Supported
```

---

# switch vs if...else

| switch | if...else |
|---------|-----------|
| Compares one expression | Evaluates conditions |
| Used for fixed values | Used for ranges and conditions |
| Cleaner for menus/options | Better for complex logic |
| Doesn't use >, <, >=, <= | Supports comparison operators |

---

# When to use switch

- Browser Selection
- User Role
- Payment Method
- Environment Selection
- API Status Code
- Menu Selection
- Days of Week
- Months

---

# Automation Testing Examples

## Browser Selection

```javascript
switch(browser){

    case "Chrome":
        console.log("Launch Chrome");
        break;

    case "Firefox":
        console.log("Launch Firefox");
        break;

    case "Edge":
        console.log("Launch Edge");
        break;

    default:
        console.log("Unsupported Browser");

}
```

---

## Environment Selection

```javascript
switch(environment){

    case "QA":
        console.log("Connect QA");
        break;

    case "UAT":
        console.log("Connect UAT");
        break;

    case "PROD":
        console.log("Connect PROD");
        break;

    default:
        console.log("Invalid Environment");

}
```

---

## API Status Code

```javascript
switch(statusCode){

    case 200:
        console.log("Success");
        break;

    case 404:
        console.log("Not Found");
        break;

    case 500:
        console.log("Server Error");
        break;

    default:
        console.log("Unknown Status");

}
```

---

# Interview Questions

## What is a switch statement?

A switch statement compares one expression with multiple fixed values and executes the matching case.

---

## What is break?

break stops the execution of the switch statement after a matching case.

---

## What happens if break is omitted?

JavaScript continues executing the remaining cases.
This is called **Fall-through**.

---

## What is default?

default executes when no case matches.

---

## Difference between switch and if...else

switch compares one expression with fixed values.

if...else evaluates conditions, ranges, and logical expressions.

---

# Key Points

✔ switch compares one expression.

✔ case represents possible values.

✔ break stops execution.

✔ Without break → Fall-through.

✔ default executes if no case matches.

✔ switch is best for fixed values.

✔ if...else is best for ranges and conditions.

---