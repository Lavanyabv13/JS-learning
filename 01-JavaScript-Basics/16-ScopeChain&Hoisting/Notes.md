# JavaScript Scope Chain & Hoisting

## 🎯 Learning Objectives

- Understand Scope
- Learn Scope Chain
- Understand Hoisting
- Learn Temporal Dead Zone (TDZ)
- Compare var, let and const
- Learn best practices

---

# Scope

Scope determines where a variable can be accessed.

## Types of Scope

### Global Scope

Variables declared outside all functions and blocks.

Accessible from anywhere.

```javascript
const company = "OpenAI";
```

---

### Function Scope

Variables declared inside a function.

Accessible only inside that function.

```javascript
function login() {
    let username = "admin";
}
```

---

### Block Scope

Variables declared using let and const inside `{}`.

Accessible only inside that block.

```javascript
if (true) {
    let browser = "Chrome";
}
```

---

# Scope Chain

JavaScript searches for variables in this order:

Current Scope

↓

Parent Scope

↓

Global Scope

↓

ReferenceError

## Rules

- Child can access Parent variables.
- Child can access Global variables.
- Parent cannot access Child variables.

---

# Hoisting

Hoisting is JavaScript's behavior of processing declarations before executing code.

---

## var

```javascript
console.log(name);

var name = "Rahul";
```

Output

```
undefined
```

Reason:

- Hoisted
- Initialized with `undefined`

---

## let

```javascript
console.log(age);

let age = 25;
```

Output

```
ReferenceError
```

Reason:

- Hoisted
- Inside TDZ until initialized

---

## const

```javascript
console.log(country);

const country = "India";
```

Output

```
ReferenceError
```

Reason:

- Hoisted
- Inside TDZ until initialized

---

## Function Declaration

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output

```
Hello
```

Function declarations are fully hoisted.

---

## Arrow Function

```javascript
const greet = () => {
    console.log("Hello");
};

greet();
```

Calling before declaration throws a ReferenceError.

---

# Temporal Dead Zone (TDZ)

TDZ is the period between hoisting and initialization of a let or const variable.

During TDZ, accessing the variable throws a ReferenceError.

---

# var vs let vs const

| Feature | var | let | const |
|----------|-----|-----|--------|
| Scope | Function | Block | Block |
| Hoisted | Yes | Yes | Yes |
| Before Declaration | undefined | ReferenceError | ReferenceError |
| Redeclaration | Yes | No | No |
| Reassignment | Yes | Yes | No |

---

# Best Practices

✅ Use const by default.

✅ Use let if value changes.

❌ Avoid var in modern JavaScript.

---

# Interview Questions

## What is Scope?

Scope is the area where a variable is accessible.

---

## What is Scope Chain?

The process JavaScript uses to search for variables from Current Scope → Parent Scope → Global Scope.

---

## What is Hoisting?

JavaScript processes declarations before executing code.

---

## What is TDZ?

TDZ is the period between hoisting and initialization of let and const variables.

---

## Are let and const hoisted?

Yes.

They are hoisted but remain inside the Temporal Dead Zone until initialized.

---

## Which keyword should you use by default?

const

---

## Why should var be avoided?

- Function scoped
- Allows redeclaration
- Can create unexpected bugs

---

# Quick Revision

Scope

- Global
- Function
- Block

Scope Chain

Current

↓

Parent

↓

Global

↓

ReferenceError

Hoisting

var → undefined

let → TDZ

const → TDZ

Function Declaration → Works before declaration

Arrow Function → Cannot be called before declaration

Default Choice

const ✅

let ✅

Avoid var ❌