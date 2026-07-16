# Logical Operators

## 🎯 Objective

Learn Logical Operators in JavaScript and understand how they are used in decision making, Automation Testing, and Playwright.

---

# Logical Operators

## Definition

Logical Operators are used to combine two or more conditions and return a Boolean value (`true` or `false`).

They are mainly used with conditional statements like `if`, `else if`, and `while`.

---

# Types of Logical Operators

| Operator | Name | Meaning |
|----------|------|---------|
| && | Logical AND | All conditions must be true |
| \|\| | Logical OR | At least one condition must be true |
| ! | Logical NOT | Reverses the Boolean value |

---

# Logical AND (&&)

## Definition

The Logical AND (`&&`) operator returns `true` only when **all conditions are true**.

If even one condition is false, the result is `false`.

---

## Syntax

```javascript
condition1 && condition2
```

---

## Examples

```javascript
console.log(true && true);
```

Output

```
true
```

---

```javascript
console.log(true && false);
```

Output

```
false
```

---

```javascript
console.log(false && true);
```

Output

```
false
```

---

```javascript
console.log(false && false);
```

Output

```
false
```

---

# Truth Table - AND

| Condition 1 | Condition 2 | Result |
|-------------|-------------|--------|
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

---

# Real-Time Example

A user can log in only if:

- Username is correct
- Password is correct

```javascript
let usernameCorrect = true;
let passwordCorrect = true;

console.log(usernameCorrect && passwordCorrect);
```

Output

```
true
```

---

# Logical OR (||)

## Definition

The Logical OR (`||`) operator returns `true` if **at least one condition is true**.

It returns `false` only when all conditions are false.

---

## Syntax

```javascript
condition1 || condition2
```

---

## Examples

```javascript
console.log(true || true);
```

Output

```
true
```

---

```javascript
console.log(true || false);
```

Output

```
true
```

---

```javascript
console.log(false || true);
```

Output

```
true
```

---

```javascript
console.log(false || false);
```

Output

```
false
```

---

# Truth Table - OR

| Condition 1 | Condition 2 | Result |
|-------------|-------------|--------|
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | false |

---

# Real-Time Example

A website allows login using either Email or Mobile Number.

```javascript
let emailValid = false;
let mobileValid = true;

console.log(emailValid || mobileValid);
```

Output

```
true
```

---

# Logical NOT (!)

## Definition

The Logical NOT (`!`) operator reverses the Boolean value.

It converts:

- `true` → `false`
- `false` → `true`

---

## Syntax

```javascript
!condition
```

---

## Examples

```javascript
console.log(!true);
```

Output

```
false
```

---

```javascript
console.log(!false);
```

Output

```
true
```

---

```javascript
let isLoggedIn = true;

console.log(!isLoggedIn);
```

Output

```
false
```

---

```javascript
let isLoggedIn = false;

console.log(!isLoggedIn);
```

Output

```
true
```

---

# Real-Time Example

Show the Login button only when the user is not logged in.

```javascript
let isLoggedIn = false;

console.log(!isLoggedIn);
```

Output

```
true
```

---

# Automation QA Examples

## Login Validation

```javascript
let usernameCorrect = true;
let passwordCorrect = true;

console.log(usernameCorrect && passwordCorrect);
```

---

## Email OR Mobile Login

```javascript
let emailValid = false;
let mobileValid = true;

console.log(emailValid || mobileValid);
```

---

## Discount Eligibility

Business Rule:

Customer must be a member and purchase amount must be ₹1000 or more.

```javascript
let isMember = true;
let purchaseAmount = 1500;

console.log(isMember && purchaseAmount >= 1000);
```

Output

```
true
```

---

## Check User Not Logged In

```javascript
let isLoggedIn = false;

console.log(!isLoggedIn);
```

Output

```
true
```

---

# Difference Between && and ||

| && | \|\| |
|----|-------|
| All conditions must be true | At least one condition must be true |
| Returns false if one condition is false | Returns true if one condition is true |
| Used when every condition is mandatory | Used when any one condition is sufficient |

---

# Interview Questions

## What are Logical Operators?

Logical Operators combine two or more conditions and return a Boolean value (`true` or `false`).

---

## What is the AND (&&) operator?

The AND operator returns `true` only if all conditions are true.

---

## What is the OR (||) operator?

The OR operator returns `true` if at least one condition is true.

---

## What is the NOT (!) operator?

The NOT operator reverses the Boolean value.

---

## Where are Logical Operators used in Automation Testing?

Logical Operators are commonly used in:

- Login validation
- Form validation
- Email or mobile verification
- Discount eligibility
- Role-based access
- API response validation
- Button enable/disable validation
- Playwright test conditions

---

# Key Points

✅ Logical Operators always return a Boolean value.

✅ `&&` requires all conditions to be true.

✅ `||` requires at least one condition to be true.

✅ `!` returns the opposite Boolean value.

✅ Logical Operators are widely used with `if`, `else if`, loops, and Playwright automation scripts.

---