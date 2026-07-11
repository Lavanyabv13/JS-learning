## What is Scope?

Scope determines where a variable can be accessed in a program.


## Why Scope?

- Controls variable accessibility.
- Prevents accidental modification.
- Improves code readability.
- Avoids variable name conflicts.

---

## Types of Scope

### 1. Global Scope

A variable declared outside all functions and blocks.

Accessible from anywhere in the program.

Example:

javascript
const company = "Qualitest";

console.log(company);

function displayCompany() {
    console.log(company);
}

displayCompany();


---

### 2. Function Scope

A variable declared inside a function.

Accessible only within that function.

Example:

javascript
function employee() {
    let name = "Lavanya";
    console.log(name);
}

employee();

---

### 3. Block Scope

A variable declared inside `{ }`.

Accessible only within that block.

`let` and `const` are block-scoped.

Example:

javascript
{
    let city = "Bangalore";
    console.log(city);
}

---

## var vs let

### var

javascript
{
    var browser = "Chrome";
}

console.log(browser);

Output: Chrome (because var ignores the block scope)


---

### let

javascript
{
    let browser = "Chrome";
}

console.log(browser);


Output:
ReferenceError

---

## Scope Comparison

| Feature | var | let | const |
|---------|-----|------|-------|
| Global Scope | ✅ | ✅ | ✅ |
| Function Scope | ✅ | ✅ | ✅ |
| Block Scope | ❌ | ✅ | ✅ |
| Reassign Value | ✅ | ✅ | ❌ |
| Redeclare in Same Scope | ✅ | ❌ | ❌ |

---

## Best Practices

- Use `const` by default.
- Use `let` when the value changes.
- Avoid `var` in modern JavaScript.
- Declare variables in the smallest possible scope.

---

## Interview Questions

### What is Scope?

Scope determines where a variable can be accessed.

### Types of Scope?

- Global Scope
- Function Scope
- Block Scope

### Which keywords are block-scoped?

- let
- const

### Is var block-scoped?

No.

### Which keyword is preferred in modern JavaScript?

Use `const` by default.
Use `let` when values change.
Avoid `var`.

---

## Key Takeaways

- Scope controls variable accessibility.
- Global variables are accessible everywhere.
- Function variables are accessible only inside the function.
- Block variables are accessible only inside `{ }`.
- `let` and `const` are block-scoped.
- `var` is function-scoped.
- Smaller scope makes code safer and easier to maintain.