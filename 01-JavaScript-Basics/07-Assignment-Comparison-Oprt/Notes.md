# Assignment & Comparison Operators

## 🎯 Objective

Learn Assignment Operators and Comparison Operators in JavaScript and understand how they are used in real-world Automation Testing.

---

# Assignment Operator (=)

## Definition

The Assignment Operator (`=`) assigns the value on the right-hand side (RHS) to the variable on the left-hand side (LHS).

Syntax:

```javascript
let age = 28;
```

Example:

```javascript
let company = "Qualitest";

console.log(company);
```

Output:

```
Qualitest
```

---

# Updating Variables

Variables declared using `let` can be updated.

Example:

```javascript
let age = 28;

age = 29;

console.log(age);
```

Output:

```
29
```

---

# Compound Assignment Operators

Compound Assignment Operators perform an arithmetic operation and assign the result back to the same variable.

---

## += (Addition Assignment)

Shortcut for:

```javascript
x = x + value;
```

Example:

```javascript
let marks = 70;

marks += 20;

console.log(marks);
```

Output:

```
90
```

---

## -= (Subtraction Assignment)

Shortcut for:

```javascript
x = x - value;
```

Example:

```javascript
let balance = 1000;

balance -= 250;

console.log(balance);
```

Output:

```
750
```

---

## *= (Multiplication Assignment)

Shortcut for:

```javascript
x = x * value;
```

Example:

```javascript
let quantity = 5;

quantity *= 4;

console.log(quantity);
```

Output:

```
20
```

---

## /= (Division Assignment)

Shortcut for:

```javascript
x = x / value;
```

Example:

```javascript
let total = 100;

total /= 4;

console.log(total);
```

Output:

```
25
```

---

## %= (Modulus Assignment)

Shortcut for:

```javascript
x = x % value;
```

Example:

```javascript
let value = 18;

value %= 4;

console.log(value);
```

Output:

```
2
```

---

# Comparison Operators

## Definition

Comparison Operators compare two values and always return a Boolean value (`true` or `false`).

---

## == (Loose Equality)

Compares only the values.

Performs automatic type conversion (Type Coercion).

Example:

```javascript
10 == "10"
```

Output:

```
true
```

---

## === (Strict Equality)

Compares both value and data type.

Does NOT perform type conversion.

Example:

```javascript
10 === "10"
```

Output:

```
false
```

---

## != (Loose Not Equal)

Checks if values are not equal.

Performs automatic type conversion.

Example:

```javascript
10 != "10"
```

Output:

```
false
```

---

## !== (Strict Not Equal)

Checks both value and data type.

Does NOT perform type conversion.

Example:

```javascript
10 !== "10"
```

Output:

```
true
```

---

## Greater Than (>)

Checks whether the left value is greater than the right value.

Example:

```javascript
20 > 10
```

Output:

```
true
```

---

## Less Than (<)

Checks whether the left value is less than the right value.

Example:

```javascript
5 < 10
```

Output:

```
true
```

---

## Greater Than or Equal (>=)

Checks whether the left value is greater than or equal to the right value.

Example:

```javascript
18 >= 18
```

Output:

```
true
```

---

## Less Than or Equal (<=)

Checks whether the left value is less than or equal to the right value.

Example:

```javascript
25 <= 20
```

Output:

```
false
```

---

# Difference Between == and ===

| == | === |
|----|------|
| Compares only values | Compares values and data types |
| Performs Type Coercion | No Type Coercion |
| Less strict | More strict |
| Generally avoided in professional code | Preferred in professional code |

---

# Difference Between != and !==

| != | !== |
|----|------|
| Compares only values | Compares values and data types |
| Performs Type Coercion | No Type Coercion |
| Less strict | More strict |
| Generally avoided | Preferred in professional code |

---

# Type Coercion

Definition:

Type Coercion is JavaScript's automatic conversion of one data type into another during certain operations or comparisons.

Example:

```javascript
10 == "10"
```

JavaScript converts:

```
"10"

↓

10
```

Result:

```
true
```

---

# Real Automation QA Examples

## Login Validation

```javascript
let expectedMessage = "Login Successful";
let actualMessage = "Login Successful";

console.log(expectedMessage === actualMessage);
```

Output:

```
true
```

---

## Age Validation

Business Rule:

User must be 18 years or older.

```javascript
let age = 20;

console.log(age >= 18);
```

Output:

```
true
```

---

## Retry Counter

```javascript
let retryCount = 0;

retryCount += 1;

console.log(retryCount);
```

Output:

```
1
```

---

## API Response Validation

```javascript
let expectedAge = 25;
let actualAge = "25";

console.log(expectedAge === actualAge);
```

Output:

```
false
```

Reason:

Data types are different.

---

# Interview Questions

## What is the Assignment Operator?

The Assignment Operator (`=`) assigns the value from the right-hand side to the variable on the left-hand side.

---

## What is the difference between = and +=?

`=` assigns a new value.

`+=` adds a value to the existing value and stores the updated result.

---

## What is the difference between == and ===?

`==` compares only values and performs type coercion.

`===` compares both value and data type without type coercion.

---

## What is the difference between != and !==?

`!=` compares only values after type coercion.

`!==` compares both value and data type without type coercion.

---

## Why do Automation QA Engineers prefer ===?

Because it compares both value and data type, preventing false positives caused by automatic type conversion. It makes automation tests more reliable and accurate.

---

# Key Points

✅ `=` assigns a value.

✅ Compound assignment operators simplify arithmetic updates.

✅ Comparison operators always return `true` or `false`.

✅ `==` and `!=` perform type coercion.

✅ `===` and `!==` do not perform type coercion.

✅ `===` and `!==` are preferred in professional JavaScript and Playwright code.

✅ Relational operators (`>`, `<`, `>=`, `<=`) compare values based on their order.

---