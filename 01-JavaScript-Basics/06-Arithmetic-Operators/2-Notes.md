# JavaScript - Pre & Post Increment / Decrement

## 🎯 Objective

Learn the difference between **pre-increment**, **post-increment**, **pre-decrement**, and **post-decrement**, and understand where they are used in JavaScript and Automation Testing.

---

# What is Increment?

Increment (`++`) increases the value of a variable by **1**.

Example:

```javascript
let x = 5;
x++;
```

Result:

```text
x = 6
```

---

# What is Decrement?

Decrement (`--`) decreases the value of a variable by **1**.

Example:

```javascript
let x = 5;
x--;
```

Result:

```text
x = 4
```

---

# Types of Increment

## Pre-Increment (`++x`)

The variable is incremented **before** its value is used.

### Example

```javascript
let x = 5;

console.log(++x);
console.log(x);
```

### Output

```text
6
6
```

---

## Post-Increment (`x++`)

The current value is used **first**, then the variable is incremented.

### Example

```javascript
let x = 5;

console.log(x++);
console.log(x);
```

### Output

```text
5
6
```

---

# Types of Decrement

## Pre-Decrement (`--x`)

The variable is decremented **before** its value is used.

### Example

```javascript
let x = 5;

console.log(--x);
console.log(x);
```

### Output

```text
4
4
```

---

## Post-Decrement (`x--`)

The current value is used **first**, then the variable is decremented.

### Example

```javascript
let x = 5;

console.log(x--);
console.log(x);
```

### Output

```text
5
4
```

---

# Difference

| Operator | Description                         |
| -------- | ----------------------------------- |
| `++x`    | Increment first, then use the value |
| `x++`    | Use the value first, then increment |
| `--x`    | Decrement first, then use the value |
| `x--`    | Use the value first, then decrement |

---

# Real-Time Uses

* Counting iterations
* Loop counters
* Retry counters
* Pagination
* Countdown timers
* Row numbering

---

# Interview Questions

## What is Increment?

Increment (`++`) increases the value of a variable by **1**.

---

## What is Decrement?

Decrement (`--`) decreases the value of a variable by **1**.

---

## What is the difference between `++x` and `x++`?

* `++x` increments the variable first and then returns the updated value.
* `x++` returns the current value first and then increments the variable.

---

## What is the difference between `--x` and `x--`?

* `--x` decrements the variable first and then returns the updated value.
* `x--` returns the current value first and then decrements the variable.

---

# Quick Revision

* `++` increases a value by **1**.
* `--` decreases a value by **1**.
* `++x` → Change first, use later.
* `x++` → Use first, change later.
* `--x` → Change first, use later.
* `x--` → Use first, change later.
* Commonly used in loops, counters, retries, pagination, and Automation QA scripts.
