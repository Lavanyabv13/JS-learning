# JavaScript Arrow Functions

## 🎯 Learning Objectives

- Understand Arrow Functions.
- Learn Arrow Function syntax.
- Use parameters in Arrow Functions.
- Learn Explicit Return and Implicit Return.
- Compare Arrow Functions with Normal Functions.

---

# What is an Arrow Function?

An Arrow Function is a modern and shorter way to write a function using the `=>` operator.

Introduced in **ES6 (ECMAScript 2015)**.

---

# Syntax

## Normal Function

```javascript
function greet() {
    console.log("Hello");
}
```

## Arrow Function

```javascript
const greet = () => {
    console.log("Hello");
};
```

---

# Parameters

## No Parameters

```javascript
const greet = () => {
    console.log("Hello");
};
```

## One Parameter

```javascript
const greet = (name) => {
    console.log("Hello " + name);
};
```

## Multiple Parameters

```javascript
const add = (a, b) => {
    return a + b;
};
```

---

# Return

## Explicit Return

Uses the `return` keyword.

```javascript
const add = (a, b) => {
    return a + b;
};
```

## Implicit Return

No `return` keyword is required when returning a single expression.

```javascript
const add = (a, b) => a + b;
```

---

# Normal Function vs Arrow Function

| Normal Function | Arrow Function |
|-----------------|----------------|
| Uses `function` keyword | Uses `=>` |
| Longer syntax | Shorter syntax |
| Traditional style | Modern style |
| Has its own `this` | Inherits `this` from surrounding scope |

---

# Advantages

- Short syntax
- Easy to read
- Less code
- Modern JavaScript standard
- Commonly used in TypeScript
- Great for callbacks and array methods

---

# Key Points

- Uses `=>`
- Introduced in ES6
- Supports parameters
- Supports return values
- Explicit return uses `return`
- Implicit return omits `return`
- Inherits `this` from the surrounding scope
- Preferred for simple functions

---

# Interview Questions

### 1. What is an Arrow Function?

**Answer:**
An Arrow Function is a shorter syntax for writing functions using the `=>` operator. It was introduced in ES6.

---

### 2. What is the difference between Explicit Return and Implicit Return?

**Answer:**

**Explicit Return**

Uses the `return` keyword.

```javascript
const add = (a, b) => {
    return a + b;
};
```

**Implicit Return**

Automatically returns a single expression without using `return`.

```javascript
const add = (a, b) => a + b;
```

---

### 3. What is the difference between a Normal Function and an Arrow Function?

**Answer:**

| Normal Function | Arrow Function |
|-----------------|----------------|
| Uses `function` keyword | Uses `=>` |
| Has its own `this` | Inherits `this` |
| Can be used as a constructor | Cannot be used as a constructor |
| Longer syntax | Shorter syntax |

---

### 4. When should you use Arrow Functions?

**Answer:**

- Simple functions
- Callback functions
- Array methods like `map()`, `filter()`, and `forEach()`
- When you want to preserve the surrounding `this`

---

### 5. Can Arrow Functions be used as constructors?

**Answer:**

No. Arrow functions cannot be used with the `new` keyword because they do not have their own `this`.

---

# Quick Revision

- Arrow Function = Modern Function
- Uses `=>`
- Introduced in ES6
- Supports Parameters
- Supports Return Values
- Explicit Return
- Implicit Return
- Inherits `this`
- Best for callbacks and short functions