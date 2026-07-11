# Variables

## What is a Variable?

A variable is a named storage location used to store data that can be accessed and used throughout a program.

---

## Why do we use Variables?

- Store data for later use.
- Reuse values without repeating them.
- Improve code readability.
- Make programs easier to maintain.

---

## Variable Syntax

```javascript
let variableName = value;
```

Example:

```javascript
let age = 25;
```

| Part | Description |
|------|-------------|
| `let` | Keyword used to declare a variable |
| `age` | Variable name |
| `=` | Assignment operator |
| `25` | Value assigned to the variable |

---

## Variable Components

### Variable Name

A meaningful name given to identify a value.

Example:

```javascript
let age = 25;
```

Here, `age` is the variable name.

---

### Value

The data stored inside the variable.

Example:

```javascript
let age = 25;
```

Here, `25` is the value.

---

### Memory

When a variable is created, JavaScript stores its value in memory.

The JavaScript engine manages the memory automatically.

---

## Declaring Variables

### let

Used when the value can change later.

```javascript
let city = "Bangalore";

city = "Mysore";
```

---

### const

Used when the value should not change.

```javascript
const company = "Qualitest";
```

Trying to change it results in an error.

```javascript
company = "Google";
```

Output:

```
TypeError: Assignment to constant variable.
```

---

### var

Older way of declaring variables.

```javascript
var browser = "Chrome";

browser = "Edge";
```

Avoid using `var` in modern JavaScript.

---

## let vs const vs var

| Feature | var | let | const |
|---------|-----|------|-------|
| Can Reassign | ✅ Yes | ✅ Yes | ❌ No |
| Can Redeclare | ✅ Yes | ❌ No | ❌ No |
| Block Scoped | ❌ No | ✅ Yes | ✅ Yes |
| Recommended | ❌ No | ✅ Yes | ✅ Preferred |

---

## Best Practices

- Use `const` by default.
- Use `let` when the value needs to change.
- Avoid `var` in modern JavaScript.
- Choose meaningful variable names.

---

## Interview Questions

### What is a variable?

A variable is a named storage location used to store data.

---

### Why do we use variables?

Variables help store, reuse, and manage data efficiently.

---

### Difference between `let` and `const`?

- `let` allows reassignment.
- `const` does not allow reassignment.

---

### Why should we avoid `var`?

`var` is function-scoped and can cause unexpected behavior. Modern JavaScript uses `let` and `const`.

---

### Which keyword should you use by default?

Use `const` by default.

Use `let` only when the value needs to change.

---

## Key Takeaways

- Variables store data.
- Every variable has a name and a value.
- JavaScript manages memory automatically.
- `let` allows reassignment.
- `const` prevents reassignment.
- `var` is an older keyword and should be avoided in modern JavaScript.
- Use meaningful variable names for better readability.